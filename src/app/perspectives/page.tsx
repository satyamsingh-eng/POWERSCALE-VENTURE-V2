'use client';

import React from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

const ARTICLES = [
  {
    title: "The channel motion that breaks when the founder steps back",
    sector: "Consumer",
    excerpt: "Revenue can grow while channel quality decays. Two things keep founder-led pull looking healthy while managed distribution is already failing — and neither of them shows up in the top-line until the company is already committed to the wrong motion.",
  },
  {
    title: "When the regulatory sequence is the risk — not the technology",
    sector: "Energy Transition",
    excerpt: "Most energy transition companies fail on financing sequence, not on project economics. The order in which capital commitments close determines what can be built and what stays permanently exposed. Getting the sequence wrong is rarely recoverable.",
  },
  {
    title: "The management layer that makes a company harder to run",
    sector: "Scaling",
    excerpt: "The transition from a ten-person team to thirty is the one that breaks the operating model. What changes is not headcount — it is decision rights, inspection cadence, and the founder's relationship to information they used to be close to.",
  },
  {
    title: "Why AI demos fail to become retained workflows",
    sector: "AI",
    excerpt: "A demo proves possibility. Retention proves operating value. The gap between the two is where most AI companies become legible — and where the business model either holds or reveals itself as novelty-dependent.",
  },
];

export default function PerspectivesPage() {
  return (
    <>
      <RevealWrapper>
        <section className="persp-hero">
          <div className="container">
            <div className="section-label reveal">Perspectives</div>
            <h1 className="persp-hero__title reveal reveal-delay-1">
              Operator judgment, written without theatre.
            </h1>
            <p className="persp-hero__desc reveal reveal-delay-2">
              Diagnostic notes on the problems founders face when a company has found its market and is now confronting the harder question of how to scale it. No announcement copy. No category slogans.
            </p>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="persp-list-section">
          <div className="container">
            {ARTICLES.map((article, i) => (
              <a href="#" key={i} className={`persp-item reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                <div className="persp-item__meta">
                  <span className="persp-item__sector">{article.sector}</span>
                </div>
                <h3 className="persp-item__title">{article.title}</h3>
                <p className="persp-item__excerpt">{article.excerpt}</p>
              </a>
            ))}
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .persp-hero {
          padding-top: clamp(5rem, 12vw, 9rem);
          padding-bottom: var(--section-gap);
        }

        .persp-hero__title {
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-lg);
          max-width: 20ch;
        }

        .persp-hero__desc {
          font-size: var(--text-body);
          line-height: 1.7;
          color: var(--color-steel);
          max-width: 58ch;
        }

        .persp-list-section {
          padding-bottom: var(--section-gap);
        }

        .persp-item {
          display: block;
          padding: var(--space-lg) 0;
          border-bottom: 1px solid var(--color-divider);
          transition: opacity var(--duration-fast) var(--ease-out);
        }

        .persp-item:first-child {
          border-top: 1px solid var(--color-divider);
        }

        .persp-item:hover {
          opacity: 0.72;
        }

        .persp-item:hover .persp-item__title {
          color: var(--color-signature);
        }

        .persp-item__meta {
          margin-bottom: var(--space-sm);
        }

        .persp-item__sector {
          font-size: var(--text-meta);
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: var(--weight-medium);
        }

        .persp-item__title {
          font-size: clamp(1.25rem, 2.5vw, 2rem);
          font-weight: var(--weight-medium);
          line-height: 1.2;
          margin-bottom: var(--space-sm);
          max-width: 44ch;
          transition: color var(--duration-fast) var(--ease-out);
        }

        .persp-item__excerpt {
          color: var(--color-steel);
          line-height: 1.6;
          max-width: 60ch;
        }
      `}} />
    </>
  );
}
