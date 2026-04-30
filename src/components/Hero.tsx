'use client';

import { useEffect, useState } from 'react';
import FadeContent from './ui/FadeContent';

export default function Hero() {
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 769px) and (prefers-reduced-motion: no-preference)');
    const update = () => setCanPlayVideo(media.matches);

    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true">
        {canPlayVideo && (
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/aura-northern-lights-poster.jpg"
          >
            <source src="/videos/aura-northern-lights.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div className="container hero__container">
        <FadeContent className="hero__content">
          <h1 className="hero__headline">
            We invest where execution decides the outcome.
          </h1>
          <p className="hero__subhead">
            For companies in energy transition, deeptech infrastructure, consumer, and AI that have found a market and now have to operate through scale.
          </p>
          <div className="hero__actions">
            <a href="#operator-index" className="hero__cta">Read the Operator Index</a>
            <a href="/contact" className="hero__link">Talk to us</a>
          </div>
        </FadeContent>
      </div>
      <div className="hero__scroll" aria-hidden="true" />

      <style dangerouslySetInnerHTML={{__html: `
        .hero {
          min-height: 100dvh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          background: #0b0b0b;
          color: #f5f5f4;
        }

        .hero__media,
        .hero__media::before,
        .hero__media::after {
          position: absolute;
          inset: 0;
        }

        .hero__media {
          z-index: 0;
          background-image: url('/videos/aura-northern-lights-poster.jpg');
          background-size: cover;
          background-position: center;
        }

        .hero__media::before {
          content: '';
          z-index: 1;
          background: rgba(4, 4, 4, 0.68);
        }

        .hero__media::after {
          content: '';
          z-index: 2;
          background:
            radial-gradient(circle at 50% 42%, rgba(245, 245, 244, 0.13), transparent 32%),
            linear-gradient(180deg, rgba(11, 11, 11, 0.34) 0%, rgba(11, 11, 11, 0.18) 44%, rgba(11, 11, 11, 0.72) 100%);
        }

        .hero__video {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.68) blur(1.5px);
          opacity: 0.78;
          transform: scale(1.015);
        }

        .hero__container {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100dvh;
          padding-top: var(--space-12);
          padding-bottom: var(--space-12);
        }

        .hero__content {
          width: min(100%, 920px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero__eyebrow {
          margin-bottom: var(--space-3);
          color: rgba(245, 245, 244, 0.7);
          font-size: 13px;
          font-weight: var(--weight-medium);
          letter-spacing: 0.08em;
          line-height: 1;
          text-transform: uppercase;
        }

        .hero__headline {
          max-width: 880px;
          color: #f5f5f4;
          font-size: var(--text-hero);
          font-weight: var(--weight-medium);
          line-height: 1.06;
          letter-spacing: -0.02em;
          margin-bottom: var(--space-4);
        }

        .hero__subhead {
          max-width: 600px;
          color: rgba(245, 245, 244, 0.72);
          font-size: var(--text-body);
          line-height: 1.62;
          margin-bottom: var(--space-6);
        }

        .hero__actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          flex-wrap: wrap;
        }

        .hero__cta {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-pill);
          background: #f5f5f4;
          color: #111110;
          font-size: 15px;
          font-weight: var(--weight-medium);
          padding: 0 var(--space-4);
          transition: transform var(--duration-fast) var(--ease-out), opacity var(--duration-fast) var(--ease-out);
        }

        .hero__cta:hover {
          transform: translateY(-1px);
          opacity: 0.86;
        }

        .hero__cta:active {
          transform: scale(0.98);
        }

        .hero__link {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: rgba(245, 245, 244, 0.88);
          font-size: 15px;
          font-weight: var(--weight-medium);
          padding: 0 var(--space-3);
          transition: color var(--duration-fast) var(--ease-out);
        }

        .hero__link:hover {
          color: #f5f5f4;
        }

        .hero__scroll {
          position: absolute;
          left: 50%;
          bottom: var(--space-6);
          width: 40px;
          height: 40px;
          border: 1px solid rgba(245, 245, 244, 0.18);
          border-radius: 999px;
          transform: translateX(-50%);
        }

        .hero__scroll::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: 6px;
          height: 6px;
          border-right: 1px solid rgba(245, 245, 244, 0.58);
          border-bottom: 1px solid rgba(245, 245, 244, 0.58);
          transform: translate(-50%, -65%) rotate(45deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero__video {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero__video {
            display: none;
          }

          .hero__headline {
            max-width: 10ch;
          }

          .hero__subhead {
            max-width: 31ch;
          }
        }
      `}} />
    </section>
  );
}
