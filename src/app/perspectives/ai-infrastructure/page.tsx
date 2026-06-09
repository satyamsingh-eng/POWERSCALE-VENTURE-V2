'use client';

import React from 'react';
import Link from 'next/link';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

export default function AIInfrastructurePage() {
  return (
    <>
      <RevealWrapper>
        <section className="blog-detail">
          <div className="container">
            <Link href="/perspectives" className="blog-back">← Perspectives</Link>
            <div className="blog-detail__header">
              <div className="section-label reveal">AI Infrastructure</div>
              <h1 className="blog-detail__title reveal reveal-delay-1">
                India&rsquo;s AI Infrastructure challenge, needs a sustainable approach
              </h1>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="blog-prose-section">
          <div className="container">
            <div className="blog-prose reveal">
              <p>For a Data Centre in India, Cost per Megawatt roughly ranges between ₹40 crore to ₹45 crore (~$4.8 million to $5.4 million USD). If you break down that cost per Megawatt, the capital isn&rsquo;t just going toward a concrete building. The cost is majorly into 3 areas:</p>

              <ul className="blog-list">
                <li>Energy</li>
                <li>Cooling</li>
                <li>Infrastructure/Building</li>
                <li>Racks, Busways, &amp; Cabling</li>
                <li>Operations and Maintenance cost</li>
                <li>Other Miscellaneous</li>
              </ul>

              <p>But the bigger question is what is the cost that we as human beings paying towards technology development? It should not be the very thing that gives us life - not nature!</p>

              <p>So how can we find a common ground between safeguarding nature and technology development? First of all, is it possible to achieve that?</p>

              <p>The answer to this question, to be honest, is a subjective one. Because there&rsquo;s always a sustainable way to do things. But do the ecosystem players involved in this AI rush are thinking in these lines is the answer to this question.</p>

              <p>Few founders are actually thinking about &ldquo;Responsible Innovation&rdquo;. Like to mention a few:</p>

              <p>ZutaCore is famous for its &ldquo;Silicon to Sky&rdquo; waterless cooling architecture. Their HyperCool system utilizes a specialized, non-conductive, eco-safe dielectric fluid in a closed-loop, two-phase direct-to-chip system.</p>

              <p>Perstorp is a major chemical innovator that recently launched the Synmerse&trade; DC and Synplate&trade; DC lines. These are synthetic, ester-based dielectric fluids explicitly engineered to be completely PFAS-free and readily biodegradable.</p>

              <p>GH2 solar is building Green Hydrogen manufacturing plant to supply energy to evolving industries like data centers, shipping, larger supply chain fleet etc,</p>

              <p>Companies like this and global collective collaboration towards &ldquo;Responsible Innovation&rdquo;, will take the human race forward by compromising on the essential nature to fuel technology innovation!</p>

              <hr className="blog-rule" />

              <div className="blog-cta-block">
                <p>If you are company that is into building &ldquo;Responsible Innovation&rdquo; then write to us at{' '}
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
        .blog-detail .section-label {
          margin-bottom: var(--space-md);
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
          font-size: clamp(1rem, 1.2vw, 1.125rem);
          color: var(--color-steel);
          line-height: 1.82;
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
          font-size: clamp(1rem, 1.2vw, 1.125rem);
          color: var(--color-steel);
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
