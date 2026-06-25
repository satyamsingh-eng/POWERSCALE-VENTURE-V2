'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';

const SECTORS = [
  {
    name: "AI Applications and Infrastructure",
    challenge: "AI is still a new land for founders, customers, and investors.",
    support: (<>We back founders building <strong className="sf-strong">AI applications, agents, self-learning systems, and infrastructure</strong> that customers keep using beyond the first demo.</>),
    imageSrc: "/images/ai-applications-infrastructure.png",
    imageAlt: "AI applications and infrastructure visual",
  },
  {
    name: "Deep Tech",
    challenge: "Deep Tech is hyped, but hard to navigate.",
    support: (<>We back founders working across <strong className="sf-strong">technical depth, sales, new rounds, and everything in between</strong> — from autism detection to B2B sales intelligence.</>),
    imageSrc: "/images/deep-tech.png",
    imageAlt: "Deep Tech visual",
  },
  {
    name: "Energy Transition",
    challenge: "Sustainable energy is the new oil.",
    support: (<>We back founders navigating <strong className="sf-strong">new projects, government policies, manufacturing hiccups, infrastructure needs, and the capital support</strong> required to build for the nation.</>),
    imageSrc: "/images/energy-transition.png",
    imageAlt: "Energy Transition visual",
  },
  {
    name: "Consumer Products",
    challenge: "Consumer products sit close to everyday life.",
    support: (<>We help founders scale to larger audiences with <strong className="sf-strong">network access, channels, capital, supply chain diligence, product stickiness, and the numbers</strong> behind growth.</>),
    imageSrc: "/images/consumer-products.png",
    imageAlt: "Consumer Products visual",
  },
];

