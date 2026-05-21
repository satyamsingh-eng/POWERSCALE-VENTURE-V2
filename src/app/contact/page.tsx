'use client';

import React, { useState, FormEvent } from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(json.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Could not send your note. Please check your connection and try again.');
    }
  }

  return (
    <>
      <RevealWrapper>
        <section className="contact-section">
          <div className="container">
            <div className="contact__layout">
              <div className="contact__intro">
                <div className="section-label reveal">Talk to us</div>
                <h1 className="contact__title reveal reveal-delay-1">
                  If your market is real and the next problem is operational, write to us
                </h1>
                <p className="contact__note reveal reveal-delay-2">
                  We are most useful after the first customers are committed and before the next phase of scale begins. The problems we work on are specific: hiring, channel structure, capital timing, and market access.
                </p>
                <p className="contact__note contact__note--secondary reveal reveal-delay-3">
                  We read every note. If there is a fit, we will respond within a week. If the timing is not right, we will say so directly.
                </p>
              </div>

              {status === 'success' ? (
                <div className="contact__success">
                  <div className="contact__success-check" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8.5 14.5L12.5 18.5L19.5 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 className="contact__success-title">We&apos;ve got your note</h2>
                  <p className="contact__success-body">
                    Thank you for reaching out. We read every message personally. If there is a fit, we will be in touch within a week. If the timing is not right, we will still say so directly.
                  </p>
                  <div className="contact__success-divider" />
                  <p className="contact__success-sub">
                    In the meantime, you can learn more about how we work on the{' '}
                    <a href="/approach" className="contact__success-link">Approach page</a>.
                  </p>
                  <button
                    className="contact__success-reset"
                    onClick={() => setStatus('idle')}
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form
                  className="contact__form reveal reveal-delay-3"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
                  <input type="hidden" name="subject" value="New founder note — Powerscale Ventures" />
                  {/* Honeypot anti-spam */}
                  <input type="checkbox" name="botcheck" className="contact__honeypot" aria-hidden="true" tabIndex={-1} />

                  <div className="form-field">
                    <label htmlFor="category">I am reaching out as</label>
                    <select id="category" name="Category" defaultValue="" required>
                      <option value="" disabled>Select one</option>
                      <option>Founders</option>
                      <option>Ecosystem Collaboration</option>
                      <option>General Queries</option>
                    </select>
                  </div>
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
                      <option>Seed / Early Stage</option>
                      <option>Growth — Early</option>
                      <option>Growth — Later</option>
                      <option>Later stage</option>
                      <option>Not raising yet</option>
                    </select>
                  </div>
                  <div className="form-field contact__textarea">
                    <label htmlFor="building">What are you building, and what is the constraint you are trying to solve?</label>
                    <textarea id="building" name="What are you building" required />
                  </div>

                  {status === 'error' && (
                    <p className="contact__error" role="alert">{errorMsg}</p>
                  )}

                  <button
                    className="contact__submit"
                    type="submit"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send founder note'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .contact-section {
          padding-top: clamp(7rem, 10vw, 9rem);
          padding-bottom: clamp(3rem, 8vw, 6rem);
        }

        .contact__layout {
          display: grid;
          grid-template-columns: 1fr minmax(0, 480px);
          gap: var(--space-8);
          align-items: start;
        }

        .contact__title {
          font-size: clamp(1.75rem, 4vw, 3.25rem);
          font-weight: var(--weight-medium);
          line-height: 1.1;
          margin-bottom: var(--space-lg);
          max-width: 22ch;
        }

        .contact__note {
          font-size: var(--text-body);
          line-height: 1.65;
          color: var(--color-ink-secondary);
          max-width: 50ch;
        }

        .contact__note--secondary {
          margin-top: var(--space-md);
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .contact__form {
          display: grid;
          gap: 12px;
          border: 1px solid var(--color-divider);
          border-radius: var(--radius-section);
          background: var(--color-surface);
          padding: var(--space-3);
        }

        .contact__honeypot {
          display: none !important;
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

        .contact__error {
          font-size: var(--text-meta);
          color: #c0392b;
          line-height: 1.5;
          padding: var(--space-1) 0;
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

        .contact__submit:hover:not(:disabled) {
          transform: translateY(-1px);
          opacity: 0.9;
        }

        .contact__submit:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        /* Success state */
        .contact__success {
          border: 1px solid var(--color-divider);
          border-radius: var(--radius-section);
          background: var(--color-surface);
          padding: var(--space-8) var(--space-lg);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--space-md);
        }

        .contact__success-check {
          color: var(--color-signature);
          display: flex;
          align-items: center;
          margin-bottom: var(--space-1);
        }

        .contact__success-title {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: var(--weight-medium);
          color: var(--color-ink-primary);
          letter-spacing: -0.02em;
        }

        .contact__success-body {
          font-size: var(--text-body);
          color: var(--color-ink-secondary);
          line-height: 1.65;
          max-width: 40ch;
        }

        .contact__success-divider {
          width: 100%;
          height: 1px;
          background: var(--color-divider);
          margin: var(--space-1) 0;
        }

        .contact__success-sub {
          font-size: var(--text-meta);
          color: var(--color-muted);
          line-height: 1.6;
        }

        .contact__success-link {
          color: var(--color-signature);
          border-bottom: 1px solid currentColor;
          transition: opacity 150ms ease;
        }

        .contact__success-link:hover {
          opacity: 0.7;
        }

        .contact__success-reset {
          background: none;
          border: none;
          padding: 0;
          font: inherit;
          font-size: var(--text-meta);
          color: var(--color-signature);
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: var(--weight-medium);
          transition: opacity 150ms ease;
        }

        .contact__success-reset:hover {
          opacity: 0.65;
        }

        @media (max-width: 860px) {
          .contact__layout {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }
        }
      `}} />
    </>
  );
}
