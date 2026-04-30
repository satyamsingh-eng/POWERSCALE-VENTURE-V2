'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';

const INDEX_ENTRIES = [
  {
    id: "049",
    decision: "Delay the metro launch and learn in a harder operating market first.",
    tradeoff: "The early story looked less polished, and the team had to build field discipline sooner.",
    outcome: "The company learned which parts of the playbook were real before spending into expansion.",
    attribution: "Anonymized consumer operating note"
  },
  {
    id: "048",
    decision: "Own a critical infrastructure layer instead of outsourcing it.",
    tradeoff: "Capital efficiency got worse before the operating advantage was visible.",
    outcome: "The decision only made sense because the dependency would have constrained every later market.",
    attribution: "Anonymized energy transition note"
  },
  {
    id: "047",
    decision: "Hold sales hiring until the manager layer could forecast cleanly.",
    tradeoff: "The company accepted a slower hiring narrative during a fundraising window.",
    outcome: "The next hiring wave had a clearer bar, cleaner territories, and fewer avoidable resets.",
    attribution: "Anonymized go-to-market note"
  },
  {
    id: "046",
    decision: "Replace demo-led selling with workflow-led implementation.",
    tradeoff: "Sales cycles became less exciting and more operationally demanding.",
    outcome: "The product became easier to retain because success no longer depended on novelty.",
    attribution: "Anonymized AI workflow note"
  },
  {
    id: "045",
    decision: "Keep pricing discipline when incumbents tried to reset the market.",
    tradeoff: "Some customers walked, and the short-term pipeline looked weaker.",
    outcome: "The remaining accounts forced the company to prove deployment quality instead of buying demand.",
    attribution: "Anonymized deeptech infrastructure note"
  }
];

export default function OperatorIndex() {
  return (
    <RevealWrapper>
      <section id="operator-index" className="oi-section">
        <div className="section-card">
          <div className="container">
            <div className="oi-header">
              <div className="section-label reveal">Operator Index</div>
              <h2 className="oi-title reveal reveal-delay-1">
                A working ledger of scaling decisions.
              </h2>
              <p className="oi-description reveal reveal-delay-2">
                Each entry names the decision, the tradeoff, and what changed after the choice. The point is not polish. The point is judgment.
              </p>
            </div>

            <div className="hairline reveal reveal-delay-2"></div>

            <div className="oi-entries">
              {INDEX_ENTRIES.map((entry, i) => (
                <div key={entry.id} className={`oi-entry reveal reveal-delay-${Math.min(i + 2, 5)}`}>
                  <div className="oi-entry__id">
                    <span className="oi-entry__number">№ {entry.id}</span>
                  </div>
                  <div className="oi-entry__content">
                    <p className="oi-entry__text"><span>Decision</span> {entry.decision}</p>
                    <p className="oi-entry__text"><span>Tradeoff</span> {entry.tradeoff}</p>
                    <p className="oi-entry__text"><span>Outcome</span> {entry.outcome}</p>
                    <span className="oi-entry__attribution">— {entry.attribution}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="oi-footer reveal reveal-delay-5">
              <a href="/index-page" className="btn--outline btn">View all entries</a>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .oi-section {
            padding: 0;
            background-color: transparent;
          }

          .oi-header {
            margin-bottom: var(--space-8);
          }

          .oi-title {
            margin-bottom: var(--space-md);
          }

          .oi-description {
            font-size: var(--text-body);
            color: var(--color-steel);
            max-width: 650px;
          }

          .oi-entries {
            padding-top: var(--space-4);
          }

          .oi-entry {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: var(--space-lg);
            padding: var(--space-4) 0;
            border-bottom: 1px solid var(--color-divider);
          }

          .oi-entry:first-child {
            border-top: 1px solid var(--color-divider);
          }

          .oi-entry__number {
            font-family: var(--font-primary);
            font-size: var(--text-meta);
            color: var(--color-signature);
            font-weight: var(--weight-medium);
          }

          .oi-entry__text {
            font-size: var(--text-body);
            line-height: 1.6;
            color: var(--color-ink);
            margin-bottom: var(--space-1);
            max-width: 65ch;
          }

          .oi-entry__text span {
            color: var(--color-signature);
            font-size: var(--text-meta);
            font-weight: var(--weight-medium);
            letter-spacing: 0.06em;
            text-transform: uppercase;
            margin-right: var(--space-1);
          }

          .oi-entry__attribution {
            font-family: var(--font-primary);
            font-size: var(--text-meta);
            color: var(--color-steel);
          }

          .oi-footer {
            padding-top: var(--space-lg);
          }

          @media (max-width: 768px) {
            .oi-entry {
              grid-template-columns: 1fr;
              gap: var(--space-sm);
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
