'use client';

import React from 'react';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

const ALL_ENTRIES = [
  { id: "049", decision: "Learn in a harder operating market before spending into expansion.", tradeoff: "The launch story looked less clean.", outcome: "The team found which parts of the playbook survived contact with field reality.", attribution: "Anonymized consumer note", sector: "Consumer" },
  { id: "048", decision: "Own the infrastructure dependency instead of outsourcing it.", tradeoff: "The plan became heavier before it became stronger.", outcome: "The company reduced a constraint that would have limited every later market.", attribution: "Anonymized energy note", sector: "Energy Transition" },
  { id: "047", decision: "Hold hiring until the manager layer could forecast cleanly.", tradeoff: "The company accepted a less aggressive hiring narrative.", outcome: "The next hiring wave had clearer territories, standards, and accountability.", attribution: "Anonymized GTM note", sector: "Scaling" },
  { id: "046", decision: "Replace demo-led selling with workflow-led implementation.", tradeoff: "The sales process became slower and more operational.", outcome: "Retention depended less on novelty and more on embedded usage.", attribution: "Anonymized AI note", sector: "AI" },
  { id: "045", decision: "Keep pricing discipline when incumbents tried to reset the market.", tradeoff: "Some customers walked.", outcome: "The remaining accounts forced the company to prove deployment quality.", attribution: "Anonymized infrastructure note", sector: "Deeptech" },
  { id: "044", decision: "Renegotiate the commercial structure before scaling deployment.", tradeoff: "Momentum paused while the operating model was rebuilt.", outcome: "The company avoided compounding a weak contract into a larger problem.", attribution: "Anonymized energy note", sector: "Energy Transition" },
];

export default function IndexPage() {
  return (
    <>
      <RevealWrapper>
        <section className="index-hero">
          <div className="container">
            <div className="section-label reveal">Operator Index</div>
            <h1 className="index-hero__title reveal reveal-delay-1">
              A public ledger of<br />scaling decisions.
            </h1>
            <p className="index-hero__desc reveal reveal-delay-2">
              Numbered operating notes from decisions where the tradeoff mattered. Public attribution is added only when the company has approved it.
            </p>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="index-list-section">
          <div className="container">
            <div className="index-entries">
              {ALL_ENTRIES.map((entry, i) => (
                <div key={entry.id} className={`index-entry reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                  <div className="index-entry__left">
                    <span className="index-entry__id">№ {entry.id}</span>
                    <span className="index-entry__sector">{entry.sector}</span>
                  </div>
                  <div className="index-entry__right">
                    <p className="index-entry__text"><span>Decision</span> {entry.decision}</p>
                    <p className="index-entry__text"><span>Tradeoff</span> {entry.tradeoff}</p>
                    <p className="index-entry__text"><span>Outcome</span> {entry.outcome}</p>
                    <span className="index-entry__attribution">— {entry.attribution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .index-hero {
          padding-top: calc(var(--nav-height) + 8rem);
          padding-bottom: var(--section-gap);
        }

        .index-hero__title {
          font-family: var(--font-primary);
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-lg);
        }

        .index-hero__desc {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--color-steel);
          max-width: 55ch;
        }

        .index-list-section {
          padding-bottom: var(--section-gap);
        }

        .index-entry {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: var(--space-lg);
          padding: var(--space-lg) 0;
          border-bottom: 1px solid var(--color-divider);
        }

        .index-entry:first-child {
          border-top: 1px solid var(--color-divider);
        }

        .index-entry__left {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .index-entry__id {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--color-signature);
          font-weight: 500;
        }

        .index-entry__sector {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--color-steel);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .index-entry__text {
          font-size: 1.15rem;
          line-height: 1.6;
          color: var(--color-ink);
          margin-bottom: var(--space-1);
          max-width: 60ch;
        }

        .index-entry__text span {
          color: var(--color-signature);
          font-size: var(--text-meta);
          font-weight: var(--weight-medium);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-right: var(--space-1);
        }

        .index-entry__attribution {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--color-steel);
        }

        @media (max-width: 768px) {
          .index-entry {
            grid-template-columns: 1fr;
            gap: var(--space-sm);
          }
          .index-entry__left {
            flex-direction: row;
            align-items: center;
          }
        }
      `}} />
    </>
  );
}
