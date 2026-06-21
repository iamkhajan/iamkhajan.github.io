---
sidebar_position: 2
---

# AI Perspective

My perspective on where AI is headed — shaped by building production systems, not just reading about them.

## The Shift to Agentic AI

We're moving past "AI that answers questions" into AI that takes actions. Autonomous agents can now browse the web, write and run code, call APIs, and coordinate with other agents — all with minimal human intervention. This isn't a demo; it's in production systems today.

The core pattern: **LLM as a reasoning engine + tools + memory + orchestration**. When you wire these together thoughtfully, you get systems that can tackle multi-step problems that would have required a human workflow just two years ago.

## What I'm Watching Closely

**Multi-agent systems** — Single-agent approaches hit a ceiling quickly. The interesting work now is in orchestration: how do you split a complex task across specialized agents, pass context between them reliably, and handle failures gracefully? Frameworks like LangGraph and CrewAI are early answers, but the patterns are still evolving fast.

**RAG is table stakes** — Retrieval-Augmented Generation went from cutting-edge to foundational. If you're building an enterprise AI product and you're not doing RAG, you're not building a real product. The hard part isn't the retrieval — it's chunking strategy, embedding model selection, re-ranking, and knowing when *not* to retrieve.

**Context management** — As context windows grow (1M+ tokens), the naive assumption is "just throw everything in." In practice, what you put in the context, what you leave out, and how you structure it matters enormously for accuracy and cost. This is becoming a discipline in itself.

**Evaluation** — The thing most teams underinvest in. You can't improve what you can't measure. Building good evals — including LLM-as-judge pipelines — is often the difference between a prototype and something you can actually ship with confidence.

## What I've Built

- **GPT-powered enterprise applications** with multi-agent architectures handling document processing, classification, and structured data extraction at scale
- **RAG pipelines** over proprietary knowledge bases, with custom chunking and hybrid search (dense + sparse retrieval)
- **Agentic workflows** that autonomously gather data, generate reports, and surface anomalies for domain experts
- **AI evaluation frameworks** to track answer quality, latency, and cost across model versions

## My Take

The hype cycle is real, but so is the underlying capability shift. Teams that treat AI as a feature bolt-on will see modest gains. Teams that rethink their workflows around AI-native patterns will compound those gains over time. The bottleneck is rarely the model — it's the system design around it.

I'm happy to geek out on any of this. Reach out at `khajanpandey@hotmail.com`.
