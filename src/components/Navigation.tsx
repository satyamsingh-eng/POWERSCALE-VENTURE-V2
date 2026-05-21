'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('./ThemeToggle'), { ssr: false });

const NAV_LINKS = [
  { href: '/about', label: 'About & Team' },
  { href: '/approach', label: 'Approach' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/perspectives', label: 'Perspectives' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav__inner">
          <Link href="/" className="nav__brand" onClick={closeMenu}>
            <span className="nav__logo-badge" aria-hidden="true">
              <img
                src="/images/powerscale-logo-transparent.png"
                alt=""
                className="nav__logo nav__logo--light"
                width={80}
                height={50}
              />
              <img
                src="/images/powerscale-logo-on-dark.png"
                alt=""
                className="nav__logo nav__logo--dark"
                width={80}
                height={50}
              />
            </span>
            <span className="nav__brand-text">Powerscale Ventures</span>
          </Link>

          {/* Desktop links */}
          <ul className="nav__links nav__links--desktop" aria-label="Site links">
            {NAV_LINKS.map(link => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav__link${active ? ' nav__link--active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li><Link href="/contact" className="nav__link nav__cta">Talk to us</Link></li>
            <li><ThemeToggle /></li>
          </ul>

          {/* Mobile controls */}
          <div className="nav__mobile-controls">
            <ThemeToggle />
            <button
              className="nav__hamburger"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(prev => !prev)}
            >
              <span className={`nav__bar nav__bar--top ${menuOpen ? 'nav__bar--open-top' : ''}`} />
              <span className={`nav__bar nav__bar--bottom ${menuOpen ? 'nav__bar--open-bottom' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        className={`nav-overlay ${menuOpen ? 'nav-overlay--open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <ul className="nav-overlay__list">
          {NAV_LINKS.map((link, i) => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <li key={link.href} style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}>
                <Link
                  href={link.href}
                  className={`nav-overlay__link${active ? ' nav-overlay__link--active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li style={{ transitionDelay: menuOpen ? `${NAV_LINKS.length * 40}ms` : '0ms' }}>
            <Link
              href="/contact"
              className="nav-overlay__link nav-overlay__link--cta"
              onClick={closeMenu}
            >
              Talk to us
            </Link>
          </li>
        </ul>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .nav__logo-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .nav__logo {
          display: block;
          height: 36px;
          width: auto;
        }

        .nav__logo--dark {
          display: none;
        }

        :root[data-theme='dark'] .nav__logo--light {
          display: none;
        }

        :root[data-theme='dark'] .nav__logo--dark {
          display: block;
        }

        .nav__brand-text {
          font-size: 1.0625rem;
          font-weight: var(--weight-semibold);
          letter-spacing: -0.02em;
          color: var(--color-ink);
          white-space: nowrap;
        }

        .nav__brand:hover .nav__logo-badge {
          opacity: 0.85;
        }

        /* Mobile controls — hidden by default */
        .nav__mobile-controls {
          display: none;
          align-items: center;
          gap: 2px;
          flex-shrink: 0;
        }

        /* Desktop links hidden class */
        .nav__links--desktop {
          display: flex;
        }

        /* Hamburger button */
        .nav__hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 6px;
          width: 40px;
          height: 40px;
          border: 0;
          border-radius: var(--radius-pill);
          background: transparent;
          cursor: pointer;
          padding: 0;
        }

        .nav__bar {
          display: block;
          width: 18px;
          height: 1.5px;
          background: var(--color-ink);
          border-radius: 2px;
          transform-origin: center;
          transition: transform 280ms var(--ease-out), opacity 280ms var(--ease-out);
        }

        .nav__bar--open-top {
          transform: translateY(3.75px) rotate(45deg);
        }

        .nav__bar--open-bottom {
          transform: translateY(-3.75px) rotate(-45deg);
        }

        /* Overlay menu */
        .nav-overlay {
          position: fixed;
          inset: 0;
          z-index: 18;
          background: var(--color-canvas);
          display: flex;
          flex-direction: column;
          padding: 5rem var(--container-padding) var(--container-padding);
          overflow-y: auto;
          pointer-events: none;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 300ms var(--ease-out), transform 300ms var(--ease-out);
        }

        .nav-overlay--open {
          pointer-events: auto;
          opacity: 1;
          transform: translateY(0);
        }

        .nav-overlay__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          margin-top: auto;
          margin-bottom: auto;
        }

        .nav-overlay__list li {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 250ms var(--ease-out), transform 250ms var(--ease-out);
        }

        .nav-overlay--open .nav-overlay__list li {
          opacity: 1;
          transform: translateY(0);
        }

        .nav-overlay__link {
          display: block;
          padding: 1.125rem 0;
          border-bottom: 1px solid var(--color-divider);
          font-size: clamp(1.375rem, 5vw, 2rem);
          font-weight: var(--weight-medium);
          color: var(--color-ink-primary);
          letter-spacing: -0.01em;
          transition: color var(--duration-fast) var(--ease-out);
        }

        .nav-overlay__list li:first-child .nav-overlay__link {
          border-top: 1px solid var(--color-divider);
        }

        .nav-overlay__link:hover {
          color: var(--color-signature);
        }

        .nav-overlay__link--active {
          color: var(--color-signature);
        }

        .nav-overlay__link--cta {
          color: var(--color-signature);
        }

        /* Show hamburger, hide desktop links on tablet/mobile */
        @media (max-width: 860px) {
          .nav__links--desktop {
            display: none;
          }
          .nav__mobile-controls {
            display: flex;
          }
        }

        /* On larger screens, never show overlay */
        @media (min-width: 861px) {
          .nav-overlay {
            display: none !important;
          }
        }
      `}} />
    </>
  );
}
