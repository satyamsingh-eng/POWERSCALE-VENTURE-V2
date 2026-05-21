'use client';

import React from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

const ARTICLES = [
  {
    category: 'Consumer Products',
    title: 'The channel motion that breaks when the founder steps back',
    body: 'Revenue can grow while channel quality decays. Two things keep founder-led pull looking healthy while managed distribution is already failing, and neither shows up in the top-line until the company is already committed to the wrong motion.',
  },
  {
    category: 'Energy Transition',
    title: 'When the regulatory sequence is the risk, not the technology',
    body: 'Most energy transition companies fail on financing sequence, not on project economics. The order in which capital commitments close determines what can be built and what stays permanently exposed. Getting the sequence wrong is rarely recoverable.',
  },
  {
    category: 'Scaling',
    title: 'The management layer that makes a company harder to run',
    body: 'The transition from a ten-person team to thirty is the one that breaks the operating model. What changes is not headcount. It is decision rights, inspection cadence, and the founder\'s relationship to information they used to be close to.',
  },
  {
    category: 'AI Applications and Infrastructure',
    title: 'Why AI demos fail to become retained workflows',
    body: 'A demo proves possibility. Retention proves operating value. The gap between the two is where most AI companies become legible, and where the business model either holds or reveals itself as novelty-dependent.',
  },
];

export default function PerspectivesPage() {
  return (
    <>
      <RevealWrapper>
        <section className="persp-hero">
          <div className="container">
            <div className="section-label reveal">Perspectives</div>
            <div className="persp-hero__grid">
              <h1 className="persp-hero__title reveal reveal-delay-1">
                Operator judgment, written without theatre.
              </h1>
              <div className="persp-hero__desc-card reveal reveal-delay-2">
                <p className="persp-hero__desc">
                  Diagnostic notes on the problems founders face when a company has found its market and is now confronting the harder question of how to scale it. No announcement copy. No category slogans.
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="persp-articles">
          <div className="container">
            {ARTICLES.map((article, i) => (
              <article key={i} className={`persp-article reveal reveal-delay-${i % 3 + 1}`}>
                <div className="persp-article__left">
                  <span className="persp-article__num">0{i + 1}</span>
                  <span className="persp-article__category">{article.category}</span>
                </div>
                <div className="persp-article__right">
                  <h2 className="persp-article__title">{article.title}</h2>
                  <p className="persp-article__body">{article.body}</p>
                  <a href="/contact" className="persp-article__cta">Talk to us about this →</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        /* ── Hero ── */
        .persp-hero {
          padding-top: clamp(7rem, 10vw, 9rem);
          padding-bottom: var(--inner-hero-bottom);
        }

        .persp-hero .section-label {
          margin-bottom: clamp(2rem, 3vw, 3rem);
        }

        .persp-hero__grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.72fr);
          gap: clamp(2rem, 5vw, 6rem);
          align-items: start;
        }

        .persp-hero__title {
          font-size: clamp(2.25rem, 4.5vw, 3.75rem);
          font-weight: var(--weight-semibold);
          color: var(--color-ink-primary);
          line-height: 1.06;
          letter-spacing: -0.03em;
          max-width: 14ch;
        }

        .persp-hero__desc-card {
          background: var(--color-surface);
          border: 1px solid var(--color-divider);
          border-radius: 20px;
          padding: clamp(1.75rem, 3vw, 2.5rem);
          transition: background var(--duration-fast) var(--ease-out),
                      border-color var(--duration-fast) var(--ease-out);
        }

        .persp-hero__desc {
          font-size: clamp(1rem, 1.3vw, 1.125rem);
          line-height: 1.78;
          color: var(--color-ink-secondary);
        }

        /* ── Articles ── */
        .persp-articles {
          padding-bottom: var(--section-gap);
        }

        .persp-article {
          display: grid;
          grid-template-columns: clamp(120px, 14%, 200px) 1fr;
          gap: clamp(2rem, 5vw, 5rem);
          align-items: start;
          padding: clamp(2.5rem, 5vw, 4rem) 0;
          border-top: 1px solid var(--color-divider);
        }

        .persp-article:last-child {
          border-bottom: 1px solid var(--color-divider);
        }

        .persp-article__left {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          padding-top: 0.25em;
          position: sticky;
          top: calc(var(--nav-height) + var(--space-4));
        }

        .persp-article__num {
          display: block;
          font-size: var(--text-meta);
          color: var(--color-signature);
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .persp-article__category {
          display: block;
          font-size: var(--text-meta);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: var(--weight-medium);
        }

        .persp-article__right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .persp-article__title {
          font-size: clamp(1.5rem, 2.8vw, 2.25rem);
          font-weight: var(--weight-semibold);
          color: var(--color-ink-primary);
          line-height: 1.15;
          letter-spacing: -0.025em;
          max-width: 28ch;
          margin-bottom: var(--space-md);
        }

        .persp-article__body {
          font-size: var(--text-body);
          color: var(--color-ink-secondary);
          line-height: 1.72;
          max-width: 62ch;
          margin-bottom: var(--space-lg);
        }

        .persp-article__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: var(--text-meta);
          font-weight: 700;
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: opacity 150ms ease;
          border-bottom: 1px solid currentColor;
          padding-bottom: 0.125rem;
        }

        .persp-article__cta:hover {
          opacity: 0.65;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .persp-hero__grid {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }
          .persp-hero__title {
            max-width: none;
          }
          .persp-hero__desc-card {
            padding: var(--space-md);
          }
        }

        @media (max-width: 760px) {
          .persp-article {
            grid-template-columns: 1fr;
            gap: var(--space-md);
          }
          .persp-article__left {
            position: static;
            flex-direction: row;
            align-items: center;
            gap: var(--space-2);
          }
          .persp-article__left::after {
            content: '·';
            color: var(--color-divider);
          }
        }
      `}} />
    </>
  );
}
