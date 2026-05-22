'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';
import BorderGlow from '@/components/ui/BorderGlow';

const MODULES = [
  {
    num: "01",
    title: "How we evaluate",
    text: "After the first understanding call, we get back within a week if there is further interest around DD and next steps. We respect founders' time while they are in the middle of building."
  },
  {
    num: "02",
    title: "Diligence",
    text: "We go deeper on the company, product, market, team, capital needs, and the real constraints around scale. The goal is to understand where we can be useful."
  },
  {
    num: "03",
    title: "Post-investment",
    text: "After we invest, we work alongside founders on hiring, GTM, market access, customer introductions, financial structuring, and working capital support."
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
              We partner with founders through the hard middle of scale
            </h2>
            <p className="approach__subhead reveal reveal-delay-2">
              Fast evaluation, practical diligence, and support that stays useful after the cheque clears
            </p>
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
            margin-bottom: clamp(2rem, 4vw, 4rem);
          }

          .approach__title {
            color: var(--color-ink-primary);
            font-size: clamp(1.75rem, 3.5vw, 3rem);
            max-width: 22ch;
            margin-bottom: var(--space-sm);
            letter-spacing: -0.02em;
            line-height: 1.1;
          }

          .approach__title strong {
            color: var(--color-signature);
            font-weight: inherit;
          }

          .approach__subhead {
            font-size: clamp(1rem, 1.2vw, 1.175rem);
            color: var(--color-ink-secondary);
            line-height: 1.55;
            max-width: 52ch;
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
            padding: clamp(1.5rem, 2.2vw, 2.25rem);
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          .approach__num {
            display: block;
            font-size: var(--text-meta);
            color: #8abbb4;
            font-weight: 700;
            letter-spacing: 0.08em;
            margin-bottom: var(--space-sm);
          }

          .approach__module-title {
            font-size: clamp(1.35rem, 1.8vw, 1.85rem);
            font-weight: var(--weight-semibold);
            color: #f5f5f4;
            line-height: 1.1;
            letter-spacing: -0.02em;
            margin-bottom: var(--space-sm);
          }

          .approach__module-text {
            color: #cac6be;
            font-size: clamp(1rem, 1vw, 1.125rem);
            line-height: 1.55;
            flex: 1;
            max-width: 34ch;
          }

          @media (max-width: 900px) {
            .approach__cards {
              grid-template-columns: 1fr;
              gap: var(--space-sm);
            }

            .approach__module-text {
              max-width: none;
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
