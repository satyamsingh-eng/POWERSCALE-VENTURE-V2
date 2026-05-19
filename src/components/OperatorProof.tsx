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
    bio: "Arthi built and ran businesses in consumer and AI before moving to the investor side. Her work is in the transition from founder-led growth to managed distribution — when channel quality becomes visible and hiring systems start to matter. She leads consumer and AI investments at Powerscale.",
    focus: "Consumer & AI",
    slug: "arthi-b",
    imageSrc: null,
  },
  {
    name: "Sanjay Tolani",
    role: "Partner",
    bio: "Sanjay Tolani's background is in infrastructure businesses where capital timing, regulatory sequencing, and deployment reliability are the actual constraints — not narrative or product quality. He has worked through project finance structures and the operating complexity that most investors understand only from a board deck. He leads energy transition and infrastructure at Powerscale.",
    focus: "Energy Transition & Infrastructure",
    slug: "sanjay-tolani",
    imageSrc: "/images/sanjay-tolani.png",
  },
];

export default function OperatorProof() {
  return (
    <RevealWrapper>
      <section className="team">
        <div className="container">
          <div className="section-label reveal">Team</div>
          <h2 className="team__title reveal reveal-delay-1">
            The operating background is the firm.
          </h2>
          <p className="team__intro reveal reveal-delay-2">
            Every partner at Powerscale has built and run a company before investing in one. That is not a claim we make in copy — it is the fact that determines how we evaluate companies, how we engage after the cheque clears, and what we are actually useful for.
          </p>

          <div className="team__grid">
            {PARTNERS.map((partner, i) => (
              <div key={i} className={`team__card reveal reveal-delay-${i + 2}`}>
                <div className="team__image-wrap">
                  {partner.imageSrc ? (
                    <TiltedCard
                      imageSrc={partner.imageSrc}
                      altText={partner.name}
                      rotateAmplitude={5}
                      scaleOnHover={1.04}
                      showTooltip={false}
                      borderRadius="12px"
                    />
                  ) : (
                    <ImagePlaceholder label={`Image — ${partner.name}`} aspectRatio="4/5" />
                  )}
                </div>
                <div className="team__info">
                  <span className="team__index">0{i + 1}</span>
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

          .team__title {
            margin-bottom: var(--space-lg);
            max-width: 22ch;
          }

          .team__intro {
            color: var(--color-ink);
            font-size: var(--text-body);
            line-height: 1.68;
            margin-bottom: var(--space-8);
            max-width: 60ch;
          }

          .team__grid {
            display: flex;
            flex-direction: column;
          }

          .team__card {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: var(--space-xl);
            align-items: start;
            border-top: 1px solid var(--color-divider);
            padding: var(--space-lg) 0;
          }

          .team__card:last-child {
            border-bottom: 1px solid var(--color-divider);
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
            font-weight: var(--weight-medium);
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
            font-weight: 500;
            transition: opacity 150ms ease;
          }

          .team__profile-link:hover {
            opacity: 0.6;
          }

          @media (max-width: 600px) {
            .team__card {
              grid-template-columns: 1fr;
              gap: var(--space-md);
            }

            .team__image-wrap {
              position: static;
              max-width: 140px;
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
