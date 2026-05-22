'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';

const SECTORS = [
  {
    name: "AI Applications and Infrastructure",
    body: (<>AI is still a new land for founders, customers, and investors. We back founders building <strong className="text-highlight">AI applications, agents, self-learning systems, and infrastructure</strong> that customers keep using beyond the first demo.</>),
    imageSrc: "/images/ai-applications-infrastructure.png",
    imageAlt: "AI applications and infrastructure visual",
  },
  {
    name: "Deep Tech",
    body: (<>Deep Tech is hyped, but hard to navigate. We back founders working across <strong className="text-highlight">technical depth, sales, new rounds, and everything in between</strong> — from autism detection to B2B sales intelligence.</>),
    imageSrc: "/images/deep-tech.png",
    imageAlt: "Deep Tech visual",
  },
  {
    name: "Energy Transition",
    body: (<>Sustainable energy is the new oil. We back founders navigating <strong className="text-highlight">new projects, government policies, manufacturing hiccups, infrastructure needs, and the capital support</strong> required to build for the nation.</>),
    imageSrc: "/images/energy-transition.png",
    imageAlt: "Energy Transition visual",
  },
  {
    name: "Consumer Products",
    body: (<>Consumer products sit close to everyday life. We help founders scale to larger audiences with <strong className="text-highlight">network access, channels, capital, supply chain diligence, product stickiness, and the numbers</strong> behind growth.</>),
    imageSrc: "/images/consumer-products.png",
    imageAlt: "Consumer Products visual",
  },
];

export default function SectorFocus() {
  return (
    <RevealWrapper>
      <section className="sectors">
        <div className="container">
          <div className="section-label reveal">Where we invest</div>
          <h2 className="sectors__title reveal reveal-delay-1">
            Four sectors where execution complexity is the moat
          </h2>

          <div className="sectors__grid">
            {SECTORS.map((sector, i) => (
              <div key={i} className={`sectors__card reveal reveal-delay-${i + 2}`}>
                <div className="sectors__card-visual">
                  <img
                    src={sector.imageSrc}
                    alt={sector.imageAlt}
                    className="sectors__card-img"
                    loading={i < 2 ? 'eager' : 'lazy'}
                    draggable={false}
                  />
                </div>
                <div className="sectors__card-body">
                  <h3 className="sectors__card-name">{sector.name}</h3>
                  <p className="sectors__card-text sectors__card-text--rich">{sector.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .sectors {
            padding: var(--section-gap) 0;
          }

          .sectors__title {
            margin-bottom: var(--space-xl);
            max-width: 24ch;
          }

          .sectors__grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: clamp(var(--space-md), 3vw, var(--space-xl));
          }

          .sectors__card {
            display: flex;
            flex-direction: column;
            border: 1px solid var(--color-divider);
            border-radius: var(--radius-section);
            overflow: hidden;
            background: var(--color-surface);
            transition: border-color var(--duration-fast) var(--ease-out);
          }

          .sectors__card:hover {
            border-color: color-mix(in srgb, var(--color-signature) 30%, transparent);
          }

          .sectors__card-visual {
            aspect-ratio: 16 / 10;
            overflow: hidden;
            flex-shrink: 0;
            background: var(--color-canvas-alt);
          }

          .sectors__card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
            transition: transform var(--duration-slow) var(--ease-out);
          }

          .sectors__card:hover .sectors__card-img {
            transform: scale(1.03);
          }

          .sectors__card-body {
            padding: var(--space-lg) clamp(var(--space-md), 3vw, var(--space-xl));
            display: flex;
            flex-direction: column;
            gap: var(--space-sm);
            flex: 1;
          }

          .sectors__card-index {
            font-size: var(--text-meta);
            color: var(--color-signature);
            font-weight: 700;
            letter-spacing: 0.08em;
          }

          .sectors__card-name {
            font-size: clamp(1.25rem, 2vw, 1.75rem);
            font-weight: var(--weight-semibold);
            color: var(--color-ink-primary);
            line-height: 1.12;
            letter-spacing: -0.02em;
          }

          .sectors__card-text {
            font-size: var(--text-body);
            color: var(--color-steel);
            line-height: 1.68;
          }

          @media (max-width: 860px) {
            .sectors__grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 640px) {
            .sectors__card-visual {
              aspect-ratio: 16 / 9;
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
