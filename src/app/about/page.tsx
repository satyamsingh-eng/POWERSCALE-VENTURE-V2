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
  "The thesis can be right while the operating system fails.",
  "What breaks at scale is rarely the product.",
  "We make claims concrete enough to be wrong."
];

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

const ADVISORS = [
  {
    name: "Partha Pemmaraju",
    area: "Deeptech & Global Operations",
    note: "Operator with over two decades of company-building across deeptech and consumer sectors. Brings operator-to-operator context for portfolio companies navigating the technical-to-commercial transition and global market deployment.",
    linkedin: "https://www.linkedin.com/in/parthapemmaraju/",
    linkedinLabel: "LinkedIn ↗",
    slug: "partha-pemmaraju",
    imageSrc: "/images/partha.png",
  },
  {
    name: "Satya Das",
    area: "Finance & Post-Investment Systems",
    note: "Finance leadership and business strategy background. Brings post-investment systems expertise to portfolio companies building governance infrastructure — financial controls, reporting cadence, and the compliance structure that matters between rounds.",
    linkedin: "https://www.linkedin.com/posts/satyadas76_cfo-financeleadership-businessstrategy-share-7398384399563534338-aYSL?utm_source=share&utm_medium=member_ios&rcm=ACoAAABrRDcBZ9pV-qQiPgUN_iV0YS5UnZjWv7I",
    linkedinLabel: "LinkedIn reference ↗",
    slug: "satya-das",
    imageSrc: "/images/satyabrata-das.png",
  },
  {
    name: "Rajesh Kumar Adla",
    area: "Founder Ecosystem & Incubation",
    note: "CEO of AIC T-Hub Hyderabad and Mentor of Change at Atal Innovation Mission (NITI Aayog). Extends Powerscale's visibility into India's early-stage startup pipeline — before companies are in a competitive fundraising process.",
    linkedin: "https://www.linkedin.com/in/rajeshkumaradla?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    linkedinLabel: "LinkedIn ↗",
    slug: "rajesh-kumar-adla",
    imageSrc: "/images/rajesh-kumar.png",
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
        <section className="about-hero">
          <div className="container">
            <div className="section-label reveal">About</div>
            <h1 className="about-hero__title reveal reveal-delay-1">
              An operator-led venture firm built for the scaling problem.
            </h1>
            <p className="about-hero__description reveal reveal-delay-2">
              Powerscale is an India-native partnership investing in energy transition,
              deeptech infrastructure, consumer, and AI.
              Every partner has built and run a company before backing one. That is not a
              credential we list. It is the thing that determines how we evaluate companies,
              how we engage after the cheque clears, and what we are actually useful for.
            </p>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="beliefs">
          <div className="container">
            <div className="section-label reveal">What we believe</div>
            <div className="beliefs__list">
              {BELIEFS.map((belief, i) => (
                <div key={i} className={`beliefs__item reveal reveal-delay-${i + 1}`}>
                  <span className="beliefs__number">0{i + 1}</span>
                  <p className="beliefs__text">{belief}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="team-full">
          <div className="container">
            <div className="section-label reveal">Team</div>
            <h2 className="team-full__title reveal reveal-delay-1">
              The operating background is the firm.
            </h2>
            <p className="team-full__intro reveal reveal-delay-2">
              We are building the firm we wished existed when we were running companies — one where the investors at the table have navigated the same problems they are being asked to help solve.
            </p>

            <div className="team-full__profiles">
              {PARTNERS.map((partner, i) => (
                <div key={i} className={`team-full__profile reveal reveal-delay-${i + 2}`}>
                  <div className="team-full__image-wrap">
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
                  <div className="team-full__info">
                    <span className="team-full__index">0{i + 1}</span>
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
              Ecosystem depth, not decoration.
            </h2>
            <p className="advisors__intro reveal reveal-delay-2">
              Our advisors extend the firm's operating access and sector network. They are not decorative. They work with portfolio companies on specific problems — capital introductions, regulatory navigation, market access, and the operating questions that require experience rather than pattern recognition.
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
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .about-hero {
          padding-top: clamp(5rem, 10vw, 8rem);
          padding-bottom: var(--section-gap);
          background-color: transparent;
        }

        .about-hero__title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: var(--weight-medium);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: var(--space-lg);
          max-width: 22ch;
        }

        .about-hero__description {
          font-size: var(--text-body);
          line-height: 1.7;
          color: var(--color-steel);
          max-width: 58ch;
        }

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
          padding: var(--section-gap) 0;
          background-color: transparent;
        }

        .team-full__title {
          margin-bottom: var(--space-md);
          max-width: 22ch;
        }

        .team-full__intro {
          font-size: var(--text-body);
          color: var(--color-ink);
          line-height: 1.65;
          max-width: 58ch;
          margin-bottom: var(--space-xl);
        }

        .team-full__profiles {
          display: flex;
          flex-direction: column;
        }

        .team-full__profile {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: var(--space-xl);
          align-items: start;
          border-top: 1px solid var(--color-divider);
          padding: var(--space-lg) 0;
        }

        .team-full__profile:last-child {
          border-bottom: 1px solid var(--color-divider);
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
          font-weight: var(--weight-medium);
          letter-spacing: 0.08em;
        }

        .team-full__name {
          font-size: clamp(1.375rem, 2vw, 2rem);
          font-weight: var(--weight-semibold);
          margin-bottom: 0.25rem;
        }

        .team-full__role {
          font-size: var(--text-meta);
          font-weight: var(--weight-medium);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-steel);
          display: block;
          margin-bottom: var(--space-md);
        }

        .team-full__bio {
          font-size: var(--text-body);
          color: var(--color-steel);
          line-height: 1.65;
          margin-bottom: var(--space-md);
          max-width: none;
        }

        .team-full__focus {
          display: block;
          font-size: var(--text-meta);
          color: var(--color-signature);
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
          font-weight: 500;
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
          font-size: var(--text-body);
          color: var(--color-steel);
          line-height: 1.65;
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
          grid-template-columns: 160px 1fr;
          gap: var(--space-8);
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
          color: var(--color-steel);
          line-height: 1.65;
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

        @media (max-width: 860px) {
          .team-full__profile {
            grid-template-columns: 160px 1fr;
            gap: var(--space-lg);
          }
        }

        @media (max-width: 600px) {
          .team-full__profile {
            grid-template-columns: 1fr;
            gap: var(--space-md);
          }

          .team-full__image-wrap {
            position: static;
            max-width: 160px;
          }

          .advisors__card {
            grid-template-columns: 1fr;
            gap: var(--space-md);
          }

          .advisors__image-wrap {
            position: static;
            max-width: 140px;
          }

          .beliefs__item {
            grid-template-columns: 2.5rem 1fr;
            gap: var(--space-2);
          }
        }
      `}} />
    </>
  );
}
