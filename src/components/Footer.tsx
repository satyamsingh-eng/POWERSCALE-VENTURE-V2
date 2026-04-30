'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';
import FadeContent from './ui/FadeContent';
import ShinyText from './ui/ShinyText';

export default function Footer() {
  return (
    <RevealWrapper>
      <footer className="footer">
        <div className="container">
          <div className="footer__cta reveal">
            <p className="section-label">Contact</p>
            <FadeContent className="footer__headline-wrapper">
              <h2 className="footer__headline">If you're building something that fits, write to us.</h2>
            </FadeContent>
            <a href="/contact" className="footer__email reveal reveal-delay-2">
              <ShinyText
                text="Start a founder note"
                speed={1.4}
                delay={5}
                color="var(--color-ink-primary)"
                shineColor="var(--color-signature)"
                spread={115}
                direction="left"
              />
            </a>
          </div>

          <div className="hairline footer__rule"></div>

          <div className="footer__bottom reveal reveal-delay-3">
            <div className="footer__brand">
              <span className="footer__brand-name">Powerscale Ventures</span>
              <span className="footer__copyright">© {new Date().getFullYear()}</span>
            </div>
            <nav className="footer__nav">
              <a href="/about">About</a>
              <a href="/approach">Approach</a>
              <a href="/index-page">Operator Index</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/perspectives">Perspectives</a>
              <a href="/contact">Talk to us</a>
            </nav>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .footer {
            width: 100%;
            padding: var(--section-gap) 0 var(--space-lg);
            background-color: var(--color-canvas);
            color: var(--color-ink-primary);
          }

          .footer .section-label {
            color: var(--color-ink-secondary);
          }

          .footer .section-label::before {
            background-color: var(--color-ink-secondary);
          }

          .footer__cta {
            padding-bottom: var(--space-lg);
          }

          .footer__headline-wrapper {
            margin-bottom: var(--space-lg);
            max-width: 800px;
          }

          .footer__headline {
            font-size: clamp(2rem, 4vw, 3.5rem);
            font-weight: var(--weight-medium);
            color: var(--color-ink-primary);
            line-height: 1.15;
          }

          .footer__email {
            font-size: clamp(1rem, 1.5vw, 1.25rem);
            color: var(--color-ink-primary);
            display: inline-block;
            border-bottom: 1px solid var(--color-ink-primary);
            padding-bottom: 0.25rem;
            transition: opacity 200ms ease;
          }

          .footer__email:hover {
            opacity: 0.7;
          }

          .footer .hairline {
            background-color: var(--color-divider);
          }

          .footer__rule {
            margin: var(--space-12) 0 var(--space-6);
          }

          .footer__bottom {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }

          .footer__brand-name {
            font-weight: var(--weight-medium);
            font-size: var(--text-ui);
            display: block;
            margin-bottom: 0.25rem;
          }

          .footer__copyright {
            font-size: var(--text-meta);
            color: var(--color-ink-secondary);
          }

          .footer__nav {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
          }

          .footer__nav a {
            font-size: var(--text-meta);
            color: var(--color-ink-secondary);
            transition: color 200ms ease;
          }

          .footer__nav a:hover {
            color: var(--color-ink-primary);
          }

          @media (max-width: 768px) {
            .footer__bottom {
              flex-direction: column;
              gap: 2rem;
            }
            .footer__nav {
              gap: 1rem;
            }
          }
        `}} />
      </footer>
    </RevealWrapper>
  );
}
