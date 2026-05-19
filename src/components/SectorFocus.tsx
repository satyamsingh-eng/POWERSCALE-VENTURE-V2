'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';

const SECTORS = [
  {
    name: "Energy Transition",
    thesis: "Capex-heavy infrastructure where the financing stack, regulatory timeline, and deployment plan have to move in the right sequence — and where a mistake in that sequence is usually irreversible.",
    proof: "We read the power purchase agreement before we read the growth projection."
  },
  {
    name: "Deeptech Infrastructure",
    thesis: "Technical risk and commercial risk don't resolve at the same speed. Companies can have working hardware and no ability to sell it at scale, or strong sales and a manufacturing base that can't keep up.",
    proof: "We look for the binding constraint first — manufacturing readiness, deployment reliability, or sales repeatability."
  },
  {
    name: "Consumer",
    thesis: "Growth can look healthy while channel quality is already decaying. The moment when a founder stops personally carrying the sales motion is when the unit economics get honest.",
    proof: "We read cohort behavior and SKU-level margins before we discuss expansion into the next market."
  },
  {
    name: "AI",
    thesis: "The gap between demo quality and retained workflow value is where most AI companies lose years. The ones that compound have the best account retention — not the best demo.",
    proof: "We look at implementation depth and account-level usage at six months, not at the launch week."
  }
];

export default function SectorFocus() {
  return (
    <RevealWrapper>
      <section className="sectors">
        <div className="container">
          <div className="section-label reveal">Where we invest</div>
          <h2 className="sectors__title reveal reveal-delay-1">
            Four sectors where execution complexity is the moat.
          </h2>

          <div className="sectors__table">
            {SECTORS.map((sector, i) => (
              <div key={i} className={`sectors__row reveal reveal-delay-${i + 2}`}>
                <div className="sectors__row-left">
                  <span className="sectors__index">0{i + 1}</span>
                  <h3 className="sectors__name">{sector.name}</h3>
                </div>
                <div className="sectors__row-right">
                  <p className="sectors__thesis">{sector.thesis}</p>
                  <span className="sectors__proof">{sector.proof}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .sectors {
            padding: var(--section-gap) 0;
            background-color: transparent;
          }

          .sectors__title {
            margin-bottom: var(--space-xl);
            max-width: 24ch;
          }

          .sectors__table {
            border-top: 1px solid var(--color-divider);
          }

          .sectors__row {
            display: grid;
            grid-template-columns: 320px 1fr;
            gap: var(--space-xl);
            padding: clamp(var(--space-lg), 4vw, var(--space-xl)) 0;
            border-bottom: 1px solid var(--color-divider);
            align-items: start;
          }

          .sectors__row-left {
            display: flex;
            flex-direction: column;
            gap: var(--space-1);
            padding-top: 0.1rem;
          }

          .sectors__index {
            font-size: var(--text-meta);
            color: var(--color-signature);
            font-weight: var(--weight-medium);
            letter-spacing: 0.08em;
          }

          .sectors__name {
            font-size: clamp(1.5rem, 2.5vw, 2.25rem);
            font-weight: var(--weight-semibold);
            color: var(--color-ink-primary);
            line-height: 1.1;
          }

          .sectors__row-right {
            display: flex;
            flex-direction: column;
            gap: var(--space-sm);
          }

          .sectors__thesis {
            color: var(--color-ink);
            font-size: var(--text-body);
            line-height: 1.72;
            max-width: none;
          }

          .sectors__proof {
            font-size: 0.875rem;
            color: var(--color-signature);
            line-height: 1.55;
            font-style: italic;
          }

          @media (max-width: 900px) {
            .sectors__row {
              grid-template-columns: 1fr;
              gap: var(--space-md);
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
