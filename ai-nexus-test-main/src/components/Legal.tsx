import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { Scale, ShieldCheck, Cookie, FileCheck, ChevronRight } from 'lucide-react';

export default function Legal() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('terms');

  const sections = [
    { id: 'terms', label: 'Terms of Service', icon: Scale },
    { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
    { id: 'cookies', label: 'Cookie Policy', icon: Cookie },
    { id: 'compliance', label: 'Compliance', icon: FileCheck },
  ];

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      setActiveSection(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-white mb-6">
              Legal Documentation
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              Transparency and compliance are foundational to our operations. 
              Review our policies governing AI Direct Support services.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                to="/" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              <h2 className="text-white font-display font-bold mb-6">Legal Sections</h2>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                        activeSection === section.id
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                          : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{section.label}</span>
                      {activeSection === section.id && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          </aside>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Terms of Service */}
            <motion.section
              id="terms"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <Scale className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-white">Terms of Service</h2>
                  <p className="text-slate-400 text-sm">Effective Date: January 18, 2026</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  This Terms of Service Agreement ("Agreement") is between AI Direct Support ("We," "Us," or "Our"), 
                  located at 101 Springhaven Dr Apt 1B220, Gurnee, Illinois 60031, and You ("User" or "You"), 
                  the individual or business accessing Our services.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Acceptance</h3>
                  <p>
                    By using aidirectsupport.com or engaging Our services, You agree to this Agreement and Our Privacy Policy. 
                    If You disagree, do not proceed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Services</h3>
                  <p className="mb-3">We provide consulting services to business owners, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Guidance on creating/customizing webpages, automated workflows, and AI agents/structures</li>
                    <li>Educational support via phone consultations</li>
                  </ul>
                  <p className="mt-3">
                    We use third-party AI tools (e.g., OpenAI, Google Gemini, Anthropic Claude, Grok, n8n) to assist 
                    in generating ideas, structures, and content during consultations. These AI tools are supportive only — 
                    final outputs are reviewed and tailored by Our human consultants.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. User Obligations</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Be at least 18 or have capacity to contract</li>
                    <li>Provide accurate contact/business info</li>
                    <li>Use services lawfully; no illegal activities</li>
                    <li>You own Your inputs; Outputs are for Your business use</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Intellectual Property</h3>
                  <p>
                    We own Our consulting processes and site. You grant Us a limited license to use Your inputs for 
                    providing services. Outputs You receive are licensed to You (non-exclusive).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Pricing & Payment</h3>
                  <p>
                    Website build: $180 one-time. Maintenance: $100/month. Other services priced case-by-case. 
                    All via Stripe (fees in USD; taxes may apply). No refunds except as required by law.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6. Disclaimers & Limitations</h3>
                  <p>
                    Services involve AI tools that may contain errors, biases, or hallucinations — We do not guarantee accuracy. 
                    AI is a tool to support human consulting, not a replacement. Liability limited to fees paid in last 12 months.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">7. Termination</h3>
                  <p>We may terminate for breach. Upon end, access to ongoing support stops.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8. Governing Law</h3>
                  <p>Illinois law governs. Disputes in Illinois courts.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">9. Contact</h3>
                  <p>AI Direct Support, 101 Springhaven Dr Apt 1B220, Gurnee, IL 60031</p>
                </div>
              </div>
            </motion.section>

            {/* Privacy Policy */}
            <motion.section
              id="privacy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-white">Privacy Policy</h2>
                  <p className="text-slate-400 text-sm">Effective Date: January 18, 2026</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>AI Direct Support respects Your privacy. We collect minimal data for consulting services.</p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Information Collected</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contact: Name, business name, capacity/role, phone, email, brief message</li>
                    <li>Automatically: IP address, browser info, site usage (via cookies/analytics)</li>
                    <li>No sensitive data (health/financial) or AI training on Your data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. How We Use It</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide consultations, build/maintain webpages/workflows/agents</li>
                    <li>Process payments (Stripe)</li>
                    <li>Improve services (anonymized analytics)</li>
                    <li>Communicate (e.g., follow-up calls)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Sharing</h3>
                  <p>
                    Shared with: Stripe (payments), hosting providers, third-party AI tools (only as needed for consultations). 
                    No selling/sharing for marketing. Disclosed as required by law.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Security</h3>
                  <p>We use reasonable measures (encryption, access controls). No guarantees against breaches.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Your Rights</h3>
                  <p>Access/correct/delete Your data by emailing support@aidirectsupport.com. We respond promptly.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6. Cookies & Tracking</h3>
                  <p>See Cookie Policy. We use essential/analytical cookies.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">7. Children</h3>
                  <p>Not for under 13.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8. Contact</h3>
                  <p>AI Direct Support, 101 Springhaven Dr Apt 1B220, Gurnee, IL 60031</p>
                </div>
              </div>
            </motion.section>

            {/* Cookie Policy */}
            <motion.section
              id="cookies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <Cookie className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-white">Cookie Policy</h2>
                  <p className="text-slate-400 text-sm">Effective Date: January 18, 2026</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>We use cookies on aidirectsupport.com for functionality and analytics.</p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Types</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Essential: Site operation</li>
                    <li>Analytics: Usage (e.g., Google Analytics) — anonymized</li>
                    <li>No marketing/targeting cookies currently</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Management</h3>
                  <p>Consent banner for non-essential. Manage via browser settings.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Third Parties</h3>
                  <p>Google (analytics) — see their policy.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
                  <p>Questions: support@aidirectsupport.com</p>
                </div>
              </div>
            </motion.section>

            {/* Compliance */}
            <motion.section
              id="compliance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <FileCheck className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-white">Compliance Guidance</h2>
                  <p className="text-slate-400 text-sm">Quick Checklist for Your Setup</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  Your business is low-risk (minimal data, no AI training, human-led consulting), so focus on basics:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-4 text-white font-semibold">Area</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Key Actions</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Why (US Focus)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                      <tr>
                        <td className="py-3 px-4 font-semibold text-cyan-400">Privacy</td>
                        <td className="py-3 px-4">
                          Post clear Privacy Policy; minimal collection; secure data; respond to requests.
                        </td>
                        <td className="py-3 px-4">
                          FTC Section 5 (no deceptive practices); potential CCPA if thresholds met.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-cyan-400">AI Transparency</td>
                        <td className="py-3 px-4">
                          Disclose AI as a supportive tool (not autonomous); no overhyped claims.
                        </td>
                        <td className="py-3 px-4">
                          FTC guidelines — avoid deceptive AI claims; emphasize human oversight.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-cyan-400">Consumer Protection</td>
                        <td className="py-3 px-4">Accurate pricing; clear refunds; no hidden fees.</td>
                        <td className="py-3 px-4">FTC + state laws (e.g., Illinois Consumer Fraud Act).</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-cyan-400">Payments/Security</td>
                        <td className="py-3 px-4">Use Stripe (PCI compliant); secure forms.</td>
                        <td className="py-3 px-4">Best practice + potential state breach laws.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-cyan-400">International</td>
                        <td className="py-3 px-4">If Latin America clients grow, add note on data transfers.</td>
                        <td className="py-3 px-4">Future-proofing (no major requirements yet).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
