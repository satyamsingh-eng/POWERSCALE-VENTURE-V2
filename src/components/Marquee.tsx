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
];

export default function Marquee() {
  return (
    <div className="marquee-wrapper">
      <LogoLoop
        logos={operatorLoop}
        speed={36}
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
          padding: var(--space-4) 0 var(--space-8);
          display: flex;
          align-items: center;
          margin: 0;
        }
        
        .marquee-wrapper .logoloop__node {
          font-family: var(--font-primary);
          font-weight: var(--weight-medium);
          font-size: 13px;
          letter-spacing: 0.12em;
          color: color-mix(in srgb, var(--color-ink) 34%, transparent);
          text-transform: uppercase;
        }
      `}} />
    </div>
  );
}
