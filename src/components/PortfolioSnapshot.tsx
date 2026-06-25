'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';

const GH2_CARD = {
  label: "Featured · Energy Transition",
  name: "GH2 Solar",
  problem: "Green hydrogen infrastructure, backed when policy alignment, cost curves, and industrial demand began to move simultaneously in India.",
  proof: "Visible demand and practical project execution. A management team that treats capital structure as a core discipline, not an afterthought.",
};

export default function PortfolioSnapshot() {
  return (
    <RevealWrapper>
      <section className="portfolio">
        <div className="container">
          <div className="section-label reveal">Portfolio</div>
          <h2 className="portfolio__title reveal reveal-delay-1">
            We back outliers, doers, and founders who execute, not founders who only impress the crowd
          </h2>
          <p className="portfolio__pipeline reveal reveal-delay-2">
            Two more companies are under review and have not been publicly announced.
          </p>

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

          <div className="portfolio__action reveal reveal-delay-3">
            <a href="/portfolio" className="btn--outline btn">View portfolio →</a>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .portfolio {
            padding: var(--section-gap) 0;
            background-color: transparent;
          }

          .portfolio__title {
            margin-bottom: var(--space-md);
            max-width: 30ch;
          }

          .portfolio__pipeline {
            font-size: var(--text-body);
            color: var(--color-muted);
            line-height: 1.7;
            max-width: 58ch;
            margin-bottom: var(--space-xl);
            font-style: italic;
          }

          .portfolio__featured {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-lg);
            padding: var(--space-lg);
            margin-bottom: var(--space-lg);
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
            font-weight: 700;
            margin-bottom: var(--space-1);
          }

          .portfolio__featured-name {
            font-size: clamp(1.25rem, 2vw, 2rem);
            font-weight: var(--weight-medium);
            color: #f5f5f4;
            margin-bottom: var(--space-sm);
          }

          .portfolio__featured-note {
            font-size: var(--text-meta);
            color: rgba(245, 245, 244, 0.55);
            line-height: 1.6;
            font-style: italic;
          }

          .portfolio__featured-problem {
            color: #e0dcd6;
            font-size: var(--text-body);
            line-height: 1.7;
            margin-bottom: var(--space-2);
          }

          .portfolio__featured-proof {
            color: #8abbb4;
            font-size: var(--text-meta);
            line-height: 1.55;
            font-style: italic;
          }

          .portfolio__action {
            padding-top: var(--space-sm);
          }

          @media (max-width: 700px) {
            .portfolio__featured {
              grid-template-columns: 1fr;
              gap: var(--space-sm);
              padding: var(--space-md);
            }
          }

          @media (max-width: 480px) {
            .portfolio__title {
              font-size: clamp(1.5rem, 7vw, 2.5rem);
            }
            .portfolio__featured {
              padding: 1.25rem;
            }
            .portfolio__featured-logo {
              height: 36px;
            }
          }

          @media (max-width: 360px) {
            .portfolio__featured {
              padding: 1rem;
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
