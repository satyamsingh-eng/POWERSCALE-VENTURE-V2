'use client';

import React from 'react';
import Link from 'next/link';
import RevealWrapper from './RevealWrapper';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import TiltedCard from '@/components/ui/TiltedCard';

const PARTNERS = [
  {
    name: "Arthi B",
    role: "Partner",
    bio: "Arthi brings a founder-first lens across customers, GTM, distribution, and the transition from early traction to a growth-phase company. She works across all four focus areas.",
    focus: "Founder Operating · GTM · Distribution",
    slug: "arthi-b",
    imageSrc: "/images/arthi-b.png",
    imagePosition: "center 42%",
  },
  {
    name: "Sanjay Tolani",
    role: "Partner",
    bio: "Sanjay brings UAE–India commercial and investment experience across capital access, financial structure, investor relationships, market expansion, and portfolio development. He works across all four focus areas.",
    focus: "Capital Access · Financial Structure · Investor Relationships · UAE–India Corridor",
    slug: "sanjay-tolani",
    imageSrc: "/images/sanjay-tolani.png",
    imagePosition: "center top",
  },
];

export default function OperatorProof() {
  return (
    <RevealWrapper>
      <section className="team">
        <div className="container">
          <div className="team__header">
            <div className="team__header-text">
              <div className="section-label reveal">Team</div>
              <h2 className="team__title reveal reveal-delay-1">
                Different backgrounds. One way of working!
              </h2>
              <p className="team__intro reveal reveal-delay-2">
                Arthi and Sanjay bring different strengths across company-building, capital access, commercial execution, GTM, and founder support. They work across all four focus areas together.
              </p>
            </div>
            <Link href="/about" className="team__cta-link reveal reveal-delay-2">
              View full team →
            </Link>
          </div>

          <div className="team__grid">
            {PARTNERS.map((partner, i) => (
              <div
                key={i}
                className={`team__card reveal reveal-delay-${i + 2}`}
                onPointerMove={(e: React.PointerEvent<HTMLDivElement>) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                }}
              >
                <div className="team__image-wrap">
                  {partner.imageSrc ? (
                    <TiltedCard
                      imageSrc={partner.imageSrc}
                      altText={partner.name}
                      rotateAmplitude={5}
                      scaleOnHover={1.04}
                      showTooltip={false}
                      borderRadius="12px"
                      imagePosition={partner.imagePosition}
                    />
                  ) : (
                    <ImagePlaceholder label={`Image — ${partner.name}`} aspectRatio="4/5" />
                  )}
                </div>
                <div className="team__info">
                  <h3 className="team__name">{partner.name}</h3>
                  <span className="team__role">{partner.role}</span>
                  <p className="team__achievement">{partner.bio}</p>
                  <span className="team__focus">{partner.focus}</span>
                  <Link href={`/team/${partner.slug}`} className="team__profile-link">
                    View profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .team {
            padding: var(--section-gap) 0;
            background-color: transparent;
          }

          .team__header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: var(--space-8);
            margin-bottom: var(--space-8);
          }

          .team__header-text {
            flex: 1;
            min-width: 0;
          }

          .team__title {
            margin-bottom: var(--space-lg);
            max-width: 22ch;
          }

          .team__intro {
            color: var(--color-ink);
            font-size: var(--text-body);
            line-height: 1.68;
            margin-bottom: 0;
            max-width: 60ch;
          }

          .team__cta-link {
            display: inline-flex;
            align-items: center;
            white-space: nowrap;
            flex-shrink: 0;
            font-size: var(--text-meta);
            font-weight: 700;
            color: var(--color-ink-primary);
            text-transform: uppercase;
            letter-spacing: 0.06em;
            border-bottom: 1px solid currentColor;
            padding-bottom: 0.15rem;
            transition: color 150ms ease;
          }

          .team__cta-link:hover {
            color: var(--color-signature);
          }

          .team__grid {
            display: flex;
            flex-direction: column;
          }

          .team__card {
            display: grid;
            grid-template-columns: minmax(200px, 300px) minmax(0, 1fr);
            gap: clamp(2rem, 5vw, 5rem);
            align-items: start;
            border-top: 1px solid var(--color-divider);
            padding: clamp(2.5rem, 5vw, 4rem) 0;
            position: relative;
            isolation: isolate;
          }

          .team__card:last-child {
            border-bottom: 1px solid var(--color-divider);
          }

          .team__card::after {
            content: '';
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 600ms ease;
            background: radial-gradient(
              800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              rgba(19, 253, 251, 0.055) 0%,
              rgba(0, 255, 171, 0.03) 40%,
              transparent 70%
            );
            pointer-events: none;
            z-index: -1;
          }

          .team__card:hover::after {
            opacity: 1;
          }

          .team__image-wrap {
            position: sticky;
            top: calc(var(--nav-height) + var(--space-4));
            width: 100%;
            aspect-ratio: 4/5;
            border-radius: 12px;
            overflow: hidden;
          }

          .team__image-wrap .tc-figure {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
          }

          .team__image-wrap .tc-inner {
            height: 100%;
          }

          .team__image-wrap .img-ph {
            position: absolute;
            inset: 0;
            aspect-ratio: auto;
            border-radius: 0;
          }

          .team__name {
            font-size: clamp(1.25rem, 2vw, 1.75rem);
            font-weight: var(--weight-semibold);
            margin-bottom: 0.25rem;
          }

          .team__index {
            display: block;
            margin-bottom: var(--space-2);
            color: var(--color-signature);
            font-size: var(--text-meta);
            font-weight: 700;
            letter-spacing: 0.08em;
          }

          .team__role {
            font-size: 0.8rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--color-steel);
            display: block;
            margin-bottom: var(--space-sm);
          }

          .team__achievement {
            font-size: var(--text-body);
            color: var(--color-steel);
            line-height: 1.65;
            margin-bottom: var(--space-sm);
            max-width: none;
          }

          .team__focus {
            display: block;
            font-size: var(--text-meta);
            color: var(--color-signature);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: var(--space-md);
          }

          .team__profile-link {
            display: inline-flex;
            align-items: center;
            font-size: var(--text-meta);
            color: var(--color-signature);
            text-transform: uppercase;
            letter-spacing: 0.06em;
            font-weight: 700;
            transition: opacity 150ms ease;
          }

          .team__profile-link:hover {
            opacity: 0.6;
          }

          @media (max-width: 860px) {
            .team__card {
              grid-template-columns: minmax(160px, 200px) 1fr;
              gap: var(--space-lg);
            }
          }

          @media (max-width: 760px) {
            .team__header {
              flex-direction: column;
              align-items: flex-start;
              gap: 0;
            }
            .team__cta-link {
              margin-top: var(--space-md);
            }
            .team__card {
              grid-template-columns: 1fr;
              gap: var(--space-md);
            }
            .team__image-wrap {
              position: relative;
              top: auto;
              width: 100%;
              max-width: 100%;
              aspect-ratio: auto;
              height: 300px;
              max-height: 300px;
            }
            .team__card::after {
              display: none;
            }
          }

          @media (max-width: 480px) {
            .team__image-wrap {
              height: 260px;
              max-height: 260px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .team__card::after {
              transition: none;
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
