'use client';

import React, { useState, FormEvent } from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

type Intent = 'founders' | 'ecosystem' | 'general';
type Status = 'idle' | 'submitting' | 'success' | 'error';

const INTENTS: { id: Intent; label: string; helper: string }[] = [
  {
    id: 'founders',
    label: 'Founders',
    helper: 'For founders building across our focus areas',
  },
  {
    id: 'ecosystem',
    label: 'Ecosystem Collaboration',
    helper: 'For partners, operators, advisors, and networks',
  },
  {
    id: 'general',
    label: 'General Queries',
    helper: 'For anything else that should reach us',
  },
];

const FORM_META = {
  founders: {
    title: 'Founder note',
    subtitle: 'Send us the company, stage, and the scaling question you are working through',
    subject: 'Founder note from Powerscale website',
    submitLabel: 'Send founder note',
    successTitle: 'Founder note received',
    successMsg: 'Thanks. We received your founder note and will review it carefully. If there is a fit, we will respond directly.',
    inquiryLabel: 'Founders',
  },
  ecosystem: {
    title: 'Ecosystem collaboration',
    subtitle: 'For operators, advisors, capital partners, sector experts, and networks that can support founders',
    subject: 'Ecosystem collaboration note from Powerscale website',
    submitLabel: 'Send collaboration note',
    successTitle: 'Collaboration note received',
    successMsg: 'Thanks. We received your collaboration note. We will review the context and come back if there is a useful next step.',
    inquiryLabel: 'Ecosystem Collaboration',
  },
  general: {
    title: 'General query',
    subtitle: 'For anything that does not fit the founder or ecosystem route',
    subject: 'General query from Powerscale website',
    submitLabel: 'Send message',
    successTitle: 'Message received',
    successMsg: 'Thanks. Your message has been sent.',
    inquiryLabel: 'General Queries',
  },
};

function FoundersForm() {
  return (
    <>
      <div className="cf-row cf-row--2">
        <div className="form-field">
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" name="Name" type="text" autoComplete="name" required placeholder="Your name" />
        </div>
        <div className="form-field">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="Email" type="email" autoComplete="email" required placeholder="you@company.com" />
        </div>
      </div>
      <div className="cf-row cf-row--2">
        <div className="form-field">
          <label htmlFor="cf-company">Company</label>
          <input id="cf-company" name="Company" type="text" autoComplete="organization" required placeholder="Company name" />
        </div>
        <div className="form-field">
          <label htmlFor="cf-stage">Stage</label>
          <select id="cf-stage" name="Stage" defaultValue="" required>
            <option value="" disabled>Select stage</option>
            <option>Pre-Series A</option>
            <option>Series A</option>
            <option>Series B</option>
            <option>Later stage</option>
            <option>Not raising yet</option>
          </select>
        </div>
      </div>
      <div className="cf-row cf-row--2">
        <div className="form-field">
          <label htmlFor="cf-sector">Sector</label>
          <select id="cf-sector" name="Sector" defaultValue="" required>
            <option value="" disabled>Select sector</option>
            <option>AI Applications and Infrastructure</option>
            <option>Deep Tech</option>
            <option>Energy Transition</option>
            <option>Consumer Products</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="cf-website">Website or deck link <span className="cf-optional">optional</span></label>
          <input id="cf-website" name="Website or deck link" type="text" placeholder="https://" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="cf-building">What are you building, and what is the next scaling challenge?</label>
        <textarea id="cf-building" name="What are you building" required placeholder="Tell us about the company and the constraint you are working through." />
      </div>
    </>
  );
}

