'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import TiltedCard from '@/components/ui/TiltedCard';

export default function AmitMehtaPage() {
  return (
    <>
      <main className="profile-page">
        <div className="container">

          <Link href="/about" className="profile-back">← Team</Link>

          <div className="profile-header">
            <div className="profile-image-wrap">
              <TiltedCard
                imageSrc="/images/amit-mehta.jpg"
                altText="Amit Mehta"
                rotateAmplitude={6}
                scaleOnHover={1.04}
                showTooltip={false}
                borderRadius="16px"
              />
            </div>
            <div className="profile-info">
              <span className="profile-role">Advisor</span>
              <h1 className="profile-name">Amit Mehta</h1>
              <div className="profile-focus-tags">
                <span className="profile-focus-tag">Capital Markets</span>
                <span className="profile-focus-tag">Institutional Finance</span>
                <span className="profile-focus-tag">Securities</span>
              </div>
              <p className="profile-summary">
                Amit Mehta is a Chartered Accountant and capital markets professional based in Mumbai. He is associated with Sunidhi Securities &amp; Finance Ltd., a firm with a long track record in institutional broking, investment banking, and equity capital markets in India.
              </p>
            </div>
          </div>

          <div className="profile-divider" />

          <div className="profile-body">
            <div className="profile-bio">
              <span className="profile-section-label">Background</span>
              <p>
                Amit Mehta's background spans financial services and capital markets. As a Chartered Accountant (ICAI), his foundation is in the financial architecture that underpins how businesses are structured, valued, and brought to market. His work at Sunidhi Securities &amp; Finance Ltd. places him at the intersection of institutional capital and company-building, where the question is not whether a company is growing but whether its financial systems and capital structure can support what comes next.
              </p>
              <p>
                His engagement with India's equity markets, including SME listings, institutional broking, and capital market activity, gives him a practitioner's view of how companies are evaluated by institutional investors, and what the transition from private to public-market-ready actually requires operationally, not just narratively.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">Operating relevance</span>
              <p>
                For Powerscale portfolio companies approaching institutional capital events, capital markets readiness is a real operating question, not an eventual one. The financial controls, reporting cadence, and governance infrastructure that institutional investors require are not built overnight. Amit's experience in institutional finance provides a practitioner perspective on what that preparation actually looks like from the investor side of the table.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">What this brings to Powerscale</span>
              <p>
                The firm's thesis is that execution complexity is the actual constraint in scaling companies. In the capital markets context, that complexity is financial and structural: governance, reporting, valuation discipline, and investor relations. Amit Mehta's advisory presence gives portfolio companies access to that capital markets perspective at the stage when it is most useful: before the process begins, not after it has started.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/amit-mehta-8315681b/"
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
