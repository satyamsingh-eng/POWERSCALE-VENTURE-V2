'use client';

import React from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

const STAGES = [
  {
    num: "01",
    title: "Stage",
    detail: "We look for a working market, a strained operating system, and a founder who understands that the next phase is not more of the same. The thing that got the company here will not carry it to the next order of magnitude without deliberate change — and the founders who know this are the ones we want to back."
  },
  {
    num: "02",
    title: "Diligence",
    detail: "Our diligence is operational before it is financial. We stress-test the scaling constraint — hiring velocity, channel economics, unit-level margins, working capital cycles, management bandwidth — before we price the round. The constraints that break companies at scale are almost always visible before they break, if you know what to look for."
  },
  {
    num: "03",
    title: "Post-investment",
    detail: "The first ninety days are practical: a hiring diagnostic, a GTM teardown, a working-capital review. Not consulting deliverables — the things we know how to do because we have done them before, on our own companies, at our own cost. We are explicit about which partner takes the lead and what we are specifically responsible for."
  },
  {
    num: "04",
    title: "Hold",
    detail: "We stay through the scaling phase. Board seats are working seats, not governance theatre. We are most useful when the problem is operational — when the company has to hold its growth rate while rebuilding the management layer or restructuring its capital base."
  }
];

const SECTORS = [
  {
    name: "Energy Transition",
    thesis: "India's energy transition is a capex problem disguised as a policy problem. The companies that compound are the ones where project economics, regulatory sequencing, and financing structure move in the same direction at the same time. A mistake in that sequence is usually irreversible — which is why most investors read the growth projection before they read the power purchase agreement. We do it the other way around.",
  },
  {
    name: "Deeptech Infrastructure",
    thesis: "A working technical system is not the same as a repeatable commercial system. Technical risk and commercial risk do not resolve at the same speed — a company can have working hardware and no ability to sell it at scale, or strong sales and a manufacturing base that cannot keep up. We look for the binding constraint first: manufacturing readiness, deployment reliability, or sales repeatability without founder force.",
  },
  {
    name: "Consumer",
    thesis: "The inflection point where founder-led sales must translate to managed distribution is the point most consumer companies fail. Growth can look healthy while channel quality is already decaying. The moment a founder steps back from the commercial motion is when unit economics get honest — and by then most companies are already committed to the wrong motion.",
  },
  {
    name: "AI",
    thesis: "Defensible workflow integration separates AI companies that compound from the ones that plateau. Demo quality and retained workflow value are different things, and investors who rely on demos do not see the difference until the renewal cycle. We are not interested in model wrappers or novelty-dependent products. We look for paying customers who keep using the product after month six — and can explain why.",
  }
];

const OPERATOR_ENTRIES = [
  {
    id: "049",
    constraint: "Distribution playbook unproven in harder tier-2 markets",
    decision: "Delayed metro-market launch for two additional quarters. Ran deeper operations in a harder tier-2 environment instead.",
    tradeoff: "The narrative looked less polished during a fundraising window.",
    outcome: "The distribution playbook that emerged held in markets the team hadn't originally planned for.",
    attribution: "Consumer operating note, 2024",
    sector: "Consumer"
  },
  {
    id: "048",
    constraint: "Critical supply-chain dependency on a third-party bottleneck",
    decision: "Took vertical ownership of a critical supply-chain dependency before the financing was in place to do it cleanly.",
    tradeoff: "Capital efficiency degraded for fourteen months before the operating advantage became visible.",
    outcome: "The constraint it removed — third-party bottleneck leverage at scale — would have been structurally irreversible.",
    attribution: "Energy transition, 2024",
    sector: "Energy Transition"
  },
  {
    id: "047",
    constraint: "Manager layer unable to hold forecast without founder intervention",
    decision: "Held sales headcount flat at twelve reps for two additional quarters while the manager layer rebuilt its forecasting capability.",
    tradeoff: "The company accepted a slower hiring narrative during a window when the board expected momentum.",
    outcome: "The next hiring wave required fewer mid-year territory resets. The manager layer was holding forecast with less intervention by end of year one.",
    attribution: "Go-to-market, 2024",
    sector: "Scaling"
  },
  {
    id: "046",
    constraint: "Retention novelty-dependent; renewals required founder presence",
    decision: "Replaced demo-driven selling with workflow implementation as the primary commercial motion.",
    tradeoff: "Sales cycles became longer and more operationally demanding. The pipeline looked less exciting.",
    outcome: "At twelve months, account retention had shifted from novelty-dependent to usage-dependent. Renewals held without founder involvement.",
    attribution: "AI workflow, 2024",
    sector: "AI"
  },
  {
    id: "045",
    constraint: "Incumbent attempting to reset the market floor on pricing",
    decision: "Maintained pricing discipline against an incumbent who tried to reset the market floor.",
    tradeoff: "Several accounts left. The short-term pipeline looked weaker than the board wanted to see.",
    outcome: "The accounts that stayed required the company to prove deployment quality instead of compete on price. That margin structure is the one the business is built on today.",
    attribution: "Deeptech infrastructure, 2023",
    sector: "Deeptech"
  },
  {
    id: "044",
    constraint: "Anchor contract economics would not hold at deployment volume",
    decision: "Renegotiated the commercial terms on the anchor contract before deploying at the next scale — accepting a delayed signature in exchange for better unit economics at volume.",
    tradeoff: "Three months of momentum paused while the operating model was rebuilt around the revised structure.",
    outcome: "The company avoided compounding a weak contract structure into the next forty deployments. The revised terms held in most subsequent negotiations.",
    attribution: "Energy transition, 2023",
    sector: "Energy Transition"
  },
  {
    id: "043",
    constraint: "COO role open with two externally-sourced candidates on the table",
    decision: "Promoted an internal operator into the COO role over two externally sourced candidates with stronger pedigree.",
    tradeoff: "The external search had already generated board expectations. The internal decision required explicit justification.",
    outcome: "The hire understood the operating system well enough to improve it rather than replace it. The territory held through year one without significant resets.",
    attribution: "Consumer, 2023",
    sector: "Consumer"
  },
  {
    id: "042",
    constraint: "Customer-facing reliability issue ahead of planned international expansion",
    decision: "Paused international expansion for one additional quarter to resolve a customer-facing reliability issue in the core market.",
    tradeoff: "The team had already begun country-level hiring. The pause required those offers to be deferred.",
    outcome: "The reliability fix reduced churn by approximately 18% in the core market and removed a credibility problem that would have compounded in a new geography.",
    attribution: "Deeptech infrastructure, 2023",
    sector: "Deeptech"
  },
];

