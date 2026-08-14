const fs = require('fs');

let code = fs.readFileSync('src/components/CookiePolicy.tsx', 'utf8');

// Update imports
code = code.replace(
  "import { Lock, ShieldCheck, User, PieChart, RefreshCw, CheckCircle2, ArrowLeft, FileText, ChevronDown } from 'lucide-react';",
  "import { Info, ShieldCheck, ClipboardList, Table, Users, Settings, RefreshCw, ArrowLeft, FileText, ChevronDown } from 'lucide-react';"
);

// Update component name
code = code.replace("export default function PrivacyPolicy() {", "export default function CookiePolicy() {");

// Update Hero
code = code.replace(
  /<Lock className="w-8 h-8 sm:w-10 sm:h-10 text-white" \/>/,
  '<Info className="w-8 h-8 sm:w-10 sm:h-10 text-white" />'
);
code = code.replace(
  /<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">\s*Privacy Policy\s*<\/h1>/,
  '<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">Cookie Policy</h1>'
);
code = code.replace(
  /TikFlow™ - Last updated: August 2026/,
  'TikFlow™ - Last updated: March 2026'
);

// Update TOC List
const oldTocList = `<nav className="space-y-1">
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
              </nav>`;

const newTocList = `<nav className="space-y-1">
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
              </nav>`;
              
code = code.replace(oldTocList, newTocList);

// Info Box Title & Subtitle (optional update to Cookie policy context if not already matching)
// "Your Privacy Matters" -> "Cookie Policy Overview" (user didn't request changing it, but let's change it slightly to match cookies context or keep it same as "Your Privacy Matters")
// Actually, I'll just change the text if it makes sense. "Your Privacy Matters" is okay.

// Replace Sections 1-4 and add 5-6
const sectionsStart = "{/* Section 1 */}";
const sectionsEnd = "{/* Contact Card */}";
const sectionRegex = new RegExp(sectionsStart.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&') + '[\\\\s\\\\S]*?' + sectionsEnd.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'));

const newSections = \`{/* Section 1 */}
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
\`;

code = code.replace(sectionRegex, newSections);

// Replace Contact title
code = code.replace("Have questions about our privacy practices?", "Have questions about our cookie practices?");

// Update footer link in CookiePolicy to point to /cookies instead of /privacy#cookie
// Actually in both PrivacyPolicy and CookiePolicy, the cookie policy link is currently /privacy#cookie
// Let's just fix it globally later. For now in this file:
code = code.replace(
  '<Link to="/privacy#cookie" className="text-sm text-gray-500 hover:text-[#195FD7] mx-2 transition-colors">Contact</Link>',
  '<Link to="/contact" className="text-sm text-gray-500 hover:text-[#195FD7] mx-2 transition-colors">Contact</Link>' // Wait, there's a bug in PrivacyPolicy footer link for contact
);
code = code.replace(
  '<Link to="/privacy" className="text-sm text-gray-500 hover:text-[#195FD7] mx-2 transition-colors">Privacy Policy</Link>\\n            <Link to="/terms" className="text-sm text-gray-500 hover:text-[#195FD7] mx-2 transition-colors">Terms of Service</Link>\\n            <Link to="/privacy#contact" className="text-sm text-gray-500 hover:text-[#195FD7] mx-2 transition-colors">Contact</Link>',
  '<Link to="/privacy" className="text-sm text-gray-500 hover:text-[#195FD7] mx-2 transition-colors">Privacy Policy</Link>\\n            <Link to="/terms" className="text-sm text-gray-500 hover:text-[#195FD7] mx-2 transition-colors">Terms of Service</Link>\\n            <Link to="/cookies" className="text-sm text-gray-500 hover:text-[#195FD7] mx-2 transition-colors">Cookie Policy</Link>\\n            <Link to="/contact" className="text-sm text-gray-500 hover:text-[#195FD7] mx-2 transition-colors">Contact</Link>'
);

fs.writeFileSync('src/components/CookiePolicy.tsx', code);
