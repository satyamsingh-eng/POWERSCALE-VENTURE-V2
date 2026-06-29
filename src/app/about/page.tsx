'use client';

import React from 'react';
import Link from 'next/link';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import TiltedCard from '@/components/ui/TiltedCard';

const BELIEFS = [
  "Scaling something that already works is the harder problem.",
  "Pattern recognition is not operating insight.",
  "Strong conviction still requires strong execution.",
  "What breaks at scale is rarely the product.",
  "We make claims concrete enough to be wrong."
];

const PARTNERS = [
  {
    name: "Arthi B",
    role: "Partner",
    bio: "Arthi brings a founder-first lens across customers, GTM, distribution, and the transition from early traction to a growth-phase company. Her work focuses on the point where founder-led motion has to become a repeatable system. She works across all four focus areas.",
    focus: "Founder Operating · GTM · Distribution",
    slug: "arthi-b",
    imageSrc: "/images/arthi-b.png",
    imagePosition: "center 42%",
  },
  {
    name: "Sanjay Tolani",
    role: "Partner & Advisor",
    bio: "Sanjay brings UAE–India commercial and investment experience across capital access, financial structure, investor relationships, market expansion, and portfolio development. He helps founders think through investor readiness, commercial partnerships, and the capital structure required to scale. He works across all four focus areas.",
    focus: "Capital Access · Financial Structure · Investor Relationships · UAE–India Corridor",
    slug: "sanjay-tolani",
    imageSrc: "/images/sanjay-tolani.png",
    imagePosition: "center top",
  },
];

