'use client';

import React from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

const ARTICLES = [
  {
    title: "When distribution stops being a growth story",
    author: "Powerscale team",
    sector: "Consumer",
    excerpt: "The question is not whether demand exists. It is whether the channel mix still works once the founder is no longer carrying the motion personally.",
  },
  {
    title: "The financing stack is part of the product",
    author: "Powerscale team",
    sector: "Energy Transition",
    excerpt: "Infrastructure companies do not scale on narrative alone. The order of contracts, debt, equity, and deployment decides what the company can survive.",
  },
  {
    title: "The first senior hire changes the company",
    author: "Powerscale team",
    sector: "Scaling",
    excerpt: "A senior hire is not just capacity. It changes decision rights, standards, cadence, and what the founder can no longer inspect directly.",
  },
  {
    title: "Why AI demos fail to become retained workflows",
    author: "Powerscale team",
    sector: "AI",
    excerpt: "A demo proves possibility. Retention proves operating value. The gap between the two is where most AI companies become legible.",
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
              Operator judgment,<br />written without theatre.
            </h1>
            <p className="persp-hero__desc reveal reveal-delay-2">
              Diagnostic notes for founders facing scaling problems. No announcement copy. No category slogans.
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
                  <span>{article.author}</span>
                  <span className="persp-dot">·</span>
                  <span>{article.sector}</span>
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
          padding-top: calc(var(--nav-height) + var(--space-12));
          padding-bottom: var(--section-gap);
        }

        .persp-hero__title {
          font-family: var(--font-primary);
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-lg);
        }

        .persp-hero__desc {
          font-size: var(--text-body);
          line-height: 1.7;
          color: var(--color-steel);
          max-width: 55ch;
        }

        .persp-list-section {
          padding-bottom: var(--section-gap);
        }

        .persp-item {
          display: block;
          padding: var(--space-lg) 0;
          border-bottom: 1px solid var(--color-divider);
          transition: transform var(--duration-fast) var(--ease-out);
        }

        .persp-item:first-child {
          border-top: 1px solid var(--color-divider);
        }

        .persp-item:hover {
          transform: translateX(8px);
        }

        .persp-item:hover .persp-item__title {
          color: var(--color-signature);
        }

        .persp-item__meta {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-steel);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: var(--space-sm);
          display: flex;
          align-items: center;
          gap: var(--space-1);
        }

        .persp-dot {
          opacity: 0.4;
        }

        .persp-item__title {
          font-family: var(--font-primary);
          font-size: clamp(1.5rem, 2.5vw, 2.25rem);
          font-weight: var(--weight-medium);
          line-height: 1.2;
          margin-bottom: var(--space-sm);
          max-width: 45ch;
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
