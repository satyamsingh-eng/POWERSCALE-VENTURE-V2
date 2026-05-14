'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import TiltedCard from '@/components/ui/TiltedCard';

export default function RajeshKumarAdlaPage() {
  return (
    <>
      <main className="profile-page">
        <div className="container">

          <Link href="/about" className="profile-back">← Team</Link>

          <div className="profile-header">
            <div className="profile-image-wrap">
              <TiltedCard
                imageSrc="/images/rajesh-kumar.png"
                altText="Rajesh Kumar Adla"
                rotateAmplitude={6}
                scaleOnHover={1.04}
                showTooltip={false}
                borderRadius="16px"
              />
            </div>
            <div className="profile-info">
              <span className="profile-role">Advisor</span>
              <h1 className="profile-name">Rajesh Kumar Adla</h1>
              <div className="profile-focus-tags">
                <span className="profile-focus-tag">Founder Ecosystem</span>
                <span className="profile-focus-tag">Incubation</span>
                <span className="profile-focus-tag">Healthcare & Spacetech</span>
              </div>
              <p className="profile-summary">
                Rajesh Kumar Adla is the CEO of AIC T-Hub Hyderabad and a Mentor of Change at Atal Innovation Mission (AIM), NITI Aayog — positions that place him at the centre of India's institutional startup infrastructure.
              </p>
            </div>
          </div>

          <div className="profile-divider" />

          <div className="profile-body">
            <div className="profile-bio">
              <span className="profile-section-label">Background</span>
              <p>
                His work at T-Hub — one of India's largest innovation ecosystems — puts him at the centre of the country's institutional startup infrastructure: the incubation programs, the corporate connection networks, the government linkages, and the founder community that moves through one of India's most active innovation environments. His role as Mentor of Change at the Atal Innovation Mission gives him direct visibility into India's early-stage startup pipeline across sectors, including healthcare, spacetech, and deep science.
              </p>
              <p>
                His operating background extends beyond his ecosystem roles into product and technology work, giving him a perspective on what early-stage founders need that is more grounded than the view from a purely institutional position. That combination of operating experience and ecosystem access gives him a place in the Powerscale advisor network that is specifically useful for sourcing and founder introductions.
              </p>
              <p>
                At Powerscale, Rajesh Kumar Adla's primary contribution is ecosystem access: the ability to surface founder introductions, sector intelligence, and institutional network connections across India's innovation infrastructure. For a firm investing at Series A and B, having a presence at the incubation and early-stage layer of the ecosystem — where tomorrow's portfolio candidates are building their first businesses — is a sourcing advantage that compounds over time.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">Ecosystem relevance</span>
              <p>
                India's startup ecosystem is concentrated in institutional nodes — T-Hub, IIT incubators, AIM programs, and the corporate accelerator networks that connect early-stage companies to their first institutional partners. Rajesh Kumar Adla's operating presence at one of those nodes gives Powerscale direct visibility into the pipeline, the people, and the problems that are forming at the stage before Series A.
              </p>
              <p>
                His healthcare and spacetech experience is additionally relevant for Powerscale portfolio companies navigating regulated sector commercialization — where the path from product to market requires understanding institutional buyer dynamics, regulatory timelines, and deployment complexity that is distinct from enterprise software or consumer businesses.
              </p>
            </div>

            <div className="profile-relevance">
              <span className="profile-section-label">What this brings to Powerscale</span>
              <p>
                The firm invests at Series A and B, but the best relationships start earlier. Rajesh Kumar Adla's position in India's startup institutional infrastructure gives Powerscale early visibility into the founders and sectors the firm will eventually want to back — before they are in a competitive fundraising process. His presence also extends the firm's reach into the healthcare and spacetech sectors, where Powerscale's portfolio relevance may expand as the firm's deployment profile matures.
              </p>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/rajeshkumaradla?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            className="profile-external-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
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
