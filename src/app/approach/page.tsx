'use client';

import React from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

const STAGES = [
  {
    num: "01",
    title: "Early Stage Investment",
    detail: "We look for a working market and a founder who understands that the next phase is not more of the same. The thing that got the company here will not carry it to the next order of magnitude without deliberate change. The founders who know this are the ones we want to back."
  },
  {
    num: "02",
    title: "Diligence",
    detail: "Our diligence starts with operations, not financials. We go deep on hiring velocity, channel economics, unit-level margins, working capital cycles, and management bandwidth before we price the round. The constraints that break companies at scale are almost always visible before they break, if you know what to look for."
  },
  {
    num: "03",
    title: "Post-investment",
    detail: "When we invest, we get to work. Hiring diagnostic, GTM review, working capital support, market access, customer introductions, financial structuring. Practical help from people who have navigated the same situations. We are explicit about which partner leads and what we are specifically responsible for."
  },
  {
    num: "04",
    title: "Hold",
    detail: "We stay through the scaling phase and remain actively involved. We are most useful when the problem is operational, when the company has to hold its growth rate while rebuilding the management layer or restructuring its capital base."
  }
];

const SUPPORT_MATRIX = [
  {
    name: "AI Applications and Infrastructure",
    challenge: "Founders are moving from AI demos to agents, workflow automation, self-learning systems, and real customer adoption. The companies that hold are the ones where the product becomes part of how customers operate, not just something they evaluated.",
    support: "GTM architecture, customer access, agent and workflow implementation framing, investor readiness, and the execution work needed to turn AI innovation into retained usage.",
  },
  {
    name: "Deep Tech",
    challenge: "Technical founders are moving between product depth, field validation, commercial sales, and new institutional rounds. The structural bottleneck is usually sales repeatability without the founder in the room.",
    support: "GTM architecture, customer access, sales process design, and preparation for the next institutional round.",
  },
  {
    name: "Energy Transition",
    challenge: "Founders are managing projects, policy, manufacturing, and capital structure simultaneously. The sequence that breaks companies is almost always financing, not technology.",
    support: "Market access, capital structure thinking, project finance navigation, and practical execution support through the build-out phase.",
  },
  {
    name: "Consumer Products",
    challenge: "Founders are scaling brands, channels, supply chains, and repeat purchase behaviour at the same time. Channel quality degrades quietly before the top-line shows it.",
    support: "Distribution diagnostics, channel economics, founder GTM support, and capital structure for the next growth phase.",
  },
];

