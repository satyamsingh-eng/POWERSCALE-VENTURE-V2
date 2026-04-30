'use client';

import React from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

const WORK = [
  {
    constraint: "Energy Transition",
    proof: "Project economics, regulatory sequencing, and financing structure have to support the same expansion plan.",
    evidence: "We ask for signed demand, debtability, deployment cadence, and the assumptions that break if timelines slip."
  },
  {
    constraint: "Deeptech Infrastructure",
    proof: "A working technical system is not the same as a repeatable commercial system.",
    evidence: "We look at manufacturing readiness, field reliability, implementation burden, and whether sales can repeat without founder force."
  },
  {
    constraint: "Consumer",
    proof: "Growth can hide poor channel quality until the company is already committed to the wrong motion.",
    evidence: "We read cohorts, contribution margins, SKU-level behavior, and how distribution changes outside the first strong market."
  },
  {
    constraint: "AI",
    proof: "The hard part is not the demo. It is retained workflow value.",
    evidence: "We look for account behavior, implementation depth, expansion logic, and customer learning loops."
  },
];

export default function PortfolioPage() {
  return (
    <>
      <RevealWrapper>
        <section className="port-hero">
          <div className="container">
            <div className="section-label reveal">Portfolio</div>
            <h1 className="port-hero__title reveal reveal-delay-1">
              We do not describe companies by adjectives.
            </h1>
            <p className="port-hero__desc reveal reveal-delay-2">
              We describe the operating constraint they have to solve. Public company details will appear here as approvals are confirmed.
            </p>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="port-list-section">
          <div className="container">
            {WORK.map((item, i) => (
              <div key={item.constraint} className={`port-item reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                <div className="port-item__left">
                  <h3 className="port-item__name">{item.constraint}</h3>
                  <div className="port-item__tags">
                    <span>Claim</span>
                  </div>
                </div>
                <div>
                  <p className="port-item__problem">{item.proof}</p>
                  <p className="port-item__evidence">{item.evidence}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .port-hero {
          padding-top: calc(var(--nav-height) + var(--space-12));
          padding-bottom: var(--section-gap);
        }

        .port-hero__title {
          font-family: var(--font-primary);
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-lg);
          max-width: 900px;
        }

        .port-hero__desc {
          font-size: var(--text-body);
          line-height: 1.7;
          color: var(--color-steel);
          max-width: 55ch;
        }

        .port-list-section {
          padding-bottom: var(--section-gap);
        }

        .port-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-lg);
          padding: var(--space-lg) 0;
          border-bottom: 1px solid var(--color-divider);
          align-items: start;
          transition: transform var(--duration-fast) var(--ease-out);
        }

        .port-item:first-child {
          border-top: 1px solid var(--color-divider);
        }

        .port-item:hover {
          transform: translateX(8px);
        }

        .port-item__name {
          font-family: var(--font-primary);
          font-size: 2rem;
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-1);
        }

        .port-item__tags {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          gap: var(--space-1);
        }

        .port-item__problem {
          color: var(--color-ink);
          line-height: 1.55;
          margin-bottom: var(--space-2);
        }

        .port-item__evidence {
          color: var(--color-signature);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .port-item {
            grid-template-columns: 1fr;
            gap: var(--space-sm);
          }
        }
      `}} />
    </>
  );
}
