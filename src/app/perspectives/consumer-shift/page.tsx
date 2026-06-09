'use client';

import React from 'react';
import Link from 'next/link';
import RevealWrapper from '@/components/RevealWrapper';
import Footer from '@/components/Footer';

export default function ConsumerShiftPage() {
  return (
    <>
      <RevealWrapper>
        <section className="blog-detail">
          <div className="container">
            <Link href="/perspectives" className="blog-back">← Perspectives</Link>
            <div className="blog-detail__header">
              <div className="blog-detail__cat">Consumer Products</div>
              <h1 className="blog-detail__title reveal reveal-delay-1">
                Dabba of Deep-fried Bhujia or Gathiya is quietly pushed back on the shelf, why?
              </h1>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="blog-prose-section">
          <div className="container">
            <div className="blog-prose reveal">
              <p>Step into any urban Indian household, and you will witness a fascinating cultural shift! The millennials to Genz crowd are avoiding traditional dabba of deep-fried bhujia or gathiya, quietly being pushed to the back of the pantry. In its place sit roasted makhana, baked ragi chips, and protein-infused wafers!</p>

              <p>We are witnessing the rise of India&rsquo;s mid-aspirational consumer class&mdash;an economic powerhouse of double-income suburban families, corporate professionals, and Gen Z city-dwellers.</p>

              <p>This segment is driven by a strong desire for upward mobility, high food label literacy, and an obsession with wellness further enhanced by you are so called fitness/wellness influencers on every social media platform out there.</p>

              <p>However, macro-trends reveal a unique paradox within this demographic: inflation fatigue mixed with premium wellness ambitions (Capgemini, 2026). While these consumers are hyper-aware of rising household expenses, they refuse to compromise on health benefits. They are stuck in a hybrid mindset&mdash;tightening their belts on daily commodities, but willingly paying a calculated premium if a snack offers authentic, functional nutrition.</p>

              <p>For brands looking to capture the multi-billion-dollar Indian healthy snacks market, the playbook is evolving. Here is how the modern healthy snack landscape is pivoting to capture the mid-aspirational Indian rupee.</p>

              <h3 className="blog-section-head">1. Accessibility &amp; Awareness of Brands through Quick Commerce Channels</h3>

              <p>Few years back when a consumer had a desire for better/nutritious alternatives it takes effort to go to the nearby store and purchase. Now that is cut down by a few scrolls and OTP. This accessibility change has given the modern consumer to stick towards his/her dietary plans irrespective of the logistics efforts. Because the accessibility is increased, the brand penetration and stickability of modern consumer products boosted in Indian households.</p>

              <h3 className="blog-section-head">2. Highly aware or influenced modern consumers:</h3>

              <p>The Indian consumer demographic is a larger chunk of the younger crowd with awareness of nutritional lingo, diet conscious or being forced into due to peer pressure. The influencer now ranges from fitness, nutrition, recipes, snacks, and a lot more. This has a collective effect on the choices of the consumer subconsciously. To an extent a clean eating person is more positioned as a well aware or very lifestyle oriented person. Clean eating has now slowly creeping into an integral part of a personal character or the way one projects themselves to others. This phenomenon tagged with accessibility has shifted the game of modern Indian consumer playbook, to an extent where brands have specialised departments to tackle the new evolving supply chain demands.</p>

              <p>But supply chain and modern consumer inclination towards the sector alone can&rsquo;t crack an Indian Consumer. A very integral part of the Indian consumer in &ldquo;Price and Value for Money&rdquo;. Especially if your brand as an aspiration to scale towards a mass audience.</p>

              <h3 className="blog-section-head">3. Solving the Pricing Puzzle: The ₹10 to ₹30 Premium Sweet Spot</h3>

              <p>Despite their health ambitions, the mid-aspirational class is inherently value-conscious. They are eager to &ldquo;trade up&rdquo; to a better lifestyle, but they will not spend ₹300 on a single imported granola bar.</p>

              <p>To break this friction, successful FMCG giants and agile D2C startups are mastering bifurcation via packaging (Magni, 2000).</p>

              <ul className="blog-list">
                <li>Brands are offering smaller, single-serve &ldquo;trial formats&rdquo; priced aggressively between ₹10, ₹20, and ₹30 (IMARC Group, 2025; Mintel, 2026).</li>
                <li>This acts as a low-risk entry barrier. It allows a middle-income consumer to experiment with an aspirational, healthy brand without facing immediate buyer&rsquo;s remorse (Andress et al., 2020; Magni, 2000). Once the taste and digestive comfort are proven, they scale up to multi-packs for the household.</li>
              </ul>

              <p>The Golden Rule: In India, health might catch the consumer&rsquo;s eye, but taste and value-for-money secure the repeat purchase.</p>

              <p>For the mid-aspirational class, a healthy snack must double as a utility. It needs to fuel a workout, replace a rushed breakfast, or safely satisfy a child&rsquo;s sweet tooth.</p>

              <p>Brands that can strike the perfect balance&mdash;offering clean ingredients, functional health benefits, and high-status aesthetic branding, all delivered at a calculated, justifiable price point&mdash;will dominate the pantries of the new mainstream. Ahh that sounds almost like rocket science! O, absolutely yes! For founders, navigating modern India consumers is no less than rocket science.</p>

              <hr className="blog-rule" />

              <div className="blog-cta-block">
                <p>We at Powerscale Ventures make this roller coaster ride of founders a little easy by understanding their needs and supporting them through capital, network, accessibility and fueling their growth GTM needs!</p>
                <p>Looks like a founder could benefit through us, then write to us at{' '}
                  <a href="mailto:support@powerscaleventures.com" className="blog-contact-link">support@powerscaleventures.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .blog-back {
          display: inline-flex;
          align-items: center;
          font-size: var(--text-meta);
          font-weight: var(--weight-medium);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: var(--space-2xl);
          transition: color 150ms ease;
        }
        .blog-back:hover {
          color: var(--color-signature);
        }

        .blog-detail {
          padding-top: clamp(7rem, 10vw, 9rem);
          padding-bottom: clamp(3rem, 4vw, 4rem);
        }
        .blog-detail__cat {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: var(--text-meta);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-sm);
        }
        .blog-detail__cat::before {
          content: '';
          display: inline-block;
          width: 1.25rem;
          height: 1px;
          background: currentColor;
          border-radius: 999px;
          flex-shrink: 0;
        }
        .blog-detail__title {
          font-size: clamp(2rem, 4.5vw, 3.5rem);
          font-weight: var(--weight-bold);
          color: var(--color-ink-primary);
          line-height: 1.06;
          letter-spacing: -0.03em;
          max-width: 24ch;
          text-wrap: balance;
        }

        .blog-prose-section {
          padding-bottom: var(--section-gap);
        }
        .blog-prose {
          max-width: 68ch;
        }
        .blog-prose p {
          font-size: clamp(1.0625rem, 1.35vw, 1.1875rem);
          color: var(--color-ink-secondary);
          line-height: 1.85;
          margin-bottom: var(--space-md);
        }
        .blog-section-head {
          font-size: clamp(1.125rem, 1.5vw, 1.375rem);
          font-weight: var(--weight-semibold);
          color: var(--color-ink-primary);
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-top: var(--space-xl);
          margin-bottom: var(--space-sm);
        }
        .blog-list {
          list-style: none;
          padding: 0;
          margin: 0 0 var(--space-md);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .blog-list li {
          font-size: clamp(1.0625rem, 1.35vw, 1.1875rem);
          color: var(--color-ink-secondary);
          line-height: 1.75;
          padding-left: 1.5rem;
          position: relative;
        }
        .blog-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--color-signature);
          font-weight: 700;
        }
        .blog-rule {
          border: none;
          border-top: 1px solid var(--color-divider);
          margin: var(--space-xl) 0;
        }
        .blog-cta-block p {
          font-size: clamp(1rem, 1.2vw, 1.125rem);
          color: var(--color-ink-secondary);
          line-height: 1.75;
          margin-bottom: var(--space-sm);
        }
        .blog-contact-link {
          color: var(--color-signature);
          font-weight: var(--weight-medium);
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: opacity 150ms ease;
        }
        .blog-contact-link:hover {
          opacity: 0.7;
        }

        @media (max-width: 760px) {
          .blog-detail__title {
            font-size: clamp(1.75rem, 7vw, 2.5rem);
            max-width: none;
          }
          .blog-prose p,
          .blog-list li,
          .blog-cta-block p {
            font-size: 1rem;
          }
          .blog-section-head {
            font-size: 1.125rem;
            margin-top: var(--space-lg);
          }
        }
      `}} />
    </>
  );
}
