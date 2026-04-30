'use client';

import React from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

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
    bio: "Works with founders on the move from early pull to disciplined scale: channel quality, hiring systems, and the operating cadence around growth.",
    focus: "Consumer & AI",
  },
  {
    name: "Sanjay",
    role: "Partner",
    bio: "Focuses on infrastructure-shaped companies where capital timing, regulatory paths, and deployment reliability determine whether growth can hold.",
    focus: "Energy Transition & Infrastructure",
  },
  {
    name: "Satya",
    role: "Partner",
    bio: "Works across capital discipline, market development, and the management systems that make a company easier to scale without losing control.",
    focus: "Deeptech & AI",
  }
];

export default function AboutPage() {
  return (
    <>
      <RevealWrapper>
        <section className="about-hero">
          <div className="section-card">
            <div className="container">
              <div className="section-label reveal">About</div>
              <h1 className="about-hero__title reveal reveal-delay-1">
                An operator-led venture firm<br />
                built for the scaling problem.
              </h1>
              <p className="about-hero__description reveal reveal-delay-2">
                Powerscale is an India-native partnership investing in energy transition, 
                deeptech infrastructure, consumer, and AI — primarily at Series A and B. 
                We are built for founders who already have evidence and now have to make the company operate at a different level.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="beliefs">
          <div className="section-card">
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
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="team-full">
          <div className="section-card">
            <div className="container">
              <div className="section-label reveal">Team</div>
              <h2 className="team-full__title reveal reveal-delay-1">
                Operator judgment comes<br />from lived experience.
              </h2>

              <div className="team-full__grid">
                {PARTNERS.map((partner, i) => (
                  <div key={i} className={`team-full__card reveal reveal-delay-${i + 2}`}>
                    <div className="team-full__info">
                      <span className="team-full__index">0{i + 1}</span>
                      <h3 className="team-full__name">{partner.name}</h3>
                      <span className="team-full__role">{partner.role}</span>
                      <p className="team-full__bio">{partner.bio}</p>
                      <span className="team-full__focus">{partner.focus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .about-hero {
          padding-top: calc(var(--nav-height) + 6rem);
          background-color: transparent;
        }

        .about-hero__title {
          font-family: var(--font-primary);
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: var(--weight-medium);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: var(--space-lg);
        }

        .about-hero__description {
          font-size: var(--text-body);
          line-height: 1.7;
          color: var(--color-steel);
          max-width: 55ch;
        }

        .beliefs {
          background-color: transparent;
        }

        .beliefs__list {
          display: flex;
          flex-direction: column;
        }

        .beliefs__item {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: var(--space-md);
          padding: var(--space-lg) 0;
          border-bottom: 1px solid var(--color-divider);
          align-items: baseline;
        }

        .beliefs__item:first-child {
          border-top: 1px solid var(--color-divider);
        }

        .beliefs__number {
          font-family: var(--font-primary);
          font-size: var(--text-meta);
          color: var(--color-signature);
        }

        .beliefs__text {
          font-family: var(--font-primary);
          font-size: clamp(1.25rem, 2vw, 1.75rem);
          font-weight: var(--weight-medium);
          line-height: 1.3;
        }

        .team-full {
          background-color: transparent;
        }

        .team-full__title {
          margin-bottom: var(--space-xl);
        }

        .team-full__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-xl);
        }

        .team-full__card {
          border-top: 1px solid var(--color-divider);
          padding-top: var(--space-4);
        }

        .team-full__index {
          display: block;
          margin-bottom: var(--space-6);
          color: var(--color-signature);
          font-size: var(--text-meta);
          font-weight: var(--weight-medium);
          letter-spacing: 0.08em;
        }

        .team-full__name {
          font-family: var(--font-primary);
          font-size: clamp(1.5rem, 2vw, 2rem);
          font-weight: var(--weight-medium);
          margin-bottom: 0.25rem;
        }

        .team-full__role {
          font-family: var(--font-primary);
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
          max-width: 45ch;
        }

        .team-full__focus {
          font-family: var(--font-primary);
          font-size: var(--text-meta);
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .team-full__grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </>
  );
}
