'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';

const PORTFOLIO = [
  {
    name: "Energy transition",
    problem: "Project economics, regulatory sequencing, and financing structure have to support the same expansion plan.",
    sector: "Energy Transition",
    proof: "Evidence we ask for: signed demand, debtability, deployment cadence."
  },
  {
    name: "Consumer",
    problem: "Distribution can look healthy while channel quality is already decaying.",
    sector: "Consumer",
    proof: "Evidence we ask for: cohort behavior, contribution margins, channel mix."
  },
  {
    name: "Deeptech infrastructure",
    problem: "The technical system and the commercial motion rarely mature at the same speed.",
    sector: "Deeptech",
    proof: "Evidence we ask for: deployment reliability, manufacturing readiness, sales repeatability."
  },
  {
    name: "AI",
    problem: "Demos create attention; workflows create retention.",
    sector: "AI",
    proof: "Evidence we ask for: account-level usage, implementation depth, renewal logic."
  }
];

export default function PortfolioSnapshot() {
  return (
    <RevealWrapper>
      <section className="portfolio">
        <div className="section-card">
          <div className="container">
            <div className="section-label reveal">Portfolio</div>
          <h2 className="portfolio__title reveal reveal-delay-1">
            Portfolio work starts with the constraint.
          </h2>

          <div className="portfolio__list">
            {PORTFOLIO.map((company, i) => (
              <div key={i} className={`portfolio__item reveal reveal-delay-${i + 2}`}>
                <div className="portfolio__item-left">
                  <h3 className="portfolio__name">{company.name}</h3>
                  <span className="portfolio__meta">{company.sector}</span>
                </div>
                <div>
                  <p className="portfolio__problem">{company.problem}</p>
                  <p className="portfolio__proof">{company.proof}</p>
                </div>
              </div>
            ))}
          </div>

            <div className="portfolio__action reveal reveal-delay-5">
              <a href="/portfolio" className="btn--outline btn">How we evaluate companies</a>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .portfolio {
            padding: 0;
            background-color: transparent;
          }

          .portfolio__title {
            margin-bottom: var(--space-xl);
          }

          .portfolio__list {
            margin-bottom: var(--space-lg);
          }

          .portfolio__item {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-lg);
            padding: var(--space-lg) 0;
            border-bottom: 1px solid var(--color-divider);
            align-items: center;
            transition: transform var(--duration-fast) var(--ease-out);
          }

          .portfolio__item:first-child {
            border-top: 1px solid var(--color-divider);
          }

          .portfolio__item:hover {
            transform: translateX(8px);
          }

          .portfolio__name {
            font-family: var(--font-primary);
            font-size: clamp(1.5rem, 2vw, 2rem);
            font-weight: var(--weight-medium);
            margin-bottom: var(--space-1);
          }

          .portfolio__meta {
            font-family: var(--font-primary);
            font-size: var(--text-meta);
            color: var(--color-steel);
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .portfolio__problem {
            color: var(--color-steel);
            font-size: 1rem;
            line-height: 1.55;
          }

          .portfolio__proof {
            color: var(--color-signature);
            font-size: var(--text-meta);
            line-height: 1.55;
            margin-top: var(--space-2);
            max-width: 58ch;
          }

          .portfolio__action {
            padding-top: var(--space-lg);
          }

          @media (max-width: 768px) {
            .portfolio__item {
              grid-template-columns: 1fr;
              gap: var(--space-sm);
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
