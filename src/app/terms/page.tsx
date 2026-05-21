'use client';

import React from 'react';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <main className="legal-page">

        <div className="legal-hero">
          <span className="legal-eyebrow">Legal</span>
          <h1 className="legal-h1">Terms &amp; Conditions</h1>
          <div className="legal-meta">
            <span>Adyartha Ventures Private Limited (&ldquo;Powerscale Ventures&rdquo;)</span>
            <span className="legal-meta-sep">·</span>
            <span>Last updated: 2026</span>
          </div>
        </div>

        <article className="legal-document">

          <div className="legal-intro">
            <p>
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the website located at www.powerscaleventures.com (&ldquo;Website&rdquo;), operated by Adyartha Ventures Private Limited (&ldquo;Powerscale Ventures&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Website.
            </p>
          </div>

          <div className="legal-section">
            <h2>I. Acceptance of Terms</h2>
            <p>
              By accessing this Website, you confirm that you are at least 18 years of age, have the legal capacity to enter into binding agreements, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use the Website.
            </p>
            <p>
              Powerscale Ventures reserves the right to modify these Terms at any time. Continued use of the Website following any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
            </p>
          </div>

          <div className="legal-section">
            <h2>II. Use of Website</h2>
            <p>
              The Website is intended for informational purposes only. You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit their use and enjoyment of the Website.
            </p>
            <p>You agree not to:</p>
            <ol>
              <li>Use the Website in any way that violates applicable local, national, or international laws or regulations.</li>
              <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
              <li>Attempt to gain unauthorised access to any part of the Website or its related systems or networks.</li>
              <li>Use the Website to transmit any harmful, offensive, or otherwise objectionable content.</li>
              <li>Reproduce, duplicate, copy, or resell any part of the Website in breach of these Terms.</li>
            </ol>
          </div>

          <div className="legal-section">
            <h2>III. Intellectual Property</h2>
            <p>
              All content on this Website, including but not limited to text, graphics, logos, images, and software, is the property of Adyartha Ventures Private Limited or its content suppliers and is protected by applicable intellectual property laws.
            </p>
            <p>
              You may access and view Website content for your personal, non-commercial use only. No content may be reproduced, distributed, modified, or used for commercial purposes without the prior written consent of Powerscale Ventures.
            </p>
          </div>

          <div className="legal-section">
            <h2>IV. No Investment Advice</h2>
            <p>
              Nothing on this Website constitutes investment advice, financial advice, legal advice, or any other form of professional advice. The information on this Website is provided for general informational purposes only. Any investment or financial decisions should be made only after consulting a qualified professional adviser.
            </p>
            <p>
              Powerscale Ventures makes no representations or warranties regarding the accuracy, completeness, or suitability of any information on the Website for any particular purpose. Past portfolio performance or outcomes described on this Website are not indicative of future results.
            </p>
          </div>

          <div className="legal-section">
            <h2>V. Third-Party Links</h2>
            <p>
              The Website may contain links to third-party websites or services that are not owned or controlled by Powerscale Ventures. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div className="legal-section">
            <h2>VI. Disclaimer of Warranties</h2>
            <p>
              The Website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p>
              Powerscale Ventures does not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components. You use the Website at your own risk.
            </p>
          </div>

          <div className="legal-section">
            <h2>VII. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Adyartha Ventures Private Limited and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Website or its content.
            </p>
            <p>
              In no event shall our total liability to you for all claims arising out of or relating to your use of the Website exceed the amount, if any, paid by you to Powerscale Ventures in the twelve months preceding the claim.
            </p>
          </div>

          <div className="legal-section">
            <h2>VIII. Privacy</h2>
            <p>
              Your use of the Website is also governed by our <a href="/privacy-policy" className="legal-email-link">Privacy Policy</a>, which is incorporated into these Terms by reference. By using the Website, you consent to the collection and use of your information as described in the Privacy Policy.
            </p>
          </div>

          <div className="legal-section">
            <h2>IX. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in India.
            </p>
          </div>

          <div className="legal-section">
            <h2>X. Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="legal-contact-block">
              <p><strong>Adyartha Ventures Private Limited (Powerscale Ventures)</strong></p>
              <p>Email: <a href="mailto:support@powerscaleventures.com" className="legal-email-link">support@powerscaleventures.com</a></p>
              <p>Website: <a href="https://www.powerscaleventures.com" className="legal-email-link" target="_blank" rel="noopener noreferrer">www.powerscaleventures.com</a></p>
            </div>
          </div>

        </article>
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .legal-page {
          padding-top: clamp(7rem, 10vw, 10rem);
          padding-bottom: clamp(2rem, 4vw, 3rem);
          padding-left: var(--container-padding);
          padding-right: var(--container-padding);
        }

        .legal-hero {
          max-width: 1100px;
          margin: 0 auto clamp(3rem, 6vw, 5rem);
        }

        .legal-eyebrow {
          display: block;
          font-size: var(--text-meta);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: var(--weight-medium);
          color: var(--color-signature);
          margin-bottom: var(--space-3);
        }

        .legal-h1 {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: var(--weight-semibold);
          letter-spacing: -0.04em;
          line-height: 0.95;
          color: var(--color-ink-primary);
          text-wrap: balance;
          margin-bottom: var(--space-4);
        }

        .legal-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: var(--text-meta);
          color: var(--color-muted);
        }

        .legal-meta-sep {
          color: var(--color-divider);
        }

        .legal-document {
          max-width: 960px;
          margin: 0 auto;
        }

        .legal-intro {
          padding-bottom: clamp(2rem, 4vw, 3.5rem);
          border-bottom: 1px solid var(--color-divider);
        }

        .legal-intro p {
          font-size: clamp(1rem, 1.15vw, 1.125rem);
          line-height: 1.75;
          color: var(--color-ink-secondary);
          max-width: 72ch;
          margin-bottom: var(--space-md);
        }

        .legal-intro p:last-child {
          margin-bottom: 0;
        }

        .legal-section {
          padding: clamp(2rem, 4vw, 3.5rem) 0;
          border-top: 1px solid var(--color-divider);
        }

        .legal-section h2 {
          font-size: clamp(1.25rem, 2vw, 1.75rem);
          font-weight: var(--weight-semibold);
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--color-ink-primary);
          margin-bottom: var(--space-md);
        }

        .legal-section p {
          font-size: clamp(1rem, 1.15vw, 1.125rem);
          line-height: 1.75;
          color: var(--color-ink-secondary);
          max-width: 72ch;
          margin-bottom: var(--space-sm);
        }

        .legal-section p:last-child {
          margin-bottom: 0;
        }

        .legal-section ol,
        .legal-section ul {
          padding-left: 1.5rem;
          margin-bottom: var(--space-sm);
        }

        .legal-section li {
          font-size: clamp(1rem, 1.15vw, 1.125rem);
          line-height: 1.75;
          color: var(--color-ink-secondary);
          max-width: 68ch;
          margin-bottom: 0.5rem;
        }

        .legal-section li:last-child {
          margin-bottom: 0;
        }

        .legal-contact-block {
          background: var(--color-surface-soft);
          border: 1px solid var(--color-divider);
          border-radius: 14px;
          padding: var(--space-md) var(--space-lg);
          margin: var(--space-md) 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .legal-contact-block p {
          margin-bottom: 0 !important;
        }

        .legal-email-link {
          color: var(--color-signature);
          border-bottom: 1px solid currentColor;
          padding-bottom: 0.0625rem;
          transition: opacity 150ms ease;
        }

        .legal-email-link:hover {
          opacity: 0.65;
        }

        @media (max-width: 768px) {
          .legal-page {
            padding-top: 6rem;
          }

          .legal-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }

          .legal-meta-sep {
            display: none;
          }

          .legal-contact-block {
            padding: var(--space-sm) var(--space-md);
          }
        }
      `}} />
    </>
  );
}
