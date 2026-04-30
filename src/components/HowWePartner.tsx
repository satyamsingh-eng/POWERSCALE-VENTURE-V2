'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';

const MODULES = [
  {
    num: "01",
    title: "Stage",
    text: "We work best after the first market is real and the next question is whether the company can become an operating system."
  },
  {
    num: "02",
    title: "Diligence",
    text: "Before investing, we read the operating plan for the constraints it hides: hiring load, channel quality, cash timing, and management bandwidth."
  },
  {
    num: "03",
    title: "Post-investment",
    text: "The first phase of work is practical: hiring diagnostic, go-to-market teardown, working-capital review, and the cadence needed to make those decisions stick."
  }
];

export default function HowWePartner() {
  return (
    <RevealWrapper>
      <section className="approach">
        <div className="section-card">
          <div className="container">
            <div className="approach__layout">
            <div className="approach__left">
              <div className="section-label reveal">How we partner</div>
              <h2 className="approach__title reveal reveal-delay-1">
                Claiming involvement is easy. Making it useful is the work.
              </h2>
            </div>
            <div className="approach__right">
              {MODULES.map((module, i) => (
                <div key={i} className={`approach__module reveal reveal-delay-${i + 2}`}>
                  <div className="approach__module-header">
                    <span className="approach__num">{module.num}</span>
                    <h3 className="approach__module-title">{module.title}</h3>
                  </div>
                  <p className="approach__module-text">{module.text}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>

      <style dangerouslySetInnerHTML={{__html: `
          .approach {
            padding: 0; /* padding handled by section-card */
            background-color: transparent; /* show canvas behind card */
            color: var(--color-ink-primary);
          }

          .approach .section-label {
            color: var(--color-ink-secondary);
          }

          .approach .section-label::before {
            background-color: var(--color-ink-secondary);
          }

          .approach__layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-xl);
          }

          .approach__title {
            color: var(--color-ink-primary);
            font-size: clamp(2.25rem, 3.5vw, 3.5rem);
          }

          .approach__right {
            display: flex;
            flex-direction: column;
          }

          .approach__module {
            padding: var(--space-lg) 0;
            border-bottom: 1px solid var(--color-divider);
          }

          .approach__module:first-child {
            border-top: 1px solid var(--color-divider);
          }

          .approach__module-header {
            display: flex;
            align-items: baseline;
            gap: var(--space-md);
            margin-bottom: var(--space-sm);
          }

          .approach__num {
            font-family: var(--font-mono);
            font-size: 0.8rem;
            color: var(--color-signature);
          }

          .approach__module-title {
            font-size: var(--text-h3);
            font-weight: var(--weight-medium);
            color: var(--color-ink-primary);
          }

          .approach__module-text {
            color: var(--color-ink-secondary);
            font-size: var(--text-body);
            line-height: 1.6;
            max-width: 45ch;
            padding-left: var(--space-6);
          }

          @media (max-width: 1024px) {
            .approach__layout {
              grid-template-columns: 1fr;
              gap: var(--space-lg);
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
