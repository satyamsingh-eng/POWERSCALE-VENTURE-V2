'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';

const SECTORS = [
  {
    name: "AI Applications and Infrastructure",
    body: (<>We back ambitious founders building the next generation of autonomous systems, adaptive intelligence, and <strong className="text-highlight">foundational AI infrastructure</strong> designed for long-term impact and scale.</>),
    imageSrc: "/images/sectors/ai-infrastructure.png",
    imageAlt: "AI applications and infrastructure visual",
  },
  {
    name: "Deep Tech",
    body: (<><strong className="text-highlight">Technical depth</strong> creates a real moat. But navigating it alongside sales repeatability and institutional capital is the harder problem. We back founders who can hold all three without letting any one of them slip.</>),
    imageSrc: "/images/sectors/deeptech.png",
    imageAlt: "Deep Tech",
  },
  {
    name: "Energy Transition",
    body: (<><strong className="text-highlight">Policy, manufacturing, financing, and project execution</strong> move at different speeds. The companies we back understand that coordinating across those variables is the actual job, not just building the technology.</>),
    imageSrc: "/images/sectors/energy-transition.png",
    imageAlt: "Energy Transition",
  },
  {
    name: "Consumer Products",
    body: (<>Growth can mask poor channel quality until the company is already committed to the wrong motion. The brands we back have the <strong className="text-highlight">distribution architecture, supply chain thinking, and capital structure</strong> to scale beyond what the founder can personally manage.</>),
    imageSrc: "/images/sectors/consumer-products.png",
    imageAlt: "Consumer Products",
  },
];

export default function SectorFocus() {
  return (
    <RevealWrapper>
      <section className="sectors">
        <div className="container">
          <div className="section-label reveal">Where we invest</div>
          <h2 className="sectors__title reveal reveal-delay-1">
            Four sectors where execution decides the outcome
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
                  <span className="sectors__card-index">0{i + 1}</span>
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
