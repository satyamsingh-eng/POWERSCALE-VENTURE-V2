'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';

const ARTICLES = [
  {
    title: "The channel motion that breaks when the founder steps back",
    excerpt: "Revenue can grow while channel quality decays. Two things keep founder-led pull looking healthy while managed distribution is already failing, and neither shows up in the top-line.",
    label: "Consumer Products",
  },
  {
    title: "When the regulatory sequence is the risk, not the technology",
    excerpt: "Most energy transition companies fail on financing sequence, not on project economics. The order in which capital commitments close determines what can be built, and what stays permanently at risk.",
    label: "Energy Transition",
  },
  {
    title: "The management layer that makes a company harder to run",
    excerpt: "The transition from a ten-person team to thirty is the one that breaks the operating model. What actually changes, and what the first manager hire signals about the company's ability to hold its growth rate.",
    label: "Scaling",
  }
];

export default function Perspectives() {
  return (
    <RevealWrapper>
      <section className="perspectives">
        <div className="container">
            <div className="section-label reveal">Perspectives</div>
            <h2 className="perspectives__title reveal reveal-delay-1">
              Operator judgment, practiced in public.
            </h2>

            <div className="perspectives__list">
              {ARTICLES.map((article, i) => (
                <a href="/perspectives" key={i} className={`perspectives__card reveal reveal-delay-${i + 2}`}>
                  <div className="perspectives__card-meta">
                    <span className="perspectives__label">{article.label}</span>
                  </div>
                  <h3 className="perspectives__card-title">{article.title}</h3>
                  <p className="perspectives__card-excerpt">{article.excerpt}</p>
                </a>
              ))}
            </div>

            <div className="perspectives__action reveal reveal-delay-5">
              <a href="/perspectives" className="text-link">View all perspectives →</a>
            </div>
          </div>

        <style dangerouslySetInnerHTML={{__html: `
          .perspectives {
            padding: var(--section-gap) 0;
            background-color: transparent;
          }

          .perspectives__title {
            margin-bottom: var(--space-xl);
            max-width: 22ch;
          }

          .perspectives__list {
            margin-bottom: var(--space-lg);
          }

          .perspectives__card {
            display: block;
            padding: clamp(var(--space-lg), 4vw, var(--space-xl)) 0;
            border-bottom: 1px solid var(--color-divider);
            transition: opacity var(--duration-fast) var(--ease-out);
          }

          .perspectives__card:first-child {
            border-top: 1px solid var(--color-divider);
          }

          .perspectives__card:hover {
            opacity: 0.72;
          }

          .perspectives__card:hover .perspectives__card-title {
            color: var(--color-signature);
          }

          .perspectives__card-meta {
            margin-bottom: var(--space-sm);
          }

          .perspectives__label {
            font-size: var(--text-meta);
            color: var(--color-signature);
            text-transform: uppercase;
            letter-spacing: 0.06em;
            font-weight: var(--weight-medium);
          }

          .perspectives__card-title {
            font-size: clamp(1.25rem, 2.2vw, 1.875rem);
            font-weight: var(--weight-semibold);
            line-height: 1.22;
            max-width: 46ch;
            margin-bottom: var(--space-sm);
            transition: color var(--duration-fast) var(--ease-out);
          }

          .perspectives__card-excerpt {
            font-size: var(--text-body);
            color: var(--color-ink-secondary);
            line-height: 1.7;
            max-width: 58ch;
          }

          .perspectives__action {
            padding-top: var(--space-lg);
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
