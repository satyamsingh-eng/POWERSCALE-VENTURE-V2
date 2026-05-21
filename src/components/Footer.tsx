'use client';

import React from 'react';
import RevealWrapper from './RevealWrapper';
import FadeContent from './ui/FadeContent';
import ShinyText from './ui/ShinyText';

const NAV_GROUPS = [
  {
    label: "Company",
    links: [
      { href: '/about', label: 'About & Team' },
      { href: '/approach', label: 'Approach' },
    ]
  },
  {
    label: "Work",
    links: [
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/perspectives', label: 'Perspectives' },
      { href: '/contact', label: 'Talk to us' },
    ]
  },
];

export default function Footer() {
  return (
    <RevealWrapper>
      <footer className="footer">
        <div className="container">

          {/* CTA section */}
          <div className="footer__cta reveal">
            <p className="section-label">Contact</p>
            <FadeContent className="footer__headline-wrapper">
              <h2 className="footer__headline">If you&apos;re building something that fits, write to us.</h2>
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

          {/* Divider */}
          <div className="hairline footer__rule" />

          {/* Main footer body */}
          <div className="footer__body reveal reveal-delay-2">

            {/* Brand column */}
            <div className="footer__brand-col">
              <a href="/" className="footer__logo-link" aria-label="Powerscale Ventures — home">
                <img
                  src="/images/powerscale-logo-transparent.png"
                  alt="Powerscale Ventures"
                  className="footer__logo-img"
                  width={160}
                  height={100}
                />
              </a>
              <a href="mailto:support@powerscaleventures.com" className="footer__contact-email">
                support@powerscaleventures.com
              </a>
            </div>

            {/* Nav groups */}
            <nav className="footer__nav-cols" aria-label="Footer navigation">
              {NAV_GROUPS.map(group => (
                <div key={group.label} className="footer__nav-group">
                  <span className="footer__nav-label">{group.label}</span>
                  <ul className="footer__nav-col">
                    {group.links.map(link => (
                      <li key={link.href}>
                        <a href={link.href} className="footer__nav-link">{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

          </div>

          {/* Copyright bar */}
          <div className="hairline footer__bottom-rule" />
          <div className="footer__copyright-bar">
            <span className="footer__copyright">© {new Date().getFullYear()} Powerscale Ventures. All rights reserved</span>
            <div className="footer__legal-links">
              <a href="/privacy-policy" className="footer__legal-link">Privacy Policy</a>
              <span className="footer__legal-sep" aria-hidden="true">·</span>
              <a href="/terms" className="footer__legal-link">Terms &amp; Conditions</a>
            </div>
          </div>

        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .footer {
            width: 100%;
            padding: var(--section-gap) 0 var(--space-4);
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
            padding-bottom: clamp(3rem, 6vw, 5rem);
          }

          .footer__headline-wrapper {
            margin-bottom: var(--space-xl);
          }

          .footer__headline {
            font-size: clamp(2.25rem, 5vw, 4.25rem);
            font-weight: var(--weight-semibold);
            color: var(--color-ink-primary);
            line-height: 1.1;
            letter-spacing: -0.02em;
            max-width: 16ch;
          }

          .footer__email {
            font-size: clamp(1rem, 1.4vw, 1.25rem);
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
            margin-bottom: clamp(3rem, 6vw, 5rem);
          }

          /* Main body — brand + nav */
          .footer__body {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: var(--space-8);
            padding-bottom: clamp(4rem, 6vw, 6rem);
          }

          /* Brand column */
          .footer__brand-col {
            flex-shrink: 0;
          }

          .footer__logo-link {
            display: inline-block;
            margin-bottom: var(--space-3);
            transition: opacity 200ms ease;
          }

          .footer__logo-link:hover {
            opacity: 0.8;
          }

          .footer__logo-img {
            display: block;
            width: clamp(160px, 16vw, 280px);
            height: auto;
          }

          .footer__contact-email {
            display: block;
            font-size: 0.875rem;
            color: var(--color-muted);
            transition: color 200ms ease;
            word-break: break-all;
          }

          .footer__contact-email:hover {
            color: var(--color-signature);
          }

          /* Nav groups */
          .footer__nav-cols {
            display: flex;
            gap: clamp(3rem, 6vw, 7rem);
          }

          .footer__nav-group {
            display: flex;
            flex-direction: column;
          }

          .footer__nav-label {
            display: block;
            font-size: 0.75rem;
            color: var(--color-signature);
            text-transform: uppercase;
            letter-spacing: 0.12em;
            font-weight: 700;
            margin-bottom: var(--space-4);
          }

          .footer__nav-col {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1.1rem;
          }

          .footer__nav-link {
            font-size: clamp(1rem, 1.15vw, 1.125rem);
            color: var(--color-ink-secondary);
            font-weight: 500;
            transition: color 200ms ease;
            white-space: nowrap;
          }

          .footer__nav-link:hover {
            color: var(--color-ink-primary);
          }

          /* Copyright bar */
          .footer__bottom-rule {
            margin-bottom: var(--space-3);
          }

          .footer__copyright-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: var(--space-sm);
            padding-bottom: var(--space-3);
          }

          .footer__copyright {
            font-size: var(--text-meta);
            color: var(--color-ink-secondary);
            font-weight: 500;
          }

          .footer__legal-links {
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }

          .footer__legal-sep {
            font-size: var(--text-meta);
            color: var(--color-muted);
            user-select: none;
          }

          .footer__legal-link {
            font-size: var(--text-meta);
            color: var(--color-ink-secondary);
            font-weight: 500;
            transition: color 200ms ease;
            white-space: nowrap;
          }

          .footer__legal-link:hover {
            color: var(--color-ink-primary);
          }

          /* Responsive */
          @media (max-width: 720px) {
            .footer__body {
              flex-direction: column;
              gap: var(--space-8);
            }

            .footer__nav-cols {
              gap: var(--space-8);
            }
          }

          @media (max-width: 480px) {
            .footer__headline {
              max-width: none;
            }
          }
        `}} />
      </footer>
    </RevealWrapper>
  );
}
