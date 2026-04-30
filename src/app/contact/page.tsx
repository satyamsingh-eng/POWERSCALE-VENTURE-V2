'use client';

import React from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <RevealWrapper>
        <section className="contact-section">
          <div className="container">
            <div className="contact__layout">
              <div className="contact__intro">
                <div className="section-label reveal">Talk to us</div>
                <h1 className="contact__title reveal reveal-delay-1">
                  If you're building something that fits, write to us.
                </h1>
                <p className="contact__note reveal reveal-delay-2">
                  We are most useful after the first market is real and the next constraint is operational: hiring, channel quality, capital timing, or execution cadence.
                </p>
              </div>

              <form
                className="contact__form reveal reveal-delay-3"
                action="mailto:founders@powerscale.vc"
                method="post"
                encType="text/plain"
              >
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="Name" type="text" autoComplete="name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="Email" type="email" autoComplete="email" required />
                </div>
                <div className="form-field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="Company" type="text" autoComplete="organization" required />
                </div>
                <div className="form-field">
                  <label htmlFor="stage">Stage</label>
                  <select id="stage" name="Stage" defaultValue="" required>
                    <option value="" disabled>Select stage</option>
                    <option>Pre-Series A</option>
                    <option>Series A</option>
                    <option>Series B</option>
                    <option>Later stage</option>
                    <option>Not raising yet</option>
                  </select>
                </div>
                <div className="form-field contact__textarea">
                  <label htmlFor="building">What are you building?</label>
                  <textarea id="building" name="What are you building" required />
                </div>
                <button className="contact__submit" type="submit">Send founder note</button>
              </form>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .contact-section {
          padding-top: calc(var(--nav-height) + var(--space-6));
          padding-bottom: var(--space-8);
          min-height: 100dvh;
        }

        .contact__layout {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(360px, 0.8fr);
          gap: var(--space-8);
          align-items: start;
        }

        .contact__title {
          font-family: var(--font-primary);
          font-size: clamp(40px, 4.5vw, 64px);
          font-weight: var(--weight-medium);
          line-height: 1.08;
          margin-bottom: var(--space-3);
          max-width: 680px;
        }

        .contact__note {
          font-size: var(--text-body);
          line-height: 1.65;
          color: var(--color-steel);
          max-width: 560px;
        }

        .contact__form {
          display: grid;
          gap: 12px;
          border: 1px solid var(--color-divider);
          border-radius: var(--radius-section);
          background: var(--color-surface);
          padding: var(--space-3);
        }

        .contact__form .form-field {
          gap: 6px;
        }

        .contact__form input,
        .contact__form select {
          min-height: 44px;
          padding: 10px var(--space-2);
        }

        .contact__form textarea {
          min-height: 136px;
        }

        .contact__textarea {
          margin-top: 0;
        }

        .contact__submit {
          width: 100%;
          min-height: 52px;
          border: 0;
          border-radius: var(--radius-pill);
          background: var(--color-ink);
          color: var(--color-canvas);
          cursor: pointer;
          font: inherit;
          font-weight: var(--weight-medium);
          transition: transform var(--duration-fast) var(--ease-out), opacity var(--duration-fast) var(--ease-out);
        }

        .contact__submit:hover {
          transform: translateY(-1px);
          opacity: 0.9;
        }

        @media (max-width: 900px) {
          .contact__layout {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
        }
      `}} />
    </>
  );
}
