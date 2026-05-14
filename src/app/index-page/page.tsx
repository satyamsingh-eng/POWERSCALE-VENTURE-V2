'use client';

import React from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

const ALL_ENTRIES = [
  {
    id: "049",
    decision: "Delayed metro-market launch for two additional quarters. Ran deeper operations in a harder tier-2 environment instead.",
    tradeoff: "The narrative looked less polished during a fundraising window.",
    outcome: "The distribution playbook that emerged held in markets the team hadn't originally planned for.",
    attribution: "Consumer operating note, 2024",
    sector: "Consumer"
  },
  {
    id: "048",
    decision: "Took vertical ownership of a critical supply-chain dependency before the financing was in place to do it cleanly.",
    tradeoff: "Capital efficiency degraded for fourteen months before the operating advantage became visible.",
    outcome: "The constraint it removed — third-party bottleneck leverage at scale — would have been structurally irreversible.",
    attribution: "Energy transition, 2024",
    sector: "Energy Transition"
  },
  {
    id: "047",
    decision: "Held sales headcount flat at twelve reps for two additional quarters while the manager layer rebuilt its forecasting capability.",
    tradeoff: "The company accepted a slower hiring narrative during a window when the board expected momentum.",
    outcome: "The next hiring wave required fewer mid-year territory resets. The manager layer was holding forecast with less intervention by the end of year one — which was the condition for accelerating headcount again.",
    attribution: "Go-to-market, 2024",
    sector: "Scaling"
  },
  {
    id: "046",
    decision: "Replaced demo-driven selling with workflow implementation as the primary commercial motion.",
    tradeoff: "Sales cycles became longer and more operationally demanding. The pipeline looked less exciting.",
    outcome: "At twelve months, account retention had shifted from novelty-dependent to usage-dependent. Renewals held without founder involvement.",
    attribution: "AI workflow, 2024",
    sector: "AI"
  },
  {
    id: "045",
    decision: "Maintained pricing discipline against an incumbent who tried to reset the market floor.",
    tradeoff: "Several accounts left. The short-term pipeline looked weaker than the board wanted to see.",
    outcome: "The accounts that stayed required the company to prove deployment quality instead of compete on price. That margin structure is the one the business is built on today.",
    attribution: "Deeptech infrastructure, 2023",
    sector: "Deeptech"
  },
  {
    id: "044",
    decision: "Renegotiated the commercial terms on the anchor contract before deploying at the next scale — accepting a delayed signature in exchange for better unit economics at volume.",
    tradeoff: "Three months of momentum paused while the operating model was rebuilt around the revised structure.",
    outcome: "The company avoided compounding a weak contract structure into the next forty deployments. The revised terms held in most subsequent negotiations and became the reference point for the commercial team.",
    attribution: "Energy transition, 2023",
    sector: "Energy Transition"
  },
  {
    id: "043",
    decision: "Promoted an internal operator into the COO role over two externally sourced candidates with stronger pedigree.",
    tradeoff: "The external search had already generated board expectations. The internal decision required explicit justification.",
    outcome: "The hire understood the operating system well enough to improve it rather than replace it. The territory held through year one without significant resets — which gave the company room to plan the next market on a stable base.",
    attribution: "Consumer, 2023",
    sector: "Consumer"
  },
  {
    id: "042",
    decision: "Paused international expansion for one additional quarter to resolve a customer-facing reliability issue in the core market.",
    tradeoff: "The team had already begun country-level hiring. The pause required those offers to be deferred.",
    outcome: "The reliability fix reduced churn by approximately 18% in the core market and removed a credibility problem that would have compounded in a new geography.",
    attribution: "Deeptech infrastructure, 2023",
    sector: "Deeptech"
  },
];

export default function IndexPage() {
  return (
    <>
      <RevealWrapper>
        <section className="index-hero">
          <div className="container">
            <div className="section-label reveal">Operator Index</div>
            <h1 className="index-hero__title reveal reveal-delay-1">
              A running ledger of scaling decisions.
            </h1>
            <p className="index-hero__desc reveal reveal-delay-2">
              Each entry names the decision, the tradeoff accepted, and what changed after the choice. These are based on real operating situations. Public attribution is added only when the company has approved it. The point is not polish. The point is judgment.
            </p>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="index-list-section">
          <div className="container">
            <div className="index-entries">
              {ALL_ENTRIES.map((entry, i) => (
                <div key={entry.id} className={`index-entry reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                  <div className="index-entry__left">
                    <span className="index-entry__id">№ {entry.id}</span>
                    <span className="index-entry__sector">{entry.sector}</span>
                  </div>
                  <div className="index-entry__right">
                    <p className="index-entry__text"><span>Decision</span> {entry.decision}</p>
                    <p className="index-entry__text"><span>Tradeoff</span> {entry.tradeoff}</p>
                    <p className="index-entry__text"><span>Outcome</span> {entry.outcome}</p>
                    <span className="index-entry__attribution">— {entry.attribution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .index-hero {
          padding-top: clamp(5rem, 12vw, 9rem);
          padding-bottom: var(--section-gap);
        }

        .index-hero__title {
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-lg);
          max-width: 18ch;
        }

        .index-hero__desc {
          font-size: var(--text-body);
          line-height: 1.7;
          color: var(--color-steel);
          max-width: 58ch;
        }

        .index-list-section {
          padding-bottom: var(--section-gap);
        }

        .index-entry {
          display: grid;
          grid-template-columns: 11rem 1fr;
          gap: var(--space-lg);
          padding: var(--space-lg) 0;
          border-bottom: 1px solid var(--color-divider);
        }

        .index-entry:first-child {
          border-top: 1px solid var(--color-divider);
        }

        .index-entry__left {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .index-entry__id {
          font-size: 0.875rem;
          color: var(--color-signature);
          font-weight: 500;
        }

        .index-entry__sector {
          font-size: 0.7rem;
          color: var(--color-steel);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .index-entry__text {
          font-size: var(--text-body);
          line-height: 1.62;
          color: var(--color-ink);
          margin-bottom: var(--space-1);
          max-width: 65ch;
        }

        .index-entry__text span {
          color: var(--color-signature);
          font-size: var(--text-meta);
          font-weight: var(--weight-medium);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-right: var(--space-1);
        }

        .index-entry__attribution {
          display: block;
          margin-top: var(--space-2);
          font-size: var(--text-meta);
          color: var(--color-muted);
          font-style: italic;
        }

        @media (max-width: 640px) {
          .index-entry {
            grid-template-columns: 1fr;
            gap: var(--space-sm);
          }
          .index-entry__left {
            flex-direction: row;
            align-items: center;
            gap: var(--space-2);
          }
        }
      `}} />
    </>
  );
}