function EcosystemForm() {
  return (
    <>
      <div className="cf-row cf-row--2">
        <div className="form-field">
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" name="Name" type="text" autoComplete="name" required placeholder="Your name" />
        </div>
        <div className="form-field">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="Email" type="email" autoComplete="email" required placeholder="you@organisation.com" />
        </div>
      </div>
      <div className="cf-row cf-row--2">
        <div className="form-field">
          <label htmlFor="cf-org">Organisation <span className="cf-optional">optional</span></label>
          <input id="cf-org" name="Organisation" type="text" autoComplete="organization" placeholder="Organisation name" />
        </div>
        <div className="form-field">
          <label htmlFor="cf-collab">Collaboration type</label>
          <select id="cf-collab" name="Collaboration type" defaultValue="" required>
            <option value="" disabled>Select type</option>
            <option>Operator / Advisor</option>
            <option>Capital Partner</option>
            <option>Corporate / Market Access</option>
            <option>Founder Referral</option>
            <option>Sector Expert</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="cf-focus">Focus area <span className="cf-optional">optional</span></label>
        <select id="cf-focus" name="Focus area" defaultValue="">
          <option value="">Select focus area</option>
          <option>AI Applications and Infrastructure</option>
          <option>Deep Tech</option>
          <option>Energy Transition</option>
          <option>Consumer Products</option>
          <option>Cross-sector</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="cf-collaborate">How would you like to collaborate?</label>
        <textarea id="cf-collaborate" name="How would you like to collaborate" required placeholder="Describe what you have in mind and how it connects to what Powerscale does." />
      </div>
    </>
  );
}

function GeneralForm() {
  return (
    <>
      <div className="cf-row cf-row--2">
        <div className="form-field">
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" name="Name" type="text" autoComplete="name" required placeholder="Your name" />
        </div>
        <div className="form-field">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="Email" type="email" autoComplete="email" required placeholder="you@example.com" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="cf-subject">Subject</label>
        <input id="cf-subject" name="Message subject" type="text" required placeholder="What is this about?" />
      </div>
      <div className="form-field">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="Message" required placeholder="Write your message here." />
      </div>
    </>
  );
}

