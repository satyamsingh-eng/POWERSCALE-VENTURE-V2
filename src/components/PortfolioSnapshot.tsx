'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';

const GH2_CARD = {
  label: "Featured · Energy Transition",
  name: "GH2 Solar",
  problem: "Green hydrogen infrastructure, backed before the category narrative became crowded. The inflection we tracked: when policy alignment, cost curves, and industrial demand moved simultaneously in India.",
  proof: "Validated order book. Revenue base that confirms the demand thesis. Approaching public markets readiness."
};

const PORTFOLIO = [
  {
    name: "Energy transition",
    problem: "Project economics, regulatory sequencing, and financing structure have to move in the same direction at the same time. A project that works technically can still fail if the debt path closes before the offtake is confirmed — and that sequence failure is almost never recoverable.",
    sector: "Energy Transition",
    proof: "Before the round: signed demand commitments, a credible path to project debt, and a deployment cadence that holds if one quarter slips."
  },
  {
    name: "Consumer",
    problem: "Revenue can grow while channel quality decays. The moment a founder steps back from the sales motion is when cohort behavior gets honest — and most companies do not read that signal early enough.",
    sector: "Consumer",
    proof: "Before the round: retention by acquisition channel, SKU-level contribution margins, and what happens to cohort behavior in the second market."
  },
  {
    name: "Deeptech infrastructure",
    problem: "A working technical system is not the same as a repeatable commercial system. The structural bottleneck is almost always one of three things: manufacturing reliability, implementation burden, or sales repeatability without the founder in the room.",
    sector: "Deeptech",
    proof: "Before the round: field deployment reliability, average implementation burden per customer, and whether sales can close without founder involvement."
  },
  {
    name: "AI",
    problem: "Most AI products have strong launch weeks and weak month-six cohorts. Retained workflow value is different from demonstrated capability — and investors who rely on demos do not see the difference until the renewal cycle.",
    sector: "AI",
    proof: "Before the round: account-level usage at six and twelve months, implementation depth per account, and the logic that drives expansion."
  }
];

export default function PortfolioSnapshot() {
  return (
    <RevealWrapper>
      <section className="portfolio">
        <div className="container">
          <div className="section-label reveal">Portfolio</div>
          <h2 className="portfolio__title reveal reveal-delay-1">
            Selective conviction. Evidence-led.
          </h2>
          <p className="portfolio__intro reveal reveal-delay-1">
            The companies we back have found their first market. The question we help them answer is what breaks next — and how to fix it before it becomes irreversible.
          </p>

          <div className="portfolio__list">
            <div className="portfolio__featured reveal reveal-delay-2">
              <div className="portfolio__featured-left">
                <div className="portfolio__featured-logo-wrap">
                  <img
                    src="/images/gh2-solar-logo.png"
                    alt="GH2 Solar"
                    className="portfolio__featured-logo"
                  />
                </div>
                <span className="portfolio__featured-label">{GH2_CARD.label}</span>
                <h3 className="portfolio__featured-name">{GH2_CARD.name}</h3>
              </div>
              <div className="portfolio__featured-right">
                <p className="portfolio__featured-problem">{GH2_CARD.problem}</p>
                <p className="portfolio__featured-proof">{GH2_CARD.proof}</p>
              </div>
            </div>

            <div className="portfolio__table">
              {PORTFOLIO.map((company, i) => (
                <div key={i} className={`portfolio__item reveal reveal-delay-${i + 3}`}>
                  <div className="portfolio__item-left">
                    <h3 className="portfolio__name">{company.name}</h3>
                    <span className="portfolio__meta">{company.sector}</span>
                  </div>
                  <div className="portfolio__item-right">
                    <p className="portfolio__problem">{company.problem}</p>
                    <p className="portfolio__proof">{company.proof}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="portfolio__action reveal reveal-delay-5">
            <a href="/portfolio" className="btn--outline btn">View our portfolio approach →</a>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .portfolio {
            padding: var(--section-gap) 0;
            background-color: transparent;
          }

          .portfolio__title {
            margin-bottom: var(--space-md);
            max-width: 26ch;
          }

          .portfolio__intro {
            font-size: var(--text-body);
            color: var(--color-steel);
            line-height: 1.65;
            max-width: 58ch;
            margin-bottom: var(--space-xl);
          }

          .portfolio__list {
            margin-bottom: var(--space-lg);
          }

          .portfolio__featured {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-lg);
            padding: var(--space-lg);
            margin-bottom: var(--space-sm);
            border-radius: 16px;
            background: #111110;
            align-items: start;
          }

          .portfolio__featured-logo-wrap {
            margin-bottom: var(--space-md);
          }

          .portfolio__featured-logo {
            display: block;
            height: 44px;
            width: auto;
            max-width: 180px;
            object-fit: contain;
            filter: brightness(0) invert(1);
          }

          .portfolio__featured-label {
            display: block;
            font-size: var(--text-meta);
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #8abbb4;
            font-weight: var(--weight-medium);
            margin-bottom: var(--space-1);
          }

          .portfolio__featured-name {
            font-size: clamp(1.25rem, 2vw, 2rem);
            font-weight: var(--weight-medium);
            color: #f5f5f4;
          }

          .portfolio__featured-problem {
            color: #c7c3bc;
            font-size: var(--text-body);
            line-height: 1.6;
            margin-bottom: var(--space-2);
          }

          .portfolio__featured-proof {
            color: #8abbb4;
            font-size: var(--text-meta);
            line-height: 1.55;
            font-style: italic;
          }

          .portfolio__table {
            border-top: 1px solid var(--color-divider);
          }

          .portfolio__item {
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: var(--space-xl);
            padding: var(--space-lg) 0;
            border-bottom: 1px solid var(--color-divider);
            align-items: start;
          }

          .portfolio__name {
            font-size: clamp(1.125rem, 1.6vw, 1.5rem);
            font-weight: var(--weight-medium);
            margin-bottom: var(--space-1);
            color: var(--color-ink-primary);
          }

          .portfolio__meta {
            font-size: var(--text-meta);
            color: var(--color-signature);
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .portfolio__problem {
            color: var(--color-ink);
            font-size: var(--text-body);
            line-height: 1.65;
            margin-bottom: var(--space-2);
          }

          .portfolio__proof {
            color: var(--color-signature);
            font-size: var(--text-meta);
            line-height: 1.55;
            font-style: italic;
          }

          .portfolio__action {
            padding-top: var(--space-lg);
          }

          @media (max-width: 860px) {
            .portfolio__item {
              grid-template-columns: 1fr;
              gap: var(--space-md);
            }
          }

          @media (max-width: 700px) {
            .portfolio__featured {
              grid-template-columns: 1fr;
              gap: var(--space-sm);
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
