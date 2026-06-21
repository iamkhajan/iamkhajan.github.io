import React, { useState, useEffect } from 'react';
import styles from './TerminalCard.module.css';

type LineType = 'cmd' | 'ok' | 'info' | 'success' | 'blank';

interface Line { text: string; type: LineType; }

const SEQUENCE: Line[] = [
  { text: 'khajan run --role architect',           type: 'cmd' },
  { text: '▸ AI systems          [online ✓]',       type: 'ok' },
  { text: '▸ 3 agents deployed   [active]',         type: 'ok' },
  { text: '▸ Global teams        [synced]',         type: 'ok' },
  { text: '',                                        type: 'blank' },
  { text: 'python agent_pipeline.py',               type: 'cmd' },
  { text: '↳ Loading RAG index (2.3M chunks)...',  type: 'info' },
  { text: '↳ Spawning 4 specialized agents...',    type: 'info' },
  { text: '↳ Confidence: 0.91 — streaming  ✓',    type: 'ok' },
  { text: '',                                        type: 'blank' },
  { text: 'git push origin main',                   type: 'cmd' },
  { text: '✓  CI/CD: passed — 1.4s',               type: 'success' },
  { text: '✓  Live → khajanpandey.com',            type: 'success' },
];

const LINE_DELAY_MS = 210;
const PAUSE_MS = 2800;

export default function TerminalCard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setTimeout(
      () => setCount(c => (c >= SEQUENCE.length ? 0 : c + 1)),
      count >= SEQUENCE.length ? PAUSE_MS : LINE_DELAY_MS,
    );
    return () => clearTimeout(id);
  }, [count]);

  return (
    <div className={styles.terminal} aria-label="Terminal animation">
      {/* macOS-style title bar */}
      <div className={styles.bar}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
        <span className={styles.barLabel}>khajan@guadalajara — zsh</span>
      </div>

      <div className={styles.body}>
        {SEQUENCE.slice(0, count).map((line, i) =>
          line.type === 'blank' ? (
            <div key={i} className={styles.blank} />
          ) : (
            <div key={i} className={`${styles.line} ${styles[line.type]}`}>
              {line.type === 'cmd' && (
                <span className={styles.prompt}>$ </span>
              )}
              {line.text}
            </div>
          )
        )}
        {count < SEQUENCE.length && <span className={styles.cursor} aria-hidden />}
      </div>
    </div>
  );
}
