'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import TiltedCard from '@/components/ui/TiltedCard';

export default function SatyaDasPage() {
  return (
    <>
      <main className="profile-page">
        <div className="container">

          <Link href="/about" className="profile-back">← Team</Link>

          <div className="profile-header">
            <div className="profile-image-wrap">
              <TiltedCard
                imageSrc="/images/satyabrata-das.png"
                altText="Satya Das"
                rotateAmplitude={6}
                scaleOnHover={1.04}
                showTooltip={false}
                borderRadius="16px"
              />
            </div>
            <div className="profile-info">
              <span className="profile-role">Partner & Advisor</span>
              <h1 className="profile-name">Satya Das</h1>
              <div className="profile-focus-tags">
                <span className="profile-focus-tag">Deeptech & AI</span>
                <span className="profile-focus-tag">Finance Leadership</span>
                <span className="profile-focus-tag">Post-Investment Systems</span>
              </div>
              <p className="profile-summary">
                Satya Das leads deeptech and AI at Powerscale. His background in finance leadership and business strategy gives him a specific lens on post-investment operating systems — the financial controls, governance structures, and management architecture that determine whether a company scales cleanly after the round closes.
              </p>
            </div>
          </div>

          <div className="profile-divider" />

          <div className="profile-body">
            <div className="profile-bio">
              <span className="profile-section-label">Background</span>
              <p>
                His background in finance leadership and business strategy gives him a specific lens on what portfolio companies need to build after the round closes: financial controls, governance structures, reporting cadence, and the compliance infrastructure that becomes relevant as companies scale toward larger institutional rounds.
              </p>
              <p>
                At Powerscale, Satya Das contributes primarily on the post-investment side — specifically on the financial and operational systems that determine whether a company is ready for its next institutional capital event. His advisory role is most active in the period between the round closing and the company's first major scaling decision, when the internal infrastructure often has to be rebuilt to match the company's new capital profile.
              </p>
              <p>
                His work with companies across technology sectors gives him context on the specific operating challenges that emerge at the Series A and B stage — and on the pattern of where internal systems tend to fail at the transition from early-stage to institutional growth.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">Operating relevance</span>
              <p>
                Post-investment infrastructure is underrated as a source of operational leverage. Companies that get the financial controls, governance, and compliance structure right after a round close have more room to operate aggressively in the market. Companies that do not find themselves spending management bandwidth on internal firefighting instead of growth. Satya Das's advisory presence in the Powerscale network directly addresses this operational risk for portfolio companies.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">What this brings to Powerscale</span>
              <p>
                The firm's post-investment engagement includes a working-capital review and a financial systems assessment in the first ninety days. Satya Das's background in finance, compliance, and post-investment systems means the firm has access to specific expertise in this area — applied to a specific company's specific situation, not delivered as a consulting framework. His portfolio breadth across technically complex sectors also provides useful cross-sector pattern recognition on the governance challenges that emerge at growth stage.
              </p>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/posts/satyadas76_cfo-financeleadership-businessstrategy-share-7398384399563534338-aYSL?utm_source=share&utm_medium=member_ios&rcm=ACoAAABrRDcBZ9pV-qQiPgUN_iV0YS5UnZjWv7I"
            className="profile-external-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn reference ↗
          </a>

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
          .profile-image-wrap { position: static; max-width: 220px; }
        }
      `}} />
    </>
  );
}
