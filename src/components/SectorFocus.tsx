'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';

const SECTORS = [
  {
    name: "Energy Transition",
    thesis: "Capex-heavy businesses where project finance, regulation, and unit economics have to move in the right order.",
    proof: "We test the financing stack before we underwrite the growth story."
  },
  {
    name: "Deeptech Infrastructure",
    thesis: "Companies where technical risk and commercial risk do not resolve at the same time.",
    proof: "We look for the constraint that will bind first: manufacturing, deployment, or sales."
  },
  {
    name: "Consumer",
    thesis: "Brands and platforms where distribution quality matters as much as demand.",
    proof: "We study channel decay, SKU margins, and whether performance marketing is a tool or a crutch."
  },
  {
    name: "AI",
    thesis: "Products that move from demo value to retained workflow value.",
    proof: "We focus on account behavior, implementation depth, and how fast the product learns from paying users."
  }
];

export default function SectorFocus() {
  return (
    <RevealWrapper>
      <section className="sectors">
        <div className="section-card">
          <div className="container">
            <div className="section-label reveal">Where we invest</div>
          <h2 className="sectors__title reveal reveal-delay-1">
            Four sectors where the operating constraint matters early.
          </h2>

          <div className="sectors__grid">
            {SECTORS.map((sector, i) => (
              <div key={i} className={`sectors__card reveal reveal-delay-${i + 2}`}>
                <div className="sectors__card-top">
                  <h3 className="sectors__name">{sector.name}</h3>
                </div>
                <p className="sectors__thesis">{sector.thesis}</p>
                <span className="sectors__partner">{sector.proof}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .sectors {
          padding: 0;
          background-color: transparent;
        }

          .sectors__title {
            margin-bottom: var(--space-xl);
          }

          .sectors__grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: var(--space-3);
            background-color: transparent;
          }

          .sectors__card {
            background-color: var(--color-canvas-alt);
            border-radius: 18px;
            padding: var(--space-4);
            display: flex;
            flex-direction: column;
          }

          .sectors__card:first-child {
            padding-left: var(--space-4);
          }

        .sectors__name {
          font-family: var(--font-primary);
          font-size: clamp(1.5rem, 2.2vw, 2rem);
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-md);
          line-height: 1.15;
        }

        .sectors__thesis {
          color: var(--color-steel);
          font-size: var(--text-body);
          line-height: 1.6;
          margin-bottom: auto;
          padding-bottom: var(--space-lg);
          max-width: 30ch;
        }

          .sectors__partner {
            font-family: var(--font-primary);
            font-size: var(--text-meta);
            color: var(--color-signature);
            line-height: 1.5;
          }

          @media (max-width: 1024px) {
            .sectors__grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .sectors__grid {
              grid-template-columns: 1fr;
            }
            .sectors__card {
              padding: var(--space-4);
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
