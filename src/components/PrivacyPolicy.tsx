import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, ShieldCheck, User, PieChart, RefreshCw, CheckCircle2, ArrowLeft, FileText, ChevronDown } from 'lucide-react';
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

export default function PrivacyPolicy() {
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
            <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-[#90C5FF] text-base sm:text-lg font-medium">
            TikFlow™ - Last updated: August 2026
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
                  <span className="text-[#000000] text-sm font-medium group-hover:text-[#195FD7] transition-colors">Personal Information</span>
                </button>
                <button onClick={() => scrollToSection('section-2')} className="w-full flex items-center gap-3 py-2.5 text-left group">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#9CA3AF] text-xs font-medium group-hover:bg-[#195FD7] group-hover:text-white transition-colors">2</span>
                  <span className="text-[#000000] text-sm font-medium group-hover:text-[#195FD7] transition-colors">Advertising</span>
                </button>
                <button onClick={() => scrollToSection('section-3')} className="w-full flex items-center gap-3 py-2.5 text-left group">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#9CA3AF] text-xs font-medium group-hover:bg-[#195FD7] group-hover:text-white transition-colors">3</span>
                  <span className="text-[#000000] text-sm font-medium group-hover:text-[#195FD7] transition-colors">Policy Changes</span>
                </button>
                <button onClick={() => scrollToSection('section-4')} className="w-full flex items-center gap-3 py-2.5 text-left group">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#9CA3AF] text-xs font-medium group-hover:bg-[#195FD7] group-hover:text-white transition-colors">4</span>
                  <span className="text-[#000000] text-sm font-medium group-hover:text-[#195FD7] transition-colors">Acceptance</span>
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
                  <User className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 1</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Personal identification information</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                Users may visit TikFlow App anonymously. We never record the identification information of our Users and will only collect personal identification information from Users if they voluntarily submit such information to us. Users can always refuse to supply personal identification information. However, if they agree to supply they are responsible for providing exact and correct identification information of themselves.
              </p>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed mt-4">
                TikFlow is not responsible for any fake or incorrect information provided by the Users. If we discover such incidents we would ban Users from accessing and using TikFlow App and our Services.
              </p>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <PieChart className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 2</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Advertising</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                We accept advertisements (Ads) on TikFlow App to maintain and support our development for non-commercial purposes. Ads appearing on TikFlow App may be delivered to Users by advertising partners who may set cookies.
              </p>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed mt-4">
                They will only compile non-personal identification information about you or others who use your computer and do not track personal information about you, such as your name, email address, and physical address. You may dismiss the use of the cookies or cease access to our application and website at any time as Users of TikFlow are not required to accept the Ads.
              </p>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <RefreshCw className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 3</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Changes to this privacy policy</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                TikFlow has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
              </p>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed mt-4">
                You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
              </p>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 4</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Your acceptance of these terms</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                By accessing and using TikFlow App, you express your voluntary acceptance of this policy. If you do not agree to this policy, please do not use our App. Your continued use of the App following the posting of changes to this policy will be deemed your acceptance of those changes.
              </p>
            </div>


            {/* Contact Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center mt-8 shadow-sm flex flex-col items-center justify-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Have questions about our privacy practices?</h2>
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
