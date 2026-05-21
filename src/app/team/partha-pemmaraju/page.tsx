'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import TiltedCard from '@/components/ui/TiltedCard';

export default function ParthaPemmarajuPage() {
  return (
    <>
      <main className="profile-page">
        <div className="container">

          <Link href="/about" className="profile-back">← Team</Link>

          <div className="profile-header">
            <div className="profile-image-wrap">
              <TiltedCard
                imageSrc="/images/partha.png"
                altText="Partha Pemmaraju"
                rotateAmplitude={6}
                scaleOnHover={1.04}
                showTooltip={false}
                borderRadius="16px"
              />
            </div>
            <div className="profile-info">
              <span className="profile-role">Advisor</span>
              <h1 className="profile-name">Partha Pemmaraju</h1>
              <div className="profile-focus-tags">
                <span className="profile-focus-tag">Deeptech</span>
                <span className="profile-focus-tag">Entrepreneurship</span>
                <span className="profile-focus-tag">Global Operations</span>
              </div>
              <p className="profile-summary">
                Partha Pemmaraju is a deeptech entrepreneur and operator with substantial company-building experience across technical and consumer sectors, with a background that spans product systems and global commercial deployment.
              </p>
            </div>
          </div>

          <div className="profile-divider" />

          <div className="profile-body">
            <div className="profile-bio">
              <span className="profile-section-label">Background</span>
              <p>
                His background as a founder and operator, and his experience across global markets, gives him a specific operating perspective: what it actually takes to build a technically sophisticated business that also has to sell, deploy, and support at scale. He understands the gap between research-quality technology and market-ready product, and the operational complexity of moving a company through that gap in markets that have different infrastructure, regulatory, and customer acquisition dynamics.
              </p>
              <p>
                At Powerscale, Partha Pemmaraju serves as an advisor with particular relevance to portfolio companies in deeptech and consumer sectors navigating the technical-to-commercial transition. His value is operator-to-operator: he has navigated the specific problems that arise when a company's commercial system has to grow faster than its technical infrastructure was designed to support.
              </p>
              <p>
                His experience with global operations provides context for companies expanding across geographies with different deployment profiles, regulatory environments, and customer expectations. For deeptech companies in Powerscale's portfolio, this kind of operating guidance is most useful at the stage when the company is moving from proof-of-deployment to proof-of-repeatability, when the question changes from "does this work?" to "can we do this consistently, at scale, without the founder in every room?"
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">Operating relevance</span>
              <p>
                The technical-to-commercial transition is the point where most deeptech companies stall. Building the technology is the problem the founders were trained to solve. Building the commercial system around it is a different kind of problem: sales repeatability, implementation reliability, customer success structure. It requires a different kind of experience. Partha Pemmaraju's two-plus decades of entrepreneurial experience across deeptech and global markets is directly relevant at this specific stage.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">What this brings to Powerscale</span>
              <p>
                The firm's deeptech thesis is built on identifying the structural bottleneck: the single thing that limits the system. Partha Pemmaraju's operating background gives the firm direct access to a perspective that has encountered that bottleneck from the inside, as a builder rather than an observer. For portfolio companies in deeptech and consumer sectors, his advisory presence means access to operator-to-operator conversations rather than board-level pattern recognition.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/parthapemmaraju/"
              className="profile-external-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

        </div>
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .profile-page {
          padding-top: clamp(5rem, 12vw, 9rem);
          padding-bottom: var(--section-gap);
        }
        .profile-back {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: var(--text-meta);
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 500;
          margin-bottom: var(--space-8);
          transition: opacity 150ms ease;
        }
        .profile-back:hover { opacity: 0.6; }
        .profile-header {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: var(--space-8);
          align-items: start;
          margin-bottom: var(--space-8);
        }
        .profile-image-wrap {
          position: sticky;
          top: calc(var(--nav-height) + var(--space-4));
        }
        .profile-role {
          display: block;
          font-size: var(--text-meta);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-muted);
          font-weight: 500;
          margin-bottom: var(--space-2);
        }
        .profile-name {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.06;
          margin-bottom: var(--space-3);
        }
        .profile-focus-tags {
          display: flex;
          gap: var(--space-1);
          flex-wrap: wrap;
          margin-bottom: var(--space-md);
        }
        .profile-focus-tag {
          font-size: var(--text-meta);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border: 1px solid var(--color-divider);
          border-radius: 999px;
          padding: 0.25rem 0.875rem;
        }
        .profile-summary {
          font-size: var(--text-body);
          line-height: 1.65;
          color: var(--color-steel);
          max-width: 52ch;
        }
        .profile-divider {
          height: 1px;
          background: var(--color-divider);
          margin-bottom: var(--space-8);
        }
        .profile-body { max-width: 720px; }
        .profile-bio { margin-bottom: var(--space-8); }
        .profile-bio p, .profile-relevance p {
          font-size: var(--text-body);
          line-height: 1.72;
          color: var(--color-steel);
          margin-bottom: var(--space-md);
          max-width: 66ch;
        }
        .profile-relevance p { color: var(--color-ink); }
        .profile-section-label {
          display: block;
          font-size: var(--text-meta);
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 500;
          margin-bottom: var(--space-md);
        }
        .profile-relevance {
          border-top: 1px solid var(--color-divider);
          padding-top: var(--space-lg);
          margin-bottom: var(--space-8);
        }
        .profile-external-link {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: var(--text-body);
          color: var(--color-signature);
          border-bottom: 1px solid currentColor;
          padding-bottom: 0.125rem;
          transition: opacity 150ms ease;
          margin-top: var(--space-2);
        }
        .profile-external-link:hover { opacity: 0.65; }
        @media (max-width: 860px) {
          .profile-header { grid-template-columns: 1fr; gap: var(--space-lg); }
          .profile-image-wrap { position: static; max-width: 220px; }
        }
      `}} />
    </>
  );
}
