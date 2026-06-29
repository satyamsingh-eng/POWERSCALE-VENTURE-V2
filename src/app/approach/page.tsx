'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';
import ShinyText from '@/components/ui/ShinyText';

const STAGES = [
  {
    num: "01",
    title: "How we evaluate",
    detail: "After our initial understanding calls with founders, we get back within a week if there is further interest around DD and next steps. We respect founders and their time while they are in the middle of building."
  },
  {
    num: "02",
    title: "Diligence",
    detail: "We go deeper on the company, product, market, team, capital needs, and the real constraints around scale. The goal is not to slow founders down. The goal is to understand where we can be useful."
  },
  {
    num: "03",
    title: "Post-investment",
    detail: "After we invest, we work alongside founders on hiring, GTM, market access, customer introductions, financial structuring, and working capital support. Practical help from people who have navigated the same situations."
  },
  {
    num: "04",
    title: "Hold",
    detail: "We stay through the scaling phase and remain actively involved. We are most useful when the problem is operational, when the company has to hold its growth rate while rebuilding the management layer or restructuring its capital base."
  }
];

const STAGE_ICONS = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
];

const SUPPORT_MATRIX = [
  {
    name: "AI Applications and Infrastructure",
    challenge: "Founders are moving from AI demos to agents, workflow automation, self-learning systems, and real customer adoption. The companies that hold are the ones where the product becomes part of how customers operate, not just something they evaluated.",
    support: "GTM strategy — architecture, customer access, investor readiness.",
    label: "AI Applications",
    image: "/images/sector-ai.png",
  },
  {
    name: "Deep Tech",
    challenge: "Deep Tech is one of the most hyped spaces alongside AI, but not every founder can navigate this ever-changing and challenging sector. We have worked with a diverse spectrum of founders in this space, from Deep Tech detecting autism to Deep Tech helping understand a B2B sales funnel.",
    support: "With our experience of working with Deep Tech companies, we support founders to navigate through the intersection of tech, sales, new rounds, and everything in between.",
    label: "Deep Tech",
    image: "/images/sector-deeptech.png",
  },
  {
    name: "Energy Transition",
    challenge: "Sustainable energy is the new oil. The source of any real progress traces back to energy. At Powerscale Ventures, backing groundbreaking new energy companies is a natural extension of our ethos of creating a positive dent on society.",
    support: "We are in while founders navigate new projects, government policies, manufacturing hiccups, infrastructure needs, and the capital support required to build for the nation.",
    label: "Energy Transition",
    image: "/images/sector-energy.png",
  },
  {
    name: "Consumer Products",
    challenge: "We consume every day. Consumer products sit at the core of how humans live, spend, trust, and evolve. The brands people interact with change over time, and the products at the core of that change need support to scale to larger audiences with stronger supply chain diligence.",
    support: "Scaling a consumer product company is tough. We are here with network access, channels, and capital while founders figure out supply chain, product stickiness, and the numbers behind growth.",
    label: "Consumer Products",
    image: "/images/sector-consumer.png",
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
      "Market Access across India, UAE, USA, EU",
      "GTM Partnerships",
      "Fundraising Support",
      "Founder-Focused Investment Team"
    ]
  }
];

