'use client';

import React from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

const STAGES = [
  {
    num: "01",
    title: "Stage",
    detail: "Series A and B as primary. We look for a working market, a strained operating system, and a founder who knows the next phase is not more of the same."
  },
  {
    num: "02",
    title: "Diligence",
    detail: "Our diligence is operational, not financial. We stress-test the scaling constraint — hiring velocity, channel economics, unit-level margins, working capital cycles — before we price a round."
  },
  {
    num: "03",
    title: "Engagement",
    detail: "The first phase after investment is practical: hiring diagnostic, GTM teardown, working-capital review, and the cadence required to make decisions stick."
  },
  {
    num: "04",
    title: "Hold",
    detail: "We stay through the scaling phase. We are explicit about which partner takes the lead. Board seats are working seats, not governance theatre."
  }
];

const SECTORS = [
  {
    name: "Energy Transition",
    thesis: "India's energy transition is a capex problem disguised as a policy problem. We invest where unit economics, regulation, and financing sequence together.",
  },
  {
    name: "Deeptech Infrastructure",
    thesis: "Hardware companies that can also sell. Software companies that touch physical systems. We look for the binding constraint — the thing that breaks if you scale without fixing it first.",
  },
  {
    name: "Consumer",
    thesis: "The inflection point where founder-led sales must translate to managed distribution. Channel decay, market expansion, and margin structure are the problems we understand.",
  },
  {
    name: "AI",
    thesis: "Defensible workflow integration and fast learning loops. We are not interested in model wrappers or demo-stage products. We look for paying customers who keep using the product after the novelty fades.",
  }
];

export default function ApproachPage() {
  return (
    <>
      <RevealWrapper>
        <section className="approach-hero">
          <div className="container">
            <div className="section-label reveal">Investment Approach</div>
            <h1 className="approach-hero__title reveal reveal-delay-1">
              We make the scaling work explicit.
            </h1>
            <p className="approach-hero__desc reveal reveal-delay-2">
              Every aspect of our engagement is structured around the scaling problem. 
              We bring operating experience, not pattern matching. We commit to specific 
              work, not general availability.
            </p>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="process-section">
          <div className="container">
            <div className="section-label reveal">Our process</div>
            <div className="process-list">
              {STAGES.map((stage, i) => (
                <div key={i} className={`process-item reveal reveal-delay-${i + 1}`}>
                  <div className="process-item__header">
                    <span className="process-item__num">{stage.num}</span>
                    <h3 className="process-item__title">{stage.title}</h3>
                  </div>
                  <p className="process-item__detail">{stage.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="sectors-deep">
          <div className="container">
            <div className="section-label reveal">Where we invest</div>
            <h2 className="sectors-deep__title reveal reveal-delay-1">
              Four sectors where execution<br />complexity is the moat.
            </h2>
            <div className="sectors-deep__grid">
              {SECTORS.map((sector, i) => (
                <div key={i} className={`sectors-deep__card reveal reveal-delay-${i + 2}`}>
                  <h3 className="sectors-deep__name">{sector.name}</h3>
                  <p className="sectors-deep__thesis">{sector.thesis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .approach-hero {
          padding-top: calc(var(--nav-height) + 8rem);
          padding-bottom: var(--section-gap);
        }

        .approach-hero__title {
          font-family: var(--font-primary);
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-lg);
        }

        .approach-hero__desc {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--color-steel);
          max-width: 55ch;
        }

        .process-section {
          padding: var(--section-gap) 0;
          background-color: var(--color-surface);
          color: var(--color-ink);
        }

        .process-section .section-label {
          color: var(--color-muted);
        }

        .process-section .section-label::before {
          background-color: var(--color-muted);
        }

        .process-list {
          display: flex;
          flex-direction: column;
        }

        .process-item {
          padding: var(--space-lg) 0;
          border-bottom: 1px solid var(--color-divider);
        }

        .process-item:first-child {
          border-top: 1px solid var(--color-divider);
        }

        .process-item__header {
          display: flex;
          align-items: baseline;
          gap: var(--space-md);
          margin-bottom: var(--space-sm);
        }

        .process-item__num {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--color-signature);
        }

        .process-item__title {
          font-family: var(--font-primary);
          font-size: 1.75rem;
          font-weight: var(--weight-medium);
          color: var(--color-ink);
        }

        .process-item__detail {
          color: var(--color-steel);
          line-height: 1.65;
          max-width: 55ch;
          padding-left: var(--space-6);
        }

        .sectors-deep {
          padding: var(--section-gap) 0;
          background-color: var(--color-canvas-alt);
        }

        .sectors-deep__title {
          margin-bottom: var(--space-xl);
        }

        .sectors-deep__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-lg);
        }

        .sectors-deep__card {
          padding: var(--space-lg);
          border: 1px solid var(--color-divider);
          border-radius: 20px;
          background: var(--color-surface);
          transition: transform var(--duration-fast) var(--ease-out);
        }

        .sectors-deep__card:hover {
          transform: translateY(-2px);
        }

        .sectors-deep__name {
          font-family: var(--font-primary);
          font-size: 1.75rem;
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-md);
        }

        .sectors-deep__thesis {
          color: var(--color-steel);
          line-height: 1.65;
          max-width: 45ch;
        }

        @media (max-width: 768px) {
          .sectors-deep__grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </>
  );
}
