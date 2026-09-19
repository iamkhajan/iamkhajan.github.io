import React, {useState, useRef, useEffect, useCallback} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Console.module.css';

/* ── Line model ──────────────────────────────────────────────── */

type Cls = 'ind' | 'dim' | 'ok' | 'warn' | 'head';

type Line =
  | {kind: 'dot'; text: string}
  | {kind: 'res'; text: string}
  | {kind: 'text'; cls: Cls; text: string}
  | {kind: 'space'}
  | {kind: 'id'}
  | {kind: 'echo'; text: string}
  | {kind: 'link'; label: string; href: string; internal?: boolean}
  | {kind: 'svc'; name: string; desc: string; href?: string; label?: string};

const dot = (text: string): Line => ({kind: 'dot', text});
const res = (text: string): Line => ({kind: 'res', text});
const t = (cls: Cls, text: string): Line => ({kind: 'text', cls, text});
const sp = (): Line => ({kind: 'space'});

/* ── Slash commands ──────────────────────────────────────────── */

type Command = {name: string; desc: string; lines: Line[]};

const COMMANDS: Command[] = [
  {
    name: '/whoami',
    desc: 'who I am and what I build',
    lines: [
      dot('Khajan Pandey — Solutions Architect'),
      {kind: 'id'},
      t('ind', 'A decade of architecture. Now building systems that reason.'),
      sp(),
      t('dim', 'I design AI-native platforms — agentic workflows, retrieval at'),
      t('dim', 'scale, and the unglamorous plumbing that keeps them honest in'),
      t('dim', 'production.'),
      sp(),
      t('dim', 'Bharat roots, based in Tijuana, México. Working across time'),
      t('dim', 'zones is the normal case, not the exception.'),
    ],
  },
  {
    name: '/services',
    desc: 'how we can work together',
    lines: [
      dot('Three things I do'),
      sp(),
      {
        kind: 'svc',
        name: 'AI Architecture',
        desc: 'Strategy and system design — agentic workflows, RAG platforms, eval harnesses, and the roadmap to get there.',
      },
      sp(),
      {
        kind: 'svc',
        name: 'AI Engineering',
        desc: 'Building the thing, not just the deck. Retrieval pipelines, tool calling, guardrails, production hardening.',
      },
      sp(),
      {
        kind: 'svc',
        name: 'Spanish · Buena Onda',
        desc: 'I also teach Spanish. Same instinct as architecture: structure first, then fluency.',
        href: 'https://buenaonda.khajanpandey.com/',
        label: 'buenaonda.khajanpandey.com',
      },
      sp(),
      res('run /contact to start a conversation'),
    ],
  },
  {
    name: '/work',
    desc: 'selected systems shipped',
    lines: [
      dot('Selected systems'),
      sp(),
      t('ok', '[1] [Project name]'),
      t('dim', '    RAG platform · 2.3M chunks · p95 380ms · resolution −40%'),
      sp(),
      t('ok', '[2] [Project name]'),
      t('dim', '    Multi-agent pipeline replacing a 6-step manual review flow'),
      sp(),
      t('ok', '[3] [Project name]'),
      t('dim', '    Legacy monolith → event-driven services, zero-downtime cutover'),
    ],
  },
  {
    name: '/agents',
    desc: 'watch a pipeline run',
    lines: [
      dot('Running agent_pipeline.py --observe'),
      res('loading RAG index (2.3M chunks) ......... ok'),
      res('spawning 4 specialized agents ........... ok'),
      res('planner → retriever → critic → executor . ok'),
      sp(),
      t('ok', '✓ confidence 0.91 — streaming'),
      sp(),
      t('dim', 'This is the shape of most things I build: a planner that'),
      t('dim', 'decomposes, retrieval that is actually evaluated, and a critic'),
      t('dim', 'that is allowed to say no.'),
    ],
  },
  {
    name: '/stack',
    desc: 'tools of the trade',
    lines: [
      dot('Stack'),
      sp(),
      t('ind', 'reasoning   Claude · GPT · local Llama · eval harnesses'),
      t('ind', 'retrieval   pgvector · hybrid search · rerankers · chunking'),
      t('ind', 'orchestr.   agent graphs · tool calling · MCP · guardrails'),
      t('ind', 'platform    AWS · Kubernetes · event-driven · IaC'),
      t('ind', 'before AI   mobile (BDD) · distributed systems · 10y architecture'),
    ],
  },
  {
    name: '/writing',
    desc: 'articles and essays',
    lines: [
      dot('Writing'),
      sp(),
      {kind: 'link', label: 'AI Perspectives  ', href: '/docs/ai-perspective', internal: true},
      {kind: 'link', label: 'Global Context   ', href: '/docs/global-context', internal: true},
      {kind: 'link', label: 'Knowledge Shelf  ', href: '/docs/knowledge-shelf', internal: true},
      sp(),
      {kind: 'link', label: 'En español       ', href: 'https://buenaonda.khajanpandey.com/'},
    ],
  },
  {
    name: '/contact',
    desc: 'reach me',
    lines: [
      dot('Contact'),
      sp(),
      {kind: 'link', label: 'email    ', href: 'mailto:hola@khajanpandey.com'},
      {kind: 'link', label: 'github   ', href: 'https://github.com/iamkhajan'},
      {kind: 'link', label: 'twitter  ', href: 'https://twitter.com/khajanpandey'},
      sp(),
      t('dim', 'Deep technical dive or strategic roadmap — both welcome.'),
    ],
  },
  {name: '/help', desc: 'list available commands', lines: []},
  {name: '/clear', desc: 'clear the transcript', lines: []},
];

