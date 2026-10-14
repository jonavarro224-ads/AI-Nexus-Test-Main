import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ShieldCheck, Zap, Smartphone, AlertTriangle, 
  CheckCircle2, ArrowRight, Globe, RefreshCw, X, Check, Lock, AlertCircle
} from 'lucide-react';

export default function SEOAnalyzer() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'input' | 'scanning' | 'results'>('input');
  const [scanProgress, setScanProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Initiating handshake and verifying SSL handshake protocols...",
    "Scanning landing page meta tags, robots.txt, and sitemaps...",
    "Analyzing Largest Contentful Paint (LCP) & server-response latency...",
    "Validating CSS bundles, JS thread blockages, and asset compression...",
    "Testing responsive viewports and touch-target sizing benchmarks..."
  ];

  // Run the mock scanning progress
  useEffect(() => {
    if (status !== 'scanning') return;

    setScanProgress(0);
    setCurrentStep(0);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        const next = prev + 1.25;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setStatus('results');
          }, 600);
          return 100;
        }
        
        // Progressively shift through steps based on percentage
        const stepIndex = Math.floor((next / 100) * steps.length);
        if (stepIndex !== currentStep && stepIndex < steps.length) {
          setCurrentStep(stepIndex);
        }

        return next;
      });
    }, 50); // Takes about 4 seconds total

    return () => clearInterval(interval);
  }, [status]);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    
    // Simple URL normalization
    let cleanUrl = url.trim();
    if (!/^https?:\/\//i.test(cleanUrl)) {
      cleanUrl = 'https://' + cleanUrl;
    }
    setUrl(cleanUrl);
    setStatus('scanning');
  };

  const resetAnalyzer = () => {
    setUrl('');
    setStatus('input');
    setScanProgress(0);
    setCurrentStep(0);
  };

  // Helper to get color of score
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5';
    if (score >= 70) return 'text-amber-400 border-amber-500/30 bg-amber-500/5';
    return 'text-rose-400 border-rose-500/30 bg-rose-500/5';
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background radial gradient to highlight the tool */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        <AnimatePresence mode="wait">
          {/* STATE 1: INPUT */}
          {status === 'input' && (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Search className="w-4 h-4" />
                Digital Supply Chain Audit
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Run an Instant <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Performance & SEO Audit
                </span>
              </h2>

              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Scan your website in seconds to uncover hidden latency, technical SEO gaps, and critical security issues that drive traffic away.
              </p>

              <form onSubmit={handleAnalyze} className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-2xl focus-within:border-cyan-500/50 transition-colors">
                  <div className="flex-1 flex items-center px-3 gap-2">
                    <Globe className="w-5 h-5 text-slate-500" />
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Enter your website URL (e.g. website.com)"
                      required
                      className="w-full bg-transparent border-0 text-white placeholder-slate-500 focus:outline-none focus:ring-0 text-base py-3"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all duration-300 whitespace-nowrap"
                  >
                    Analyze Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  No email required for initial diagnostic score. Built for developers and business leaders.
                </p>
              </form>
            </motion.div>
          )}

          {/* STATE 2: SCANNING */}
          {status === 'scanning' && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="glass-panel max-w-2xl mx-auto rounded-2xl p-12 text-center flex flex-col items-center border border-white/10 shadow-2xl relative"
            >
              {/* Radial Progress Ring */}
              <div className="relative w-36 h-36 mb-8 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="72"
                    cy="72"
                    r="64"
                    className="stroke-slate-800"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="72"
                    cy="72"
                    r="64"
                    className="stroke-cyan-500 transition-all duration-100 ease-out"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 64}
                    strokeDashoffset={2 * Math.PI * 64 * (1 - scanProgress / 100)}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-mono font-bold text-white">{Math.round(scanProgress)}%</span>
                  <span className="text-xs text-cyan-400 font-semibold tracking-wider uppercase">Scanning</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Analyzing {url.replace(/^https?:\/\//i, '')}</h3>
              
              {/* Step label with fade transitions */}
              <div className="h-12 flex items-center justify-center">
                <p className="text-slate-400 font-mono text-sm max-w-md animate-pulse">
                  {steps[currentStep]}
                </p>
              </div>

              {/* Progress checklist preview */}
              <div className="w-full mt-8 max-w-sm space-y-3 text-left border-t border-white/5 pt-6 font-mono text-xs">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {idx < currentStep ? (
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    ) : idx === currentStep ? (
                      <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-slate-700 flex-shrink-0" />
                    )}
                    <span className={idx <= currentStep ? 'text-slate-300' : 'text-slate-600'}>
                      {step.substring(0, 35)}...
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STATE 3: RESULTS */}
          {status === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Results Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-1">Audit Results for</div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Globe className="w-5 h-5 text-cyan-400" />
                    {url.replace(/^https?:\/\//i, '')}
                  </h3>
                </div>
                <button 
                  onClick={resetAnalyzer}
                  className="px-4 py-2 bg-slate-900 border border-white/10 text-slate-300 text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Scan Another Site
                </button>
              </div>

              {/* Grid of 4 Score Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                
                {/* SEO */}
                <div className={`p-6 rounded-xl border flex flex-col items-center text-center ${getScoreColor(72)}`}>
                  <Search className="w-6 h-6 mb-3" />
                  <span className="text-xs font-mono uppercase tracking-wider opacity-80">SEO Score</span>
                  <span className="text-4xl font-bold font-mono mt-2">72/100</span>
                  <span className="text-xs mt-3 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 font-medium">Warning</span>
                </div>

                {/* Speed */}
                <div className={`p-6 rounded-xl border flex flex-col items-center text-center ${getScoreColor(54)}`}>
                  <Zap className="w-6 h-6 mb-3" />
                  <span className="text-xs font-mono uppercase tracking-wider opacity-80">Load Speed</span>
                  <span className="text-4xl font-bold font-mono mt-2">54/100</span>
                  <span className="text-xs mt-3 px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 font-medium">Critical</span>
                </div>

                {/* Security */}
                <div className={`p-6 rounded-xl border flex flex-col items-center text-center ${getScoreColor(92)}`}>
                  <ShieldCheck className="w-6 h-6 mb-3" />
                  <span className="text-xs font-mono uppercase tracking-wider opacity-80">Security</span>
                  <span className="text-4xl font-bold font-mono mt-2">92/100</span>
                  <span className="text-xs mt-3 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-medium">Passing</span>
                </div>

                {/* Mobile */}
                <div className={`p-6 rounded-xl border flex flex-col items-center text-center ${getScoreColor(81)}`}>
                  <Smartphone className="w-6 h-6 mb-3" />
                  <span className="text-xs font-mono uppercase tracking-wider opacity-80">Mobile-First</span>
                  <span className="text-4xl font-bold font-mono mt-2">81/100</span>
                  <span className="text-xs mt-3 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 font-medium">Warning</span>
                </div>

              </div>

              {/* Detailed Breakdown */}
              <div className="glass-panel rounded-xl p-8 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-rose-400" />
                  Critical Bottlenecks Found
                </h4>

                <div className="space-y-6">
                  
                  {/* Issue 1: Speed */}
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-slate-900/40 border border-white/5">
                    <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400 mt-1">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-white font-bold">Render-Blocking Uncompressed Assets</h5>
                        <span className="text-xs font-mono px-2 py-0.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded">Speed</span>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">
                        Unoptimized Javascript bundles and large image assets are delaying the Largest Contentful Paint (LCP) to <strong>3.8s</strong>. Google recommends LCP under 2.5s for SEO ranking boosts.
                      </p>
                    </div>
                  </div>

                  {/* Issue 2: SEO */}
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-slate-900/40 border border-white/5">
                    <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 mt-1">
                      <Search className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-white font-bold">Missing Image Alt Attributes & Hierarchy Gaps</h5>
                        <span className="text-xs font-mono px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">SEO</span>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">
                        We detected 14 images without valid `alt` descriptors, alongside unstructured heading hierarchies (multiple H1 tags). This restricts crawler capability to contextualize page keywords.
                      </p>
                    </div>
                  </div>

                  {/* Issue 3: Security */}
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-slate-900/40 border border-white/5">
                    <div className="p-2 bg-slate-500/15 rounded-lg text-slate-300 mt-1">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-white font-bold">Missing CSP & HSTS Headers</h5>
                        <span className="text-xs font-mono px-2 py-0.5 bg-slate-500/20 text-slate-300 border border-slate-700 rounded">Security</span>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">
                        Your SSL certificate is healthy, but Content Security Policy (CSP) and HTTP Strict Transport Security (HSTS) headers are not deployed, exposing the client side to scripts manipulation.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Pitch CTA Card */}
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-blue-950/40 p-8 md:p-12 shadow-2xl">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="max-w-xl">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to engineer these fixes?
                  </h4>
                  <p className="text-slate-300 mb-8 leading-relaxed">
                    A slow website drains traffic and costs sales. Our team of software developers can optimize your digital supply chain, deploy fast servers, and secure standard security protocols.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => {
                        const pricingSec = document.getElementById('pricing');
                        if (pricingSec) {
                          pricingSec.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                    >
                      View Optimization Plans
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        const contactSec = document.getElementById('contact');
                        if (contactSec) {
                          contactSec.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-white/10 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all"
                    >
                      Book Free Dev Consultation
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