export default function ApproachPage() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <>
      {/* ── Section 1: Hero ── */}
      <RevealWrapper>
        <section className="approach-hero page-hero">
          <div className="container approach-hero__inner">
            {/* Left — label + headline only */}
            <div className="approach-hero__left">
              <div className="section-label reveal">Investment Approach</div>
              <h1 className="approach-hero__title reveal reveal-delay-1">
                We make the scaling work explicit
              </h1>
            </div>
            {/* Right — description + subnav, bottom-aligned */}
            <div className="approach-hero__right">
              <p className="approach-hero__desc reveal reveal-delay-2">
                We look at the product, the market, and the operating work required to scale. The question is simple: where can Powerscale be useful after the first signs of market pull?
              </p>
              <nav className="approach-subnav reveal reveal-delay-3" aria-label="Page sections">
                <a href="#how-we-work" className="approach-subnav__link">
                  <ShinyText text="How we work" color="var(--color-muted)" shineColor="var(--color-signature)" speed={2.5} delay={3} spread={100} direction="left" />
                </a>
                <a href="#what-we-evaluate" className="approach-subnav__link">
                  <ShinyText text="Where we help" color="var(--color-muted)" shineColor="var(--color-signature)" speed={2.5} delay={5} spread={100} direction="left" />
                </a>
              </nav>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── Section 2: How We Work — interactive split ── */}
      <section className="hww-section" id="how-we-work">
        <div className="container">
          <div className="hww-section__header reveal">
            <div className="section-label">How we work</div>
          </div>
        </div>
        <div className="hww-split">
          {/* Left — stage selector */}
          <div className="hww-split__left">
            {STAGES.map((stage, i) => (
              <div
                key={i}
                className={`hww-stage-row${activeStage === i ? ' hww-stage-row--active' : ''}`}
                onMouseEnter={() => setActiveStage(i)}
                onClick={() => setActiveStage(i)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setActiveStage(i)}
                aria-pressed={activeStage === i}
              >
                <div className="hww-stage-row__strip" />
                <div className="hww-stage-row__dot">{STAGE_ICONS[i]}</div>
                <div className="hww-stage-row__body">
                  <span className="hww-stage-row__num">{stage.num}</span>
                  <span className="hww-stage-row__title">{stage.title}</span>
                </div>
                <div className="hww-stage-row__arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            ))}
            <div className="hww-progress">
              {STAGES.map((_, i) => (
                <button
                  key={i}
                  className={`hww-progress__dot${activeStage === i ? ' hww-progress__dot--active' : ''}`}
                  onClick={() => setActiveStage(i)}
                  aria-label={`Stage ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — animated detail panel */}
          <div className="hww-split__right">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeStage}
                className="hww-detail"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="hww-detail__watermark">{STAGES[activeStage].num}</div>
                <div className="hww-detail__icon-ring">{STAGE_ICONS[activeStage]}</div>
                <span className="hww-detail__stage-num">{activeStage + 1} of {STAGES.length}</span>
                <h3 className="hww-detail__title">{STAGES[activeStage].title}</h3>
                <p className="hww-detail__body">{STAGES[activeStage].detail}</p>
                <div className="hww-detail__steps">
                  {STAGES.map((_, i) => (
                    <div
                      key={i}
                      className={`hww-detail__step-bar${activeStage === i ? ' hww-detail__step-bar--active' : activeStage > i ? ' hww-detail__step-bar--done' : ''}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

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
                <div key={i} className={`support-card reveal reveal-delay-${i + 2}`}>
                  <div className="support-card__icon" aria-hidden="true">
                    {i === 0 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    )}
                    {i === 1 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10"/>
                        <line x1="12" y1="20" x2="12" y2="4"/>
                        <line x1="6" y1="20" x2="6" y2="14"/>
                        <line x1="2" y1="20" x2="22" y2="20"/>
                      </svg>
                    )}
                    {i === 2 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="support-card__title">{area.area}</h3>
                  <ul className="support-card__list">
                    {area.items.map((item, j) => (
                      <li key={j} className="support-card__item">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── Section 3: Where We Help — Asymmetric Magazine ── */}
      <section className="wwh-section" id="what-we-evaluate">

        {/* Section header — contained */}
        <div className="container wwh-header">
          <div className="section-label">Where we help</div>
          <h2 className="wwh-title">Where we support founders through scale</h2>
        </div>

        {/* Four editorial spreads */}
        {SUPPORT_MATRIX.map((row, i) => (
          <div key={i} className={`wwh-sector${i % 2 === 1 ? ' wwh-sector--flip' : ''}`}>

            {/* Photography — absolutely positioned, bleeds to viewport edge */}
            <div className="wwh-sector__image-wrap">
              <img src={row.image} alt={row.label} className="wwh-sector__img" />
              {/* Gradient that fades the image into the canvas so text interlocks seamlessly */}
              <div className="wwh-sector__fade" />
              <span className="wwh-sector__badge">{row.label}</span>
            </div>

            {/* Editorial text — in document flow, determines sector height */}
            <div className="wwh-sector__text">
              <span className="wwh-sector__num">0{i + 1}</span>
              <h3 className="wwh-sector__title">{row.name}</h3>
              <p className="wwh-sector__challenge">{row.challenge}</p>
              <div className="wwh-sector__rule" />
              <p className="wwh-sector__support">{row.support}</p>
            </div>

          </div>
        ))}

      </section>

      {/* Operator Index hidden */}

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `

        /* ── Hero ─────────────────────────────── */
        .approach-hero {
          padding-bottom: clamp(4rem, 6vw, 5rem);
          border-bottom: 1px solid var(--color-divider);
        }
        /* Two-column editorial split — headline left, desc+links right */
        .approach-hero__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: end;
        }
        .approach-hero__left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .approach-hero__right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-bottom: 0.25rem;
        }
        .approach-hero__title {
          font-size: clamp(2.75rem, 5.8vw, 4.5rem);
          font-weight: var(--weight-medium);
          letter-spacing: -0.02em;
          line-height: 1.05;
          margin-bottom: 0;
          color: var(--color-ink-primary);
        }
        .approach-hero__desc {
          font-size: clamp(1rem, 1.3vw, 1.125rem);
          line-height: 1.7;
          color: var(--color-ink-secondary);
          margin-bottom: 2rem;
          max-width: 48ch;
        }
        .approach-subnav {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
          width: 100%;
          padding-top: 1.75rem;
          border-top: 1px solid var(--color-divider);
        }
        .approach-subnav__link {
          font-size: 0.8125rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          white-space: nowrap;
          text-decoration: none;
        }
        .approach-subnav__link::after {
          content: '↓';
          font-size: 0.75em;
          opacity: 0.55;
          font-style: normal;
          color: var(--color-muted);
        }
        @media (max-width: 860px) {
          .approach-hero__inner {
            grid-template-columns: 1fr;
            gap: clamp(2rem, 5vw, 3rem);
            align-items: start;
          }
          .approach-hero__title {
            font-size: clamp(2.5rem, 9vw, 2.75rem);
          }
        }


        /* ── How We Work — interactive split ──── */
        .hww-section {
          padding: var(--section-top, clamp(4rem, 7vw, 6rem)) 0 0;
          border-top: 1px solid var(--color-divider);
        }
        .hww-section__header {
          margin-bottom: clamp(2rem, 4vw, 3rem);
        }
        .hww-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 480px;
          border-top: 1px solid var(--color-divider);
        }

        /* Left — stage rows */
        .hww-split__left {
          border-right: 1px solid var(--color-divider);
          display: flex;
          flex-direction: column;
        }
        .hww-stage-row {
          position: relative;
          display: flex;
          align-items: center;
          gap: var(--space-4, 2rem);
          padding: clamp(1.5rem, 3vw, 2.25rem) clamp(1.5rem, 4vw, 3rem);
          cursor: pointer;
          border-bottom: 1px solid var(--color-divider);
          transition: background 200ms ease;
          outline: none;
        }
        .hww-stage-row:hover,
        .hww-stage-row:focus-visible {
          background: var(--color-canvas-alt);
        }
        .hww-stage-row--active {
          background: var(--color-canvas-alt);
        }
        .hww-stage-row__strip {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: transparent;
          transition: background 200ms ease;
          border-radius: 0 2px 2px 0;
        }
        .hww-stage-row--active .hww-stage-row__strip {
          background: var(--color-signature);
        }
        .hww-stage-row__dot {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--color-canvas);
          border: 1px solid var(--color-divider);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-muted);
          transition: color 200ms ease, border-color 200ms ease, background 200ms ease;
        }
        .hww-stage-row--active .hww-stage-row__dot {
          color: var(--color-signature);
          border-color: var(--color-signature);
          background: color-mix(in srgb, var(--color-signature) 8%, transparent);
        }
        .hww-stage-row__body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          min-width: 0;
        }
        .hww-stage-row__num {
          font-size: 0.6875rem;
          color: var(--color-muted);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 200ms ease;
        }
        .hww-stage-row--active .hww-stage-row__num {
          color: var(--color-signature);
        }
        .hww-stage-row__title {
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          font-weight: var(--weight-medium);
          color: var(--color-ink-primary);
          letter-spacing: -0.01em;
          line-height: 1.25;
        }
        .hww-stage-row__arrow {
          flex-shrink: 0;
          color: var(--color-muted);
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 200ms ease, transform 200ms ease;
        }
        .hww-stage-row--active .hww-stage-row__arrow,
        .hww-stage-row:hover .hww-stage-row__arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .hww-progress {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem clamp(1.5rem, 4vw, 3rem);
          margin-top: auto;
        }
        .hww-progress__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-divider);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 200ms ease, transform 200ms ease;
        }
        .hww-progress__dot--active {
          background: var(--color-signature);
          transform: scale(1.4);
        }

        /* Right — animated detail */
        .hww-split__right {
          padding: clamp(2.5rem, 5vw, 4rem) clamp(2rem, 5vw, 4rem);
          display: flex;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
        }
        .hww-detail {
          position: relative;
          width: 100%;
        }
        .hww-detail__watermark {
          position: absolute;
          top: -1.5rem;
          right: -1rem;
          font-size: clamp(6rem, 12vw, 10rem);
          font-weight: 800;
          color: var(--color-divider);
          line-height: 1;
          user-select: none;
          pointer-events: none;
          letter-spacing: -0.04em;
        }
        .hww-detail__icon-ring {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--color-signature) 10%, transparent);
          border: 1.5px solid color-mix(in srgb, var(--color-signature) 30%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-signature);
          margin-bottom: var(--space-md, 1.5rem);
        }
        .hww-detail__stage-num {
          display: block;
          font-size: 0.6875rem;
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .hww-detail__title {
          font-size: clamp(1.5rem, 2.5vw, 2.25rem);
          font-weight: var(--weight-medium);
          color: var(--color-ink-primary);
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: var(--space-md, 1.5rem);
        }
        .hww-detail__body {
          font-size: var(--text-body, 1.0625rem);
          line-height: 1.78;
          color: var(--color-ink-secondary);
          max-width: 50ch;
          margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
        }
        .hww-detail__steps {
          display: flex;
          gap: 0.375rem;
        }
        .hww-detail__step-bar {
          height: 3px;
          flex: 1;
          border-radius: 2px;
          background: var(--color-divider);
          transition: background 300ms ease;
        }
        .hww-detail__step-bar--active {
          background: var(--color-signature);
        }
        .hww-detail__step-bar--done {
          background: color-mix(in srgb, var(--color-signature) 45%, transparent);
        }

        @media (max-width: 860px) {
          .hww-split {
            grid-template-columns: 1fr;
          }
          .hww-split__left {
            border-right: none;
            border-bottom: 1px solid var(--color-divider);
          }
          .hww-stage-row {
            padding: clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem);
            gap: var(--space-3, 1.5rem);
          }
          .hww-split__right {
            padding: clamp(1.5rem, 5vw, 3rem) clamp(1.25rem, 5vw, 3rem);
          }
        }

        @media (max-width: 480px) {
          .approach-hero__title {
            font-size: clamp(2rem, 9vw, 2.75rem);
          }
          .hww-stage-row__dot {
            width: 34px;
            height: 34px;
          }
          .hww-detail__watermark {
            font-size: clamp(4rem, 14vw, 7rem);
          }
          .support-grid {
            grid-template-columns: 1fr;
          }
          .wwh-header {
            padding-top: clamp(2.5rem, 8vw, 4rem);
            padding-bottom: clamp(2rem, 6vw, 3.5rem);
          }
          .wwh-title {
            font-size: clamp(1.75rem, 7.5vw, 2.5rem);
            max-width: none;
          }
        }

        @media (max-width: 360px) {
          .hww-stage-row {
            padding: 0.875rem;
            gap: 0.75rem;
          }
          .hww-stage-row__dot {
            width: 30px;
            height: 30px;
          }
          .hww-stage-row__title {
            font-size: 0.9375rem;
          }
          .hww-progress {
            padding: 1rem 0.875rem;
          }
        }

        /* ── How We Help (Support Areas) ─────── */
        .support-section {
          padding: var(--section-top, clamp(4rem, 7vw, 6rem)) 0 var(--section-gap);
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
          gap: 2rem;
          margin-top: clamp(2rem, 4vw, 3rem);
        }

        /* ── Card ── */
        .support-card {
          background: var(--color-canvas-alt);
          border: 1px solid var(--color-divider);
          border-radius: 16px;
          padding: clamp(1.5rem, 2.5vw, 2rem);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 280ms ease, border-color 280ms ease, box-shadow 280ms ease;
          cursor: default;
        }
        .support-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-signature);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.09);
        }
        :root[data-theme='dark'] .support-card:hover {
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.38);
        }

        /* Icon */
        .support-card__icon {
          color: var(--color-signature);
          width: 28px;
          height: 28px;
          margin-bottom: 1.25rem;
          flex-shrink: 0;
          opacity: 0.85;
        }

        /* Title */
        .support-card__title {
          font-size: clamp(1rem, 1.4vw, 1.1875rem);
          font-weight: var(--weight-semibold);
          color: var(--color-ink-primary);
          letter-spacing: -0.01em;
          line-height: 1.3;
          margin-bottom: 1.25rem;
        }

        /* List */
        .support-card__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          flex: 1;
        }
        .support-card__item {
          font-size: var(--text-body);
          color: var(--color-ink-secondary);
          line-height: 1.5;
          padding-left: 1rem;
          position: relative;
        }
        .support-card__item::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--color-signature);
          font-size: 0.75rem;
          top: 0.22em;
          opacity: 0.7;
        }

        @media (max-width: 900px) {
          .support-grid {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }
          .support-card:hover {
            transform: none;
          }
        }

        /* ── Where We Help — Asymmetric Magazine ─────── */
        .wwh-section {
          background-color: var(--color-canvas-alt);
          border-top: 1px solid var(--color-divider);
          overflow: hidden; /* contain absolute images within viewport */
        }

        /* Section header */
        .wwh-header {
          padding-top: clamp(4rem, 7vw, 6rem);
          padding-bottom: clamp(4rem, 6vw, 5.5rem);
          border-bottom: 1px solid var(--color-divider);
        }
        .wwh-title {
          font-size: var(--text-h2);
          font-weight: var(--weight-medium);
          letter-spacing: -0.02em;
          line-height: 1.1;
          max-width: 24ch;
          margin-top: clamp(0.75rem, 1.5vw, 1.25rem);
          margin-bottom: 0;
        }

        /* ── Each editorial spread ── */
        .wwh-sector {
          position: relative;
          border-bottom: 1px solid var(--color-divider);
          /* overflow must stay hidden for the absolute image bleed */
        }

        /* ── Photography — absolute, bleeds to viewport edge ── */
        .wwh-sector__image-wrap {
          position: absolute;
          /* Default (01, 03): bleeds to RIGHT */
          right: 0;
          top: clamp(4.5rem, 8vw, 7rem);
          bottom: clamp(4.5rem, 8vw, 7rem);
          width: 62%;
          overflow: hidden;
        }
        /* Flipped (02, 04): bleeds to LEFT */
        .wwh-sector--flip .wwh-sector__image-wrap {
          right: auto;
          left: 0;
        }

        .wwh-sector__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.88) contrast(1.05) saturate(0.88);
          transition: transform 1400ms cubic-bezier(0.25, 0.1, 0.25, 1),
                      filter 900ms ease;
        }
        .wwh-sector:hover .wwh-sector__img {
          transform: scale(1.04);
          filter: brightness(0.93) contrast(1.03) saturate(0.92);
        }

        /*
          Gradient fade: image dissolves seamlessly into the canvas background
          on the side where text overlaps. Width of fade (~32%) must be wide
          enough that text column stays fully readable at all viewport sizes.
        */
        .wwh-sector__fade {
          position: absolute;
          inset: 0;
          z-index: 2;
          /* Default: fade in from left (text is on left, overlapping right edge of text col) */
          background: linear-gradient(
            to right,
            #ececea 0%,
            rgba(236, 236, 234, 0.92) 10%,
            rgba(236, 236, 234, 0.5) 24%,
            transparent 42%
          );
        }
        :root[data-theme='dark'] .wwh-sector__fade {
          background: linear-gradient(
            to right,
            #0e0e0d 0%,
            rgba(14, 14, 13, 0.92) 10%,
            rgba(14, 14, 13, 0.5) 24%,
            transparent 42%
          );
        }
        /* Flipped: fade in from right */
        .wwh-sector--flip .wwh-sector__fade {
          background: linear-gradient(
            to left,
            #ececea 0%,
            rgba(236, 236, 234, 0.92) 10%,
            rgba(236, 236, 234, 0.5) 24%,
            transparent 42%
          );
        }
        :root[data-theme='dark'] .wwh-sector--flip .wwh-sector__fade {
          background: linear-gradient(
            to left,
            #0e0e0d 0%,
            rgba(14, 14, 13, 0.92) 10%,
            rgba(14, 14, 13, 0.5) 24%,
            transparent 42%
          );
        }

        /* Sector label badge — on the exposed edge of the photo */
        .wwh-sector__badge {
          position: absolute;
          z-index: 3;
          bottom: 2.25rem;
          right: 2.5rem; /* default: badge on right side of image */
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          color: rgba(255, 255, 255, 0.5);
          pointer-events: none;
        }
        .wwh-sector--flip .wwh-sector__badge {
          right: auto;
          left: 2.5rem; /* flipped: badge on left side of image */
        }

        /* ── Editorial text — in document flow ── */
        .wwh-sector__text {
          position: relative;
          z-index: 3; /* sits on top of image gradient overlap */
          /* Default (01, 03): text on LEFT */
          width: min(100%, clamp(300px, 46vw, 600px));
          padding: clamp(6rem, 10vw, 9rem)
                   clamp(2rem, 3vw, 3rem)
                   clamp(6rem, 10vw, 9rem)
                   clamp(2.5rem, 9vw, 9rem);
        }
        /* Flipped (02, 04): text on RIGHT — push with margin-left */
        .wwh-sector--flip .wwh-sector__text {
          margin-left: auto;
          padding-left: clamp(2rem, 3.5vw, 4rem);
          padding-right: clamp(2.5rem, 9vw, 9rem);
        }

        /* Sector number — editorial label */
        .wwh-sector__num {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-signature);
          margin-bottom: clamp(1.5rem, 2.5vw, 2.25rem);
        }

        /* Sector name */
        .wwh-sector__title {
          font-size: clamp(1.75rem, 2.75vw, 2.5rem);
          font-weight: var(--weight-semibold);
          color: var(--color-ink-primary);
          letter-spacing: -0.025em;
          line-height: 1.06;
          margin-bottom: clamp(1.75rem, 2.5vw, 2.25rem);
        }

        /* Challenge paragraph — primary reading content */
        .wwh-sector__challenge {
          font-size: clamp(1rem, 1.15vw, 1.0625rem);
          line-height: 1.76;
          color: var(--color-ink-secondary);
          max-width: 44ch;
          margin-bottom: clamp(2rem, 3vw, 2.75rem);
        }

        /* Separator — thin rule between challenge and support */
        .wwh-sector__rule {
          width: 3rem;
          height: 1px;
          background: var(--color-signature);
          opacity: 0.55;
          margin-bottom: clamp(1.5rem, 2.5vw, 2rem);
          transition: width 600ms cubic-bezier(0.4, 0, 0.2, 1), opacity 600ms ease;
        }
        .wwh-sector:hover .wwh-sector__rule {
          width: 5.5rem;
          opacity: 1;
        }

        /* Support text — secondary highlight in signature green */
        .wwh-sector__support {
          font-size: clamp(0.9375rem, 1.1vw, 1.0625rem);
          line-height: 1.68;
          color: var(--color-signature);
          font-weight: 500;
          max-width: 40ch;
        }

        /* ── Mobile: single-column stacked ── */
        @media (max-width: 768px) {
          .wwh-sector {
            display: flex;
            flex-direction: column;
          }
          /* On mobile the image becomes a static full-width banner above text */
          .wwh-sector__image-wrap,
          .wwh-sector--flip .wwh-sector__image-wrap {
            position: relative;
            width: 100%;
            height: clamp(200px, 52vw, 360px);
            right: auto;
            left: auto;
            top: auto;
            bottom: auto;
          }
          /* On mobile: gradient fades to bottom so text reads below */
          .wwh-sector__fade,
          .wwh-sector--flip .wwh-sector__fade {
            background: linear-gradient(
              to bottom,
              transparent 40%,
              #ececea 100%
            );
          }
          :root[data-theme='dark'] .wwh-sector__fade,
          :root[data-theme='dark'] .wwh-sector--flip .wwh-sector__fade {
            background: linear-gradient(
              to bottom,
              transparent 40%,
              #0e0e0d 100%
            );
          }
          .wwh-sector__badge { display: none; }
          /* Text full-width, no push */
          .wwh-sector__text,
          .wwh-sector--flip .wwh-sector__text {
            width: 100%;
            margin-left: 0;
            padding: clamp(2rem, 7vw, 3rem) clamp(1.25rem, 5vw, 2rem);
          }
          .wwh-sector__title {
            font-size: clamp(1.5rem, 6vw, 2rem);
          }
          .wwh-sector__challenge { max-width: none; }
          .wwh-sector__support   { max-width: none; }
        }

        @media (max-width: 480px) {
          .wwh-sector__image-wrap,
          .wwh-sector--flip .wwh-sector__image-wrap {
            height: clamp(180px, 50vw, 280px);
          }
          .wwh-sector__text,
          .wwh-sector--flip .wwh-sector__text {
            padding: 1.75rem 1.25rem;
          }
          .wwh-sector__title {
            font-size: clamp(1.375rem, 6.5vw, 1.75rem);
          }
          .wwh-sector__challenge {
            font-size: clamp(0.9375rem, 4vw, 1rem);
          }
        }

        @media (max-width: 360px) {
          .wwh-sector__text,
          .wwh-sector--flip .wwh-sector__text {
            padding: 1.5rem 1rem;
          }
        }

        /* ── Operator Index (unused but kept) ── */
        .oi-section { padding-bottom: var(--section-gap); }
        .oi-entries { display: flex; flex-direction: column; }
        .oi-entry {
          display: grid;
          grid-template-columns: 10rem 1fr;
          gap: clamp(var(--space-lg), 5vw, var(--space-2xl));
          padding: clamp(var(--space-lg), 4vw, var(--space-xl)) 0;
          border-bottom: 1px solid var(--color-divider);
        }
        .oi-entry:first-child { border-top: 1px solid var(--color-divider); }
        .oi-meta { display: flex; flex-direction: column; gap: 0.5rem; flex-shrink: 0; padding-top: 0.2rem; }
        .oi-num { font-size: 0.875rem; color: var(--color-signature); font-weight: 500; letter-spacing: 0.02em; }
        .oi-sector { font-size: 0.68rem; color: var(--color-muted); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 500; }
        .oi-content { display: flex; flex-direction: column; gap: var(--space-md); }
        .oi-constraint-row { display: flex; align-items: baseline; gap: var(--space-2); flex-wrap: wrap; padding-bottom: var(--space-sm); border-bottom: 1px solid var(--color-divider); }
        .oi-tag { font-size: 0.62rem; color: var(--color-signature); text-transform: uppercase; letter-spacing: 0.12em; font-weight: 700; flex-shrink: 0; background: color-mix(in srgb, var(--color-signature) 10%, transparent); border: 1px solid color-mix(in srgb, var(--color-signature) 25%, transparent); border-radius: 4px; padding: 0.15rem 0.5rem; line-height: 1.6; }
        .oi-constraint-text { font-size: 0.9375rem; color: var(--color-ink-primary); font-weight: 500; line-height: 1.45; }
        .oi-decision { font-size: var(--text-body); line-height: 1.72; color: var(--color-ink-primary); max-width: 65ch; }
        .oi-outcomes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top: var(--space-1); }
        .oi-outcome-block { display: flex; flex-direction: column; gap: 0.375rem; }
        .oi-label { font-size: 0.65rem; color: var(--color-signature); text-transform: uppercase; letter-spacing: 0.12em; font-weight: 700; }
        .oi-value { font-size: 0.9375rem; line-height: 1.65; color: var(--color-ink-secondary); }
        .oi-attribution { display: block; font-size: var(--text-meta); color: var(--color-muted); font-style: italic; margin-top: var(--space-1); }

        @media (max-width: 680px) {
          .oi-entry { grid-template-columns: 1fr; gap: var(--space-sm); }
          .oi-meta { flex-direction: row; align-items: center; gap: var(--space-2); padding-top: 0; }
          .oi-outcomes-grid { grid-template-columns: 1fr; gap: var(--space-md); }
        }
      `}} />
    </>
  );
}