const ADVISORS = [
  {
    name: "Partha Pemmaraju",
    area: "Deep Tech & Global Operations",
    note: "Operator with over two decades of company-building across Deep Tech and consumer sectors. Brings operator-to-operator context for portfolio companies navigating the technical-to-commercial transition and global market deployment.",
    linkedin: "https://www.linkedin.com/in/parthapemmaraju/",
    linkedinLabel: "LinkedIn ↗",
    slug: "partha-pemmaraju",
    imageSrc: "/images/team/partha-pemmaraju.png",
  },
  {
    name: "Satya Das",
    area: "Finance & Post-Investment Systems",
    note: "Finance leadership and business strategy background. Brings post-investment systems expertise to portfolio companies building governance infrastructure: financial controls, reporting cadence, and the compliance structure that matters between rounds.",
    linkedin: "https://www.linkedin.com/posts/satyadas76_cfo-financeleadership-businessstrategy-share-7398384399563534338-aYSL?utm_source=share&utm_medium=member_ios&rcm=ACoAAABrRDcBZ9pV-qQiPgUN_iV0YS5UnZjWv7I",
    linkedinLabel: "LinkedIn reference ↗",
    slug: "satya-das",
    imageSrc: "/images/satyabrata-das.png",
  },
  {
    name: "Amit Mehta",
    area: "Capital Markets & Institutional Finance",
    note: "Chartered Accountant and capital markets professional associated with Sunidhi Securities & Finance Ltd., Mumbai. Brings institutional finance and capital markets perspective to portfolio companies building the financial architecture and governance infrastructure required for growth-stage and public-market readiness.",
    linkedin: "https://www.linkedin.com/in/amit-mehta-8315681b/",
    linkedinLabel: "LinkedIn ↗",
    slug: "amit-mehta",
    imageSrc: "/images/amit-mehta.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <RevealWrapper>
        <section className="team-full page-hero">
          <div className="container">
            <div className="section-label reveal">Team</div>
            <h2 className="team-full__title reveal reveal-delay-1">
              Different backgrounds. One way of working!
            </h2>
            <p className="team-full__intro reveal reveal-delay-2">
              Arthi and Sanjay bring different strengths across company building, capital access, commercial execution, GTM, and founder support. They work across all four focus areas together.
            </p>

            <div className="team-full__profiles">
              {PARTNERS.map((partner, i) => (
                <div
                  key={i}
                  className={`team-full__profile reveal reveal-delay-${i + 2}`}
                  onPointerMove={(e: React.PointerEvent<HTMLDivElement>) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                  }}
                >
                  <div className="team-full__image-wrap">
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
                  <div className="team-full__info">
                    <h3 className="team-full__name">{partner.name}</h3>
                    <span className="team-full__role">{partner.role}</span>
                    <p className="team-full__bio">{partner.bio}</p>
                    <span className="team-full__focus">{partner.focus}</span>
                    <Link href={`/team/${partner.slug}`} className="team-full__profile-link">
                      View profile →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="advisors">
          <div className="container">
            <div className="section-label reveal">Advisory</div>
            <h2 className="advisors__title reveal reveal-delay-1">
              Ecosystem depth, not decoration
            </h2>
            <p className="advisors__intro reveal reveal-delay-2">
              Our advisors extend the firm's operating access and sector network. They work with portfolio companies on specific problems: capital introductions, regulatory navigation, market access, and the operating questions that require experience rather than pattern recognition.
            </p>

            <div className="advisors__grid">
              {ADVISORS.map((advisor, i) => (
                <div key={i} className={`advisors__card reveal reveal-delay-${i + 2}`}>
                  <div className="advisors__image-wrap">
                    {advisor.imageSrc ? (
                      <TiltedCard
                        imageSrc={advisor.imageSrc}
                        altText={advisor.name}
                        rotateAmplitude={5}
                        scaleOnHover={1.04}
                        showTooltip={false}
                        borderRadius="12px"
                      />
                    ) : (
                      <ImagePlaceholder label={`Image — ${advisor.name}`} aspectRatio="4/5" />
                    )}
                  </div>
                  <div className="advisors__content">
                    <span className="advisors__area">{advisor.area}</span>
                    <h3 className="advisors__name">{advisor.name}</h3>
                    <p className="advisors__note">{advisor.note}</p>
                    <div className="advisors__actions">
                      {advisor.linkedin && (
                        <a
                          href={advisor.linkedin}
                          className="advisors__ext-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {advisor.linkedinLabel}
                        </a>
                      )}
                      <Link href={`/team/${advisor.slug}`} className="advisors__profile-link">
                        View profile →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="advisory-note reveal">
              More advisors can be introduced to founders and select LPs where relevant
            </p>
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .beliefs {
          padding: var(--section-gap) 0;
          background-color: transparent;
        }

        .beliefs__list {
          display: flex;
          flex-direction: column;
        }

        .beliefs__item {
          display: grid;
          grid-template-columns: 3.5rem 1fr;
          gap: var(--space-md);
          padding: var(--space-lg) 0;
          border-bottom: 1px solid var(--color-divider);
          align-items: baseline;
        }

        .beliefs__item:first-child {
          border-top: 1px solid var(--color-divider);
        }

        .beliefs__number {
          font-size: var(--text-meta);
          color: var(--color-signature);
          flex-shrink: 0;
        }

        .beliefs__text {
          font-size: clamp(1.125rem, 2vw, 1.625rem);
          font-weight: var(--weight-medium);
          line-height: 1.3;
          max-width: none;
        }

        .team-full {
          padding-bottom: var(--section-gap);
          background-color: transparent;
        }

        .team-full__title {
          margin-bottom: clamp(1.25rem, 2vw, 1.75rem);
          max-width: 22ch;
        }

        .team-full__intro {
          font-size: clamp(1.0625rem, 1.4vw, 1.25rem);
          color: var(--color-ink-secondary);
          line-height: 1.75;
          max-width: 58ch;
          margin-bottom: var(--space-xl);
        }

        .team-full__profiles {
          display: flex;
          flex-direction: column;
        }

        .team-full__profile {
          display: grid;
          grid-template-columns: minmax(240px, 360px) minmax(0, 1fr);
          gap: clamp(2rem, 5vw, 5rem);
          align-items: start;
          border-top: 1px solid var(--color-divider);
          padding: clamp(2.5rem, 5vw, 4rem) 0;
          position: relative;
          isolation: isolate;
        }

        .team-full__profile:last-child {
          border-bottom: 1px solid var(--color-divider);
        }

        .team-full__profile::after {
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

        .team-full__profile:hover::after {
          opacity: 1;
        }

        .team-full__image-wrap {
          position: sticky;
          top: calc(var(--nav-height) + var(--space-4));
          aspect-ratio: 4/5;
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
        }

        .team-full__image-wrap .tc-figure {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .team-full__image-wrap .tc-inner {
          height: 100%;
        }

        .team-full__image-wrap .img-ph {
          position: absolute;
          inset: 0;
          aspect-ratio: auto;
          border-radius: 0;
        }

        .team-full__index {
          display: block;
          margin-bottom: var(--space-2);
          color: var(--color-signature);
          font-size: var(--text-meta);
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .team-full__name {
          font-size: clamp(1.375rem, 2vw, 2rem);
          font-weight: var(--weight-semibold);
          margin-bottom: 0.25rem;
        }

        .team-full__role {
          font-size: var(--text-meta);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-steel);
          display: block;
          margin-bottom: var(--space-md);
        }

        .team-full__bio {
          font-size: var(--text-body);
          color: var(--color-ink-secondary);
          line-height: 1.72;
          margin-bottom: var(--space-md);
          max-width: none;
        }

        .team-full__focus {
          display: block;
          font-size: var(--text-meta);
          color: var(--color-signature);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: var(--space-md);
        }

        .team-full__profile-link {
          display: inline-flex;
          align-items: center;
          font-size: var(--text-meta);
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 700;
          transition: opacity 150ms ease;
        }

        .team-full__profile-link:hover {
          opacity: 0.6;
        }

        .advisors {
          padding: var(--section-gap) 0;
          background-color: transparent;
        }

        .advisors__title {
          margin-bottom: var(--space-md);
          max-width: 22ch;
        }

        .advisors__intro {
          font-size: clamp(1.0625rem, 1.4vw, 1.25rem);
          color: var(--color-ink-secondary);
          line-height: 1.75;
          max-width: 58ch;
          margin-bottom: var(--space-xl);
        }

        .advisors__grid {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .advisors__card {
          display: grid;
          grid-template-columns: clamp(140px, 16%, 200px) 1fr;
          gap: clamp(var(--space-lg), 4vw, var(--space-8));
          align-items: start;
          border-top: 1px solid var(--color-divider);
          padding: var(--space-lg) 0;
        }

        .advisors__image-wrap {
          position: sticky;
          top: calc(var(--nav-height) + var(--space-4));
        }

        .advisors__area {
          display: block;
          font-size: var(--text-meta);
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-2);
        }

        .advisors__name {
          font-size: clamp(1.25rem, 2vw, 1.75rem);
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-sm);
        }

        .advisors__note {
          font-size: var(--text-body);
          color: var(--color-ink-secondary);
          line-height: 1.72;
          max-width: none;
          margin-bottom: var(--space-md);
        }

        .advisors__actions {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          flex-wrap: wrap;
        }

        .advisors__ext-link {
          font-size: var(--text-meta);
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 500;
          transition: opacity 150ms ease;
        }

        .advisors__ext-link:hover {
          opacity: 0.6;
        }

        .advisors__profile-link {
          display: inline-flex;
          align-items: center;
          font-size: var(--text-meta);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 500;
          transition: opacity 150ms ease;
        }

        .advisors__profile-link:hover {
          opacity: 0.6;
        }

        .advisory-note {
          margin-top: clamp(1.5rem, 2vw, 2.5rem);
          padding-top: clamp(1rem, 1.5vw, 1.5rem);
          border-top: 1px solid var(--color-divider);
          color: var(--color-ink-secondary);
          font-size: clamp(1rem, 1.05vw, 1.15rem);
          line-height: 1.5;
          max-width: 56ch;
        }

        @media (max-width: 900px) {
          .team-full__profile {
            grid-template-columns: minmax(180px, 240px) 1fr;
            gap: var(--space-lg);
          }
          .advisors__card {
            grid-template-columns: minmax(140px, 180px) 1fr;
            gap: var(--space-lg);
          }
        }

        @media (max-width: 760px) {
          /* Section intro text — more readable on mobile */
          .team-full__intro,
          .advisors__intro {
            font-size: 1rem;
            line-height: 1.7;
          }

          /* Partner profiles — stack, tighten */
          .team-full__profile {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 2rem 0;
          }
          .team-full__profile::after {
            display: none;
          }

          /* Partner image — square crop on mobile */
          .team-full__image-wrap {
            position: relative;
            top: auto;
            width: min(100%, 300px);
            max-width: 100%;
            margin: 0 auto;
            aspect-ratio: 1/1;
            height: auto;
            max-height: none;
            overflow: hidden;
          }
          .team-full__image-wrap .tc-inner {
            aspect-ratio: 1/1 !important;
          }

          /* Partner name — clear hierarchy */
          .team-full__name {
            font-size: 1.375rem;
            font-weight: 600;
          }

          /* Partner bio — more readable */
          .team-full__bio {
            font-size: 1rem;
            line-height: 1.7;
          }

          /* Advisor cards — stack, tighten spacing */
          .advisors__card {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            padding: 1.75rem 0;
          }
          .advisors__card:last-of-type {
            border-bottom: 1px solid var(--color-divider);
          }

          /* Advisor image — square crop on mobile */
          .advisors__image-wrap {
            position: relative;
            top: auto;
            width: min(100%, 260px);
            aspect-ratio: 1/1;
            height: auto;
            max-height: none;
            overflow: hidden;
          }
          .advisors__image-wrap .tc-inner {
            aspect-ratio: 1/1 !important;
          }

          /* Advisor name — stronger weight */
          .advisors__name {
            font-size: 1.25rem;
            font-weight: 600;
          }

          /* Advisor note — slightly smaller but readable */
          .advisors__note {
            font-size: 0.9375rem;
            line-height: 1.65;
          }

          /* Advisory note — full width on mobile */
          .advisory-note {
            max-width: none;
            font-size: 0.9375rem;
          }

          .beliefs__item {
            grid-template-columns: 2.5rem 1fr;
            gap: var(--space-2);
          }
        }

        @media (max-width: 480px) {
          .team-full__image-wrap {
            width: 100%;
          }
          .team-full__name {
            font-size: 1.25rem;
          }
          .advisors__name {
            font-size: 1.125rem;
          }
        }

        @media (max-width: 375px) {
          .team-full__name {
            font-size: 1.125rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .team-full__profile::after {
            transition: none;
          }
        }
      `}} />
    </>
  );
}