const OPERATOR_ENTRIES = [
  {
    id: "049",
    constraint: "Distribution playbook unproven in harder tier-2 markets",
    decision: "Delayed metro-market launch for two additional quarters. Ran deeper operations in a harder tier-2 environment instead.",
    tradeoff: "The narrative looked less polished during a fundraising window.",
    outcome: "The distribution playbook that emerged held in markets the team hadn't originally planned for.",
    attribution: "Consumer operating note, 2024",
    sector: "Consumer"
  },
  {
    id: "048",
    constraint: "Critical supply-chain dependency on a third-party bottleneck",
    decision: "Took vertical ownership of a critical supply-chain dependency before the financing was in place to do it cleanly.",
    tradeoff: "Capital efficiency degraded for fourteen months before the operating advantage became visible.",
    outcome: "The constraint it removed was third-party bottleneck leverage at scale. Leaving it unaddressed would have been structurally irreversible.",
    attribution: "Energy Transition, 2024",
    sector: "Energy Transition"
  },
  {
    id: "047",
    constraint: "Manager layer unable to hold forecast without founder intervention",
    decision: "Held sales headcount flat at twelve reps for two additional quarters while the manager layer rebuilt its forecasting capability.",
    tradeoff: "The company accepted a slower hiring narrative during a window when the board expected momentum.",
    outcome: "The next hiring wave required fewer mid-year territory resets. The manager layer was holding forecast with less intervention by end of year one.",
    attribution: "Go-to-market, 2024",
    sector: "Scaling"
  },
  {
    id: "046",
    constraint: "Retention novelty-dependent; renewals required founder presence",
    decision: "Replaced demo-driven selling with workflow implementation as the primary commercial motion.",
    tradeoff: "Sales cycles became longer and more operationally demanding. The pipeline looked less exciting.",
    outcome: "At twelve months, account retention had shifted from novelty-dependent to usage-dependent. Renewals held without founder involvement.",
    attribution: "AI Applications and Infrastructure, 2024",
    sector: "AI Applications and Infrastructure"
  },
  {
    id: "045",
    constraint: "Incumbent attempting to reset the market floor on pricing",
    decision: "Maintained pricing discipline against an incumbent who tried to reset the market floor.",
    tradeoff: "Several accounts left. The short-term pipeline looked weaker than the board wanted to see.",
    outcome: "The accounts that stayed required the company to prove deployment quality instead of compete on price. That margin structure is the one the business is built on today.",
    attribution: "Deep Tech, 2023",
    sector: "Deep Tech"
  },
  {
    id: "044",
    constraint: "Anchor contract economics would not hold at deployment volume",
    decision: "Renegotiated the commercial terms on the anchor contract before deploying at the next scale. Accepted a delayed signature in exchange for better unit economics at volume.",
    tradeoff: "Three months of momentum paused while the operating model was rebuilt around the revised structure.",
    outcome: "The company avoided compounding a weak contract structure into the next forty deployments. The revised terms held in most subsequent negotiations.",
    attribution: "Energy Transition, 2023",
    sector: "Energy Transition"
  },
  {
    id: "043",
    constraint: "COO role open with two externally-sourced candidates on the table",
    decision: "Promoted an internal operator into the COO role over two externally sourced candidates with stronger pedigree.",
    tradeoff: "The external search had already generated board expectations. The internal decision required explicit justification.",
    outcome: "The hire understood the operating system well enough to improve it rather than replace it. The territory held through year one without significant resets.",
    attribution: "Consumer Products, 2023",
    sector: "Consumer Products"
  },
  {
    id: "042",
    constraint: "Customer-facing reliability issue ahead of planned international expansion",
    decision: "Paused international expansion for one additional quarter to resolve a customer-facing reliability issue in the core market.",
    tradeoff: "The team had already begun country-level hiring. The pause required those offers to be deferred.",
    outcome: "The reliability fix reduced churn by approximately 18% in the core market and removed a credibility problem that would have compounded in a new geography.",
    attribution: "Deep Tech, 2023",
    sector: "Deep Tech"
  },
];

const SUPPORT_AREAS = [
  {
    area: "Hiring and GTM",
    items: [
      "Hiring Diagnostic",
      "Org Structure",
      "Head Hunting",
      "GTM Tear Down",
      "New Channels",
      "Customer Introductions",
      "Strengthening Founder GTM"
    ]
  },
  {
    area: "Financial Support",
    items: [
      "Financial Diligence Help",
      "Financial Structuring",
      "Access to Capital",
      "Working Capital Support"
    ]
  },
  {
    area: "Market and Founder Support",
    items: [
      "Market Access",
      "GTM Partnerships",
      "Fundraising Support",
      "Founder-Focused Investment Team"
    ]
  }
];

