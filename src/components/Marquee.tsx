'use client';

import React from 'react';
import LogoLoop from './ui/LogoLoop';

const operatorLoop = [
  { node: "HIRING BAR" },
  { node: "CHANNEL MIX" },
  { node: "WORKING CAPITAL" },
  { node: "UNIT ECONOMICS" },
  { node: "REGULATORY SEQUENCING" },
  { node: "ACCOUNT RETENTION" },
  { node: "MANUFACTURING RISK" },
  { node: "DISTRIBUTION DECAY" },
  { node: "GTM CADENCE" },
  { node: "COHORT BEHAVIOR" },
  { node: "PRICING DISCIPLINE" },
  { node: "MANAGER BANDWIDTH" },
  { node: "BURN RATE DISCIPLINE" },
  { node: "DEPLOYMENT CADENCE" },
  { node: "SALES REPEATABILITY" },
  { node: "BOARD CADENCE" },
  { node: "HIRING DIAGNOSTIC" },
  { node: "CASH TIMING" },
];

export default function Marquee() {
  return (
    <div className="marquee-wrapper">
      <LogoLoop
        logos={operatorLoop}
        speed={40}
        direction="left"
        logoHeight={18}
        gap={96}
        fadeOut
        fadeOutColor="var(--color-canvas)"
      />
      <style dangerouslySetInnerHTML={{__html: `
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          background-color: var(--color-canvas);
          color: var(--color-ink);
          padding: var(--space-4) 0 var(--space-6);
          display: flex;
          align-items: center;
          margin: 0;
        }

        .marquee-wrapper .logoloop__node {
          font-family: var(--font-primary);
          font-weight: var(--weight-medium);
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          color: var(--color-steel);
          text-transform: uppercase;
        }
      `}} />
    </div>
  );
}