export default function ApproachPage() {
  return (
    <>
      {/* ── Section 1: Hero ── */}
      <RevealWrapper>
        <section className="approach-hero">
          <div className="container">
            <div className="section-label reveal">Investment Approach</div>
            <h1 className="approach-hero__title reveal reveal-delay-1">
              We make the scaling work explicit.
            </h1>
            <p className="approach-hero__desc reveal reveal-delay-2">
              Every aspect of our engagement is structured around the operating constraint — not the product narrative.
              We bring experience from running companies, not from watching them from board seats. We commit to specific work, at specific stages, with specific partners responsible.
            </p>
            <nav className="approach-subnav reveal reveal-delay-3" aria-label="Page sections">
              <a href="#how-we-work" className="approach-subnav__link">How We Work</a>
              <a href="#what-we-evaluate" className="approach-subnav__link">What We Evaluate</a>
              <a href="#operator-index" className="approach-subnav__link">Operator Index</a>
            </nav>
          </div>
        </section>
      </RevealWrapper>

      {/* ── Section 2: How We Work ── */}
      <RevealWrapper>
        <section className="hww-section" id="how-we-work">
          <div className="container">
            <div className="section-label reveal">How we work</div>
            <div className="hww-list">
              {STAGES.map((stage, i) => (
                <div key={i} className={`hww-item reveal reveal-delay-${i + 1}`}>
                  <div className="hww-item__left">
                    <span className="hww-item__num">{stage.num}</span>
                    <h3 className="hww-item__title">{stage.title}</h3>
                  </div>
                  <p className="hww-item__detail">{stage.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── Section 3: What We Evaluate ── */}
      <RevealWrapper>
        <section className="evaluate-section" id="what-we-evaluate">
          <div className="container">
            <div className="section-label reveal">Where we invest</div>
            <h2 className="evaluate-title reveal reveal-delay-1">
              Four sectors where execution complexity is the moat.
            </h2>
            <div className="evaluate-rows">
              {SECTORS.map((sector, i) => (
                <div key={i} className={`evaluate-row reveal reveal-delay-${i + 1}`}>
                  <h3 className="evaluate-sector-name">{sector.name}</h3>
                  <p className="evaluate-thesis">{sector.thesis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── Section 4: Transition into Operator Index ── */}
      <section className="index-bridge" id="operator-index">
        <div className="container">
          <RevealWrapper>
            <div className="bridge-inner">
              <div className="section-label reveal">Operator Index</div>
              <h2 className="bridge-statement reveal reveal-delay-1">
                What scaling decisions actually look like.
              </h2>
              <div className="bridge-body reveal reveal-delay-2">
                <p className="bridge-desc">
                  Investors talk about operating experience. The Operator Index is what that means in practice — a running ledger of real decisions made at real operating inflection points. Not case studies. Not retrospectives packaged for a board deck. Each entry names the constraint that created the choice, what was decided, what was accepted as the cost of that decision, and what the operating system looked like afterward.
                </p>
                <p className="bridge-desc">
                  Most investment narratives describe what was built. This describes what was decided — and why the decision that looked wrong at the time turned out to be the one that held. Public attribution is added only when the company has approved it. The point is not polish. The point is judgment.
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Section 5: Operator Index Entries ── */}
      <RevealWrapper>
        <section className="oi-section">
          <div className="container">
            <div className="oi-entries">
              {OPERATOR_ENTRIES.map((entry, i) => (
                <div key={entry.id} className={`oi-entry reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                  <div className="oi-meta">
                    <span className="oi-num">№ {entry.id}</span>
                    <span className="oi-sector">{entry.sector}</span>
                  </div>
                  <div className="oi-content">
                    <div className="oi-constraint-row">
                      <span className="oi-tag">Constraint</span>
                      <span className="oi-constraint-text">{entry.constraint}</span>
                    </div>
                    <p className="oi-decision">{entry.decision}</p>
                    <div className="oi-outcomes-grid">
                      <div className="oi-outcome-block">
                        <span className="oi-label">Tradeoff</span>
                        <p className="oi-value">{entry.tradeoff}</p>
                      </div>
                      <div className="oi-outcome-block">
                        <span className="oi-label">Outcome</span>
                        <p className="oi-value">{entry.outcome}</p>
                      </div>
                    </div>
                    <span className="oi-attribution">— {entry.attribution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `

        /* ── Hero ─────────────────────────────── */
        .approach-hero {
          padding-top: clamp(5rem, 12vw, 9rem);
          padding-bottom: var(--section-gap);
        }
        .approach-hero__title {
          font-size: var(--text-hero);
          font-weight: var(--weight-medium);
          letter-spacing: -0.025em;
          line-height: 1.08;
          margin-bottom: var(--space-lg);
          max-width: 20ch;
        }
        .approach-hero__desc {
          font-size: var(--text-body);
          line-height: 1.72;
          color: var(--color-ink-secondary);
          max-width: 58ch;
          margin-bottom: var(--space-xl);
        }
        .approach-subnav {
          display: flex;
          align-items: center;
          gap: clamp(var(--space-lg), 4vw, var(--space-2xl));
          padding-top: var(--space-lg);
          border-top: 1px solid var(--color-divider);
        }
        .approach-subnav__link {
          font-size: var(--text-meta);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 500;
          transition: color 150ms ease;
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          white-space: nowrap;
        }
        .approach-subnav__link::after {
          content: '↓';
          font-size: 0.75em;
          opacity: 0.55;
          font-style: normal;
        }
        .approach-subnav__link:hover {
          color: var(--color-signature);
        }

        /* ── How We Work ──────────────────────── */
        .hww-section {
          padding: var(--section-gap) 0;
          border-top: 1px solid var(--color-divider);
        }
        .hww-section .section-label {
          margin-bottom: var(--space-8);
        }
        .hww-list {
          display: flex;
          flex-direction: column;
        }
        .hww-item {
          display: grid;
          grid-template-columns: clamp(160px, 22%, 240px) 1fr;
          gap: clamp(var(--space-lg), 5vw, var(--space-2xl));
          align-items: start;
          padding: clamp(var(--space-lg), 4vw, var(--space-xl)) 0;
          border-bottom: 1px solid var(--color-divider);
        }
        .hww-item:first-child {
          border-top: 1px solid var(--color-divider);
        }
        .hww-item__left {
          display: flex;
          align-items: baseline;
          gap: var(--space-2);
          padding-top: 0.15em;
        }
        .hww-item__num {
          font-size: 0.7rem;
          color: var(--color-signature);
          font-weight: 600;
          flex-shrink: 0;
          letter-spacing: 0.06em;
        }
        .hww-item__title {
          font-size: clamp(1.25rem, 2.2vw, 1.625rem);
          font-weight: var(--weight-medium);
          color: var(--color-ink-primary);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .hww-item__detail {
          font-size: var(--text-body);
          line-height: 1.72;
          color: var(--color-ink-secondary);
          max-width: 62ch;
        }

        /* ── What We Evaluate ─────────────────── */
        .evaluate-section {
          padding: var(--section-gap) 0;
          background-color: var(--color-canvas-alt);
          border-top: 1px solid var(--color-divider);
        }
        .evaluate-section .section-label {
          margin-bottom: var(--space-8);
        }
        .evaluate-title {
          font-size: var(--text-h2);
          font-weight: var(--weight-medium);
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: var(--space-xl);
          max-width: 22ch;
        }
        .evaluate-rows {
          display: flex;
          flex-direction: column;
        }
        .evaluate-row {
          display: grid;
          grid-template-columns: clamp(200px, 28%, 300px) 1fr;
          gap: clamp(var(--space-lg), 5vw, var(--space-2xl));
          align-items: start;
          padding: clamp(var(--space-lg), 4vw, var(--space-xl)) 0;
          border-bottom: 1px solid var(--color-divider);
        }
        .evaluate-row:first-child {
          border-top: 1px solid var(--color-divider);
        }
        .evaluate-sector-name {
          font-size: clamp(1.25rem, 2.2vw, 1.625rem);
          font-weight: var(--weight-semibold);
          color: var(--color-ink-primary);
          letter-spacing: -0.01em;
          line-height: 1.2;
          padding-top: 0.15em;
        }
        .evaluate-thesis {
          font-size: var(--text-body);
          line-height: 1.72;
          color: var(--color-ink-secondary);
          max-width: 65ch;
        }

        /* ── Index Bridge ──────────────────────── */
        .index-bridge {
          padding: var(--section-gap) 0 clamp(3rem, 6vw, 5rem);
          border-top: 1px solid var(--color-divider);
        }
        .bridge-inner .section-label {
          margin-bottom: var(--space-8);
        }
        .bridge-statement {
          font-size: clamp(2.25rem, 5vw, 4rem);
          font-weight: var(--weight-medium);
          letter-spacing: -0.025em;
          line-height: 1.08;
          color: var(--color-ink-primary);
          max-width: 24ch;
          margin-bottom: var(--space-xl);
        }
        .bridge-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(var(--space-lg), 5vw, var(--space-2xl));
        }
        .bridge-desc {
          font-size: var(--text-body);
          line-height: 1.72;
          color: var(--color-ink-secondary);
        }

        /* ── Operator Index Entries ───────────── */
        .oi-section {
          padding-bottom: var(--section-gap);
        }
        .oi-entries {
          display: flex;
          flex-direction: column;
        }
        .oi-entry {
          display: grid;
          grid-template-columns: 10rem 1fr;
          gap: clamp(var(--space-lg), 5vw, var(--space-2xl));
          padding: clamp(var(--space-lg), 4vw, var(--space-xl)) 0;
          border-bottom: 1px solid var(--color-divider);
        }
        .oi-entry:first-child {
          border-top: 1px solid var(--color-divider);
        }
        .oi-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-shrink: 0;
          padding-top: 0.2rem;
        }
        .oi-num {
          font-size: 0.875rem;
          color: var(--color-signature);
          font-weight: 500;
          letter-spacing: 0.02em;
        }
        .oi-sector {
          font-size: 0.68rem;
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 500;
        }
        .oi-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }
        .oi-constraint-row {
          display: flex;
          align-items: baseline;
          gap: var(--space-2);
          flex-wrap: wrap;
          padding-bottom: var(--space-sm);
          border-bottom: 1px solid var(--color-divider);
        }
        .oi-tag {
          font-size: 0.62rem;
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 700;
          flex-shrink: 0;
          background: color-mix(in srgb, var(--color-signature) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--color-signature) 25%, transparent);
          border-radius: 4px;
          padding: 0.15rem 0.5rem;
          line-height: 1.6;
        }
        .oi-constraint-text {
          font-size: 0.9375rem;
          color: var(--color-ink-primary);
          font-weight: 500;
          line-height: 1.45;
        }
        .oi-decision {
          font-size: var(--text-body);
          line-height: 1.72;
          color: var(--color-ink-primary);
          max-width: 65ch;
        }
        .oi-outcomes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-lg);
          margin-top: var(--space-1);
        }
        .oi-outcome-block {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }
        .oi-label {
          font-size: 0.65rem;
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 700;
        }
        .oi-value {
          font-size: 0.9375rem;
          line-height: 1.65;
          color: var(--color-ink-secondary);
        }
        .oi-attribution {
          display: block;
          font-size: var(--text-meta);
          color: var(--color-muted);
          font-style: italic;
          margin-top: var(--space-1);
        }

        /* ── Responsive ───────────────────────── */
        @media (max-width: 900px) {
          .hww-item {
            grid-template-columns: 1fr;
            gap: var(--space-md);
          }
          .evaluate-row {
            grid-template-columns: 1fr;
            gap: var(--space-md);
          }
          .evaluate-sector-name {
            padding-top: 0;
          }
          .bridge-body {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 680px) {
          .oi-entry {
            grid-template-columns: 1fr;
            gap: var(--space-sm);
          }
          .oi-meta {
            flex-direction: row;
            align-items: center;
            gap: var(--space-2);
            padding-top: 0;
          }
          .oi-outcomes-grid {
            grid-template-columns: 1fr;
            gap: var(--space-md);
          }
        }
      `}} />
    </>
  );
}
