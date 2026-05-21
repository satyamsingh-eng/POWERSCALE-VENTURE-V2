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
    bio: "Arthi built and ran businesses in consumer and AI before moving to the investor side. She brings a founder-first operating lens to Powerscale's work across all four focus areas. Her strength is in understanding founders, customers, GTM, brand, distribution, and the messy middle where early traction has to become a scalable company.",
    focus: "Founder Operating · GTM · Distribution",
    slug: "arthi-b",
    imageSrc: "/images/arthi-b.png",
  },
  {
    name: "Sanjay Tolani",
    role: "Partner",
    bio: "Sanjay brings over two decades of cross-border capital and commercial execution experience across the UAE and India. At Powerscale, he helps founders think through capital access, financial structure, market expansion, and the discipline required to scale beyond the first phase of growth.",
    focus: "Capital Access · Commercial Strategy · Investor Relationships",
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
            Our partners come from a mixed background of building companies, working with founders, opening capital access, and helping companies scale. Arthi and Sanjay bring different strengths, but they work across all four of Powerscale's focus areas together.
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
            grid-template-columns: minmax(200px, 300px) minmax(0, 1fr);
            gap: clamp(2rem, 5vw, 5rem);
            align-items: start;
            border-top: 1px solid var(--color-divider);
            padding: clamp(2.5rem, 5vw, 4rem) 0;
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
              grid-template-columns: minmax(160px, 220px) 1fr;
              gap: var(--space-lg);
            }
          }

          @media (max-width: 640px) {
            .team__card {
              grid-template-columns: 1fr;
              gap: var(--space-md);
            }
            .team__image-wrap {
              position: static;
              max-width: 240px;
            }
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
