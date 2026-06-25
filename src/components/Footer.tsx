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

export default function Footer({ hideCta = false }: { hideCta?: boolean }) {
  return (
    <RevealWrapper>
      <footer className="footer">
        <div className="container">

          {/* CTA section */}
          {!hideCta && (
            <div className="footer__cta reveal">
              <p className="section-label">Contact</p>
              <FadeContent className="footer__headline-wrapper">
                <h2 className="footer__headline">
                  If you&apos;re building something that fits,{' '}
                  <span className="footer__headline-break"><br /></span>
                  write to us
                </h2>
              </FadeContent>
              <a href="/contact" className="footer__email reveal reveal-delay-2">
                <ShinyText
                  text="Start a founder note"
                  speed={1.4}
                  delay={5}
                  color="#ffffff"
                  shineColor="rgba(255,255,255,0.55)"
                  spread={115}
                  direction="left"
                />
              </a>
            </div>
          )}

          {/* Divider */}
          <div className="hairline footer__rule" />

          {/* Main footer body */}
          <div className="footer__body reveal reveal-delay-2">

            {/* Brand column */}
            <div className="footer__brand-col">
              <a href="/" className="footer__logo-link" aria-label="Powerscale Ventures — home">
                <img
                  src="/images/powerscale-logo-on-dark.png"
                  alt="Powerscale Ventures"
                  className="footer__logo-img"
                  width={220}
                  height={140}
                />
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
            <a href="mailto:support@powerscaleventures.com" className="footer__copyright-email">
              support@powerscaleventures.com
            </a>
            <div className="footer__legal-links">
              <a href="/privacy-policy" className="footer__legal-link">Privacy Policy</a>
              <span className="footer__legal-sep" aria-hidden="true">·</span>
              <a href="/terms" className="footer__legal-link">Terms &amp; Conditions</a>
            </div>
          </div>

        </div>

        <style dangerouslySetInnerHTML={{__html: `
          /* ── Aurora background footer ── */
          .footer {
            position: relative;
            width: 100%;
            padding: var(--section-gap) 0 var(--space-4);
            /*
              Gradient overlay darkens the aurora so text is always readable.
              Top is lighter (aurora glow visible), bottom is near-opaque (copyright bar legible).
            */
            background-image:
              linear-gradient(
                to bottom,
                rgba(4, 10, 24, 0.18) 0%,
                rgba(4, 10, 24, 0.32) 28%,
                rgba(4, 10, 24, 0.60) 62%,
                rgba(4, 10, 24, 0.88) 100%
              ),
              url('/images/footer-aurora.png');
            background-size: cover;
            background-position: center 30%;
            background-repeat: no-repeat;
            /* Force dark context regardless of site theme */
            color: rgba(245, 245, 244, 0.88);
          }

          /* Section label override — aurora bg is always dark, shrink to small label size */
          .footer .section-label {
            color: rgba(245, 245, 244, 0.5);
            font-size: 0.75rem;
            letter-spacing: 0.12em;
            font-weight: 700;
            text-transform: uppercase;
            line-height: 1;
          }
          .footer .section-label::before {
            background-color: rgba(245, 245, 244, 0.35);
            height: 2px;
            width: 1rem;
          }

          .footer__cta {
            padding-top: clamp(1rem, 2vw, 1.5rem);
            padding-bottom: clamp(2.5rem, 4vw, 3.5rem);
          }

          .footer__headline-wrapper {
            margin-top: clamp(1rem, 1.5vw, 1.5rem);
            margin-bottom: clamp(1.5rem, 2.5vw, 2.5rem);
          }

          .footer__headline {
            font-size: clamp(2.25rem, 5vw, 4.25rem);
            font-weight: var(--weight-semibold);
            color: #f5f5f4;
            line-height: 1.1;
            letter-spacing: -0.02em;
            max-width: none;
          }
          .footer__headline-break {
            display: none;
          }
          @media (min-width: 640px) {
            .footer__headline {
              max-width: fit-content;
            }
            .footer__headline-break {
              display: inline;
            }
          }

          .footer__email {
            font-size: clamp(1rem, 1.4vw, 1.25rem);
            color: #ffffff;
            display: inline-block;
            border-bottom: 1px solid rgba(255, 255, 255, 0.45);
            padding-bottom: 0.25rem;
            transition: border-color 200ms ease;
            text-decoration: none;
          }
          .footer__email:hover {
            border-bottom-color: #ffffff;
          }

          /* Hairlines */
          .footer .hairline {
            background-color: rgba(245, 245, 244, 0.12);
          }
          .footer__rule {
            margin-bottom: clamp(1.5rem, 2.5vw, 2.5rem);
          }

          /* Main body */
          .footer__body {
            display: grid;
            grid-template-columns: 3fr 2fr;
            gap: clamp(3rem, 6vw, 5rem);
            align-items: start;
            padding-bottom: clamp(2.5rem, 4vw, 4rem);
          }

          /* Logo */
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
            width: clamp(200px, 20vw, 320px);
            height: auto;
          }

          /* Nav groups */
          .footer__nav-cols {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: start;
          }
          .footer__nav-group {
            display: flex;
            flex-direction: column;
          }
          .footer__nav-label {
            display: block;
            font-size: 0.75rem;
            color: #ffffff;
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
            color: #ffffff;
            font-weight: 500;
            transition: opacity 200ms ease;
            white-space: nowrap;
          }
          .footer__nav-link:hover {
            opacity: 0.7;
          }

          /* Copyright bar — 3-item row: copyright · email · legal */
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
            color: #ffffff;
            font-weight: 500;
          }
          .footer__copyright-email {
            font-size: var(--text-meta);
            color: #ffffff;
            font-weight: 500;
            transition: opacity 200ms ease;
            text-decoration: none;
          }
          .footer__copyright-email:hover {
            opacity: 0.7;
          }
          .footer__legal-links {
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }
          .footer__legal-sep {
            font-size: var(--text-meta);
            color: rgba(255, 255, 255, 0.45);
            user-select: none;
          }
          .footer__legal-link {
            font-size: var(--text-meta);
            color: #ffffff;
            font-weight: 500;
            transition: opacity 200ms ease;
            white-space: nowrap;
          }
          .footer__legal-link:hover {
            opacity: 0.7;
          }

          /* Responsive */
          @media (max-width: 720px) {
            .footer__body {
              grid-template-columns: 1fr;
              gap: var(--space-8);
            }
            .footer__nav-cols {
              grid-template-columns: 1fr 1fr;
              gap: var(--space-6);
            }
            .footer__headline {
              font-size: clamp(1.875rem, 7vw, 3rem);
            }
          }

          @media (max-width: 540px) {
            .footer__copyright-bar {
              flex-direction: column;
              align-items: flex-start;
              gap: var(--space-1);
            }
            .footer__legal-links {
              flex-wrap: wrap;
            }
            .footer__copyright-email {
              word-break: break-all;
            }
            .footer__logo-img {
              width: clamp(160px, 55vw, 220px);
            }
          }

          @media (max-width: 480px) {
            .footer__headline {
              max-width: none;
              font-size: clamp(1.75rem, 7.5vw, 2.5rem);
            }
            .footer__nav-link {
              font-size: 1rem;
            }
          }

          @media (max-width: 360px) {
            .footer__nav-cols {
              grid-template-columns: 1fr;
              gap: var(--space-4);
            }
            .footer__headline {
              font-size: clamp(1.5rem, 8vw, 2rem);
            }
          }
        `}} />
      </footer>
    </RevealWrapper>
  );
}
