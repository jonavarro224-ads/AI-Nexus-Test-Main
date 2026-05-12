import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Plan {
  id: string;
  name: string;
  badge?: string;
  setup: string;
  price: string;
  period: string;
  tagline: string;
  stripeUrl: string;
  featured: boolean;
  features: string[];
  cta: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const plans: Plan[] = [
  {
    id: "essential",
    name: "Essential",
    setup: "$279 setup",
    price: "$79",
    period: "/mo",
    tagline: "Your site, live and protected.",
    stripeUrl: "https://buy.stripe.com/cNicMY3q5aep0mD8cmco000",
    featured: false,
    cta: "Get Started",
    features: [
      "Professional business website",
      "Managed hosting & SSL certificate",
      "Security monitoring & uptime alerts",
      "1 content edit per month",
      "Mobile-responsive design",
      "24-hr support response time",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Most Popular",
    setup: "$279 setup",
    price: "$149",
    period: "/mo",
    tagline: "Everything you need to scale online.",
    stripeUrl: "https://buy.stripe.com/cNicMYf8N9al2uL78ico001",
    featured: true,
    cta: "Start Growing",
    features: [
      "Everything in Essential",
      "Unlimited text & image edits",
      "Basic SEO optimization",
      "Google Business Profile management",
      "Monthly performance report",
      "Priority 12-hr support response",
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate",
    setup: "$279 setup",
    price: "$299",
    period: "/mo",
    tagline: "Maximum velocity. Maximum leads.",
    stripeUrl: "https://buy.stripe.com/00w5kwf8N0DP5GXdwGco002",
    featured: false,
    cta: "Go Ultimate",
    features: [
      "Everything in Growth",
      "2 monthly blog posts (SEO-targeted)",
      "Advanced keyword tracking",
      "Landing page A/B testing",
      "Lead capture funnel setup",
      "Priority 4-hr support response",
    ],
  },
];

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

        {/* Cards */}
        <div className="pricing-cards">
          {plans.map((plan) => {
            const isHovered = hoveredPlan === plan.id;
            return (
              <div
                key={plan.id}
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
                  <div className="pricing-badge" aria-label="Most popular plan">
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
            );
          })}
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
          max-width: 1100px;
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

        /* ── Cards grid ── */
        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          align-items: start;
        }

        @media (max-width: 900px) {
          .pricing-cards {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin: 0 auto;
          }
        }

        /* ── Card base ── */
        .pricing-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2rem 1.75rem;
          transition: border-color 0.2s ease, transform 0.2s ease;
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

        .pricing-period {
          font-size: 1rem;
          color: #5a6a82;
          font-weight: 400;
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
