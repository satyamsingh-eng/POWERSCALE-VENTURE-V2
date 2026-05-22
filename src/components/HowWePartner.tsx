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
            padding: clamp(2.25rem, 3vw, 3.25rem);
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: clamp(320px, 28vw, 420px);
          }

          .approach__num {
            display: block;
            font-size: clamp(0.95rem, 1vw, 1.1rem);
            color: #8ff1dc;
            font-weight: 700;
            letter-spacing: 0.08em;
            margin-bottom: 2rem;
          }

          .approach__module-title {
            font-size: clamp(1.65rem, 1.9vw, 2.15rem);
            font-weight: 700;
            color: #ffffff;
            line-height: 1.08;
            letter-spacing: -0.02em;
            margin-bottom: 1.25rem;
          }

          .approach__module-text {
            color: #ffffff;
            opacity: 0.92;
            font-size: clamp(1.12rem, 1.22vw, 1.35rem);
            line-height: 1.55;
            font-weight: 400;
            flex: 1;
          }

          @media (max-width: 900px) {
            .approach__cards {
              grid-template-columns: 1fr;
              gap: var(--space-sm);
            }
          }

          @media (max-width: 600px) {
            .approach__module {
              padding: 2rem;
              min-height: auto;
            }

            .approach__module-text {
              font-size: clamp(1.05rem, 4vw, 1.18rem);
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
