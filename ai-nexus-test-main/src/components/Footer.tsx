import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <Brain className="w-8 h-8 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <span className="text-xl font-display font-bold text-white">
                AI Direct Support
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your Website is Your Digital Supply Chain. We engineer high-velocity digital assets 
              with 24/7 maintenance for businesses that can't afford downtime.
            </p>
            <div className="text-slate-500 text-xs">
              <p>101 Springhaven Dr Apt 1B220</p>
              <p>Gurnee, Illinois 60031</p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Solutions
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/#audit-types" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Structural AI Auditing
                </a>
              </li>
              <li>
                <a 
                  href="/#audit-types" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Strategic Implementation
                </a>
              </li>
              <li>
                <a 
                  href="/#audit-types" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Corporate Education
                </a>
              </li>
              <li>
                <a 
                  href="/#roi" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  ROI Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/#methodology" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Methodology
                </a>
              </li>
              <li>
                <a 
                  href="/#about" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Why Us
                </a>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/legal#terms" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/legal#privacy" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/legal#cookies" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/legal#compliance" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">
              © {currentYear} AI Direct Support. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span>Made with precision engineering</span>
              <span className="hidden sm:inline">•</span>
              <a 
                href="mailto:support@aidirectsupport.com"
                className="hover:text-cyan-400 transition-colors"
              >
                support@aidirectsupport.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