export default function SectorFocus() {
  return (
    <section className="sf-section">

      {/* Section header — stays in container flow */}
      <RevealWrapper>
        <div className="container sf-header">
          <div className="section-label reveal">Where we invest</div>
          <h2 className="sf-title reveal reveal-delay-1">
            Four sectors where execution complexity is the moat
          </h2>
        </div>
      </RevealWrapper>

      {/* Full-bleed stacked panels — one per sector */}
      {SECTORS.map((sector, i) => (
        <div key={i} className="sf-panel">

          {/* Full-bleed image */}
          <img
            src={sector.imageSrc}
            alt={sector.imageAlt}
            className="sf-panel__img"
          />

          {/* Gradient — heavy at bottom, fades out at ~55% up */}
          <div className="sf-panel__overlay" />

          {/* Bottom-pinned text block */}
          <div className="sf-panel__content">
            <span className="sf-panel__num">{String(i + 1).padStart(2, '0')}</span>
            <h2 className="sf-panel__name">{sector.name}</h2>
            <p className="sf-panel__challenge">{sector.challenge}</p>
            <div className="sf-panel__rule" />
            <p className="sf-panel__support">{sector.support}</p>

            {/* Scroll hint — hidden on last panel */}
            {i < SECTORS.length - 1 && (
              <div className="sf-panel__hint" aria-hidden="true">
                <span className="sf-hint__arrow">↓</span>
                <span className="sf-hint__label">
                  {String(i + 2).padStart(2, '0')} {SECTORS[i + 1].name}
                </span>
              </div>
            )}
          </div>

        </div>
      ))}

      <style dangerouslySetInnerHTML={{__html: `

        /* ── Section header ── */
        .sf-section {
          border-top: 1px solid var(--color-divider);
        }
        .sf-header {
          padding-top: var(--section-gap);
          padding-bottom: clamp(2.5rem, 4vw, 4rem);
        }
        .sf-title {
          font-size: clamp(1.75rem, 3.2vw, 2.75rem);
          font-weight: var(--weight-medium);
          letter-spacing: -0.025em;
          line-height: 1.1;
          max-width: none;
          margin-top: clamp(0.75rem, 1.5vw, 1.25rem);
          margin-bottom: 0;
        }

        /* ── Full-bleed panel ── */
        .sf-panel {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
        }

        /* Background image — covers full panel */
        .sf-panel__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          filter: brightness(0.72) contrast(1.06) saturate(0.84);
        }

        /* Gradient overlay — darkens bottom 45%, nearly transparent at top */
        .sf-panel__overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.94) 0%,
            rgba(0, 0, 0, 0.76) 20%,
            rgba(0, 0, 0, 0.44) 42%,
            rgba(0, 0, 0, 0.10) 62%,
            transparent 100%
          );
        }

        /* Text content — absolute, bottom-left */
        .sf-panel__content {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 3;
          padding: clamp(2.5rem, 5vw, 5rem) clamp(2rem, 6vw, 7rem);
          max-width: min(100%, clamp(320px, 62vw, 860px));
          width: 100%;
        }

        /* Sector counter — visible label above the name */
        .sf-panel__num {
          display: block;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
          margin-bottom: 0.875rem;
        }

        /* Sector name — large, white, tight tracking */
        .sf-panel__name {
          font-size: clamp(2.5rem, 4.5vw, 4rem);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.03em;
          line-height: 1.08;
          margin-bottom: clamp(1rem, 1.8vw, 1.5rem);
        }

        /* Challenge line — white/80% */
        .sf-panel__challenge {
          font-size: clamp(1.125rem, 1.5vw, 1.375rem);
          line-height: 1.72;
          color: rgba(255, 255, 255, 0.80);
          max-width: 52ch;
          margin-bottom: clamp(1.125rem, 1.8vw, 1.75rem);
        }

        /* Rule between challenge and support */
        .sf-panel__rule {
          width: 2.5rem;
          height: 1px;
          background: var(--color-signature);
          opacity: 0.7;
          margin-bottom: clamp(1.125rem, 1.8vw, 1.75rem);
        }

        /* Support line — signature green */
        .sf-panel__support {
          font-size: clamp(1.0625rem, 1.3vw, 1.25rem);
          line-height: 1.72;
          color: var(--color-signature);
          max-width: 52ch;
          font-weight: 500;
        }
        .sf-strong {
          font-weight: 700;
          color: var(--color-signature);
        }

        /* Scroll hint to next sector */
        .sf-panel__hint {
          margin-top: clamp(1.75rem, 3vw, 2.75rem);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .sf-hint__arrow {
          color: rgba(255, 255, 255, 0.36);
          font-size: 0.875rem;
          line-height: 1;
        }
        .sf-hint__label {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.36);
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          /* 75svh — next panel peeks in, signalling there's more to scroll */
          .sf-panel {
            height: 75svh;
            min-height: 480px;
            max-height: 640px;
          }
          .sf-panel__content {
            padding: 1.75rem 1.5rem;
            max-width: 100%;
            width: 100%;
          }
          .sf-panel__num {
            font-size: 0.625rem;
            margin-bottom: 0.625rem;
          }
          .sf-panel__name {
            font-size: clamp(1.625rem, 6.5vw, 2.25rem);
            margin-bottom: 0.75rem;
          }
          .sf-panel__challenge {
            font-size: clamp(0.9rem, 3.8vw, 1.0625rem);
            margin-bottom: 0.875rem;
          }
          .sf-panel__rule {
            margin-bottom: 0.875rem;
          }
          .sf-panel__support {
            font-size: clamp(0.875rem, 3.6vw, 1rem);
          }
          .sf-panel__hint {
            margin-top: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .sf-panel {
            height: 72svh;
            min-height: 440px;
            max-height: 580px;
          }
          .sf-panel__content {
            padding: 1.5rem 1.25rem;
          }
          .sf-panel__name {
            font-size: clamp(1.5rem, 7vw, 1.875rem);
            margin-bottom: 0.625rem;
          }
          .sf-panel__challenge {
            font-size: 0.9rem;
            margin-bottom: 0.75rem;
          }
          .sf-panel__support {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 360px) {
          .sf-panel {
            min-height: 400px;
          }
          .sf-panel__content {
            padding: 1.25rem 1rem;
          }
          .sf-panel__name {
            font-size: clamp(1.375rem, 8vw, 1.625rem);
          }
        }
      `}} />
    </section>
  );
}
