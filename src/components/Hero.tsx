'use client';

import { useEffect, useState } from 'react';

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
        <div className="hero__content">
          <h1 className="hero__headline">
            We invest where execution decides the outcome
          </h1>
          <p className="hero__subhead">
            For founders who have found their market and are now confronting the harder problem: hiring, customers, capital, supply chain, policy, and the discipline to scale without losing what made the company work.
          </p>
          <div className="hero__actions">
            <a href="/contact" className="hero__cta">Talk to us</a>
            <a href="/approach" className="hero__link">How we evaluate</a>
          </div>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true" />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

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
          background: rgba(4, 4, 4, 0.38);
        }

        .hero__media::after {
          content: '';
          z-index: 2;
          background:
            linear-gradient(180deg, rgba(11, 11, 11, 0.22) 0%, rgba(11, 11, 11, 0.08) 44%, rgba(11, 11, 11, 0.60) 100%);
        }

        .hero__video {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 1;
        }

        .hero__container {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100dvh;
          padding-top: clamp(5rem, 12vw, 8rem);
          padding-bottom: clamp(4rem, 10vw, 8rem);
        }

        .hero__content {
          width: min(100%, 860px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero__headline {
          max-width: 820px;
          color: #f5f5f4;
          font-size: var(--text-hero);
          font-weight: var(--weight-medium);
          line-height: 1.06;
          letter-spacing: -0.02em;
          margin-bottom: var(--space-4);
          text-shadow: 0 2px 32px rgba(0, 0, 0, 0.55), 0 0 80px rgba(0, 0, 0, 0.25);
          animation: heroReveal 1s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 80ms;
        }

        .hero__subhead {
          max-width: 620px;
          color: rgba(245, 245, 244, 0.92);
          font-size: clamp(1.0625rem, 1.7vw, 1.25rem);
          line-height: 1.7;
          margin-bottom: var(--space-3);
          text-shadow: 0 1px 16px rgba(0, 0, 0, 0.5);
          animation: heroReveal 1s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 260ms;
        }

        .hero__sectors {
          max-width: 560px;
          color: rgba(245, 245, 244, 0.6);
          font-size: clamp(0.875rem, 1.3vw, 1rem);
          line-height: 1.6;
          margin-bottom: var(--space-6);
          text-shadow: 0 1px 16px rgba(0, 0, 0, 0.5);
          animation: heroReveal 1s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 380ms;
        }

        .hero__actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          flex-wrap: wrap;
          animation: heroReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 440ms;
        }

        .hero__cta {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-pill);
          background: #f5f5f4;
          color: #111110;
          font-size: 0.9375rem;
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
          color: rgba(245, 245, 244, 0.72);
          font-size: 0.9375rem;
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
          border: 1px solid rgba(245, 245, 244, 0.14);
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
          border-right: 1px solid rgba(245, 245, 244, 0.48);
          border-bottom: 1px solid rgba(245, 245, 244, 0.48);
          transform: translate(-50%, -65%) rotate(45deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero__video {
            display: none;
          }
          .hero__headline,
          .hero__subhead,
          .hero__sectors,
          .hero__actions {
            animation: none;
            opacity: 1;
            transform: none;
            filter: none;
          }
        }

        @media (max-width: 768px) {
          .hero__video {
            display: none;
          }

          .hero__headline {
            max-width: 100%;
          }

          .hero__subhead {
            max-width: 100%;
          }

          .hero__actions {
            flex-direction: column;
            width: 100%;
          }

          .hero__cta,
          .hero__link {
            width: 100%;
            max-width: 320px;
          }
        }
      `}} />
    </section>
  );
}
