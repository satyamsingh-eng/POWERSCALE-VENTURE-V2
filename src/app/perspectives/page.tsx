'use client';

import React from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

const ARTICLES = [
  {
    category: 'AI Applications and Infrastructure',
    title: 'Why AI demos fail to become retained workflows',
    body: 'A demo proves possibility. Retention proves operating value. The gap between the two is where most AI companies become legible, and where the business model either holds or reveals itself as novelty-dependent.',
  },
  {
    category: 'Scaling',
    title: 'The management layer that makes a company harder to run',
    body: 'The transition from a ten-person team to thirty is the one that breaks the operating model. What changes is not headcount. It is decision rights, inspection cadence, and the founder\'s relationship to information they used to be close to.',
  },
  {
    category: 'Energy Transition',
    title: 'When the regulatory sequence is the risk, not the technology',
    body: 'Most energy transition companies fail on financing sequence, not on project economics. The order in which capital commitments close determines what can be built and what stays permanently exposed. Getting the sequence wrong is rarely recoverable.',
  },
  {
    category: 'Consumer Products',
    title: 'The channel motion that breaks when the founder steps back',
    body: 'Revenue can grow while channel quality decays. Two things keep founder-led pull looking healthy while managed distribution is already failing, and neither shows up in the top-line until the company is already committed to the wrong motion.',
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
              <p className="persp-hero__copy reveal reveal-delay-2">
                Notes on the operating questions founders face after the first market is real. No announcement copy. No category slogans.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="persp-articles">
          <div className="container">
            {ARTICLES.map((article, i) => (
              <article key={i} className={`persp-row reveal reveal-delay-${i % 3 + 1}`}>
                <div className="persp-row__meta">
                  <span className="persp-row__category">{article.category}</span>
                </div>
                <div className="persp-row__body">
                  <h2 className="persp-row__title">{article.title}</h2>
                  <p className="persp-row__desc">{article.body}</p>
                  <a href="/contact" className="persp-row__cta">Read note →</a>
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
          padding-bottom: clamp(4rem, 7vw, 6rem);
        }

        .persp-hero .section-label {
          margin-bottom: clamp(2rem, 3vw, 3rem);
        }

        .persp-hero__grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 0.65fr);
          gap: clamp(3rem, 7vw, 8rem);
          align-items: end;
        }

        .persp-hero__title {
          font-size: clamp(2.25rem, 4.5vw, 3.75rem);
          font-weight: var(--weight-semibold);
          color: var(--color-ink-primary);
          line-height: 1.06;
          letter-spacing: -0.03em;
          max-width: 14ch;
        }

        .persp-hero__copy {
          max-width: 52ch;
          font-size: clamp(1.05rem, 1.3vw, 1.25rem);
          line-height: 1.7;
          color: var(--color-ink-secondary);
        }

        /* ── Article rows ── */
        .persp-articles {
          padding-bottom: var(--section-gap);
        }

        .persp-row {
          display: grid;
          grid-template-columns: minmax(150px, 220px) minmax(0, 1fr);
          gap: clamp(2rem, 6vw, 7rem);
          padding: clamp(2.75rem, 5vw, 4.5rem) 0;
          border-top: 1px solid var(--color-divider);
        }

        .persp-row:last-child {
          border-bottom: 1px solid var(--color-divider);
        }

        .persp-row__meta {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          padding-top: 0.35em;
          position: sticky;
          top: calc(var(--nav-height) + var(--space-4));
        }

        .persp-row__num {
          display: block;
          font-size: var(--text-meta);
          color: var(--color-signature);
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .persp-row__category {
          display: block;
          font-size: var(--text-meta);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          font-weight: var(--weight-medium);
          line-height: 1.45;
        }

        .persp-row__body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .persp-row__title {
          font-size: clamp(1.75rem, 3vw, 2.75rem);
          font-weight: var(--weight-semibold);
          color: var(--color-ink-primary);
          line-height: 1.08;
          letter-spacing: -0.035em;
          max-width: 24ch;
          text-wrap: balance;
          margin-bottom: var(--space-md);
        }

        .persp-row__desc {
          font-size: clamp(1rem, 1.2vw, 1.125rem);
          color: var(--color-ink-secondary);
          line-height: 1.72;
          max-width: 62ch;
          margin-bottom: var(--space-lg);
        }

        .persp-row__cta {
          font-size: var(--text-meta);
          font-weight: var(--weight-medium);
          color: var(--color-ink-secondary);
          letter-spacing: 0.01em;
          transition: color 150ms ease;
          border-bottom: 1px solid var(--color-divider);
          padding-bottom: 0.15rem;
        }

        .persp-row__cta:hover {
          color: var(--color-signature);
          border-color: var(--color-signature);
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
        }

        @media (max-width: 760px) {
          .persp-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .persp-row__meta {
            position: static;
            flex-direction: row;
            align-items: center;
            gap: var(--space-2);
          }
          .persp-row__meta::after {
            content: '·';
            color: var(--color-muted);
          }
          .persp-row__title {
            font-size: clamp(1.5rem, 6vw, 2rem);
          }
        }
      `}} />
    </>
  );
}
