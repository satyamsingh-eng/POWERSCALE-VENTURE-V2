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
                Arthi built and ran businesses in consumer and AI before moving to the investor side. She brings a founder-first operating lens to Powerscale's work across all four focus areas. Her strength is in understanding founders, customers, GTM, brand, distribution, and the messy middle where early traction has to become a scalable company.
              </p>
            </div>
          </div>

          <div className="profile-divider" />

          <div className="profile-body">
            <div className="profile-bio">
              <span className="profile-section-label">Background</span>
              <p>
                That transition, from a business the founder carries personally to one that runs without them, is where channel quality becomes visible, where hiring systems start to matter, and where the gap between top-line growth and genuine commercial health either closes or widens. Arthi's operating background is in that specific window: the companies that have found their market and are now confronting the harder problem of building the system that can hold it.
              </p>
              <p>
                At Powerscale, Arthi works across all four of the firm's focus areas. The question she brings to every company is the same: when the founder steps back from the commercial motion, what happens? In consumer businesses, the answer is almost always visible in the channel mix and cohort behavior. These are the two signals that reveal whether a distribution system is healthy or just busy. In AI businesses, the question shows up in implementation depth and month-six account usage: whether the product has earned its renewal by becoming embedded in the customer's operating process, or whether early growth was novelty-dependent.
              </p>
              <p>
                Her diligence work is operational before it is financial. She reads cohort behavior and SKU-level margins before she discusses expansion into the next market. She looks at implementation depth and account-level usage at six and twelve months. That is when a company's actual commercial health becomes legible, after the early enthusiasm has cleared.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">Operating relevance</span>
              <p>
                The founder-to-managed-distribution transition is the most common point of failure in consumer and AI companies at the growth stage. It is also the point where a partner's direct experience matters most, because the founder needs someone who has navigated that specific inflection point to help them see it clearly before it becomes a structural problem.
              </p>
              <p>
                Arthi's value to portfolio companies is specific to this transition: she has been at the inflection point she is now being asked to support. That is the credential. Not the investment thesis, not the portfolio.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">What this brings to Powerscale</span>
              <p>
                The firm's consumer and AI thesis is Arthi's diagnostic lens in practice: growth can look healthy while channel quality is already decaying, and the gap between demo quality and retained workflow value is where most AI companies lose years. Her presence means the firm can have precise conversations with founders about what actually breaks in these businesses, without relying on secondhand pattern recognition.
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
            position: static;
            max-width: 220px;
          }
        }
      `}} />
    </>
  );
}
