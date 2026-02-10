import { Brain } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    // If we're on home page, just scroll
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <button 
              onClick={handleLogoClick}
              className="flex items-center space-x-2 group"
            >
              <Brain className="w-8 h-8 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <span className="text-xl font-display font-bold text-white">
                AI Direct Support
              </span>
            </button>
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
                <button 
                  onClick={() => scrollToSection('audit-types')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm text-left"
                >
                  Structural AI Auditing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('audit-types')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm text-left"
                >
                  Strategic Implementation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('audit-types')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm text-left"
                >
                  Corporate Education
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('roi')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm text-left"
                >
                  ROI Calculator
                </button>
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
                <button 
                  onClick={() => scrollToSection('methodology')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm text-left"
                >
                  Methodology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm text-left"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm text-left"
                >
                  Contact
                </button>
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
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/legal#privacy" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/legal#cookies" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/legal#compliance" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block"
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
