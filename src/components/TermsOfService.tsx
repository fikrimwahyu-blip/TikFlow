import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, AlertTriangle, CheckCircle, Users, Layers, ShieldCheck, AlertCircle, Award, Copyright, Lock, Info, Link as LinkIcon, RefreshCw, ArrowLeft, ChevronDown } from 'lucide-react';
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

export default function TermsOfService() {
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
            <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">Terms of Service</h1>
          <p className="text-[#90C5FF] text-base sm:text-lg font-medium">
            TikFlow™ - Last updated: August 2026
          </p>
        </section>
      </div>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        {/* Info Box */}
            <div className="bg-amber-50 border border-[#FCD34D] rounded-lg p-6 flex items-start gap-4 md:hidden mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h2 className="text-amber-900 font-bold text-lg mb-2">Important Notice</h2>
                <p className="text-amber-900 text-sm md:text-base leading-relaxed">
                  Please read these terms of service (Terms of Service or ToS) carefully before accessing our application and website. Our ToS may change from time to time to be in line with the developments to our application and website to give our valued users the highest satisfaction. Please check regularly the update time on top of the ToS to ensure you have read the updated version with changes.
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
                {[
                  { id: 1, title: 'Acceptance of Terms of Service' },
                  { id: 2, title: 'Who May Use Our Services' },
                  { id: 3, title: 'Materials Relate to Our Services' },
                  { id: 4, title: "Users' Obligations" },
                  { id: 5, title: 'Intellectual Property' },
                  { id: 6, title: 'Privacy' },
                  { id: 7, title: 'Accuracy of materials' },
                  { id: 8, title: 'Links' },
                  { id: 9, title: 'Modifications' }
                ].map((item) => (
                  <button key={item.id} onClick={() => scrollToSection(`section-${item.id}`)} className="w-full flex items-center gap-3 py-2.5 text-left group">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#9CA3AF] text-xs font-medium group-hover:bg-[#195FD7] group-hover:text-white transition-colors">{item.id}</span>
                    <span className="text-[#000000] text-sm font-medium group-hover:text-[#195FD7] transition-colors">{item.title}</span>
                  </button>
                ))}
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
            <div className="bg-amber-50 border border-[#FCD34D] rounded-lg p-6 hidden md:flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h2 className="text-amber-900 font-bold text-lg mb-2">Important Notice</h2>
                <p className="text-amber-900 text-sm md:text-base leading-relaxed">
                  Please read these terms of service (Terms of Service or ToS) carefully before accessing our application and website. Our ToS may change from time to time to be in line with the developments to our application and website to give our valued users the highest satisfaction. Please check regularly the update time on top of the ToS to ensure you have read the updated version with changes.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <div id="section-1" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 1</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Acceptance of Terms of Service</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                By accessing and using our application and website, you signify your acceptance of our policy and ToS, including the updated versions. If you do not agree with any content, please do not use our application and website.
              </p>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 2</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Who May Use Our Services (User)</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                Our ToS governs the relationship between TikFlow and users of TikFlow App being who access the TikFlow App and/or use the products and services provided through the TikFlow App. You must be at least 13 years old to use our services. If you are using our services on behalf of a business or entity, you represent and warrant that you are authorized to bind that business or entity to these ToS.
              </p>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 3</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Materials Relate to Our Services</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                TikFlow creates and maintains TikFlow App, which provides users with the ability to download videos. The content and materials provided on the TikFlow App are free for personal, non-commercial use only.
              </p>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 4</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Users' Obligations</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed mb-4">
                You agree to use TikFlow App in compliance with all local and international laws. You are solely responsible for any content you download using our services.
              </p>
              
              <div className="bg-red-50 border border-[#FCA5A5] rounded-xl p-4 mt-4 flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
                <div>
                  <h3 className="text-red-700 font-bold mb-1">Disclaimer</h3>
                  <p className="text-red-700 font-bold text-sm">
                    TIKFLOW IS NOT RESPONSIBLE FOR ANY VIOLATION OF APPLICABLE LAWS, RULES, OR REGULATIONS COMMITTED BY YOU OR A THIRD PARTY AT YOUR BEHEST.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div id="section-5" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 5</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Intellectual Property</h2>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">1. Trademark</h3>
                  <p className="text-[#000000] text-sm md:text-base leading-relaxed">TikFlow is a trademark created by us. You are not allowed to use our trademark without our written permission.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">2. Copyright</h3>
                  <p className="text-[#000000] text-sm md:text-base leading-relaxed">Users are fully responsible for the links they paste into TikFlow App. We do not host any of the videos downloaded. You must only download content for personal and non-commercial use, and respect the copyright of the content creators.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">3. Use License</h3>
                  <p className="text-[#000000] text-sm md:text-base leading-relaxed">We grant you permission to temporarily download one copy of the materials on TikFlow App for personal, non-commercial transitory viewing only.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">4. Disclaimer</h3>
                  <p className="text-[#000000] text-sm md:text-base leading-relaxed">The materials on TikFlow App are provided on an 'as is' basis. We make no warranties, expressed or implied.</p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="section-6" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 6</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Privacy</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                We run TikFlow App in compliance with our set principles to ensure that the confidentiality of personal information including information of our Users is protected and maintained without disclosing to any third parties for any reason. Please review our <Link to="/privacy" className="text-[#195FD7] hover:underline">Privacy Policy</Link> for more details.
              </p>
            </div>

            {/* Section 7 */}
            <div id="section-7" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Info className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 7</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Accuracy of materials</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                The materials appearing on TikFlow App could include technical, typographical, or photographic errors. TikFlow does not warrant that any of the materials on its website are accurate, complete or current. TikFlow may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            {/* Section 8 */}
            <div id="section-8" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <LinkIcon className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 8</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Links</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                TikFlow has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TikFlow of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            {/* Section 9 */}
            <div id="section-9" className="bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <RefreshCw className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION 9</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Modifications</h2>
                </div>
              </div>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed">
                TikFlow may revise these Terms of Service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center mt-8 shadow-sm flex flex-col items-center justify-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Questions about our terms?</h2>
              <Link to="/privacy" className="inline-flex items-center gap-2 bg-[#195FD7] text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors">
                Read Privacy Policy
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
