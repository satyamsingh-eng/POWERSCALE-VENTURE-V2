'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';

const PARTNERS = [
  {
    name: "Arthi B",
    role: "Partner",
    achievement: "Built operating and founder-support systems before investing.",
    focus: "Consumer & AI",
  },
  {
    name: "Sanjay",
    role: "Partner",
    achievement: "Brings operating judgment from company-building and market development.",
    focus: "Energy Transition & Infrastructure",
  },
  {
    name: "Satya",
    role: "Partner",
    achievement: "Works with founders on capital discipline, hiring systems, and scale readiness.",
    focus: "Deeptech & AI",
  }
];

export default function OperatorProof() {
  return (
    <RevealWrapper>
      <section className="team">
        <div className="section-card">
          <div className="container">
            <div className="section-label reveal">Team</div>
            <h2 className="team__title reveal reveal-delay-1">
              The operating background is the firm.
            </h2>
            <p className="team__intro reveal reveal-delay-2">
              We do not separate investment judgment from operating judgment. The same people who decide on the cheque stay close to the scaling work after it clears.
            </p>

          <div className="team__grid">
            {PARTNERS.map((partner, i) => (
              <div key={i} className={`team__card reveal reveal-delay-${i + 2}`}>
                <div className="team__info">
                  <span className="team__index">0{i + 1}</span>
                  <h3 className="team__name">{partner.name}</h3>
                  <span className="team__role">{partner.role}</span>
                  <p className="team__achievement">{partner.achievement}</p>
                  <span className="team__focus">{partner.focus}</span>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .team {
            padding: 0;
            background-color: transparent;
          }

          .team__title {
            margin-bottom: var(--space-xl);
          }

          .team__grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-lg);
          }

          .team__card {
            display: flex;
            flex-direction: column;
            border-top: 1px solid var(--color-divider);
            padding-top: var(--space-4);
          }

          .team__intro {
            color: var(--color-steel);
            font-size: var(--text-body);
            line-height: 1.65;
            margin-bottom: var(--space-8);
            max-width: 620px;
          }

          .team__name {
            font-family: var(--font-primary);
            font-size: clamp(24px, 2.4vw, 32px);
            font-weight: var(--weight-medium);
            margin-bottom: 0.25rem;
          }

          .team__index {
            display: block;
            margin-bottom: var(--space-6);
            color: var(--color-signature);
            font-size: var(--text-meta);
            font-weight: var(--weight-medium);
            letter-spacing: 0.08em;
          }

          .team__role {
            font-size: 0.8rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--color-steel);
            display: block;
            margin-bottom: var(--space-sm);
          }

          .team__achievement {
            font-size: 1rem;
            color: var(--color-steel);
            line-height: 1.5;
            margin-bottom: var(--space-sm);
          }

          .team__focus {
            font-family: var(--font-primary);
            font-size: var(--text-meta);
            color: var(--color-signature);
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          @media (max-width: 768px) {
            .team__grid {
              grid-template-columns: 1fr;
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
