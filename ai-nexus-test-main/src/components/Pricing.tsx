import { useState } from "react";
import { Link } from "react-router-dom";
import {
  plans,
  customSystemsPlan,
  foundingBannerText,
  standardPricingPrefix,
} from "../content/pricing";

// ─── Component ────────────────────────────────────────────────────────────────
export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section
      id="pricing"
      className="pricing-section"
      aria-labelledby="pricing-heading"
    >
      {/* Background grid texture */}
      <div className="pricing-grid-bg" aria-hidden="true" />

      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <span className="pricing-eyebrow">Transparent Pricing</span>
          <h2 id="pricing-heading" className="pricing-title">
            One setup. <span className="pricing-title-accent">Monthly momentum.</span>
          </h2>
          <p className="pricing-subtitle">
            Every plan includes a professionally engineered website for $279 — then
            a flat monthly fee that covers hosting, security, and support. No
            surprises, no hidden costs.
          </p>
        </div>

        {/* Founding Banner */}
        {foundingBannerText && (
          <div className="pricing-founding-banner-wrapper">
            <div className="pricing-founding-banner" role="status">
              <span className="pricing-founding-banner-dot" aria-hidden="true" />
              <span className="pricing-founding-banner-text">{foundingBannerText}</span>
            </div>
          </div>
        )}

        {/* Cards */}
        <div className="pricing-cards">
          {plans.map((plan) => {
            const isHovered = hoveredPlan === plan.id;
            return (
              <div
                key={plan.id}
                id={plan.id}
                className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""} ${isHovered ? "pricing-card--hovered" : ""}`}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Featured glow */}
                {plan.featured && (
                  <div className="pricing-card-glow" aria-hidden="true" />
                )}

                {/* Badge */}
                {plan.badge && (
                  <div className="pricing-badge" aria-label={`${plan.badge} plan`}>
                    <span className="pricing-badge-dot" aria-hidden="true" />
                    {plan.badge}
                  </div>
                )}

                {/* Plan name */}
                <div className="pricing-plan-name">{plan.name}</div>

                {/* Setup fee */}
                <div className="pricing-setup">{plan.setup} &bull; then</div>

                {/* Price */}
                <div className="pricing-price-row">
                  <span className="pricing-price">{plan.price}</span>
                  <span className="pricing-period">{plan.period}</span>
                </div>

                {/* Standard pricing after founding period */}
                {plan.standardPricingNote && (
                  <div className="pricing-standard-line">
                    <span className="pricing-standard-label">{standardPricingPrefix}</span>{" "}
                    <span className="pricing-standard-value">{plan.standardPricingNote}</span>
                  </div>
                )}

                <p className="pricing-tagline">{plan.tagline}</p>

                {/* Divider */}
                <div className="pricing-divider" aria-hidden="true" />

                {/* Features */}
                <ul className="pricing-features" aria-label={`${plan.name} plan features`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="pricing-feature-item">
                      <span className="pricing-check" aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Card footer pinned to bottom */}
                <div className="pricing-card-footer">
                  {/* CTA */}
                  <a
                    href={plan.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`pricing-cta ${plan.featured ? "pricing-cta--featured" : ""}`}
                    aria-label={`${plan.cta} — ${plan.name} plan at ${plan.price}/mo`}
                  >
                    {plan.cta}
                    <span className="pricing-cta-arrow" aria-hidden="true">→</span>
                  </a>

                  <p className="pricing-trust">Cancel anytime &bull; No lock-in</p>
                </div>
              </div>
            );
          })}

          {/* Fourth card: Custom Systems */}
          <div
            id={customSystemsPlan.id}
            className={`pricing-card ${hoveredPlan === customSystemsPlan.id ? "pricing-card--hovered" : ""}`}
            onMouseEnter={() => setHoveredPlan(customSystemsPlan.id)}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            {/* Plan name */}
            <div className="pricing-plan-name">{customSystemsPlan.name}</div>

            {/* Scope info */}
            <div className="pricing-setup">Custom build &bull; tailored</div>

            {/* Price */}
            <div className="pricing-price-row">
              <span className="pricing-price pricing-price--custom">
                {customSystemsPlan.price}
              </span>
            </div>

            <p className="pricing-tagline">
              {customSystemsPlan.description}
            </p>

            {/* Divider */}
            <div className="pricing-divider" aria-hidden="true" />

            {/* Card footer pinned to bottom */}
            <div className="pricing-card-footer">
              <Link
                to={customSystemsPlan.href}
                className="pricing-cta"
                aria-label={`${customSystemsPlan.cta} — ${customSystemsPlan.name}`}
              >
                {customSystemsPlan.cta}
                <span className="pricing-cta-arrow" aria-hidden="true">→</span>
              </Link>

              <p className="pricing-trust">Free discovery call &bull; Scoped quote</p>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="pricing-footer-note">
          <span>🔒</span>
          <span>
            Payments processed securely via Stripe. Your site build starts within
            24 hours of payment.
          </span>
        </div>
      </div>

      {/* Inline styles — scoped to this component */}
      <style>{`
        /* ── Layout ── */
        .pricing-section {
          position: relative;
          padding: 6rem 1.5rem;
          background: #050a14;
          overflow: hidden;
          scroll-margin-top: 80px;
        }

        .pricing-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .pricing-container {
          position: relative;
          max-width: 1240px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .pricing-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .pricing-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #00d4ff;
          background: rgba(0, 212, 255, 0.08);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 100px;
          padding: 0.3rem 1rem;
          margin-bottom: 1.25rem;
        }

        .pricing-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: #f0f4ff;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0 0 1rem;
        }

        .pricing-title-accent {
          color: #00d4ff;
        }

        .pricing-subtitle {
          font-size: 1rem;
          color: #8899b4;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── Founding banner ── */
        .pricing-founding-banner-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 2.5rem;
        }

        .pricing-founding-banner {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0.6rem 1.25rem;
          background: rgba(0, 212, 255, 0.08);
          border: 1px solid rgba(0, 212, 255, 0.25);
          border-radius: 9999px;
          color: #e0f2fe;
          font-size: 0.875rem;
          font-weight: 500;
          text-align: center;
          max-width: 100%;
        }

        .pricing-founding-banner-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00d4ff;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
          animation: pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .pricing-founding-banner-text {
          color: #e0f2fe;
        }

        /* ── Cards grid ── */
        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          align-items: stretch;
        }

        @media (max-width: 1024px) {
          .pricing-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .pricing-cards {
            grid-template-columns: 1fr;
            max-width: 440px;
            margin: 0 auto;
          }
        }

        /* ── Card base ── */
        .pricing-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2rem 1.75rem;
          transition: border-color 0.2s ease, transform 0.2s ease;
          scroll-margin-top: 100px;
        }

        .pricing-card--hovered {
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-3px);
        }

        /* ── Featured card ── */
        .pricing-card--featured {
          border-color: rgba(0, 212, 255, 0.35);
          background: rgba(0, 212, 255, 0.04);
        }

        .pricing-card--featured.pricing-card--hovered {
          border-color: rgba(0, 212, 255, 0.6);
        }

        .pricing-card-glow {
          position: absolute;
          top: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00d4ff, transparent);
        }

        /* ── Badge ── */
        .pricing-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #00d4ff;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.25);
          border-radius: 100px;
          padding: 0.25rem 0.75rem;
          margin-bottom: 1.25rem;
        }

        .pricing-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00d4ff;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* ── Plan name ── */
        .pricing-plan-name {
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8899b4;
          margin-bottom: 0.75rem;
        }

        /* ── Setup ── */
        .pricing-setup {
          font-size: 0.8rem;
          color: #5a6a82;
          margin-bottom: 0.25rem;
        }

        /* ── Price ── */
        .pricing-price-row {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 0.5rem;
        }

        .pricing-price {
          font-size: 3rem;
          font-weight: 700;
          color: #f0f4ff;
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .pricing-price--custom {
          font-size: clamp(1.85rem, 2.3vw, 2.35rem);
          line-height: 1.1;
        }

        .pricing-period {
          font-size: 1rem;
          color: #5a6a82;
          font-weight: 400;
        }

        /* ── Standard pricing line ── */
        .pricing-standard-line {
          font-size: 0.75rem;
          color: #64748b;
          margin: 0 0 0.85rem;
          line-height: 1.4;
        }

        .pricing-standard-label {
          color: #64748b;
        }

        .pricing-standard-value {
          color: #94a3b8;
          font-weight: 600;
        }

        .pricing-tagline {
          font-size: 0.85rem;
          color: #8899b4;
          margin: 0 0 1.25rem;
          line-height: 1.5;
        }

        /* ── Divider ── */
        .pricing-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.07);
          margin-bottom: 1.25rem;
        }

        .pricing-card--featured .pricing-divider {
          background: rgba(0, 212, 255, 0.15);
        }

        /* ── Features ── */
        .pricing-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .pricing-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.875rem;
          color: #b0bdd0;
          line-height: 1.5;
        }

        .pricing-check {
          color: #00d4ff;
          font-size: 0.8rem;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ── Card footer ── */
        .pricing-card-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
        }

        /* ── CTA button ── */
        .pricing-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.05);
          color: #e0eaff;
          cursor: pointer;
        }

        .pricing-cta:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .pricing-cta--featured {
          background: #00d4ff;
          border-color: #00d4ff;
          color: #020812;
        }

        .pricing-cta--featured:hover {
          background: #33dcff;
          border-color: #33dcff;
        }

        .pricing-cta-arrow {
          transition: transform 0.15s ease;
        }

        .pricing-cta:hover .pricing-cta-arrow {
          transform: translateX(3px);
        }

        /* ── Trust line ── */
        .pricing-trust {
          text-align: center;
          font-size: 0.72rem;
          color: #3d4f66;
          margin: 0.75rem 0 0;
        }

        /* ── Footer note ── */
        .pricing-footer-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 2.5rem;
          font-size: 0.8rem;
          color: #4a5e78;
        }
      `}</style>
    </section>
  );
}
