'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';

const MODULES = [
  {
    num: "01",
    title: "Stage",
    text: "Series A and B, after the first market is real. We look for founders who recognise the next phase is different — that the operating system that got the company here will not carry it to the next order of magnitude without deliberate change."
  },
  {
    num: "02",
    title: "Diligence",
    text: "We stress-test the operating plan before we price the round. Hiring load, channel economics, cash timing, management bandwidth. The constraints that break companies at scale are almost always visible before they break — if you know what to look for."
  },
  {
    num: "03",
    title: "Post-investment",
    text: "The first ninety days are practical: a hiring diagnostic, a GTM teardown, a working-capital review. Not consulting deliverables — the things we know how to do because we have done them before, on our own companies, at our own cost."
  }
];

export default function HowWePartner() {
  return (
    <RevealWrapper>
      <section className="approach">
        <div className="container">
          <div className="approach__layout">
              <div className="approach__left">
                <div className="section-label reveal">How we partner</div>
                <h2 className="approach__title reveal reveal-delay-1">
                  Claiming involvement is easy. Making it useful is the work.
                </h2>
                <p className="approach__subtitle reveal reveal-delay-2">
                  We are building the firm we wished existed when we were running companies.
                </p>
              </div>
              <div className="approach__right">
                {MODULES.map((module, i) => (
                  <div key={i} className={`approach__module reveal reveal-delay-${i + 3}`}>
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

        <style dangerouslySetInnerHTML={{__html: `
          .approach {
            padding: var(--section-gap) 0;
            background-color: transparent;
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

          .approach__left {
            display: flex;
            flex-direction: column;
          }

          .approach__title {
            color: var(--color-ink-primary);
            font-size: clamp(1.625rem, 3.5vw, 3rem);
            max-width: 18ch;
            margin-bottom: var(--space-md);
          }

          .approach__subtitle {
            font-size: var(--text-body);
            color: var(--color-signature);
            line-height: 1.6;
            max-width: 32ch;
            font-style: italic;
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
            font-size: 0.8rem;
            color: var(--color-signature);
            flex-shrink: 0;
          }

          .approach__module-title {
            font-size: var(--text-h3);
            font-weight: var(--weight-medium);
            color: var(--color-ink-primary);
          }

          .approach__module-text {
            color: var(--color-ink-secondary);
            font-size: var(--text-body);
            line-height: 1.65;
            max-width: 46ch;
            padding-left: calc(var(--space-md) + 0.5rem);
          }

          @media (max-width: 860px) {
            .approach__layout {
              grid-template-columns: 1fr;
              gap: var(--space-lg);
            }

            .approach__module-text {
              padding-left: 0;
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
