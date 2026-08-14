import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Info, ShieldCheck, ClipboardList, Table, Users, Settings, RefreshCw, ArrowLeft, FileText, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';


function Logo({ className = "w-6 h-6 sm:w-7 sm:h-7" }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#195FD7" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="24" fill="url(#logo-grad)" />
      <path d="M56 24 L32 54 H48 L40 76 L68 44 H52 Z" fill="#ffffff" stroke="#ffffff" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
  );
}

export default function CookiePolicy() {
  const { t } = useTranslation();
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    document.title = 'Privacy Policy - TikFlow';
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#000000]">
      {/* Header */}
      <header className="w-full bg-white border-b border-[#D1D5DB] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-1">
            {/* Mock Logo matching TikFlow branding */}
            <div className="flex items-center gap-1.5">
              <Logo className="w-8 h-8" />
              <div className="flex items-center">
                <span className="text-[#000000]">Tik</span>
                <span className="text-[#195FD7]">Flow</span>
              </div>
            </div>
          </Link>
          <Link to="/" className="text-sm font-medium text-[#9CA3AF] hover:text-[#000000] transition-colors flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <section className="w-full bg-gradient-to-br from-[#195FD7] to-[#3080FF] py-10 px-6 sm:py-16 flex flex-col items-center justify-center text-center rounded-2xl sm:rounded-3xl shadow-sm">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
            <Info className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">Cookie Policy</h1>
          <p className="text-[#90C5FF] text-base sm:text-lg font-medium">
            TikFlow™ - Last updated: March 2026
          </p>
        </section>
      </div>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        {/* Info Box */}
            <div className="bg-[#F8F9FA] border border-[#D1D5DB] rounded-lg p-6 flex items-start gap-4 md:hidden mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#195FD7]" />
              </div>
              <div>
                <h2 className="text-[#000000] font-semibold text-lg mb-2">Your Privacy Matters</h2>
                <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                  We are committed to protecting your privacy. This policy explains how we handle your information when you use TikFlow.
                </p>
              </div>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          
          {/* Sidebar */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="bg-white border border-[#D1D5DB] rounded-lg p-5 sticky top-24">
              <div 
                className="flex items-center justify-between cursor-pointer md:cursor-default" 
                onClick={() => setIsTocOpen(!isTocOpen)}
              >
                <h3 className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider md:mb-4">
                  CONTENTS
                </h3>
                <ChevronDown className={`w-5 h-5 text-[#9CA3AF] transition-transform md:hidden ${isTocOpen ? 'rotate-180' : ''}`} />
              </div>
              
              <div className={`${isTocOpen ? 'block mt-4' : 'hidden'} md:block`}>
              <nav className="space-y-1">
                <button onClick={() => scrollToSection('section-1')} className="w-full flex items-center gap-3 py-2.5 text-left group">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#9CA3AF] text-xs font-medium group-hover:bg-[#195FD7] group-hover:text-white transition-colors">1</span>
                  <span className="text-[#000000] text-sm font-medium group-hover:text-[#195FD7] transition-colors">What Are Cookies</span>
                </button>
                <button onClick={() => scrollToSection('section-2')} className="w-full flex items-center gap-3 py-2.5 text-left group">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#9CA3AF] text-xs font-medium group-hover:bg-[#195FD7] group-hover:text-white transition-colors">2</span>
                  <span className="text-[#000000] text-sm font-medium group-hover:text-[#195FD7] transition-colors">How We Use Cookies</span>
                </button>
                <button onClick={() => scrollToSection('section-3')} className="w-full flex items-center gap-3 py-2.5 text-left group">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#9CA3AF] text-xs font-medium group-hover:bg-[#195FD7] group-hover:text-white transition-colors">3</span>
                  <span className="text-[#000000] text-sm font-medium group-hover:text-[#195FD7] transition-colors">Types of Cookies We Use</span>
                </button>
                <button onClick={() => scrollToSection('section-4')} className="w-full flex items-center gap-3 py-2.5 text-left group">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#9CA3AF] text-xs font-medium group-hover:bg-[#195FD7] group-hover:text-white transition-colors">4</span>
                  <span className="text-[#000000] text-sm font-medium group-hover:text-[#195FD7] transition-colors">Third-Party Cookies</span>
                </button>
                <button onClick={() => scrollToSection('section-5')} className="w-full flex items-center gap-3 py-2.5 text-left group">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#9CA3AF] text-xs font-medium group-hover:bg-[#195FD7] group-hover:text-white transition-colors">5</span>
                  <span className="text-[#000000] text-sm font-medium group-hover:text-[#195FD7] transition-colors">Managing Cookies</span>
                </button>
                <button onClick={() => scrollToSection('section-6')} className="w-full flex items-center gap-3 py-2.5 text-left group">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#9CA3AF] text-xs font-medium group-hover:bg-[#195FD7] group-hover:text-white transition-colors">6</span>
                  <span className="text-[#000000] text-sm font-medium group-hover:text-[#195FD7] transition-colors">Changes to This Policy</span>
                </button>
              </nav>
              
              <div className="h-px bg-[#D1D5DB] my-5"></div>
              
              <Link to="/terms" className="flex items-center gap-3 py-2 text-left group">
                <FileText className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#195FD7] transition-colors" />
                <span className="text-[#000000] text-sm font-medium group-hover:text-[#195FD7] transition-colors">Terms of Service</span>
              </Link>
              </div>
            </div>
          </aside>

          {/* Content Column */}
          <div className="md:col-span-8 lg:col-span-9 space-y-6">
            
            {/* Info Box */}
            <div className="bg-[#F8F9FA] border border-[#D1D5DB] rounded-lg p-6 hidden md:flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#195FD7]" />
              </div>
              <div>
                <h2 className="text-[#000000] font-semibold text-lg mb-2">Your Privacy Matters</h2>
                <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                  We are committed to protecting your privacy. This policy explains how we handle your information when you use TikFlow.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <div id="section-1" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Info className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 1</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">What Are Cookies</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed mb-4">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to website owners.
              </p>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                Cookies allow a website to recognize your device and remember certain information about your visits, such as your preferred language and other settings.
              </p>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <ClipboardList className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 2</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">How We Use Cookies</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed mb-4">
                TikFlow uses cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-[#000000] text-sm md:text-base leading-relaxed space-y-2">
                <li><strong>Essential cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
                <li><strong>Preference cookies:</strong> Remember your language selection and other preferences for a better experience.</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous usage data.</li>
                <li><strong>Advertising cookies:</strong> Used by our advertising partners to display relevant ads and measure ad campaign effectiveness.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Table className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 3</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Types of Cookies We Use</h2>
                </div>
              </div>
              
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-left text-sm text-gray-600 border-collapse">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-gray-900">Cookie</th>
                      <th className="px-4 py-3 font-semibold text-gray-900">Type</th>
                      <th className="px-4 py-3 font-semibold text-gray-900">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">cookie_consent</td>
                      <td className="px-4 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">Essential</span></td>
                      <td className="px-4 py-3">Stores your cookie consent preference</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">locale</td>
                      <td className="px-4 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Preference</span></td>
                      <td className="px-4 py-3">Remembers your language selection</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">_ga, _gid</td>
                      <td className="px-4 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">Analytics</span></td>
                      <td className="px-4 py-3">Google Analytics tracking (anonymous)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">__pubpower_*</td>
                      <td className="px-4 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">Advertising</span></td>
                      <td className="px-4 py-3">PubPower ad personalization and frequency</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 4</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Third-Party Cookies</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed mb-4">
                Some cookies are placed by third-party services that appear on our pages. We use the following third-party services:
              </p>
              <ul className="list-disc list-inside text-[#000000] text-sm md:text-base leading-relaxed space-y-2 mb-4">
                <li><strong>Google Analytics:</strong> Provides anonymous statistics about website usage.</li>
                <li><strong>PubPower:</strong> Our advertising partner that may set cookies for ad personalization. You may dismiss ads at any time.</li>
              </ul>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                We do not control third-party cookies. Please refer to the respective privacy policies of these services for more information.
              </p>
            </div>

            {/* Section 5 */}
            <div id="section-5" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Settings className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 5</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Managing Cookies</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-[#000000] text-sm md:text-base leading-relaxed space-y-2 mb-4">
                <li><strong>Browser settings:</strong> Most browsers allow you to refuse or delete cookies. Check your browser's help section for instructions.</li>
                <li><strong>Cookie banner:</strong> Use the cookie consent banner on our website to accept or decline non-essential cookies.</li>
                <li><strong>Opt-out links:</strong> Visit Google Analytics Opt-out to disable Google Analytics tracking.</li>
              </ul>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                Please note that disabling cookies may affect the functionality of some features on our website.
              </p>
            </div>

            {/* Section 6 */}
            <div id="section-6" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <RefreshCw className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 6</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Changes to This Policy</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center mt-8 shadow-sm flex flex-col items-center justify-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Have questions about our cookie practices?</h2>
              <Link to="/" className="inline-flex items-center gap-2 bg-[#195FD7] text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors">
                Contact Us
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>

          </div>
        </div>
      </main>
      
      {/* Footer standard minimal */}
      <Footer className="w-full border-t border-gray-200 mt-auto pt-6 pb-10 bg-white" />
    </div>
  );
}
