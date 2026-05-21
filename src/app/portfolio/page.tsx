'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

const WORK = [
  {
    sector: "Energy Transition",
    claim: "Project economics, regulatory sequencing, and financing structure have to move in the same direction. A project that works technically can still fail if the debt path closes before the offtake is signed. That failure is usually irreversible.",
    evidence: "Before we invest: signed demand commitments, a credible path to project debt, a project timeline with built-in buffer, and the assumptions that break first if timelines move."
  },
  {
    sector: "Deeptech",
    claim: "A working technical system is not a repeatable commercial system. The structural bottleneck is almost always one of three things: manufacturing reliability at the volumes the plan requires, implementation burden per customer, or sales repeatability without the founder in the room.",
    evidence: "Before we invest: field deployment reliability data, average implementation time and cost per customer, and evidence that sales has closed at least one cycle without founder force."
  },
  {
    sector: "Consumer Products",
    claim: "Growth can hide poor channel quality until the company is already committed to the wrong motion. The moment a founder steps back from the sales process is when unit economics get honest. By then, the wrong channel structure is already baked in.",
    evidence: "Before we invest: retention curves by acquisition channel, SKU-level contribution margins, cohort behavior in the second and third market, and what changed in channel mix when the founder was not closing deals."
  },
  {
    sector: "AI and AI Infrastructure",
    claim: "Most AI products have strong launch weeks and weak month-six cohorts. Retained workflow value is different from demonstrated capability. The companies that compound are the ones where customers build the product into their operating process, not the ones with the strongest demo.",
    evidence: "Before we invest: account-level usage at six and twelve months, implementation depth and time-to-value per account, expansion logic, and the reason customers renew without founder involvement."
  },
];


const SITUATIONS = [
  {
    sector: "Consumer Products",
    description: "A company at ₹200 Cr in revenue was running sales and delivery on infrastructure designed for ₹50 Cr. The org had scaled headcount without scaling systems. The fix was rebuilding the commercial operations layer, not the product or the team, before the next growth phase was accessible."
  },
  {
    sector: "Deeptech",
    description: "A company with a working field system had closed its first three customers through founder-led sales. The fourth and fifth required the same process but the founder was now three layers removed from it. The sales architecture had to be rebuilt around the technical deployment process, not around the founder's relationships."
  },
  {
    sector: "Energy Transition",
    description: "An infrastructure company entered commissioning with a capital structure built for one timeline and a build-out reality that required another. The gap between financial close and first revenue was longer than modelled. Managing that gap required a specific kind of investor involvement: practical working capital support, not cheerleading."
  },
];


