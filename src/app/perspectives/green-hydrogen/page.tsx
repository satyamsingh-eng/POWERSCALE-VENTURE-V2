'use client';

import React from 'react';
import Link from 'next/link';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

export default function GreenHydrogenPage() {
  return (
    <>
      <RevealWrapper>
        <section className="blog-detail">
          <div className="container">
            <Link href="/perspectives" className="blog-back">← Perspectives</Link>
            <div className="blog-detail__header">
              <div className="blog-detail__cat">Energy Transition</div>
              <h1 className="blog-detail__title reveal reveal-delay-1">
                Green Hydrogen: A magic wild card for India in the midst of chaotic oil crises!
              </h1>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="blog-prose-section">
          <div className="container">
            <div className="blog-prose reveal">
              <p>India&rsquo;s strategy for Green Hydrogen is arguably one of the most aggressive clean-energy bets in the world! It is the missing piece of the puzzle for India&rsquo;s energy grid&mdash;and by extension, its booming digital and AI infrastructure.</p>

              <p>Through the National Green Hydrogen Mission (backed by an ₹19,744 crore outlay), India has set a target to produce 5 Million Metric Tonnes (MMT) per annum of Green Hydrogen by 2030.</p>

              <p>To give a context, Green Hydrogen can absolutely be used directly as a fuel. However, hydrogen is a logistical nightmare to store and transport. Because it is the lightest molecule in the universe, it requires being compressed to extreme pressures (350 to 700 bar) or chilled to cryogenic temperatures (-253 C) to move it anywhere.</p>

              <p>To bypass this headache, the energy industry often converts green hydrogen into Green Ammonia or Green Methanol. These act as &ldquo;liquid energy carriers.&rdquo;</p>

              <p>The choice between using direct hydrogen or converting it depends entirely on distance and the target industry.</p>

              <ul className="blog-list">
                <li>Green Steel</li>
                <li>Agriculture &amp; Fertilizers</li>
                <li>Refining</li>
                <li>Heavy Mobility and Logistics - Shipping &amp; Aviation</li>
                <li>The Export Opportunity</li>
              </ul>

              <p>Above are a few areas where green - hydrogen, methanol and ammonia can completely change the face of the game by bringing more sustainable and yet profitable approaches toward the businesses adopting them.</p>

              <p>The beauty of this energy transition phase is that it&rsquo;s not just for big boy companies to play. Government is recognising and giving a chance to efficient mid size companies to also be part of this Energy Transformation Golden Rush period. Because the demand is so high for a population like India, and its evolving global competing goals. Because of this aspect there will always be a pie for both big and emerging companies to play in this sector.</p>

              <p>In fact, the more companies in the game the merrier it gets. I&rsquo;ll compare this scale and impact to the fashion industry. In the fashion industry there&rsquo;s a term called &ldquo;Trickle Down Effect&rdquo;. This phenomenon is the way how major fashion events/trends trickle down from Runways to Retails stores with a mass audience adapting the fashion trends. The scale for the Green Hydrogen Era of India is truly achieved when it trickles down from just big boys manufacturing to small players taking advantage of manufacturing and supply chain to cater local audiences. But that&rsquo;s easily a 15 year vision! Hopefully India gets there soon!</p>

              <hr className="blog-rule" />

              <div className="blog-cta-block">
                <p>If you are company that is into building towards this &ldquo;Energy Transition Phase&rdquo; then write to us at{' '}
                  <a href="mailto:support@powerscaleventures.com" className="blog-contact-link">support@powerscaleventures.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .blog-back {
          display: inline-flex;
          align-items: center;
          font-size: var(--text-meta);
          font-weight: var(--weight-medium);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: var(--space-2xl);
          transition: color 150ms ease;
        }
        .blog-back:hover {
          color: var(--color-signature);
        }

        .blog-detail {
          padding-top: clamp(7rem, 10vw, 9rem);
          padding-bottom: clamp(3rem, 4vw, 4rem);
        }
        .blog-detail__cat {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: var(--text-meta);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-sm);
        }
        .blog-detail__cat::before {
          content: '';
          display: inline-block;
          width: 1.25rem;
          height: 1px;
          background: currentColor;
          border-radius: 999px;
          flex-shrink: 0;
        }
        .blog-detail__title {
          font-size: clamp(2rem, 4.5vw, 3.5rem);
          font-weight: var(--weight-bold);
          color: var(--color-ink-primary);
          line-height: 1.06;
          letter-spacing: -0.03em;
          max-width: 24ch;
          text-wrap: balance;
        }

        .blog-prose-section {
          padding-bottom: var(--section-gap);
        }
        .blog-prose {
          max-width: 68ch;
        }
        .blog-prose p {
          font-size: clamp(1.0625rem, 1.35vw, 1.1875rem);
          color: var(--color-ink-secondary);
          line-height: 1.85;
          margin-bottom: var(--space-md);
        }
        .blog-section-head {
          font-size: clamp(1.125rem, 1.5vw, 1.375rem);
          font-weight: var(--weight-semibold);
          color: var(--color-ink-primary);
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-top: var(--space-xl);
          margin-bottom: var(--space-sm);
        }
        .blog-list {
          list-style: none;
          padding: 0;
          margin: 0 0 var(--space-md);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .blog-list li {
          font-size: clamp(1.0625rem, 1.35vw, 1.1875rem);
          color: var(--color-ink-secondary);
          line-height: 1.75;
          padding-left: 1.5rem;
          position: relative;
        }
        .blog-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--color-signature);
          font-weight: 700;
        }
        .blog-rule {
          border: none;
          border-top: 1px solid var(--color-divider);
          margin: var(--space-xl) 0;
        }
        .blog-cta-block p {
          font-size: clamp(1rem, 1.2vw, 1.125rem);
          color: var(--color-ink-secondary);
          line-height: 1.75;
          margin-bottom: var(--space-sm);
        }
        .blog-contact-link {
          color: var(--color-signature);
          font-weight: var(--weight-medium);
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: opacity 150ms ease;
        }
        .blog-contact-link:hover {
          opacity: 0.7;
        }

        @media (max-width: 760px) {
          .blog-detail__title {
            font-size: clamp(1.75rem, 7vw, 2.5rem);
            max-width: none;
          }
          .blog-prose p,
          .blog-list li,
          .blog-cta-block p {
            font-size: 1rem;
          }
          .blog-section-head {
            font-size: 1.125rem;
            margin-top: var(--space-lg);
          }
        }
      `}} />
    </>
  );
}
