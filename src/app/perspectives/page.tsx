'use client';

import React from 'react';
import Link from 'next/link';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

const PERSPECTIVES = [
  {
    num: "01",
    category: "Consumer Products",
    tags: ["FMCG", "India"],
    slug: "consumer-shift",
    title: "The pantry is shifting. The repeat purchase is the harder problem.",
    preview: "India's mid-aspirational consumer — double-income suburban households, corporate professionals, Gen Z city-dwellers — is retiring the deep-fried bhujia dabba. Inflation-fatigued and health-aware at the same time, they refuse to pay ₹300 for an imported granola bar but won't compromise on functional nutrition. The brand that wins the repeat purchase cracks the ₹10–₹30 entry format first.",
  },
  {
    num: "02",
    category: "AI Infrastructure",
    tags: ["Deep Tech", "Sustainability"],
    slug: "ai-infrastructure",
    title: "₹40–45 Cr per megawatt. The cost the AI build-out isn't accounting for.",
    preview: "A data centre in India costs ₹40–45 Cr per megawatt — most of it energy, cooling, and infrastructure, not compute. The AI build-out is moving fast on the compute side. A smaller group of founders is rebuilding the thermal stack from the ground up rather than optimising around a broken default.",
  },
  {
    num: "03",
    category: "Energy Transition",
    tags: ["Green Hydrogen", "Infrastructure"],
    slug: "green-hydrogen",
    title: "India's 5 MMT hydrogen target. The constraint is logistics, not the mission.",
    preview: "Hydrogen is the lightest molecule in the universe — and a logistical nightmare to move at scale, which is why most commercial applications convert it to green ammonia or methanol before it reaches the end market. India's ₹19,744 Cr National Green Hydrogen Mission targets 5 MMT per annum by 2030. The window for mid-size companies is shaped more by financing sequence than technology readiness.",
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
              <div className="persp-hero__aside reveal reveal-delay-2">
                <p className="persp-hero__copy">
                  Notes on the operating questions founders face after the first market is real. No announcement copy. No category slogans.
                </p>
                <span className="persp-hero__count">{PERSPECTIVES.length} notes</span>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="persp-articles">
          <div className="container">
            {PERSPECTIVES.map((p, i) => (
              <article key={i} className={`persp-row reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="persp-row__meta">
                  <span className="persp-row__num">{p.num}</span>
                  <span className="persp-row__category">{p.category}</span>
                  <div className="persp-row__tags">
                    {p.tags.map((tag, j) => (
                      <span key={j} className="persp-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="persp-row__body">
                  <h2 className="persp-row__title">{p.title}</h2>
                  <p className="persp-row__desc">{p.preview}</p>
                  <Link href={`/perspectives/${p.slug}`} className="persp-row__cta">Read note →</Link>
                </div>
              </article>
            ))}
            <p className="persp-more reveal">More perspectives will be added as we publish.</p>
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
          font-size: clamp(2.5rem, 5vw, 4.25rem);
          font-weight: var(--weight-bold);
          color: var(--color-ink-primary);
          line-height: 1.04;
          letter-spacing: -0.03em;
          max-width: 14ch;
        }

        .persp-hero__aside {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          align-items: flex-start;
        }

        .persp-hero__copy {
          max-width: 52ch;
          font-size: clamp(1.05rem, 1.3vw, 1.25rem);
          line-height: 1.7;
          color: var(--color-ink-secondary);
        }

        .persp-hero__count {
          display: inline-flex;
          align-items: center;
          padding: 0.4rem 0.9rem;
          border: 1px solid var(--color-divider);
          border-radius: 999px;
          font-size: var(--text-meta);
          font-weight: var(--weight-medium);
          color: var(--color-muted);
          letter-spacing: 0.05em;
        }

        :root[data-theme='dark'] .persp-hero__count {
          border-color: rgba(245, 245, 244, 0.1);
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

        /* Left column — sticky meta */
        .persp-row__meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 0.5rem;
          position: sticky;
          top: calc(var(--nav-height) + var(--space-4));
        }

        .persp-row__num {
          display: block;
          font-size: clamp(0.875rem, 0.95vw, 1rem);
          color: var(--color-signature);
          font-weight: 700;
          letter-spacing: 0.08em;
          margin-bottom: 0.25rem;
        }

        .persp-row__category {
          display: block;
          font-size: var(--text-meta);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          font-weight: var(--weight-medium);
          line-height: 1.4;
        }

        .persp-row__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-top: 0.35rem;
        }

        .persp-tag {
          display: inline-block;
          padding: 0.2rem 0.55rem;
          border: 1px solid var(--color-divider);
          border-radius: 999px;
          font-size: 0.6875rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: var(--weight-medium);
          color: var(--color-muted);
          white-space: nowrap;
        }

        :root[data-theme='dark'] .persp-tag {
          border-color: rgba(245, 245, 244, 0.1);
        }

        /* Right column — body */
        .persp-row__body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .persp-row__title {
          font-size: clamp(1.875rem, 3.2vw, 3rem);
          font-weight: var(--weight-bold);
          color: var(--color-ink-primary);
          line-height: 1.06;
          letter-spacing: -0.035em;
          max-width: 26ch;
          text-wrap: balance;
          margin-bottom: var(--space-md);
        }

        .persp-row__desc {
          font-size: clamp(1rem, 1.2vw, 1.125rem);
          color: var(--color-steel);
          line-height: 1.75;
          max-width: 62ch;
          margin-bottom: var(--space-lg);
        }

        .persp-row__cta {
          display: inline-flex;
          align-items: center;
          font-size: var(--text-meta);
          font-weight: var(--weight-semibold);
          color: var(--color-ink-secondary);
          letter-spacing: 0.03em;
          text-transform: uppercase;
          border-bottom: 1px solid currentColor;
          padding-bottom: 0.15rem;
          transition: color 150ms ease;
        }

        .persp-row__cta:hover {
          color: var(--color-signature);
        }

        .persp-more {
          margin-top: var(--space-xl);
          font-size: var(--text-meta);
          color: var(--color-muted);
          letter-spacing: 0.03em;
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
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          .persp-row__num {
            margin-bottom: 0;
          }
          .persp-row__tags {
            margin-top: 0;
          }
          .persp-row__title {
            font-size: clamp(1.5rem, 6vw, 2rem);
          }
          .persp-row__desc {
            font-size: 1rem;
          }
        }
      `}} />
    </>
  );
}