function GH2LogoCard() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <div ref={ref} className="gh2-logo-outer">
      <motion.div
        className="gh2-logo-card"
        style={{ y }}
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.015, transition: { duration: 0.35, ease: 'easeOut' } }}
      >
        <img
          src="/images/gh2-solar-logo.png"
          alt="GH2 Solar"
          className="gh2-logo-img"
          draggable={false}
        />
        <div className="gh2-logo-card__glow" aria-hidden="true" />
      </motion.div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <RevealWrapper>
        <section className="port-hero">
          <div className="container">
            <div className="section-label reveal">Portfolio</div>
            <h1 className="port-hero__title reveal reveal-delay-1">
              We back the outliers, not what impresses the crowd
            </h1>
            <p className="port-hero__desc reveal reveal-delay-2">
              We do not aggregate logos. The companies we back have found their first market and are confronting the harder problem. Company details surface here as approvals are confirmed. We do not list companies before they have chosen to be public.
            </p>
            <p className="port-hero__volatility reveal reveal-delay-3">
              <strong className="port-volatility-highlight">Portfolio volatility</strong> is part of the journey. What matters is whether we are useful when it counts.
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* Section 2: Conviction Signal — GH2 Solar */}
      <RevealWrapper>
        <section className="port-conviction-section">
          <div className="container">
            <div className="section-label reveal">Conviction Signal · Energy Transition</div>
            <div className="port-conviction-grid">
              <div className="port-conviction__visuals">
                <GH2LogoCard />
                {/* TODO: Replace with approved GH2 Solar plant / green hydrogen image once provided */}
                <div className="reveal reveal-delay-2">
                  <ImagePlaceholder label="GH2 Solar — Plant Image" aspectRatio="16/9" />
                </div>
              </div>
              <div className="port-conviction__thesis reveal reveal-delay-2">
                <p className="port-conviction__eyebrow">GH2 Solar · Green Hydrogen Infrastructure</p>
                <p className="port-conviction__intro">
                  Backed before the market narrative became crowded.
                </p>

                <div className="port-signal-block">
                  <p className="port-signal-block__label">The inflection we tracked</p>
                  <p className="port-signal-block__content">
                    The inflection we were tracking: when policy alignment, cost curves, and demand pressure reached a point where the business case no longer required the market to be convinced. India's industrial decarbonisation created a window where the three variables moved simultaneously. We were in before the window was obvious.
                  </p>
                </div>

                <div className="port-signal-block">
                  <p className="port-signal-block__label">What gave us conviction</p>
                  <p className="port-signal-block__content">
                    Validated order book before the capital markets had priced the category. A revenue base that validates the demand thesis. A management team that treats project finance as a core capability, not a capital-raising exercise. The company was backing operational infrastructure, not a technology demonstration.
                  </p>
                </div>

                <div className="port-signal-block">
                  <p className="port-signal-block__label">Where the company stands</p>
                  <p className="port-signal-block__content">
                    The company is now in the infrastructure scaling phase, where the first project's economics become the template for the next. Approaching public markets readiness. The kind of infrastructure execution that compounds over time. We expect the work between here and a public pathway to be the most consequential phase of the investment.
                  </p>
                </div>

                <p className="port-conviction__lp-note">
                  [Full case study available to LPs and qualified investors.]
                </p>
                <p className="port-conviction__pipeline">
                  Two more companies are in pipeline, yet to make a press release.
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Section 3: Investment Lens */}
      <RevealWrapper>
        <section className="port-list-section">
          <div className="container">
            <div className="section-label reveal">Investment lens</div>
            <h2 className="port-list__title reveal reveal-delay-1">
              Where our conviction shows up
            </h2>
            <p className="port-list__intro reveal reveal-delay-2">
              One standard across all four sectors: the operating constraint has to be nameable before we price a round.
            </p>
            {WORK.map((item, i) => (
              <div key={item.sector} className={`port-item reveal reveal-delay-${Math.min(i + 2, 5)}`}>
                <div className="port-item__left">
                  <span className="port-item__num">0{i + 1}</span>
                  <h3 className="port-item__name">{item.sector}</h3>
                </div>
                <div className="port-item__right">
                  <p className="port-item__claim">{item.claim}</p>
                  <div className="port-item__evidence-block">
                    <span className="port-item__evidence-label">Before we invest</span>
                    <p className="port-item__evidence">{item.evidence.replace(/^Before we invest:\s*/i, '')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealWrapper>

      {/* Section 5: Operating Complexity — Anonymized Situations */}
      <RevealWrapper>
        <section className="port-situations-section">
          <div className="container">
            <div className="section-label reveal">Operational proof</div>
            <h2 className="port-situations__title reveal reveal-delay-1">
              What we work on after the cheque clears.
            </h2>
            <p className="port-situations__subtitle reveal reveal-delay-1">
              Real operating situations from current portfolio work. Company names withheld.
            </p>
            <div className="port-situations-grid">
              {SITUATIONS.map((situation, i) => (
                <div key={situation.sector} className={`port-situation-card reveal reveal-delay-${Math.min(i + 2, 5)}`}>
                  <span className="port-situation-card__tag">{situation.sector}</span>
                  <p className="port-situation-card__desc">{situation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Section 6: Founder Support — Post-Investment */}
      <RevealWrapper>
        <section className="port-support-section">
          <div className="container">
            <div className="section-label reveal">After the cheque</div>
            <h2 className="port-support__title reveal reveal-delay-1">
              How we support founders after we invest
            </h2>
            <div className="port-support-modules">
              <div className="port-support-module reveal reveal-delay-2">
                <span className="port-support-module__number">01</span>
                <div className="port-support-module__body">
                  <p className="port-support-module__name">Hiring diagnostic</p>
                  <p className="port-support-module__desc">
                    Org structure at the current stage vs. what the plan requires, and where the first break will appear. Not a headcount review. A systems review.
                  </p>
                </div>
              </div>
              <div className="port-support-module reveal reveal-delay-3">
                <span className="port-support-module__number">02</span>
                <div className="port-support-module__body">
                  <p className="port-support-module__name">Go-to-market teardown</p>
                  <p className="port-support-module__desc">
                    Channel mix, retention by acquisition source, and what founder dependency looks like in the numbers. The moment the founder steps back is when cohort behavior gets honest.
                  </p>
                </div>
              </div>
              <div className="port-support-module reveal reveal-delay-4">
                <span className="port-support-module__number">03</span>
                <div className="port-support-module__body">
                  <p className="port-support-module__name">Working capital review</p>
                  <p className="port-support-module__desc">
                    Cash requirements of the growth plan, the financing path the company is committing to, and where working capital becomes the binding constraint. Practical support from people who have navigated the same situations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        /* Hero */
        .port-hero {
          padding-top: clamp(7rem, 10vw, 9rem);
          padding-bottom: var(--section-gap);
        }

        .port-hero__title {
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-lg);
          max-width: 22ch;
        }

        .port-hero__desc {
          font-size: var(--text-body);
          line-height: 1.7;
          color: var(--color-steel);
          max-width: 58ch;
          margin-bottom: var(--space-sm);
        }

        .port-hero__volatility {
          font-size: var(--text-body);
          line-height: 1.7;
          color: var(--color-ink-secondary);
          max-width: 52ch;
          margin-top: var(--space-sm);
        }

        .port-volatility-highlight {
          font-weight: var(--weight-semibold);
          color: var(--color-ink-primary);
          letter-spacing: -0.01em;
        }

        /* GH2 Solar logo card */
        .gh2-logo-outer {
          width: 100%;
        }

        .gh2-logo-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(109, 174, 60, 0.25);
          border-radius: 16px;
          padding: var(--space-6) var(--space-6) var(--space-8);
          min-height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          cursor: default;
          box-shadow: 0 2px 16px rgba(109, 174, 60, 0.06), 0 1px 4px rgba(0,0,0,0.04);
          animation: gh2-border-pulse 6s ease-in-out infinite;
        }

        @keyframes gh2-border-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(109, 174, 60, 0); border-color: rgba(109, 174, 60, 0.15); }
          50%  { box-shadow: 0 8px 32px rgba(109, 174, 60, 0.1); border-color: rgba(109, 174, 60, 0.4); }
        }

        .gh2-logo-img {
          display: block;
          width: 100%;
          max-width: 320px;
          height: auto;
          margin: 0 auto;
          user-select: none;
        }

        /* Ambient sweep highlight */
        .gh2-logo-card__glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(105deg, transparent 30%, rgba(109,174,60,0.06) 50%, transparent 70%);
          background-size: 200% 100%;
          animation: gh2-sweep 8s linear infinite;
        }

        @keyframes gh2-sweep {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* Dark mode: keep white card container — logo needs white bg to read */
        :root[data-theme='dark'] .gh2-logo-card {
          border-color: rgba(109, 174, 60, 0.25);
        }

        @media (prefers-reduced-motion: reduce) {
          .gh2-logo-card { animation: none; }
          .gh2-logo-card__glow { animation: none; }
        }

        /* Conviction Signal */
        .port-conviction-section {
          padding-bottom: var(--section-gap);
        }

        .port-conviction-section .section-label {
          margin-bottom: var(--space-lg);
        }

        .port-conviction-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: var(--space-xl);
          align-items: start;
        }

        .port-conviction__visuals {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .port-conviction__eyebrow {
          font-size: var(--text-meta);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-signature);
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-3);
        }

        .port-conviction__intro {
          font-size: clamp(1.125rem, 2vw, 1.375rem);
          font-weight: var(--weight-medium);
          color: var(--color-ink);
          line-height: 1.4;
          margin-bottom: var(--space-lg);
          max-width: 36ch;
        }

        .port-signal-block {
          padding: var(--space-3) 0;
          border-top: 1px solid var(--color-divider);
        }

        .port-signal-block:last-of-type {
          border-bottom: 1px solid var(--color-divider);
          margin-bottom: var(--space-3);
        }

        .port-signal-block__label {
          font-size: var(--text-meta);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: var(--color-muted);
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-1);
        }

        .port-signal-block__content {
          font-size: var(--text-body);
          color: var(--color-steel);
          line-height: 1.65;
        }

        .port-conviction__lp-note {
          font-size: var(--text-meta);
          color: var(--color-muted);
          font-style: italic;
          margin-top: var(--space-2);
        }

        .port-conviction__pipeline {
          font-size: var(--text-meta);
          color: var(--color-ink-secondary);
          font-style: italic;
          margin-top: var(--space-2);
          padding-top: var(--space-2);
          border-top: 1px solid var(--color-divider);
        }

        /* What We Evaluate */
        .port-list-section {
          padding-bottom: var(--section-gap);
          border-top: 1px solid var(--color-divider);
          padding-top: var(--section-gap);
        }

        .port-list-section .section-label {
          margin-bottom: var(--space-md);
        }

        .port-list__title {
          font-size: var(--text-h2);
          font-weight: var(--weight-medium);
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: var(--space-md);
          max-width: 22ch;
        }

        .port-list__intro {
          font-size: var(--text-body);
          color: var(--color-steel);
          line-height: 1.65;
          max-width: 56ch;
          margin-bottom: var(--space-xl);
        }

        .port-item {
          display: grid;
          grid-template-columns: clamp(180px, 24%, 280px) 1fr;
          gap: clamp(var(--space-lg), 4vw, var(--space-xl));
          padding: clamp(var(--space-lg), 4vw, var(--space-xl)) 0;
          border-bottom: 1px solid var(--color-divider);
          align-items: start;
        }

        .port-item:first-of-type {
          border-top: 1px solid var(--color-divider);
        }

        .port-item__left {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .port-item__num {
          font-size: var(--text-meta);
          color: var(--color-signature);
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .port-item__name {
          font-size: clamp(1.125rem, 2vw, 1.625rem);
          font-weight: var(--weight-semibold);
          letter-spacing: -0.01em;
          line-height: 1.15;
        }

        .port-item__claim {
          color: var(--color-ink-secondary);
          line-height: 1.68;
          margin-bottom: var(--space-3);
          font-size: var(--text-body);
        }

        .port-item__evidence-block {
          margin-top: var(--space-4);
          border-left: 2px solid var(--color-signature);
          padding-left: var(--space-4);
        }

        .port-item__evidence-label {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--color-signature);
          font-weight: 700;
          margin-bottom: var(--space-1);
        }

        .port-item__evidence {
          color: var(--color-ink-secondary);
          font-size: var(--text-body);
          line-height: 1.65;
        }

        /* Operating Situations */
        .port-situations-section {
          padding-bottom: var(--section-gap);
        }

        .port-situations-section .section-label {
          margin-bottom: var(--space-lg);
        }

        .port-situations__title {
          font-size: var(--text-h2);
          font-weight: var(--weight-medium);
          max-width: 28ch;
          margin-bottom: var(--space-sm);
        }

        .port-situations__subtitle {
          font-size: var(--text-body);
          color: var(--color-steel);
          line-height: 1.65;
          max-width: 52ch;
          margin-bottom: var(--space-xl);
        }

        .port-situations-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(1rem, 2vw, 1.5rem);
          margin-bottom: var(--space-lg);
        }

        .port-situation-card {
          background: var(--color-surface);
          border: 1px solid var(--color-divider);
          border-radius: 16px;
          padding: clamp(1.5rem, 3vw, 2rem);
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          transition: border-color var(--duration-fast) var(--ease-out);
        }

        .port-situation-card:hover {
          border-color: rgba(47, 111, 106, 0.3);
        }

        :root[data-theme='dark'] .port-situation-card:hover {
          border-color: rgba(138, 187, 180, 0.25);
        }

        .port-situation-card__tag {
          display: inline-flex;
          align-self: flex-start;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--color-signature);
          font-weight: 700;
          background: rgba(47, 111, 106, 0.08);
          border-radius: 100px;
          padding: 0.3em 0.875em;
          line-height: 1.6;
        }

        :root[data-theme='dark'] .port-situation-card__tag {
          background: rgba(138, 187, 180, 0.1);
        }

        .port-situation-card__desc {
          font-size: var(--text-body);
          color: var(--color-ink-secondary);
          line-height: 1.75;
          flex: 1;
        }

        /* Post-Investment Support */
        .port-support-section {
          padding-bottom: var(--section-gap);
        }

        .port-support-section .section-label {
          margin-bottom: var(--space-lg);
        }

        .port-support__title {
          font-size: var(--text-h2);
          font-weight: var(--weight-medium);
          max-width: 28ch;
          margin-bottom: var(--space-xl);
        }

        .port-support-modules {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0 var(--space-xl);
        }

        .port-support-module {
          display: grid;
          grid-template-columns: 2.5rem 1fr;
          gap: var(--space-3);
          padding: var(--space-lg) 0;
          border-top: 1px solid var(--color-divider);
          align-items: start;
        }

        .port-support-module:first-child {
          border-top: 1px solid var(--color-divider);
        }

        .port-support-module__number {
          font-size: var(--text-meta);
          color: var(--color-muted);
          font-weight: var(--weight-medium);
          letter-spacing: 0.05em;
          padding-top: 0.2em;
        }

        .port-support-module__name {
          font-size: clamp(1.125rem, 1.8vw, 1.375rem);
          font-weight: var(--weight-medium);
          color: var(--color-ink);
          margin-bottom: var(--space-1);
        }

        .port-support-module__desc {
          font-size: var(--text-body);
          color: var(--color-steel);
          line-height: 1.65;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .port-conviction-grid {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }
        }

        @media (max-width: 700px) {
          .port-item {
            grid-template-columns: 1fr;
            gap: var(--space-sm);
          }

          .port-situations-grid {
            grid-template-columns: 1fr;
          }

          .port-support-modules {
            grid-template-columns: 1fr;
          }

          .port-support-module {
            grid-template-columns: 2.5rem 1fr;
            gap: var(--space-3);
            border-bottom: 1px solid var(--color-divider);
          }
        }
      `}} />
    </>
  );
}
