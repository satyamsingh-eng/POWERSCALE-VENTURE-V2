'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import TiltedCard from '@/components/ui/TiltedCard';

export default function ArthiBPage() {
  return (
    <>
      <main className="profile-page">
        <div className="container">

          <Link href="/about" className="profile-back">← Team</Link>

          <div className="profile-header">
            <div className="profile-image-wrap">
              <TiltedCard
                imageSrc="/images/arthi-b.png"
                altText="Arthi B"
                rotateAmplitude={6}
                scaleOnHover={1.04}
                showTooltip={false}
                borderRadius="16px"
                imagePosition="center 42%"
              />
            </div>
            <div className="profile-info">
              <span className="profile-role">Partner</span>
              <h1 className="profile-name">Arthi B</h1>
              <div className="profile-focus-tags">
                <span className="profile-focus-tag">Founder Operating</span>
                <span className="profile-focus-tag">GTM</span>
                <span className="profile-focus-tag">Distribution</span>
              </div>
              <p className="profile-summary">
                Arthi brings a founder-first lens to Powerscale's work across all four focus areas. Her strength is in understanding founders, customers, GTM, distribution, and the messy stage where an early traction company is transitioning into a growth-phase company.
              </p>
            </div>
          </div>

          <div className="profile-divider" />

          <div className="profile-body">
            <div className="profile-bio">
              <span className="profile-section-label">Background</span>
              <p>
                The transition from founder-centric revenue to sales-team-led revenue is where scaling quality becomes visible. It is where hiring systems start to matter, and where the gap between top-line growth and genuine commercial health either closes or widens.
              </p>
              <p>
                Arthi's operating background sits in that specific window: companies that have found their market and are now confronting the harder problem of building the system that can hold it.
              </p>
              <p>
                At Powerscale, Arthi works across all four of the firm's focus areas and more. The question she brings to every company is the same: when the founder steps back from the commercial motion, what happens?
              </p>
              <p>
                In consumer businesses, the answer is often visible in the channel mix and cohort behavior. These are the signals that reveal whether a distribution system is healthy or just busy.
              </p>
              <p>
                In AI businesses, the question shows up in implementation depth and account usage: whether the product has earned its renewal by becoming embedded in the customer's operating process, or whether early growth was novelty-dependent.
              </p>
              <p>
                Her diligence work is operational before it is financial. She reads cohort behavior and SKU-level margins before discussing expansion into the next market. She looks at implementation depth and account-level usage at six and twelve months, when a company's actual commercial health becomes more legible after the early enthusiasm has cleared.
              </p>
              <p>
                This evaluation also helps her understand the specific support founders may need post investment, and where Powerscale can extend relevant connects, channels, and support.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">Operating relevance</span>
              <p>
                The founder-to-team-led transition is one of the most common points of failure across companies. It is also the point where direct operating experience matters, because founders need someone who can help them see the inflection point clearly before it becomes a structural problem.
              </p>
              <p>
                Arthi's work is especially relevant for founders navigating market expansion across the USA, EU, and SEA regions.
              </p>
              <p>
                Her value to portfolio companies is specific to this transition: she has been close to the inflection point she is now being asked to support. That is the credential. Not the investment thesis, not the portfolio.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">What this brings to Powerscale</span>
              <p>
                Arthi's experience shows up in practical ways: growth can look healthy while channel quality is already decaying, and the gap between demo quality and retained workflow value is where many AI companies lose years.
              </p>
              <p>
                Her presence allows Powerscale to have precise conversations with founders about what actually breaks in these businesses, not just what looks like it might.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .profile-page {
          padding-top: clamp(5rem, 12vw, 9rem);
          padding-bottom: var(--section-gap);
        }

        .profile-back {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: var(--text-meta);
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 500;
          margin-bottom: var(--space-8);
          transition: opacity 150ms ease;
        }

        .profile-back:hover { opacity: 0.6; }

        .profile-header {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: var(--space-8);
          align-items: start;
          margin-bottom: var(--space-8);
        }

        .profile-image-wrap {
          position: sticky;
          top: calc(var(--nav-height) + var(--space-4));
        }

        .profile-role {
          display: block;
          font-size: var(--text-meta);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-signature);
          font-weight: 500;
          margin-bottom: var(--space-2);
        }

        .profile-name {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.06;
          margin-bottom: var(--space-3);
        }

        .profile-focus-tags {
          display: flex;
          gap: var(--space-1);
          flex-wrap: wrap;
          margin-bottom: var(--space-md);
        }

        .profile-focus-tag {
          font-size: var(--text-meta);
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border: 1px solid currentColor;
          border-radius: 999px;
          padding: 0.25rem 0.875rem;
        }

        .profile-summary {
          font-size: var(--text-body);
          line-height: 1.65;
          color: var(--color-steel);
          max-width: 52ch;
        }

        .profile-divider {
          height: 1px;
          background: var(--color-divider);
          margin-bottom: var(--space-8);
        }

        .profile-body {
          max-width: 720px;
        }

        .profile-bio {
          margin-bottom: var(--space-8);
        }

        .profile-bio p,
        .profile-relevance p {
          font-size: var(--text-body);
          line-height: 1.72;
          color: var(--color-steel);
          margin-bottom: var(--space-md);
          max-width: 66ch;
        }

        .profile-relevance p {
          color: var(--color-ink);
        }

        .profile-section-label {
          display: block;
          font-size: var(--text-meta);
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 500;
          margin-bottom: var(--space-md);
        }

        .profile-relevance {
          border-top: 1px solid var(--color-divider);
          padding-top: var(--space-lg);
          margin-bottom: var(--space-8);
        }

        .profile-external-link {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: var(--text-body);
          color: var(--color-signature);
          border-bottom: 1px solid currentColor;
          padding-bottom: 0.125rem;
          transition: opacity 150ms ease;
          margin-top: var(--space-lg);
        }

        .profile-external-link:hover { opacity: 0.65; }

        @media (max-width: 860px) {
          .profile-header {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }
          .profile-image-wrap {
            position: relative;
            top: auto;
            width: 100%;
            max-width: 100%;
            aspect-ratio: auto;
            height: clamp(240px, 55vw, 340px);
            max-height: 340px;
            overflow: hidden;
            border-radius: 16px;
          }
        }

        @media (max-width: 480px) {
          .profile-page {
            padding-top: clamp(4rem, 14vw, 5.5rem);
          }
          .profile-name {
            font-size: clamp(1.75rem, 7vw, 2.5rem);
          }
          .profile-summary {
            max-width: none;
            font-size: clamp(0.9375rem, 4vw, 1.0625rem);
          }
          .profile-image-wrap {
            height: clamp(220px, 55vw, 300px);
          }
          .profile-back {
            margin-bottom: var(--space-6);
          }
        }

        @media (max-width: 360px) {
          .profile-page {
            padding-top: 3.75rem;
          }
          .profile-name {
            font-size: clamp(1.5rem, 7.5vw, 2rem);
          }
          .profile-focus-tag {
            font-size: 0.6875rem;
            padding: 0.2rem 0.625rem;
          }
          .profile-image-wrap {
            height: 200px;
          }
        }
      `}} />
    </>
  );
}
