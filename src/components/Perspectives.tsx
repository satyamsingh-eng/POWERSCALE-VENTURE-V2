'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';

const ARTICLES = [
  {
    title: "When distribution stops being a growth story",
    author: "Powerscale team",
    label: "Consumer",
  },
  {
    title: "The financing stack is part of the product",
    author: "Powerscale team",
    label: "Energy Transition",
  },
  {
    title: "The first senior hire changes the company",
    author: "Powerscale team",
    label: "Scaling",
  }
];

export default function Perspectives() {
  return (
    <RevealWrapper>
      <section className="perspectives">
        <div className="section-card">
          <div className="container">
            <div className="section-label reveal">Perspectives</div>
            <h2 className="perspectives__title reveal reveal-delay-1">
              Operator judgment,<br />practiced in public.
            </h2>

          <div className="perspectives__list">
            {ARTICLES.map((article, i) => (
              <a href="/perspectives" key={i} className={`perspectives__card reveal reveal-delay-${i + 2}`}>
                <div className="perspectives__card-meta">
                  <span>{article.author}</span>
                  <span className="perspectives__dot">·</span>
                  <span>{article.label}</span>
                </div>
                <h3 className="perspectives__card-title">{article.title}</h3>
              </a>
            ))}
          </div>

          <div className="perspectives__action reveal reveal-delay-5">
            <a href="/perspectives" className="text-link">View all perspectives →</a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .perspectives {
          padding: 0;
          background-color: transparent;
        }

          .perspectives__title {
            margin-bottom: var(--space-xl);
          }

          .perspectives__list {
            margin-bottom: var(--space-lg);
          }

          .perspectives__card {
            display: block;
            padding: var(--space-lg) 0;
            border-bottom: 1px solid var(--color-divider);
            transition: transform var(--duration-fast) var(--ease-out);
          }

          .perspectives__card:first-child {
            border-top: 1px solid var(--color-divider);
          }

          .perspectives__card:hover {
            transform: translateX(8px);
          }

          .perspectives__card:hover .perspectives__card-title {
            color: var(--color-signature);
          }

          .perspectives__card-meta {
            font-family: var(--font-primary);
            font-size: var(--text-meta);
            color: var(--color-steel);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: var(--space-sm);
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .perspectives__dot {
            opacity: 0.4;
          }

          .perspectives__card-title {
            font-family: var(--font-primary);
            font-size: clamp(1.5rem, 2.5vw, 2.25rem);
            font-weight: var(--weight-medium);
            line-height: 1.2;
            max-width: 40ch;
            transition: color var(--duration-fast) var(--ease-out);
          }

          .perspectives__action {
            padding-top: var(--space-lg);
          }
        `}} />
      </section>
    </RevealWrapper>
  );
}
