'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';


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
              We back the capital, not what impresses the crowd
            </h1>
            <p className="port-hero__desc reveal reveal-delay-2">
              The companies we back have found their first market and are confronting the harder problem: scaling what already works.
            </p>
            <p className="port-hero__volatility reveal reveal-delay-3">
              Portfolio volatility is part of the journey. What matters is whether we are useful when it counts.
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* Section 2: What we saw — GH2 Solar */}
      <RevealWrapper>
        <section className="port-conviction-section">
          <div className="container">
            <div className="section-label reveal">What we saw · Energy Transition</div>
            <div className="port-conviction-grid">
              <div className="port-conviction__visuals">
                <GH2LogoCard />
                <div className="gh2-media-grid reveal reveal-delay-2">
                  <div className="gh2-img-wrap">
                    <img
                      src="/images/portfolio/gh2-green-hydrogen.png"
                      alt="GH2 Solar green hydrogen infrastructure"
                      className="gh2-img"
                    />
                    <span className="gh2-img-caption">Green Hydrogen Infrastructure</span>
                  </div>
                  <div className="gh2-img-wrap">
                    <img
                      src="/images/portfolio/gh2-solar-energy.png"
                      alt="GH2 Solar solar energy deployment"
                      className="gh2-img"
                    />
                    <span className="gh2-img-caption">Solar Energy Deployment</span>
                  </div>
                </div>
              </div>
              <div className="port-conviction__thesis reveal reveal-delay-2">
                <p className="port-conviction__eyebrow">GH2 Solar · Green Hydrogen Infrastructure</p>
                <p className="port-conviction__intro">
                  Powerscale saw the new wave of sustainable energy before it was obvious to the crowd. We started backing GH2 Solar eight months ago.
                </p>

                <div className="port-signal-block">
                  <p className="port-signal-block__label">Where they are building</p>
                  <p className="port-signal-block__content">
                    Green hydrogen and solar infrastructure, where policy timing, project finance, industrial demand, and execution have to move together.
                  </p>
                </div>

                <div className="port-signal-block">
                  <p className="port-signal-block__label">What made the work real</p>
                  <p className="port-signal-block__content">
                    Visible demand and practical project execution. A management team that treats project finance as a core capability, not a capital-raising exercise.
                  </p>
                </div>

                <div className="port-signal-block">
                  <p className="port-signal-block__label">Why Powerscale fits</p>
                  <p className="port-signal-block__content">
                    Energy transition companies need more than capital when projects begin to move. They need market access, financial structuring, policy awareness, and practical support through the build-out phase. That is where Powerscale expects to be useful.
                  </p>
                </div>

                <div className="port-conviction__spacer" aria-hidden="true" />

                <p className="port-case-study-note">
                  Full case study available to LPs and qualified investors
                </p>

                <p className="port-conviction__pipeline">
                  Two more companies are under review and have not been publicly announced
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Section 3: Post-Investment Support */}
      <RevealWrapper>
        <section className="port-support-section">
          <div className="container">
            <div className="section-label reveal">Post-investment support</div>
            <h2 className="port-support__title reveal reveal-delay-1">
              How we work alongside founders
            </h2>
            <div className="port-support-grid">
              <div className="port-support-card reveal reveal-delay-2">
                <h3 className="port-support-card__title">Hiring diagnostic</h3>
                <p className="port-support-card__desc">
                  Org structure at the current stage vs. what the plan requires, and where the first break will appear. Not a headcount review. A systems review.
                </p>
              </div>
              <div className="port-support-card reveal reveal-delay-3">
                <h3 className="port-support-card__title">Go-to-market teardown</h3>
                <p className="port-support-card__desc">
                  Channel mix, retention by acquisition source, and what founder dependency looks like in the numbers. The moment the founder steps back is when cohort behavior gets honest.
                </p>
              </div>
              <div className="port-support-card reveal reveal-delay-4">
                <h3 className="port-support-card__title">Working capital review</h3>
                <p className="port-support-card__desc">
                  Cash requirements of the growth plan, the financing path the company is committing to, and where working capital becomes the binding constraint. Practical support from people who have navigated the same situations.
                </p>
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
          padding-bottom: var(--inner-hero-bottom);
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

        /* GH2 Solar logo card */
        .gh2-logo-outer {
          width: 100%;
        }

        .gh2-logo-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(109, 174, 60, 0.25);
          border-radius: 16px;
          padding: var(--space-6);
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

        /* Dark mode: keep white card — logo needs white bg to read */
        :root[data-theme='dark'] .gh2-logo-card {
          border-color: rgba(109, 174, 60, 0.25);
        }

        @media (prefers-reduced-motion: reduce) {
          .gh2-logo-card { animation: none; }
          .gh2-logo-card__glow { animation: none; }
        }

        /* GH2 image grid */
        .gh2-media-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.625rem;
          margin-top: 0.625rem;
        }

        .gh2-img-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .gh2-img {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          object-position: center;
          border-radius: 12px;
          border: 1px solid var(--color-divider);
          background: var(--color-canvas-alt);
        }

        .gh2-img-caption {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-signature);
          font-weight: 700;
        }

        /* What we saw */
        .port-conviction-section {
          padding-bottom: var(--inner-hero-bottom);
        }

        .port-conviction-section .section-label {
          margin-bottom: var(--space-lg);
        }

        .port-conviction-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: clamp(3rem, 5vw, 5rem);
          align-items: stretch;
        }

        .port-conviction__visuals {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .port-conviction__thesis {
          display: flex;
          flex-direction: column;
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
          padding: var(--space-2) 0;
          border-top: 1px solid var(--color-divider);
        }

        .port-signal-block:last-of-type {
          border-bottom: 1px solid var(--color-divider);
          margin-bottom: var(--space-md);
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

        /* Spacer — absorbs free space so pill anchors to column bottom */
        .port-conviction__spacer {
          flex: 1;
          min-height: var(--space-lg);
        }

        /* Case study access note */
        .port-case-study-note {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          max-width: 100%;
          padding: 0.6rem 1rem;
          border: 1px solid var(--color-divider);
          background: var(--color-canvas-alt);
          border-radius: 999px;
          color: var(--color-ink-secondary);
          font-size: clamp(0.875rem, 0.95vw, 0.9375rem);
          line-height: 1.35;
          align-self: flex-start;
          margin-bottom: var(--space-2);
        }

        :root[data-theme='dark'] .port-case-study-note {
          border-color: rgba(245, 245, 244, 0.1);
          background: rgba(245, 245, 244, 0.04);
        }

        /* Pipeline note — pill */
        .port-conviction__pipeline {
          display: inline-flex;
          align-items: center;
          padding: 0.65rem 1.25rem;
          border: 1px solid rgba(47, 111, 106, 0.25);
          background: rgba(47, 111, 106, 0.06);
          color: var(--color-ink-secondary);
          font-size: clamp(0.875rem, 1vw, 0.9375rem);
          line-height: 1.45;
          border-radius: 999px;
          align-self: flex-start;
          max-width: 100%;
        }

        :root[data-theme='dark'] .port-conviction__pipeline {
          border-color: rgba(138, 187, 180, 0.2);
          background: rgba(138, 187, 180, 0.06);
        }

        /* Post-Investment Support — card grid */
        .port-support-section {
          padding-bottom: var(--section-gap);
          border-top: 1px solid var(--color-divider);
          padding-top: var(--section-gap);
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

        .port-support-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(1rem, 1.5vw, 1.5rem);
        }

        .port-support-card {
          border: 1px solid var(--color-divider);
          background: rgba(255, 255, 255, 0.72);
          border-radius: 1.25rem;
          padding: clamp(1.5rem, 2vw, 2rem);
        }

        :root[data-theme='dark'] .port-support-card {
          background: rgba(14, 14, 13, 0.5);
          border-color: rgba(245, 245, 244, 0.09);
        }

        .port-support-card__title {
          font-size: clamp(1.125rem, 1.4vw, 1.375rem);
          line-height: 1.15;
          font-weight: 700;
          color: var(--color-ink-primary);
          margin-bottom: 0.75rem;
        }

        .port-support-card__desc {
          font-size: var(--text-body);
          line-height: 1.65;
          color: var(--color-ink-secondary);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .port-conviction-grid {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }
          .port-support-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .port-support-grid {
            grid-template-columns: 1fr;
          }
          .port-conviction__pipeline,
          .port-case-study-note {
            border-radius: 1rem;
          }
        }
      `}} />
    </>
  );
}
