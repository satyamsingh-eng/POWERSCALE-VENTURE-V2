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
    title: "Dabba of Deep-fried Bhujia or Gathiya is quietly pushed back on the shelf, why?",
    preview: [
      "Step into any urban Indian household, and you will witness a fascinating cultural shift! The millennials to Genz crowd are avoiding traditional dabba of deep-fried bhujia or gathiya, quietly being pushed to the back of the pantry. In its place sit roasted makhana, baked ragi chips, and protein-infused wafers!",
      "We are witnessing the rise of India’s mid-aspirational consumer class—an economic powerhouse of double-income suburban families, corporate professionals, and Gen Z city-dwellers.",
      "This segment is driven by a strong desire for upward mobility, high food label literacy, and an obsession with wellness further enhanced by you are so called fitness/wellness influencers on every social media platform out there.",
    ],
  },
  {
    num: "02",
    category: "AI Infrastructure",
    tags: ["Deep Tech", "Sustainability"],
    slug: "ai-infrastructure",
    title: "India’s AI Infrastructure challenge, needs a sustainable approach",
    preview: [
      "For a Data Centre in India, Cost per Megawatt roughly ranges between ₹40 crore to ₹45 crore (~$4.8 million to $5.4 million USD). If you break down that cost per Megawatt, the capital isn’t just going toward a concrete building. The cost is majorly into 3 areas:",
      "But the bigger question is what is the cost that we as human beings paying towards technology development? It should not be the very thing that gives us life - not nature!",
      "So how can we find a common ground between safeguarding nature and technology development? First of all, is it possible to achieve that?",
    ],
  },
  {
    num: "03",
    category: "Energy Transition",
    tags: ["Green Hydrogen", "Infrastructure"],
    slug: "green-hydrogen",
    title: "Green Hydrogen: A magic wild card for India in the midst of chaotic oil crises!",
    preview: [
      "India’s strategy for Green Hydrogen is arguably one of the most aggressive clean-energy bets in the world! It is the missing piece of the puzzle for India’s energy grid—and by extension, its booming digital and AI infrastructure.",
      "Through the National Green Hydrogen Mission (backed by an ₹19,744 crore outlay), India has set a target to produce 5 Million Metric Tonnes (MMT) per annum of Green Hydrogen by 2030.",
      "To give a context, Green Hydrogen can absolutely be used directly as a fuel. However, hydrogen is a logistical nightmare to store and transport. Because it is the lightest molecule in the universe, it requires being compressed to extreme pressures (350 to 700 bar) or chilled to cryogenic temperatures (-253 C) to move it anywhere.",
    ],
  },
];

export default function PerspectivesPage() {
  return (
    <>
      <RevealWrapper>
        <section className="persp-hero">
          <div className="container">
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
                  <div className="persp-row__preview">
                    {p.preview.map((para, k) => (
                      <p key={k} className="persp-row__desc">{para}</p>
                    ))}
                  </div>
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

        .persp-hero__grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .persp-hero__title {
          font-size: clamp(2.75rem, 5.5vw, 4.75rem);
          font-weight: var(--weight-bold);
          color: var(--color-ink-primary);
          line-height: 1.04;
          letter-spacing: -0.03em;
          max-width: none;
        }

        .persp-hero__aside {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          align-items: flex-start;
        }

        .persp-hero__copy {
          max-width: 100%;
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

        .persp-row__preview {
          margin-bottom: var(--space-lg);
        }
        .persp-row__desc {
          font-size: clamp(1.0625rem, 1.35vw, 1.1875rem);
          color: var(--color-ink-secondary);
          line-height: 1.85;
          max-width: 68ch;
          margin-bottom: var(--space-md);
        }
        .persp-row__desc:last-child {
          margin-bottom: 0;
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
        @media (max-width: 768px) {
          .persp-hero__grid {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }
          .persp-hero__title {
            max-width: none;
          }
          .persp-hero__copy {
            max-width: 100%;
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
            line-height: 1.75;
          }
        }
      `}} />
    </>
  );
}