export default function ApproachPage() {
  return (
    <>
      {/* ── Section 1: Hero ── */}
      <RevealWrapper>
        <section className="approach-hero">
          <div className="container">
            <div className="section-label reveal">Investment Approach</div>
            <h1 className="approach-hero__title reveal reveal-delay-1">
              We make the scaling work explicit.
            </h1>
            <p className="approach-hero__desc reveal reveal-delay-2">
              Every aspect of our engagement is structured around the operating challenge, not the product narrative.
              We bring experience from running companies and working with founders through hard scaling moments. We commit to specific work, at specific stages, with specific partners responsible.
            </p>
            <nav className="approach-subnav reveal reveal-delay-3" aria-label="Page sections">
              <a href="#how-we-work" className="approach-subnav__link">How We Work</a>
              <a href="#what-we-evaluate" className="approach-subnav__link">What We Evaluate</a>
            </nav>
          </div>
        </section>
      </RevealWrapper>

      {/* ── Section 2: How We Work ── */}
      <RevealWrapper>
        <section className="hww-section" id="how-we-work">
          <div className="container">
            <div className="section-label reveal">How we work</div>
            <div className="hww-list">
              {STAGES.map((stage, i) => (
                <div key={i} className={`hww-item reveal reveal-delay-${i + 1}`}>
                  <div className="hww-item__left">
                    <span className="hww-item__num">{stage.num}</span>
                    <h3 className="hww-item__title">{stage.title}</h3>
                  </div>
                  <p className="hww-item__detail">{stage.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── Section 2b: How We Help (Support Areas) ── */}
      <RevealWrapper>
        <section className="support-section">
          <div className="container">
            <div className="section-label reveal">How we help</div>
            <h2 className="support-title reveal reveal-delay-1">
              Practical support across the areas that matter most
            </h2>
            <p className="support-intro reveal reveal-delay-2">
              We work alongside founders on the specific problems that come with scaling. Not generic advice. Hands-on support in the areas where we have done the work ourselves.
            </p>
            <div className="support-grid">
              {SUPPORT_AREAS.map((area, i) => (
                <div key={i} className={`support-col reveal reveal-delay-${i + 2}`}>
                  <h3 className="support-col__title">{area.area}</h3>
                  <ul className="support-col__list">
                    {area.items.map((item, j) => (
                      <li key={j} className="support-col__item">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── Section 3: Support Matrix ── */}
      <RevealWrapper>
        <section className="evaluate-section" id="what-we-evaluate">
          <div className="container">
            <div className="section-label reveal">Where we help</div>
            <h2 className="evaluate-title reveal reveal-delay-1">
              Where we support founders through scale
            </h2>
            <div className="evaluate-matrix-header reveal reveal-delay-2">
              <span className="evaluate-col-label">Sector</span>
              <span className="evaluate-col-label">What founders navigate</span>
              <span className="evaluate-col-label">Where Powerscale helps</span>
            </div>
            <div className="evaluate-rows">
              {SUPPORT_MATRIX.map((row, i) => (
                <div key={i} className={`evaluate-row reveal reveal-delay-${i + 1}`}>
                  <h3 className="evaluate-sector-name">{row.name}</h3>
                  <p className="evaluate-challenge">{row.challenge}</p>
                  <p className="evaluate-support">{row.support}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Operator Index hidden */}

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `

        /* ── Hero ─────────────────────────────── */
        .approach-hero {
          padding-top: clamp(7rem, 10vw, 9rem);
          padding-bottom: var(--inner-hero-bottom);
        }
        .approach-hero__title {
          font-size: var(--text-hero);
          font-weight: var(--weight-medium);
          letter-spacing: -0.025em;
          line-height: 1.08;
          margin-bottom: var(--space-lg);
          max-width: 20ch;
        }
        .approach-hero__desc {
          font-size: var(--text-body);
          line-height: 1.72;
          color: var(--color-ink-secondary);
          max-width: 58ch;
          margin-bottom: var(--space-md);
        }
        .approach-subnav {
          display: flex;
          align-items: center;
          gap: clamp(var(--space-lg), 4vw, var(--space-2xl));
          padding-top: var(--space-md);
          border-top: 1px solid var(--color-divider);
        }
        .approach-subnav__link {
          font-size: var(--text-meta);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 500;
          transition: color 150ms ease;
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          white-space: nowrap;
        }
        .approach-subnav__link::after {
          content: '↓';
          font-size: 0.75em;
          opacity: 0.55;
          font-style: normal;
        }
        .approach-subnav__link:hover {
          color: var(--color-signature);
        }

        /* ── How We Work ──────────────────────── */
        .hww-section {
          padding: var(--section-top) 0 var(--section-gap);
          border-top: 1px solid var(--color-divider);
        }
        .hww-section .section-label {
          margin-bottom: var(--space-8);
        }
        .hww-list {
          display: flex;
          flex-direction: column;
        }
        .hww-item {
          display: grid;
          grid-template-columns: clamp(160px, 22%, 240px) 1fr;
          gap: clamp(var(--space-lg), 5vw, var(--space-2xl));
          align-items: start;
          padding: clamp(var(--space-lg), 4vw, var(--space-xl)) 0;
          border-bottom: 1px solid var(--color-divider);
        }
        .hww-item:first-child {
          border-top: 1px solid var(--color-divider);
        }
        .hww-item__left {
          display: flex;
          align-items: baseline;
          gap: var(--space-2);
          padding-top: 0.15em;
        }
        .hww-item__num {
          font-size: 0.7rem;
          color: var(--color-signature);
          font-weight: 600;
          flex-shrink: 0;
          letter-spacing: 0.06em;
        }
        .hww-item__title {
          font-size: clamp(1.25rem, 2.2vw, 1.625rem);
          font-weight: var(--weight-medium);
          color: var(--color-ink-primary);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .hww-item__detail {
          font-size: var(--text-body);
          line-height: 1.72;
          color: var(--color-ink-secondary);
          max-width: 62ch;
        }

        /* ── How We Help (Support Areas) ─────── */
        .support-section {
          padding: var(--section-top) 0 var(--section-gap);
          border-top: 1px solid var(--color-divider);
          background-color: var(--color-canvas);
        }
        .support-section .section-label {
          margin-bottom: var(--space-8);
        }
        .support-title {
          font-size: var(--text-h2);
          font-weight: var(--weight-medium);
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: var(--space-md);
          max-width: 28ch;
        }
        .support-intro {
          font-size: var(--text-body);
          line-height: 1.72;
          color: var(--color-ink-secondary);
          max-width: 58ch;
          margin-bottom: var(--space-xl);
        }
        .support-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(var(--space-lg), 5vw, var(--space-2xl));
          border-top: 1px solid var(--color-divider);
          padding-top: var(--space-lg);
        }
        .support-col__title {
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          font-weight: var(--weight-semibold);
          color: var(--color-ink-primary);
          letter-spacing: -0.01em;
          margin-bottom: var(--space-md);
        }
        .support-col__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
        .support-col__item {
          font-size: var(--text-body);
          color: var(--color-ink-secondary);
          line-height: 1.5;
          padding-left: 1rem;
          position: relative;
        }
        .support-col__item::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--color-signature);
          font-size: 0.75rem;
          top: 0.2em;
        }
        @media (max-width: 900px) {
          .support-grid {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }
        }

        /* ── Support Matrix ────────────────────── */
        .evaluate-section {
          padding: var(--section-top) 0 var(--section-gap);
          background-color: var(--color-canvas-alt);
          border-top: 1px solid var(--color-divider);
        }
        .evaluate-title {
          font-size: var(--text-h2);
          font-weight: var(--weight-medium);
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: var(--space-xl);
          max-width: 24ch;
        }
        .evaluate-matrix-header {
          display: grid;
          grid-template-columns: clamp(160px, 22%, 240px) 1fr 1fr;
          gap: clamp(var(--space-md), 4vw, var(--space-xl));
          padding-bottom: var(--space-sm);
          border-bottom: 1px solid var(--color-divider);
        }
        .evaluate-col-label {
          font-size: var(--text-meta);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: var(--weight-medium);
        }
        .evaluate-rows {
          display: flex;
          flex-direction: column;
        }
        .evaluate-row {
          display: grid;
          grid-template-columns: clamp(160px, 22%, 240px) 1fr 1fr;
          gap: clamp(var(--space-md), 4vw, var(--space-xl));
          align-items: start;
          padding: clamp(var(--space-lg), 4vw, var(--space-xl)) 0;
          border-bottom: 1px solid var(--color-divider);
        }
        .evaluate-sector-name {
          font-size: clamp(1rem, 1.6vw, 1.25rem);
          font-weight: var(--weight-semibold);
          color: var(--color-ink-primary);
          letter-spacing: -0.01em;
          line-height: 1.2;
          padding-top: 0.1em;
        }
        .evaluate-challenge {
          font-size: var(--text-body);
          line-height: 1.68;
          color: var(--color-ink-secondary);
        }
        .evaluate-support {
          font-size: var(--text-body);
          line-height: 1.68;
          color: var(--color-signature);
        }

        /* ── Index Bridge ──────────────────────── */
        .index-bridge {
          padding: var(--section-gap) 0 clamp(3rem, 6vw, 5rem);
          border-top: 1px solid var(--color-divider);
        }
        .bridge-inner .section-label {
          margin-bottom: var(--space-8);
        }
        .bridge-statement {
          font-size: clamp(2.25rem, 5vw, 4rem);
          font-weight: var(--weight-medium);
          letter-spacing: -0.025em;
          line-height: 1.08;
          color: var(--color-ink-primary);
          max-width: 24ch;
          margin-bottom: var(--space-xl);
        }
        .bridge-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(var(--space-lg), 5vw, var(--space-2xl));
        }
        .bridge-desc {
          font-size: var(--text-body);
          line-height: 1.72;
          color: var(--color-ink-secondary);
        }

        /* ── Operator Index Entries ───────────── */
        .oi-section {
          padding-bottom: var(--section-gap);
        }
        .oi-entries {
          display: flex;
          flex-direction: column;
        }
        .oi-entry {
          display: grid;
          grid-template-columns: 10rem 1fr;
          gap: clamp(var(--space-lg), 5vw, var(--space-2xl));
          padding: clamp(var(--space-lg), 4vw, var(--space-xl)) 0;
          border-bottom: 1px solid var(--color-divider);
        }
        .oi-entry:first-child {
          border-top: 1px solid var(--color-divider);
        }
        .oi-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-shrink: 0;
          padding-top: 0.2rem;
        }
        .oi-num {
          font-size: 0.875rem;
          color: var(--color-signature);
          font-weight: 500;
          letter-spacing: 0.02em;
        }
        .oi-sector {
          font-size: 0.68rem;
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 500;
        }
        .oi-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }
        .oi-constraint-row {
          display: flex;
          align-items: baseline;
          gap: var(--space-2);
          flex-wrap: wrap;
          padding-bottom: var(--space-sm);
          border-bottom: 1px solid var(--color-divider);
        }
        .oi-tag {
          font-size: 0.62rem;
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 700;
          flex-shrink: 0;
          background: color-mix(in srgb, var(--color-signature) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--color-signature) 25%, transparent);
          border-radius: 4px;
          padding: 0.15rem 0.5rem;
          line-height: 1.6;
        }
        .oi-constraint-text {
          font-size: 0.9375rem;
          color: var(--color-ink-primary);
          font-weight: 500;
          line-height: 1.45;
        }
        .oi-decision {
          font-size: var(--text-body);
          line-height: 1.72;
          color: var(--color-ink-primary);
          max-width: 65ch;
        }
        .oi-outcomes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-lg);
          margin-top: var(--space-1);
        }
        .oi-outcome-block {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }
        .oi-label {
          font-size: 0.65rem;
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 700;
        }
        .oi-value {
          font-size: 0.9375rem;
          line-height: 1.65;
          color: var(--color-ink-secondary);
        }
        .oi-attribution {
          display: block;
          font-size: var(--text-meta);
          color: var(--color-muted);
          font-style: italic;
          margin-top: var(--space-1);
        }

        /* ── Responsive ───────────────────────── */
        @media (max-width: 900px) {
          .hww-item {
            grid-template-columns: 1fr;
            gap: var(--space-md);
          }
          .evaluate-matrix-header {
            display: none;
          }
          .evaluate-row {
            grid-template-columns: 1fr;
            gap: var(--space-sm);
          }
          .evaluate-sector-name {
            padding-top: 0;
            font-size: 1.125rem;
          }
          .bridge-body {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 680px) {
          .oi-entry {
            grid-template-columns: 1fr;
            gap: var(--space-sm);
          }
          .oi-meta {
            flex-direction: row;
            align-items: center;
            gap: var(--space-2);
            padding-top: 0;
          }
          .oi-outcomes-grid {
            grid-template-columns: 1fr;
            gap: var(--space-md);
          }
        }
      `}} />
    </>
  );
}
