'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link href="/" className="nav__brand">
          Powerscale
        </Link>
        <ul className="nav__links">
          <li><Link href="/about" className="nav__link">About & Team</Link></li>
          <li><Link href="/approach" className="nav__link">Approach</Link></li>
          <li><Link href="/index-page" className="nav__link">Operator Index</Link></li>
          <li><Link href="/portfolio" className="nav__link">Portfolio</Link></li>
          <li><Link href="/perspectives" className="nav__link">Perspectives</Link></li>
          <li><Link href="/contact" className="nav__link nav__cta">Talk to us</Link></li>
          <li><ThemeToggle /></li>
        </ul>
      </div>
    </nav>
  );
}
