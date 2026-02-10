import React from 'react';
import { Scale, ShieldCheck, Cookie, FileCheck } from 'lucide-react';

const sections = [
  { id: 'terms', label: 'Terms of Service' },
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'cookies', label: 'Cookie Policy' },
  { id: 'compliance', label: 'Compliance Guidance' },
];

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-inter">
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[260px,minmax(0,1fr)]">
          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h2 className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase mb-4">
                Governance &amp; Legal
              </h2>
              <nav className="space-y-2 text-sm">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors duration-150"
                  >
                    <span>{section.label}</span>
                    <span className="h-px w-6 bg-slate-700" />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-8">
            {/* SECTION 1: Terms of Service */}
            <section
              id="terms"
              aria-labelledby="terms-heading"
              className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8"
            >
              <div className="mb-2 text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                SECTION 1: Terms of Service (ID: terms)
              </div>
              <h2
                id="terms-heading"
                className="text-2xl font-semibold text-white mb-6 flex items-center gap-3"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 border border-white/10">
                  <Scale className="h-5 w-5" />
                </span>
                Terms of Service Agreement
              </h2>
              <div className="text-slate-300 leading-relaxed text-sm space-y-4">
                <p>
                  <span className="text-white font-medium">Effective Date:</span> January 18, 2026
                </p>
                <p>
                  This Terms of Service Agreement ("Agreement") is between AiDirectSupport ("We,"
                  "Us," or "Our"), located at 101 Springhaven Dr Apt 1B220, Gurnee, Illinois 60031,
                  and You ("User" or "You"), the individual or business accessing Our services.
                </p>
                <p>
                  <span className="text-white font-medium">1. Acceptance</span>
                  <br />
                  By using aidirectsupport.com or engaging Our services, You agree to this
                  Agreement and Our Privacy Policy. If You disagree, do not proceed.
                </p>
                <p>
                  <span className="text-white font-medium">2. Services</span>
                  <br />
                  We provide consulting services to business owners, including:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Guidance on creating/customizing webpages, automated workflows, and AI
                    agents/structures.
                  </li>
                  <li>Educational support via phone consultations.</li>
                </ul>
                <p>
                  We use third-party AI tools (e.g., OpenAI, Google Gemini, Anthropic Claude, Grok,
                  n8n) to assist in generating ideas, structures, and content during consultations.
                  These AI tools are supportive only — final outputs are reviewed and tailored by
                  Our human consultants. Services are not fully automated AI products; results
                  depend on Your input and Our expertise. We may update services with notice.
                </p>
                <p>
                  <span className="text-white font-medium">3. User Obligations</span>
                  <br />
                  - Be at least 18 or have capacity to contract.
                  <br />
                  - Provide accurate contact/business info.
                  <br />
                  - Use services lawfully; no illegal activities.
                  <br />
                  You own Your inputs; Outputs are for Your business use (disclose AI assistance if
                  sharing publicly, per best practices).
                </p>
                <p>
                  <span className="text-white font-medium">4. Intellectual Property</span>
                  <br />
                  We own Our consulting processes and site. You grant Us a limited license to use
                  Your inputs for providing services. Outputs You receive are licensed to You
                  (non-exclusive; AI may produce similar content for others).
                </p>
                <p>
                  <span className="text-white font-medium">5. Pricing &amp; Payment</span>
                  <br />
                  Website build: $180 one-time. Maintenance: $100/month. Other services priced
                  case-by-case. All via Stripe (fees in USD; taxes may apply). No refunds except as
                  required by law (e.g., certain state consumer protections).
                </p>
                <p>
                  <span className="text-white font-medium">6. Disclaimers &amp; Limitations</span>
                  <br />
                  Services involve AI tools that may contain errors, biases, or hallucinations —
                  We do not guarantee accuracy. AI is a tool to support human consulting, not a
                  replacement. We disclaim warranties except those required by law. Liability
                  limited to fees paid in last 12 months; no indirect damages.
                </p>
                <p>
                  <span className="text-white font-medium">7. Termination</span>
                  <br />
                  We may terminate for breach. Upon end, access to ongoing support stops.
                </p>
                <p>
                  <span className="text-white font-medium">8. Governing Law</span>
                  <br />
                  Illinois law governs. Disputes in Illinois courts.
                </p>
                <p>
                  <span className="text-white font-medium">9. Contact</span>
                  <br />
                  AiDirectSupport, 101 Springhaven Dr Apt 1B220, Gurnee, IL 60031.
                </p>
              </div>
            </section>

            {/* SECTION 2: Privacy Policy */}
            <section
              id="privacy"
              aria-labelledby="privacy-heading"
              className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8"
            >
              <div className="mb-2 text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                SECTION 2: Privacy Policy (ID: privacy)
              </div>
              <h2
                id="privacy-heading"
                className="text-2xl font-semibold text-white mb-6 flex items-center gap-3"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 border border-white/10">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                Privacy Policy
              </h2>
              <div className="text-slate-300 leading-relaxed text-sm space-y-4">
                <p>
                  <span className="text-white font-medium">Effective Date:</span> January 18, 2026
                </p>
                <p>
                  AiDirectSupport respects Your privacy. We collect minimal data for consulting
                  services.
                </p>
                <p>
                  <span className="text-white font-medium">1. Information Collected</span>
                  <br />
                  - Contact: Name, business name, capacity/role, phone, email, brief message (via
                  forms/site).
                  <br />
                  - Automatically: IP address, browser info, site usage (via cookies/analytics).
                  <br />
                  No sensitive data (health/financial) or AI training on Your data.
                </p>
                <p>
                  <span className="text-white font-medium">2. How We Use It</span>
                  <br />
                  - Provide consultations, build/maintain webpages/workflows/agents.
                  <br />
                  - Process payments (Stripe).
                  <br />
                  - Improve services (anonymized analytics).
                  <br />
                  - Communicate (e.g., follow-up calls).
                </p>
                <p>
                  <span className="text-white font-medium">3. Sharing</span>
                  <br />
                  Shared with: Stripe (payments), hosting (Netlify/Squarespace), third-party AI
                  tools (only as needed for consultations; no storage/training on Your personal
                  data). No selling/sharing for marketing. Disclosed as required by law.
                </p>
                <p>
                  <span className="text-white font-medium">4. Security</span>
                  <br />
                  We use reasonable measures (encryption, access controls). No guarantees against
                  breaches.
                </p>
                <p>
                  <span className="text-white font-medium">5. Your Rights</span>
                  <br />
                  Access/correct/delete Your data by emailing support@aidirectsupport.com. We
                  respond promptly.
                </p>
                <p>
                  <span className="text-white font-medium">6. Cookies &amp; Tracking</span>
                  <br />
                  See Cookie Policy. We use essential/analytical cookies.
                </p>
                <p>
                  <span className="text-white font-medium">7. Children</span>
                  <br />
                  Not for under 13.
                </p>
                <p>
                  <span className="text-white font-medium">8. Changes &amp; Contact</span>
                  <br />
                  We may update; check site. Contact: AiDirectSupport, 101 Springhaven Dr Apt
                  1B220, Gurnee, IL 60031.
                </p>
              </div>
            </section>

            {/* SECTION 3: Cookie Policy */}
            <section
              id="cookies"
              aria-labelledby="cookies-heading"
              className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8"
            >
              <div className="mb-2 text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                SECTION 3: Cookie Policy (ID: cookies)
              </div>
              <h2
                id="cookies-heading"
                className="text-2xl font-semibold text-white mb-6 flex items-center gap-3"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 border border-white/10">
                  <Cookie className="h-5 w-5" />
                </span>
                Cookie Policy
              </h2>
              <div className="text-slate-300 leading-relaxed text-sm space-y-4">
                <p>
                  <span className="text-white font-medium">Effective Date:</span> January 18, 2026
                </p>
                <p>We use cookies on aidirectsupport.com for functionality and analytics.</p>
                <p>
                  <span className="text-white font-medium">Types</span>
                  <br />
                  - Essential: Site operation.
                  <br />
                  - Analytics: Usage (e.g., Google Analytics) — anonymized.
                  <br />
                  No marketing/targeting cookies currently.
                </p>
                <p>
                  <span className="text-white font-medium">Management</span>
                  <br />
                  Consent banner for non-essential. Manage via browser settings.
                </p>
                <p>
                  <span className="text-white font-medium">Third Parties</span>
                  <br />
                  Google (analytics) — see their policy.
                </p>
                <p>
                  <span className="text-white font-medium">Contact</span>
                  <br />
                  Questions: support@aidirectsupport.com
                </p>
              </div>
            </section>

            {/* SECTION 4: Compliance Guidance */}
            <section
              id="compliance"
              aria-labelledby="compliance-heading"
              className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8"
            >
              <div className="mb-2 text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                SECTION 4: Compliance Guidance (ID: compliance)
              </div>
              <h2
                id="compliance-heading"
                className="text-2xl font-semibold text-white mb-6 flex items-center gap-3"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 border border-white/10">
                  <FileCheck className="h-5 w-5" />
                </span>
                Compliance Guidance (Quick Checklist for Your Setup)
              </h2>
              <div className="text-slate-300 leading-relaxed text-sm space-y-4">
                <p>
                  Your business is low-risk (minimal data, no AI training, human-led consulting), so
                  focus on basics:
                </p>
                <div className="overflow-x-auto mt-6">
                  <table className="w-full border-collapse border border-white/10 rounded-lg">
                    <thead>
                      <tr className="bg-slate-800/50">
                        <th className="border border-white/10 px-4 py-3 text-left text-white font-semibold">
                          Area
                        </th>
                        <th className="border border-white/10 px-4 py-3 text-left text-white font-semibold">
                          Key Actions
                        </th>
                        <th className="border border-white/10 px-4 py-3 text-left text-white font-semibold">
                          Why (US Focus)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="border border-white/10 px-4 py-3 text-white font-medium">
                          Privacy
                        </td>
                        <td className="border border-white/10 px-4 py-3">
                          Post clear Privacy Policy; minimal collection; secure data; respond to requests.
                        </td>
                        <td className="border border-white/10 px-4 py-3">
                          FTC Section 5 (no deceptive practices); potential CCPA if thresholds met (unlikely for small ops).
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="border border-white/10 px-4 py-3 text-white font-medium">
                          AI Transparency
                        </td>
                        <td className="border border-white/10 px-4 py-3">
                          Disclose AI as a supportive tool (not autonomous) in marketing/site/consults; no overhyped claims (e.g., "world's best AI" without proof).
                        </td>
                        <td className="border border-white/10 px-4 py-3">
                          FTC guidelines — avoid deceptive AI claims; emphasize human oversight.
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="border border-white/10 px-4 py-3 text-white font-medium">
                          Consumer Protection
                        </td>
                        <td className="border border-white/10 px-4 py-3">
                          Accurate pricing; clear refunds; no hidden fees.
                        </td>
                        <td className="border border-white/10 px-4 py-3">
                          FTC + state laws (e.g., Illinois Consumer Fraud Act).
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="border border-white/10 px-4 py-3 text-white font-medium">
                          Payments/Security
                        </td>
                        <td className="border border-white/10 px-4 py-3">
                          Use Stripe (PCI compliant); secure forms.
                        </td>
                        <td className="border border-white/10 px-4 py-3">
                          Best practice + potential state breach laws.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-white/10 px-4 py-3 text-white font-medium">
                          International
                        </td>
                        <td className="border border-white/10 px-4 py-3">
                          If Latin America clients grow, add note on data transfers.
                        </td>
                        <td className="border border-white/10 px-4 py-3">
                          Future-proofing (no major requirements yet).
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