const HELP: Line[] = [
  dot('Available commands'),
  sp(),
  ...COMMANDS.map((c) =>
    t('ind', `${c.name.padEnd(12)}${c.desc}`),
  ),
  sp(),
  t('dim', 'Type / to browse · ↑ ↓ to navigate · ⏎ to run'),
];

const BOOT: Line[] = [
  dot('Solutions Architect building AI-native systems.'),
  res('agentic workflows · retrieval at scale · production plumbing'),
  sp(),
  t('dim', 'Type / to see what I can show you, or run /whoami.'),
];

const LINE_DELAY_MS = 55;

/* ── Component ───────────────────────────────────────────────── */

export default function Console(): React.ReactNode {
  const [printed, setPrinted] = useState<Line[]>([]);
  const [value, setValue] = useState('');
  const [sel, setSel] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);

  const queue = useRef<Line[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const avatar = useBaseUrl('/img/profile.jpg');

  /* slash menu: open whenever the input starts with "/" */
  const query = value.trim();
  const menuOpen = query.startsWith('/');
  const matches = menuOpen
    ? COMMANDS.filter((c) => c.name.startsWith(query.toLowerCase()))
    : [];

  useEffect(() => { setSel(0); }, [query]);

  /* drain the queue one line at a time */
  useEffect(() => {
    if (queue.current.length === 0) return undefined;
    const id = setTimeout(() => {
      const next = queue.current.shift();
      if (next) setPrinted((p) => [...p, next]);
    }, LINE_DELAY_MS);
    return () => clearTimeout(id);
  }, [printed]);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [printed]);

  useEffect(() => {
    queue.current = [...BOOT];
    const id = setTimeout(() => {
      const next = queue.current.shift();
      if (next) setPrinted([next]);
    }, 280);
    return () => clearTimeout(id);
  }, []);

  const run = useCallback((raw: string) => {
    const input = raw.trim();
    const cmd = input.toLowerCase();
    const name = cmd.startsWith('/') ? cmd : `/${cmd}`;

    if (input) setHistory((h) => [input, ...h].slice(0, 30));
    setHistIdx(-1);
    setValue('');

    if (!input) return;

    if (name === '/clear') {
      queue.current = [...BOOT];
      setPrinted([]);
      return;
    }

    const echo: Line[] = [{kind: 'echo', text: input}];
    const match = COMMANDS.find((c) => c.name === name);

    if (name === '/help') {
      queue.current.push(...echo, ...HELP);
    } else if (match) {
      queue.current.push(...echo, ...match.lines);
    } else {
      queue.current.push(
        ...echo,
        dot(`Unknown command: ${input}`),
        res('run /help to see what is available'),
      );
    }
    setPrinted((p) => [...p]); // kick the drain effect
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (menuOpen && matches.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSel((s) => (s + 1) % matches.length);
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSel((s) => (s - 1 + matches.length) % matches.length);
        return;
      }
      if (e.key === 'Tab') {
        e.preventDefault();
        setValue(matches[sel].name);
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        setValue('');
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        run(matches[sel].name);
        return;
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const i = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(i);
      setValue(history[i]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const i = histIdx - 1;
      if (i < 0) { setHistIdx(-1); setValue(''); }
      else { setHistIdx(i); setValue(history[i]); }
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    run(value);
  };

  const renderLine = (line: Line, i: number) => {
    switch (line.kind) {
      case 'space':
        return <div key={i} className={styles.space} />;

      case 'id':
        return (
          <div key={i} className={styles.idcard}>
            <img src={avatar} alt="Khajan Pandey" />
            <div>
              <div className={styles.idName}>Khajan Pandey</div>
              <div className={styles.idRole}>
                Solutions Architect · AI Systems · Tijuana, MX
              </div>
            </div>
          </div>
        );

      case 'echo':
        return (
          <p key={i} className={styles.echo}>
            {'> '}<b>{line.text}</b>
          </p>
        );

      case 'dot':
        return <p key={i} className={styles.dot}><span>{line.text}</span></p>;

      case 'res':
        return <p key={i} className={styles.res}><span>{line.text}</span></p>;

      case 'link':
        return (
          <p key={i} className={`${styles.ln} ${styles.link}`}>
            {line.label}
            {line.internal ? (
              <Link to={line.href}>{line.href}</Link>
            ) : (
              <a href={line.href}>
                {line.href.replace(/^mailto:|^https?:\/\//, '')}
              </a>
            )}
          </p>
        );

      case 'svc':
        return (
          <div key={i} className={styles.svc}>
            <span className={styles.svcName}>{line.name}</span>
            <span className={styles.svcDesc}>{line.desc}</span>
            {line.href && (
              <span className={styles.svcLink}>
                <a href={line.href}>↳ {line.label ?? line.href}</a>
              </span>
            )}
          </div>
        );

      default:
        return (
          <p key={i} className={`${styles.ln} ${styles[line.cls]}`}>
            {line.text}
          </p>
        );
    }
  };

  const busy = queue.current.length > 0;

  return (
    <div className={styles.page} onClick={() => inputRef.current?.focus()}>
      <div className={styles.shell}>

        {/* welcome box */}
        <div className={styles.welcome}>
          <div className={styles.welcomeHead}>
            <img className={styles.logo} src={avatar} alt="Khajan Pandey" />
            <span className={styles.welcomeTitle}>
              Welcome to <b>khajan-code</b>!
            </span>
          </div>
          <div className={styles.welcomeMeta}>
            <p><span className={styles.key}>/help</span> for commands, <span className={styles.key}>/services</span> for how we can work together</p>
            <p>cwd: ~/architect</p>
          </div>
        </div>

        {/* transcript */}
        <div className={styles.transcript} ref={bodyRef} aria-live="polite">
          {printed.map(renderLine)}
          {busy && <span className={styles.cursor} aria-hidden />}

          <noscript>
            <div className={styles.fallback}>
              <h1>Khajan Pandey</h1>
              <p>
                Solutions Architect building AI-native systems — agentic
                workflows, retrieval at scale, and the production plumbing that
                keeps them honest. Based in Tijuana, México.
              </p>
              <p>
                Services: AI architecture, AI engineering, and Spanish teaching
                at <a href="https://buenaonda.khajanpandey.com/">Buena Onda</a>.
              </p>
              <p><a href="mailto:hola@khajanpandey.com">hola@khajanpandey.com</a></p>
            </div>
          </noscript>
        </div>

        {/* slash menu */}
        {menuOpen && matches.length > 0 && (
          <div className={styles.menu}>
            {matches.map((c, i) => (
              <div
                key={c.name}
                className={`${styles.menuRow} ${i === sel ? styles.sel : ''}`}
                onMouseEnter={() => setSel(i)}
                onMouseDown={(e) => { e.preventDefault(); run(c.name); }}>
                <span className={styles.mname}>{c.name}</span>
                <span>{c.desc}</span>
              </div>
            ))}
          </div>
        )}

        {/* input */}
        <form className={styles.inputBox} onSubmit={onSubmit} autoComplete="off">
          <span className={styles.chevron}>&gt;</span>
          <input
            ref={inputRef}
            className={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Try /services"
            aria-label="Command input"
          />
        </form>

        <div className={styles.status}>
          <span className={styles.accept}>⏵⏵ open to work</span>
          <span>/ for commands</span>
          <span className={styles.right}>khajanpandey.com</span>
        </div>

      </div>
    </div>
  );
}