export default function ContactPage() {
  const [intent, setIntent] = useState<Intent>('founders');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const meta = FORM_META[intent];

  function handleIntentChange(next: Intent) {
    setIntent(next);
    setStatus('idle');
    setErrorMsg('');
  }

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
        setErrorMsg(json.message || 'Something went wrong. Please try again or write to support@powerscaleventures.com.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or write to support@powerscaleventures.com.');
    }
  }

  return (
    <>
      <RevealWrapper>
        <section className="contact-section">
          <div className="container">
            <div className="contact-layout">

              {/* ── Left column ── */}
              <div className="contact-left">
                <div className="section-label reveal">Talk to us</div>
                <h1 className="contact-headline reveal reveal-delay-1">
                  If your market is real and the next problem is operational, write to us
                </h1>
                <p className="contact-subhead reveal reveal-delay-2">
                  We are most useful after the first customers are committed and before the next phase of scale begins. Choose the note that fits best, and send us the context we need.
                </p>

                <div className="intent-selector reveal reveal-delay-3">
                  {INTENTS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={intent === item.id}
                      className={`intent-btn${intent === item.id ? ' intent-btn--active' : ''}`}
                      onClick={() => handleIntentChange(item.id)}
                    >
                      <span className="intent-btn__body">
                        <span className="intent-btn__label">{item.label}</span>
                        <span className="intent-btn__helper">{item.helper}</span>
                      </span>
                      <span className="intent-btn__arrow" aria-hidden="true">→</span>
                    </button>
                  ))}
                </div>

                <p className="contact-email-line reveal reveal-delay-4">
                  Or write directly:{' '}
                  <a href="mailto:support@powerscaleventures.com" className="contact-email-link">
                    support@powerscaleventures.com
                  </a>
                </p>
              </div>

              {/* ── Right column — dynamic form ── */}
              <div className="contact-right">
                {status === 'success' ? (
                  <div className="contact-success">
                    <div className="contact-success__check" aria-hidden="true">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M8.5 14.5L12.5 18.5L19.5 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h2 className="contact-success__title">{meta.successTitle}</h2>
                    <p className="contact-success__body">{meta.successMsg}</p>
                    <div className="contact-success__divider" />
                    <p className="contact-success__sub">
                      Learn more about how we work on the{' '}
                      <a href="/approach" className="contact-success__link">Approach page</a>.
                    </p>
                    <button className="contact-success__reset" onClick={() => setStatus('idle')}>
                      Send another note
                    </button>
                  </div>
                ) : (
                  <form
                    key={intent}
                    className="contact-form"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    {/* Web3Forms configuration */}
                    <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
                    <input type="hidden" name="subject" value={meta.subject} />
                    <input type="hidden" name="inquiry_type" value={meta.inquiryLabel} />
                    <input type="checkbox" name="botcheck" style={{ display: 'none' }} aria-hidden="true" tabIndex={-1} />

                    <div className="contact-form__header">
                      <h2 className="contact-form__title">{meta.title}</h2>
                      <p className="contact-form__subtitle">{meta.subtitle}</p>
                    </div>

                    <div className="contact-form__fields">
                      {intent === 'founders' && <FoundersForm />}
                      {intent === 'ecosystem' && <EcosystemForm />}
                      {intent === 'general' && <GeneralForm />}
                    </div>

                    {status === 'error' && (
                      <p className="contact-form__error" role="alert">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      className="contact-form__submit"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? 'Sending…' : meta.submitLabel}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </RevealWrapper>

      <Footer hideCta />

      <style dangerouslySetInnerHTML={{__html: `
        .contact-section {
          padding-top: clamp(5rem, 7vw, 7rem);
          padding-bottom: clamp(3rem, 6vw, 5rem);
        }

        .contact-layout {
          display: grid;
          grid-template-columns: minmax(min(100%, 320px), 0.9fr) minmax(min(100%, 400px), 1.1fr);
          gap: clamp(2.5rem, 5vw, 5rem);
          align-items: start;
        }

        /* ── Left column ── */
        .contact-left {
          position: sticky;
          top: calc(var(--nav-height) + var(--space-4));
        }

        .contact-left .section-label {
          margin-bottom: clamp(0.875rem, 1.5vw, 1.25rem);
        }

        .contact-headline {
          font-size: clamp(1.375rem, 2vw, 2rem);
          font-weight: var(--weight-medium);
          line-height: 1.18;
          letter-spacing: -0.022em;
          color: var(--color-ink-primary);
          max-width: none;
          margin-bottom: var(--space-sm);
        }

        .contact-subhead {
          font-size: var(--text-body);
          color: var(--color-ink-secondary);
          line-height: 1.65;
          max-width: none;
          margin-bottom: var(--space-md);
        }

        /* ── Intent selector ── */
        .intent-selector {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          margin-bottom: var(--space-md);
        }

        .intent-btn {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          background: transparent;
          border: 1px solid var(--color-divider);
          border-radius: 12px;
          padding: 0.8rem 1rem;
          cursor: pointer;
          text-align: left;
          transition: border-color 200ms ease, background 200ms ease;
          font: inherit;
        }

        .intent-btn:hover {
          border-color: var(--color-signature);
          background: rgba(47, 111, 106, 0.04);
        }

        .intent-btn--active {
          border-color: var(--color-signature);
          background: rgba(47, 111, 106, 0.05);
        }

        :root[data-theme='dark'] .intent-btn:hover,
        :root[data-theme='dark'] .intent-btn--active {
          background: rgba(138, 187, 180, 0.07);
        }

        .intent-btn__body {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .intent-btn__label {
          display: block;
          font-size: 0.9375rem;
          font-weight: var(--weight-semibold);
          color: var(--color-ink-primary);
          line-height: 1.3;
        }

        .intent-btn__helper {
          display: block;
          font-size: 0.8125rem;
          color: var(--color-muted);
          line-height: 1.4;
        }

        .intent-btn__arrow {
          color: var(--color-signature);
          font-size: 1rem;
          opacity: 0.25;
          flex-shrink: 0;
          transition: opacity 200ms ease;
        }

        .intent-btn--active .intent-btn__arrow {
          opacity: 1;
        }

        .intent-btn:hover .intent-btn__arrow {
          opacity: 0.65;
        }

        .contact-email-line {
          font-size: 0.8125rem;
          color: var(--color-muted);
          line-height: 1.6;
        }

        .contact-email-link {
          color: var(--color-signature);
          border-bottom: 1px solid currentColor;
          transition: opacity 150ms ease;
        }

        .contact-email-link:hover {
          opacity: 0.7;
        }

        /* ── Form card ── */
        .contact-right {
          /* no sticky — form scrolls naturally */
        }

        .contact-form {
          background: var(--color-surface);
          border: 1px solid var(--color-divider);
          border-radius: 1.5rem;
          padding: clamp(1.75rem, 3vw, 2.5rem);
        }

        .contact-form__header {
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-divider);
          margin-bottom: 1.25rem;
        }

        .contact-form__title {
          font-size: clamp(1.25rem, 2vw, 1.625rem);
          font-weight: var(--weight-semibold);
          color: var(--color-ink-primary);
          letter-spacing: -0.02em;
          margin-bottom: 0.375rem;
        }

        .contact-form__subtitle {
          font-size: 0.875rem;
          color: var(--color-muted);
          line-height: 1.55;
        }

        /* Field grid system */
        .contact-form__fields {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .cf-row {
          display: grid;
          gap: 0.75rem;
        }

        .cf-row--2 {
          grid-template-columns: 1fr 1fr;
        }

        /* Form field overrides within form card */
        .contact-form .form-field label {
          font-size: 0.725rem;
          letter-spacing: 0.08em;
          font-weight: 600;
          color: var(--color-ink-secondary);
        }

        .contact-form .form-field input,
        .contact-form .form-field select,
        .contact-form .form-field textarea {
          min-height: 3.1rem;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          font-size: 1rem;
          background: var(--color-canvas);
          border-color: var(--color-divider);
          color: var(--color-ink-primary);
        }

        .contact-form .form-field textarea {
          min-height: 9.5rem;
          resize: vertical;
        }

        .contact-form .form-field input::placeholder,
        .contact-form .form-field textarea::placeholder {
          color: var(--color-muted);
          opacity: 0.7;
        }

        .cf-optional {
          font-weight: 400;
          color: var(--color-muted);
          font-size: 0.7rem;
          text-transform: none;
          letter-spacing: 0;
          margin-left: 0.25rem;
        }

        .contact-form__error {
          font-size: var(--text-meta);
          color: #c0392b;
          line-height: 1.5;
          margin-top: 0.25rem;
        }

        :root[data-theme='dark'] .contact-form__error {
          color: #e97878;
        }

        .contact-form__submit {
          width: 100%;
          min-height: 3.25rem;
          margin-top: 0.5rem;
          border: 0;
          border-radius: var(--radius-pill);
          background: var(--color-ink);
          color: var(--color-canvas);
          cursor: pointer;
          font: inherit;
          font-size: 0.9375rem;
          font-weight: var(--weight-medium);
          transition: transform var(--duration-fast) var(--ease-out),
                      opacity var(--duration-fast) var(--ease-out);
        }

        .contact-form__submit:hover:not(:disabled) {
          transform: translateY(-1px);
          opacity: 0.9;
        }

        .contact-form__submit:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        /* ── Success state ── */
        .contact-success {
          background: var(--color-surface);
          border: 1px solid var(--color-divider);
          border-radius: 1.5rem;
          padding: clamp(2rem, 4vw, 3rem) clamp(1.75rem, 3vw, 2.5rem);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--space-md);
        }

        .contact-success__check {
          color: var(--color-signature);
        }

        .contact-success__title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: var(--weight-medium);
          color: var(--color-ink-primary);
          letter-spacing: -0.02em;
        }

        .contact-success__body {
          font-size: var(--text-body);
          color: var(--color-ink-secondary);
          line-height: 1.65;
          max-width: 38ch;
        }

        .contact-success__divider {
          width: 100%;
          height: 1px;
          background: var(--color-divider);
          margin: var(--space-1) 0;
        }

        .contact-success__sub {
          font-size: var(--text-meta);
          color: var(--color-muted);
          line-height: 1.6;
        }

        .contact-success__link {
          color: var(--color-signature);
          border-bottom: 1px solid currentColor;
          transition: opacity 150ms ease;
        }

        .contact-success__link:hover {
          opacity: 0.7;
        }

        .contact-success__reset {
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

        .contact-success__reset:hover {
          opacity: 0.65;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }

          .contact-left {
            position: static;
          }
        }

        @media (max-width: 640px) {
          .contact-section {
            padding-top: clamp(4rem, 14vw, 5.5rem);
          }
          .contact-headline {
            font-size: clamp(1.375rem, 5.5vw, 1.75rem);
          }
          .intent-btn {
            padding: 0.7rem 0.875rem;
          }
        }

        @media (max-width: 560px) {
          .cf-row--2 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .contact-form {
            padding: 1.5rem 1.25rem;
          }
          .contact-form__title {
            font-size: clamp(1.125rem, 5.5vw, 1.5rem);
          }
          .contact-success {
            padding: 1.5rem 1.25rem;
          }
        }

        @media (max-width: 360px) {
          .contact-section {
            padding-top: 4rem;
          }
          .contact-form {
            padding: 1.25rem 1rem;
          }
          .intent-btn__helper {
            font-size: 0.75rem;
          }
        }
      `}} />
    </>
  );
}
