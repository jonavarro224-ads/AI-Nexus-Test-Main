import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { Scale, ShieldCheck, Cookie, FileCheck, ChevronRight, Home } from 'lucide-react';

export default function Legal() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('terms');

  const sections = [
    { id: 'terms', label: 'Terms of Service', icon: Scale },
    { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
    { id: 'cookies', label: 'Cookie Policy', icon: Cookie },
    { id: 'compliance', label: 'Compliance Guidance', icon: FileCheck },
  ];

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash && sections.some(s => s.id === hash)) {
      setActiveSection(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    window.location.hash = id;
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
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
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
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
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium text-sm">{section.label}</span>
                      {activeSection === section.id && (
                        <ChevronRight className="w-4 h-4 ml-auto flex-shrink-0" />
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
                  <p className="text-slate-400 text-sm mt-1">Effective Date: January 18, 2026</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  This Terms of Service Agreement ("Agreement") is between AI Direct Support ("We," "Us," or "Our"), 
                  located at 101 Springhaven Dr Apt 1B220, Gurnee, Illinois 60031, and You ("User" or "You"), 
                  the individual or business accessing Our services.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h3>
                  <p>
                    By accessing or using Our services, including aidirectsupport.com and Our AI-powered tools for creating 
                    webpages, workflows, and agents, You agree to be bound by this Agreement and Our Privacy Policy. 
                    If You do not agree, do not use the Services. We may update this Agreement; continued use constitutes acceptance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Description of Services</h3>
                  <p className="mb-3">We provide consulting services to business owners, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Guidance on creating and customizing webpages using AI algorithms</li>
                    <li>Building automated workflows for business processes</li>
                    <li>Creating AI agents and structures for tasks like customer support or data analysis</li>
                    <li>Educational support via phone consultations</li>
                  </ul>
                  <p className="mt-3">
                    We use third-party AI tools (e.g., OpenAI, Google Gemini, Anthropic Claude, Grok, n8n) to assist 
                    in generating ideas, structures, and content during consultations. These AI tools are supportive only — 
                    final outputs are reviewed and tailored by Our human consultants. Services are provided "as is" and may 
                    involve third-party integrations. We reserve the right to modify Services with notice.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. User Obligations</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You must be at least 18 years old or have legal capacity to contract</li>
                    <li>Provide accurate contact and business information</li>
                    <li>Use services only for lawful business purposes; no illegal activities, harm to others, or reverse-engineering Our AI</li>
                    <li>Maintain account security and comply with all applicable laws</li>
                    <li>You are responsible for any content You input ("Input") and outputs generated ("Output"), ensuring they don't infringe third-party rights</li>
                  </ul>
                  <p className="mt-3">
                    You own Your inputs. Outputs You receive are for Your business use. Disclose AI assistance when sharing 
                    publicly, as per best practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Intellectual Property</h3>
                  <p>
                    We own all rights to Our Services, consulting processes, AI models, website, and underlying technology. 
                    You retain ownership of Your Input. By providing Input, You grant Us a limited license to use it to 
                    provide Services, improve Our AI (anonymized where applicable), and comply with laws. Outputs You receive 
                    are licensed to You for Your business use (non-exclusive; AI-generated content may be similar for other users).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Pricing & Payment</h3>
                  <p className="mb-2">Our standard pricing:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Website build: $180 one-time fee</li>
                    <li>Website maintenance: $100/month</li>
                    <li>Other services priced on a case-by-case basis</li>
                  </ul>
                  <p>
                    All payments processed via Stripe in USD. Fees are exclusive of applicable taxes. Late payments may incur 
                    interest. No refunds except as required by law (e.g., certain state consumer protections).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6. Disclaimers & Limitations</h3>
                  <p>
                    Services involve experimental AI technology. Outputs may contain errors, biases, or hallucinations — 
                    We do not guarantee accuracy. AI is a tool to support human consulting, not a replacement. We disclaim 
                    all warranties except those implied by law. Our liability is limited to fees paid in the last 12 months; 
                    no liability for indirect losses or damages.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">7. Termination</h3>
                  <p>
                    We may terminate Your access for breach of this Agreement with notice. Upon termination, You must pay 
                    any outstanding fees, and access to ongoing support stops.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8. Governing Law</h3>
                  <p>
                    This Agreement is governed by the laws of the State of Illinois, United States. Any disputes shall be 
                    resolved in Illinois courts.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">9. Contact Information</h3>
                  <p>
                    AI Direct Support<br />
                    101 Springhaven Dr Apt 1B220<br />
                    Gurnee, Illinois 60031<br />
                    Email: support@aidirectsupport.com
                  </p>
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
                  <p className="text-slate-400 text-sm mt-1">Effective Date: January 18, 2026</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  At AI Direct Support, we specialize in AI services for businesses, including creating webpages, workflows, 
                  and agents. We are committed to protecting your privacy. This Policy explains how we handle personal information.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h3>
                  <p className="mb-2">We collect the following types of information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Contact Information:</strong> Name, business name, capacity/role, phone, email, and brief messages (via forms/site)</li>
                    <li><strong>Business Information:</strong> Company details and payment information</li>
                    <li><strong>AI-Specific Data:</strong> User inputs to Our AI tools (e.g., prompts for workflows), generated outputs, behavioral data for personalization</li>
                    <li><strong>Automatically Collected:</strong> IP address, browser information, site usage (via cookies/analytics)</li>
                  </ul>
                  <p className="mt-3">
                    We do not collect sensitive data (health/financial information) without explicit consent, and we do not 
                    use Your personal data to train AI models.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and improve Services (e.g., train AI models on anonymized data)</li>
                    <li>Build and maintain webpages, workflows, and AI agents</li>
                    <li>Process payments via Stripe</li>
                    <li>Improve services through anonymized analytics</li>
                    <li>Communicate with you (e.g., follow-up calls, support)</li>
                    <li>Comply with laws, prevent fraud, and analyze usage</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. How We Share Your Information</h3>
                  <p className="mb-2">We share Your information with:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Payment Processors:</strong> Stripe for payment processing</li>
                    <li><strong>Hosting Providers:</strong> Cloud hosting services (e.g., Netlify, Squarespace)</li>
                    <li><strong>Third-Party AI Tools:</strong> Only as needed for consultations; we do not allow storage or training on Your personal data by these tools</li>
                    <li><strong>Legal Requirements:</strong> As required by law or to protect our rights</li>
                  </ul>
                  <p className="mt-3">
                    We do not sell Your data or share it for marketing purposes without Your consent.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Data Security</h3>
                  <p>
                    We use reasonable security measures including encryption, access controls, and secure data storage. 
                    Data is stored securely in the United States or approved locations. However, no system is completely 
                    secure, and we cannot guarantee against all breaches.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Data Retention</h3>
                  <p>
                    We retain Your information only as long as needed for Services delivery, legal compliance (e.g., 7 years 
                    for tax records), or as You request. You may request deletion at any time by contacting us.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6. Your Rights</h3>
                  <p className="mb-2">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and receive a copy of Your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of Your information (subject to legal requirements)</li>
                    <li>Opt-out of certain data processing activities</li>
                  </ul>
                  <p className="mt-3">
                    To exercise these rights, contact us at support@aidirectsupport.com. We will respond within 30 days.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">7. Cookies & Tracking Technologies</h3>
                  <p>See our Cookie Policy below for details on how we use cookies and tracking technologies.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8. Children's Privacy</h3>
                  <p>Our Services are not intended for individuals under 13 years of age.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">9. International Data Transfers</h3>
                  <p>
                    If You are located outside the United States, Your information may be transferred to and processed in 
                    the United States, where data protection laws may differ from those in Your country.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">10. Changes to This Policy</h3>
                  <p>
                    We may update this Privacy Policy from time to time. Please check this page regularly for updates. 
                    Continued use of Our Services after changes constitutes acceptance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">11. Contact Us</h3>
                  <p>
                    For privacy-related questions or concerns:<br />
                    AI Direct Support<br />
                    101 Springhaven Dr Apt 1B220<br />
                    Gurnee, Illinois 60031<br />
                    Email: support@aidirectsupport.com
                  </p>
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
                  <p className="text-slate-400 text-sm mt-1">Effective Date: January 18, 2026</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  This Cookie Policy explains how AI Direct Support uses cookies and similar tracking technologies on 
                  aidirectsupport.com to improve user experience and analyze AI service usage.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">What Are Cookies?</h3>
                  <p>
                    Cookies are small text files stored on Your device when You visit our website. We use both first-party 
                    cookies (set by us) and third-party cookies (set by external services).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Types of Cookies We Use</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Essential Cookies</h4>
                      <p>
                        Required for basic site operation, including session management and security features. These cannot 
                        be disabled without affecting site functionality.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Analytics Cookies</h4>
                      <p className="mb-2">
                        Used to measure website traffic and improve AI features. We use services like Google Analytics.
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>Personal data processed: Usage data, IP address (anonymized)</li>
                        <li>Cookie examples: _ga (2 years), _gid (24 hours)</li>
                        <li>Third party: Google (US) - <a href="https://policies.google.com/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Functionality Cookies</h4>
                      <p>Remember Your preferences for workflows, agents, and site settings to enhance Your experience.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Marketing Cookies</h4>
                      <p>We currently do not use marketing or advertising cookies.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">How to Manage Cookies</h3>
                  <p className="mb-3">You can control cookies in several ways:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Browser Settings:</strong> Most browsers allow You to refuse or delete cookies. Check Your browser's help section for instructions.</li>
                    <li><strong>Cookie Consent Banner:</strong> Use Our cookie consent banner to accept or decline non-essential cookies</li>
                    <li><strong>Google Analytics Opt-out:</strong> Install the <a href="https://tools.google.com/dlpage/gaoptout" className="text-cyan-400 hover:text-cyan-300">Google Analytics Opt-out Browser Add-on</a></li>
                  </ul>
                  <p className="mt-3">
                    <em>Note:</em> Blocking certain cookies may limit website functionality and Your ability to use some features.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Third-Party Services</h3>
                  <p>
                    We use Google Analytics to analyze site usage. Google may use the collected data to contextualize and 
                    personalize ads within their own advertising network. For more information, review 
                    <a href="https://policies.google.com/privacy" className="text-cyan-400 hover:text-cyan-300 ml-1">Google's Privacy Policy</a>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Updates to This Policy</h3>
                  <p>We may update this Cookie Policy from time to time. Please check this page regularly for changes.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                  <p>
                    For questions about cookies or this policy, contact us at:<br />
                    Email: support@aidirectsupport.com
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Compliance Guidance */}
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
                  <p className="text-slate-400 text-sm mt-1">Our Commitment to Responsible AI</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  AI Direct Support is committed to responsible AI practices and compliance with applicable laws and regulations. 
                  As a low-risk AI service provider (minimal personal data collection, no AI model training on customer data, 
                  human-led consulting), we focus on the following key areas:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-slate-700">
                        <th className="text-left py-3 px-4 text-white font-semibold bg-slate-800/50">Compliance Area</th>
                        <th className="text-left py-3 px-4 text-white font-semibold bg-slate-800/50">Our Actions</th>
                        <th className="text-left py-3 px-4 text-white font-semibold bg-slate-800/50">Legal Framework</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                      <tr className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-4 px-4 font-semibold text-cyan-400">Privacy & Data Protection</td>
                        <td className="py-4 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Clear Privacy Policy posted and accessible</li>
                            <li>Minimal data collection practices</li>
                            <li>Secure data storage with encryption</li>
                            <li>Prompt response to access/deletion requests</li>
                            <li>No selling or sharing of personal data for marketing</li>
                          </ul>
                        </td>
                        <td className="py-4 px-4">
                          FTC Section 5 (prohibits deceptive practices); state laws (CCPA for California users if thresholds met); 
                          Illinois Biometric Information Privacy Act (BIPA) where applicable
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-4 px-4 font-semibold text-cyan-400">AI Transparency</td>
                        <td className="py-4 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Disclose AI use as a supportive tool, not autonomous</li>
                            <li>Emphasize human oversight in all consultations</li>
                            <li>No exaggerated or unsubstantiated AI capability claims</li>
                            <li>Clear communication about AI limitations and potential errors</li>
                          </ul>
                        </td>
                        <td className="py-4 px-4">
                          FTC guidelines on AI disclosures and avoiding deceptive marketing; emerging AI transparency requirements
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-4 px-4 font-semibold text-cyan-400">Consumer Protection</td>
                        <td className="py-4 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Accurate, transparent pricing information</li>
                            <li>Clear refund and cancellation policies</li>
                            <li>No hidden fees or deceptive charges</li>
                            <li>Honest representation of service capabilities</li>
                          </ul>
                        </td>
                        <td className="py-4 px-4">
                          FTC Act; Illinois Consumer Fraud and Deceptive Business Practices Act; state consumer protection laws
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-4 px-4 font-semibold text-cyan-400">Payment Security</td>
                        <td className="py-4 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Use of PCI-compliant payment processor (Stripe)</li>
                            <li>Secure forms with SSL/TLS encryption</li>
                            <li>No storage of payment card details on our servers</li>
                            <li>Regular security audits</li>
                          </ul>
                        </td>
                        <td className="py-4 px-4">
                          PCI DSS compliance (via Stripe); state data breach notification laws
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-4 px-4 font-semibold text-cyan-400">Responsible AI</td>
                        <td className="py-4 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Test outputs for accuracy and bias</li>
                            <li>Human review of all AI-generated content</li>
                            <li>Continuous monitoring and improvement</li>
                            <li>Staff training on AI ethics and limitations</li>
                          </ul>
                        </td>
                        <td className="py-4 px-4">
                          NIST AI Risk Management Framework; industry best practices; evolving federal and state AI regulations
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-4 px-4 font-semibold text-cyan-400">International Considerations</td>
                        <td className="py-4 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Monitoring of international client growth</li>
                            <li>Prepared to implement data transfer safeguards as needed</li>
                            <li>Awareness of GDPR and other international privacy frameworks</li>
                          </ul>
                        </td>
                        <td className="py-4 px-4">
                          GDPR (EU); data protection laws in target markets; cross-border data transfer regulations
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 mt-8">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-cyan-400" />
                    Our Compliance Commitment
                  </h3>
                  <p className="mb-3">
                    We regularly review and update our policies and practices to ensure ongoing compliance with applicable laws 
                    and industry standards. Our compliance program includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Quarterly policy reviews and updates</li>
                    <li>Ongoing staff training on privacy, security, and AI ethics</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Incident response and breach notification procedures</li>
                    <li>Vendor management and third-party risk assessment</li>
                    <li>Documentation and recordkeeping for accountability</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Questions or Concerns?</h3>
                  <p>
                    If you have questions about our compliance practices or wish to report a concern, please contact us at:<br />
                    Email: support@aidirectsupport.com<br />
                    Address: 101 Springhaven Dr Apt 1B220, Gurnee, Illinois 60031
                  </p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
