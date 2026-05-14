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
                <span className="profile-focus-tag">Energy Transition</span>
                <span className="profile-focus-tag">Infrastructure</span>
                <span className="profile-focus-tag">Financial Services</span>
                <span className="profile-focus-tag">Capital Networks</span>
              </div>
              <p className="profile-summary">
                Sanjay Tolani leads energy transition and infrastructure at Powerscale. His background in financial services — structured products, institutional client relationships, and cross-border capital access — gives him a specific lens on the financing complexity that defines infrastructure and energy businesses.
              </p>
            </div>
          </div>

          <div className="profile-divider" />

          <div className="profile-body">
            <div className="profile-bio">
              <span className="profile-section-label">Background</span>
              <p>
                His career has been built in financial services — structured products, client relationships, and the capital networks that connect investors and capital sources across borders. His work in the UAE financial sector gives him access to capital relationships and investor networks that are relevant to companies managing capital-intensive growth phases: infrastructure projects, consumer businesses seeking strategic capital, and AI companies at the point where their funding profile has to broaden beyond early-stage VC.
              </p>
              <p>
                The work of a financial services professional in this space is not advisory in the general sense. It is relational and transactional — knowing which capital sources are relevant to a specific company at a specific moment, and having the relationships to facilitate those introductions. That specificity is what distinguishes his presence in the Powerscale ecosystem from a generic advisory role.
              </p>
              <p>
                At Powerscale, Sanjay Tolani extends the firm's capital access into the UAE and Gulf investor ecosystem, with particular relevance to portfolio companies in energy transition and infrastructure — sectors where the financing structure is part of the operating challenge, and where cross-border capital relationships determine what is possible.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">Ecosystem relevance</span>
              <p>
                Capital access in energy transition and infrastructure is not simply a function of investor interest — it requires the right relationships at the right stage, structured appropriately for the risk profile of each transaction. Sanjay Tolani's presence in the Powerscale network gives the firm direct access to UAE and Gulf capital relationships for portfolio companies where that access is operationally relevant.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">What this brings to Powerscale</span>
              <p>
                The firm invests in sectors where capital structure is part of the competitive position. Sanjay Tolani's relationships — in financial services, family office, and structured product markets — extend the firm's ability to support portfolio companies through capital-intensive phases that go beyond what early-stage VC alone can address. For energy transition companies in particular, the ability to make credible introductions into the UAE investor community is a material advantage at the growth stage.
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
          .profile-image-wrap { position: static; max-width: 220px; }
        }
      `}} />
    </>
  );
}
