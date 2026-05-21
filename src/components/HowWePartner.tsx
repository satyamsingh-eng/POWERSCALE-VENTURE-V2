'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';
import BorderGlow from '@/components/ui/BorderGlow';

const MODULES = [
  {
    num: "01",
    title: "Early Stage Investment",
    text: "After the first market is real, we look for founders who see that the next phase is fundamentally different. The thing that got the company here will not carry it to the next order of magnitude without deliberate change. We back founders who know how to navigate that change."
  },
  {
    num: "02",
    title: "Diligence",
    text: "Before we invest, we go deep on the operating plan: hiring, channel economics, cash timing, management bandwidth. The constraints that break companies at scale are almost always visible before they break. We find them early and work with founders to address them."
  },
  {
    num: "03",
    title: "Post-investment",
    text: "When we invest, we get to work alongside founders. Hiring diagnostic, GTM review, working capital support, market access, customer introductions, financial structuring. Practical help from people who have navigated the same problems. We stay in through the hard parts."
  }
];

const GLOW_COLORS = ['#2f6f6a', '#4a9e98', '#1d5550'];

export default function HowWePartner() {
  return (
    <RevealWrapper>
      <section className="approach">
        <div className="container">

          <div className="approach__header">
            <div className="section-label reveal">How we partner</div>
            <h2 className="approach__title reveal reveal-delay-1">
              <strong>We are building</strong> the firm we wished existed when we were running companies.
            </h2>
          </div>

          <div className="approach__cards">
            {MODULES.map((module, i) => (
              <div key={i} className={`approach__card-wrap reveal reveal-delay-${i + 2}`}>
                <BorderGlow
                  backgroundColor="#0f0f0e"
                  glowColor="173 40 58"
                  colors={GLOW_COLORS}
                  borderRadius={18}
                  glowRadius={30}
                  glowIntensity={1.1}
                  edgeSensitivity={22}
                  coneSpread={28}
                  fillOpacity={0.25}
                  className="approach__glow-card"
                >
                  <div className="approach__module">
                    <span className="approach__num">{module.num}</span>
                    <h3 className="approach__module-title">{module.title}</h3>
                    <p className="approach__module-text">{module.text}</p>
                  </div>
                </BorderGlow>
              </div>
            ))}
          </div>

        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .approach {
            padding: var(--section-gap) 0;
            background-color: transparent;
          }

          .approach__header {
            margin-bottom: var(--space-xl);
          }

          .approach__title {
            color: var(--color-ink-primary);
            font-size: clamp(1.75rem, 3.5vw, 3rem);
            max-width: 22ch;
            margin-bottom: var(--space-md);
          }

          .approach__title strong {
            color: var(--color-signature);
            font-weight: inherit;
          }

          .approach__cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-md);
            align-items: stretch;
          }

          .approach__card-wrap {
            display: flex;
            flex-direction: column;
          }

          .approach__glow-card,
          .approach__glow-card .border-glow-inner {
            height: 100%;
          }

          .approach__module {
            padding: var(--space-lg);
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 280px;
          }

          .approach__num {
            display: block;
            font-size: var(--text-meta);
            color: #8abbb4;
            font-weight: 700;
            letter-spacing: 0.08em;
            margin-bottom: var(--space-md);
          }

          .approach__module-title {
            font-size: clamp(1.25rem, 2vw, 1.75rem);
            font-weight: var(--weight-semibold);
            color: #f5f5f4;
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin-bottom: var(--space-md);
          }

          .approach__module-text {
            color: #cac6be;
            font-size: var(--text-body);
            line-height: 1.65;
            flex: 1;
          }

          @media (max-width: 900px) {
            .approach__cards {
              grid-template-columns: 1fr;
              gap: var(--space-sm);
            }

            .approach__module {
              min-height: unset;
            }
          }

          @media (max-width: 600px) {
            .approach__module {
              padding: var(--space-md);
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
