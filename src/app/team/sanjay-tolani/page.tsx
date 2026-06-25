'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import TiltedCard from '@/components/ui/TiltedCard';

export default function SanjayTolaniPage() {
  return (
    <>
      <main className="profile-page">
        <div className="container">

          <Link href="/about" className="profile-back">← Team</Link>

          <div className="profile-header">
            <div className="profile-image-wrap">
              <TiltedCard
                imageSrc="/images/sanjay-tolani.png"
                altText="Sanjay Tolani"
                rotateAmplitude={6}
                scaleOnHover={1.04}
                showTooltip={false}
                borderRadius="16px"
              />
            </div>
            <div className="profile-info">
              <span className="profile-role">Partner & Advisor</span>
              <h1 className="profile-name">Sanjay Tolani</h1>
              <div className="profile-focus-tags">
                <span className="profile-focus-tag">Capital Access</span>
                <span className="profile-focus-tag">Financial Structure</span>
                <span className="profile-focus-tag">Investor Relationships</span>
                <span className="profile-focus-tag">UAE–India Corridor</span>
              </div>
              <p className="profile-summary">
                Sanjay brings over two decades of cross-border commercial and investment experience across the UAE and India. His work spans real-estate strategy, structured capital, investor engagement, market expansion, and portfolio development. At Powerscale, he supports founders on capital access, financial structure, commercial partnerships, and the discipline required to scale beyond the first phase of growth. He works across all four focus areas.
              </p>
            </div>
          </div>

          <div className="profile-divider" />

          <div className="profile-body">
            <div className="profile-bio">
              <span className="profile-section-label">Background</span>
              <p>
                Sanjay Tolani has built his career across UAE and India capital corridors over more than two decades. He is an entrepreneur at heart and has successfully run an HRtech company. He is also Chief Commercial Officer at BCD Global, and has previously served as Director, Real Estate Investments at the Private Office of HH Sheikh Ahmed bin Faisal Al Qassimi.
              </p>
              <p>
                His work spans real-estate investments, structured capital, portfolio development, investor engagement, commercial systems, and market expansion. He has worked extensively with UHNW, family office, and institutional capital relationships across borders, giving him access to investor networks that are relevant when founders need to think beyond early-stage VC.
              </p>
              <p>
                At Powerscale, Sanjay works across all four of the firm's focus areas. His contribution is most direct when a company has moved past early traction and needs the discipline, relationships, and capital structure to scale. He helps founders think through investor readiness, financial structuring, market expansion, and the commercial systems that turn growth into something that holds.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">Operating relevance</span>
              <p>
                Capital access is not just a function of investor interest. It requires the right relationships at the right stage, structured appropriately for each company's risk profile and growth plan.
              </p>
              <p>
                Sanjay's presence in the Powerscale network gives portfolio companies access to UAE and Gulf capital relationships that would otherwise take years to build independently.
              </p>
              <p>
                His background in commercial strategy and CRM systems also means he understands the operating side of growth, not just the financing side. That combination is useful when a company's capital plan and commercial plan need to move together.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">What this brings to Powerscale</span>
              <p>
                Powerscale backs companies where capital structure is part of the operating challenge, not a separate conversation.
              </p>
              <p>
                Sanjay's relationships across financial services, family office, and structured product markets extend the firm's ability to support founders through capital-intensive phases.
              </p>
              <p>
                His experience building commercial systems and managing cross-border transactions gives the firm a direct line to that expertise for portfolio companies navigating similar problems.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/sanjaytolani-/"
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
          color: var(--color-signature);
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
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border: 1px solid currentColor;
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
          .profile-image-wrap {
            position: relative;
            top: auto;
            width: 100%;
            max-width: 100%;
            aspect-ratio: auto;
            height: clamp(240px, 55vw, 340px);
            max-height: 340px;
            overflow: hidden;
            border-radius: 16px;
          }
        }

        @media (max-width: 480px) {
          .profile-page {
            padding-top: clamp(4rem, 14vw, 5.5rem);
          }
          .profile-name {
            font-size: clamp(1.75rem, 7vw, 2.5rem);
          }
          .profile-summary {
            max-width: none;
            font-size: clamp(0.9375rem, 4vw, 1.0625rem);
          }
          .profile-image-wrap {
            height: clamp(220px, 55vw, 300px);
          }
          .profile-focus-tags {
            gap: 0.375rem;
          }
        }

        @media (max-width: 360px) {
          .profile-page {
            padding-top: 3.75rem;
          }
          .profile-name {
            font-size: clamp(1.5rem, 7.5vw, 2rem);
          }
          .profile-focus-tag {
            font-size: 0.6875rem;
            padding: 0.2rem 0.5rem;
          }
          .profile-image-wrap {
            height: 200px;
          }
        }
      `}} />
    </>
  );
}
