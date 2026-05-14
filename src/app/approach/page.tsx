'use client';

import React from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

const STAGES = [
  {
    num: "01",
    title: "Stage",
    detail: "Series A and B as primary. We look for a working market, a strained operating system, and a founder who understands that the next phase is not more of the same. The thing that got the company here will not carry it to the next order of magnitude without deliberate change — and the founders who know this are the ones we want to back."
  },
  {
    num: "02",
    title: "Diligence",
    detail: "Our diligence is operational before it is financial. We stress-test the scaling constraint — hiring velocity, channel economics, unit-level margins, working capital cycles, management bandwidth — before we price the round. The constraints that break companies at scale are almost always visible before they break, if you know what to look for."
  },
  {
    num: "03",
    title: "Post-investment",
    detail: "The first ninety days are practical: a hiring diagnostic, a GTM teardown, a working-capital review. Not consulting deliverables — the things we know how to do because we have done them before, on our own companies, at our own cost. We are explicit about which partner takes the lead and what we are specifically responsible for."
  },
  {
    num: "04",
    title: "Hold",
    detail: "We stay through the scaling phase. Board seats are working seats, not governance theatre. We are most useful when the problem is operational — when the company has to hold its growth rate while rebuilding the management layer or restructuring its capital base."
  }
];

const SECTORS = [
  {
    name: "Energy Transition",
    thesis: "India's energy transition is a capex problem disguised as a policy problem. The companies that compound are the ones where project economics, regulatory sequencing, and financing structure move in the same direction at the same time. A mistake in that sequence is usually irreversible — which is why most investors read the growth projection before they read the power purchase agreement. We do it the other way around.",
  },
  {
    name: "Deeptech Infrastructure",
    thesis: "A working technical system is not the same as a repeatable commercial system. Technical risk and commercial risk do not resolve at the same speed — a company can have working hardware and no ability to sell it at scale, or strong sales and a manufacturing base that cannot keep up. We look for the binding constraint first: manufacturing readiness, deployment reliability, or sales repeatability without founder force.",
  },
  {
    name: "Consumer",
    thesis: "The inflection point where founder-led sales must translate to managed distribution is the point most consumer companies fail. Growth can look healthy while channel quality is already decaying. The moment a founder steps back from the commercial motion is when unit economics get honest — and by then most companies are already committed to the wrong motion.",
  },
  {
    name: "AI",
    thesis: "Defensible workflow integration separates AI companies that compound from the ones that plateau. Demo quality and retained workflow value are different things, and investors who rely on demos do not see the difference until the renewal cycle. We are not interested in model wrappers or novelty-dependent products. We look for paying customers who keep using the product after month six — and can explain why.",
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
              Every aspect of our engagement is structured around the operating constraint — not the product narrative.
              We bring experience from running companies, not from watching them from board seats. We commit to specific work, at specific stages, with specific partners responsible.
            </p>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="process-section">
          <div className="container">
            <div className="section-label reveal">How we work</div>
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
              Four sectors where execution complexity is the moat.
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
          padding-top: clamp(5rem, 12vw, 9rem);
          padding-bottom: var(--section-gap);
        }

        .approach-hero__title {
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-lg);
          max-width: 20ch;
        }

        .approach-hero__desc {
          font-size: var(--text-body);
          line-height: 1.7;
          color: var(--color-steel);
          max-width: 58ch;
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
          font-size: 0.8rem;
          color: var(--color-signature);
          flex-shrink: 0;
        }

        .process-item__title {
          font-size: clamp(1.375rem, 2.5vw, 1.75rem);
          font-weight: var(--weight-medium);
          color: var(--color-ink);
        }

        .process-item__detail {
          color: var(--color-steel);
          line-height: 1.65;
          max-width: 58ch;
          padding-left: calc(var(--space-md) + 1.5rem);
        }

        .sectors-deep {
          padding: var(--section-gap) 0;
          background-color: var(--color-canvas-alt);
        }

        .sectors-deep__title {
          margin-bottom: var(--space-xl);
          max-width: 22ch;
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
          font-size: clamp(1.25rem, 2.5vw, 1.75rem);
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-md);
        }

        .sectors-deep__thesis {
          color: var(--color-steel);
          line-height: 1.65;
          max-width: none;
        }

        @media (max-width: 600px) {
          .sectors-deep__grid {
            grid-template-columns: 1fr;
          }

          .process-item__detail {
            padding-left: 0;
          }
        }
      `}} />
    </>
  );
}
