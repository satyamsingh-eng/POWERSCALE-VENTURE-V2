'use client';

import React from 'react';
import Link from 'next/link';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

const PERSPECTIVES = [
  {
    num: "01",
    category: "AI Infrastructure",
    tags: ["Deep Tech", "Sustainability"],
    slug: "ai-infrastructure",
    bgClass: "perspective-ai",
    title: "India's AI Infrastructure challenge, needs a sustainable approach",
    preview: [
      "For a Data Centre in India, Cost per Megawatt roughly ranges between ₹40 crore to ₹45 crore (~$4.8 million to $5.4 million USD). If you break down that cost per Megawatt, the capital isn't just going toward a concrete building. The cost is majorly into 3 areas:",
      "But the bigger question is what is the cost that we as human beings paying towards technology development? It should not be the very thing that gives us life - not nature!",
      "So how can we find a common ground between safeguarding nature and technology development? First of all, is it possible to achieve that?",
    ],
  },
  {
    num: "02",
    category: "Energy Transition",
    tags: ["Green Hydrogen", "Infrastructure"],
    slug: "green-hydrogen",
    bgClass: "perspective-energy",
    title: "Green Hydrogen: A magic wild card for India in the midst of chaotic oil crises!",
    preview: [
      "India's strategy for Green Hydrogen is arguably one of the most aggressive clean-energy bets in the world! It is the missing piece of the puzzle for India's energy grid—and by extension, its booming digital and AI infrastructure.",
      "Through the National Green Hydrogen Mission (backed by an ₹19,744 crore outlay), India has set a target to produce 5 Million Metric Tonnes (MMT) per annum of Green Hydrogen by 2030.",
      "To give a context, Green Hydrogen can absolutely be used directly as a fuel. However, hydrogen is a logistical nightmare to store and transport. Because it is the lightest molecule in the universe, it requires being compressed to extreme pressures (350 to 700 bar) or chilled to cryogenic temperatures (-253 C) to move it anywhere.",
    ],
  },
  {
    num: "03",
    category: "Consumer Products",
    tags: ["FMCG", "India"],
    slug: "consumer-shift",
    bgClass: "perspective-consumer",
    title: "Dabba of Deep-fried Bhujia or Gathiya is quietly pushed back on the shelf, why?",
    preview: [
      "Step into any urban Indian household, and you will witness a fascinating cultural shift! The millennials to Genz crowd are avoiding traditional dabba of deep-fried bhujia or gathiya, quietly being pushed to the back of the pantry. In its place sit roasted makhana, baked ragi chips, and protein-infused wafers!",
      "We are witnessing the rise of India's mid-aspirational consumer class—an economic powerhouse of double-income suburban families, corporate professionals, and Gen Z city-dwellers.",
      "This segment is driven by a strong desire for upward mobility, high food label literacy, and an obsession with wellness further enhanced by you are so called fitness/wellness influencers on every social media platform out there.",
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
            <div className="persp-list">
              {PERSPECTIVES.map((p, i) => (
                <div key={i} className={`perspective-card reveal reveal-delay-${i + 1}`}>

                  {/* Left: image — fills left half of card at full height */}
                  <div className={`pc-image ${p.bgClass}`}>
                    <div className="pc-image-overlay" />
                    <div className="pc-image-meta">
                      <span className="pcm-num">{p.num}</span>
                      <span className="pcm-category">{p.category}</span>
                      <div className="pcm-tags">
                        {p.tags.map((tag, j) => (
                          <span key={j} className="pcm-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: text panel — vertically centered, separator line on left */}
                  <div className="pc-text">
                    <h2 className="pc-title">{p.title}</h2>
                    <div className="pc-divider" />
                    <div className="pc-preview">
                      {p.preview.map((para, k) => (
                        <p key={k} className={`pc-desc${k === 0 ? ' pc-desc--lead' : ''}`}>{para}</p>
                      ))}
                    </div>
                    <Link href={`/perspectives/${p.slug}`} className="pc-cta">Read note →</Link>
                  </div>

                </div>
              ))}
            </div>
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

        /* ── Articles — two-panel card list ── */
        .persp-articles {
          padding-bottom: var(--section-gap);
        }

        .persp-list {
          display: flex;
          flex-direction: column;
          gap: clamp(2rem, 4vw, 3rem);
        }

        /* Card — side-by-side: image left, text right */
        .perspective-card {
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          min-height: clamp(320px, 44vw, 580px);
          box-shadow: 0 8px 48px rgba(0, 0, 0, 0.14);
        }

        /* Background images */
        .perspective-ai       { background-image: url('/images/perspectives-ai.png'); }
        .perspective-energy   { background-image: url('/images/perspectives-energy.png'); }
        .perspective-consumer { background-image: url('/images/perspectives-consumer.png'); }

        /* Left: image — fills left 50% at full card height */
        .pc-image {
          position: relative;
          width: 50%;
          flex-shrink: 0;
          background-size: cover;
          background-position: center;
        }

        /* Gradient: top-to-bottom, dark at bottom for badge legibility */
        .pc-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.72) 0%,
            rgba(0, 0, 0, 0.18) 50%,
            transparent 100%
          );
        }

        /* Meta badges pinned to bottom-left of image */
        .pc-image-meta {
          position: absolute;
          bottom: clamp(1rem, 2vw, 1.5rem);
          left: clamp(1.25rem, 2.5vw, 2rem);
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .pcm-num {
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-right: 0.25rem;
        }

        .pcm-category {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          padding: 0.2rem 0.6rem;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .pcm-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .pcm-tag {
          display: inline-block;
          padding: 0.2rem 0.55rem;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 999px;
          font-size: 0.6875rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          white-space: nowrap;
          background: rgba(0, 0, 0, 0.2);
        }

        /* Right: text panel — dark bg, separator on left edge, centered vertically */
        .pc-text {
          flex: 1;
          background: #0d0d0b;
          border-left: 2px solid rgba(0, 0, 0, 0.85);
          padding: clamp(2.5rem, 4.5vw, 4rem) clamp(2rem, 4vw, 3.25rem);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }

        .pc-title {
          color: #f5f5f4;
          font-size: clamp(1.375rem, 2vw, 2rem);
          font-weight: var(--weight-bold);
          line-height: 1.1;
          letter-spacing: -0.025em;
          max-width: 24ch;
          text-wrap: balance;
          margin-bottom: clamp(1.25rem, 2vw, 2rem);
        }

        /* Horizontal rule separating title from body */
        .pc-divider {
          width: 100%;
          height: 1px;
          background: rgba(245, 245, 244, 0.1);
          margin-bottom: clamp(1.25rem, 2vw, 1.75rem);
        }

        .pc-preview {
          display: flex;
          flex-direction: column;
          gap: clamp(0.75rem, 1.2vw, 1rem);
          margin-bottom: clamp(1.5rem, 2.5vw, 2.25rem);
        }

        /* Lead paragraph — brighter, slightly larger */
        .pc-desc--lead {
          color: #ffffff;
          font-size: clamp(0.9375rem, 1.1vw, 1.0625rem);
          line-height: 1.72;
          font-weight: 450;
        }

        .pc-desc {
          color: #ffffff;
          font-size: clamp(0.875rem, 0.95vw, 0.9375rem);
          line-height: 1.72;
        }

        .pc-cta {
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          font-size: 0.8125rem;
          font-weight: var(--weight-semibold);
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255, 255, 255, 0.35);
          padding-bottom: 0.15rem;
          transition: color 150ms ease, border-color 150ms ease;
        }
        .pc-cta:hover {
          color: #ffffff;
          border-bottom-color: rgba(255, 255, 255, 0.75);
        }

        .persp-more {
          margin-top: var(--space-xl);
          font-size: var(--text-meta);
          color: var(--color-muted);
          letter-spacing: 0.03em;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .persp-hero {
            padding-top: clamp(5rem, 14vw, 8rem);
          }
          .persp-hero__grid {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }
          .persp-hero__title {
            max-width: none;
            font-size: clamp(2.25rem, 8vw, 3.5rem);
          }
          .persp-hero__copy  { max-width: 100%; }

          /* Stack: image top, text below */
          .perspective-card {
            flex-direction: column;
            min-height: auto;
          }
          .pc-image {
            width: 100%;
            height: clamp(200px, 50vw, 300px);
          }
          .pc-text {
            border-left: none;
            border-top: 2px solid rgba(0, 0, 0, 0.85);
          }
          .pc-title {
            font-size: clamp(1.25rem, 5vw, 1.75rem);
          }
        }

        @media (max-width: 480px) {
          .persp-hero__title {
            font-size: clamp(2rem, 8.5vw, 2.75rem);
          }
          .pc-title {
            font-size: clamp(1.25rem, 6vw, 1.625rem);
            max-width: none;
          }
          .pc-text {
            padding: 1.75rem 1.25rem;
          }
          .pc-desc--lead {
            font-size: 0.9375rem;
          }
          .pc-desc {
            font-size: 0.875rem;
          }
          .perspective-card {
            border-radius: 14px;
          }
        }

        @media (max-width: 360px) {
          .pc-text {
            padding: 1.5rem 1rem;
          }
          .persp-hero__title {
            font-size: clamp(1.75rem, 9vw, 2.25rem);
          }
        }
      `}} />
    </>
  );
}
