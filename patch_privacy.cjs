const fs = require('fs');
let code = fs.readFileSync('src/components/PrivacyPolicy.tsx', 'utf8');

// 1. Add useState and ChevronDown icon
code = code.replace(
  "import React, { useEffect } from 'react';",
  "import React, { useEffect, useState } from 'react';"
);
code = code.replace(
  "import { Lock, Shield, User, PieChart, RefreshCw, CheckCircle2, ArrowLeft, FileText } from 'lucide-react';",
  "import { Lock, Shield, User, PieChart, RefreshCw, CheckCircle2, ArrowLeft, FileText, ChevronDown } from 'lucide-react';"
);

// 2. Add Logo component definition
const logoComponent = `
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
`;
code = code.replace("export default function PrivacyPolicy() {\n", logoComponent);

// Add TOC state
code = code.replace(
  "  const { t } = useTranslation();",
  "  const { t } = useTranslation();\n  const [isTocOpen, setIsTocOpen] = useState(false);"
);

// 3. Fix Header Logo
const oldHeaderLogoRegex = /<div className="flex items-center gap-1\.5">[\s\S]*?<div className="flex items-center">/m;
const newHeaderLogo = `<div className="flex items-center gap-1.5">\n              <Logo className="w-8 h-8" />\n              <div className="flex items-center">`;
code = code.replace(oldHeaderLogoRegex, newHeaderLogo);

// 4. Update Hero Banner
const oldHero = `<section className="w-full bg-gradient-to-r from-[#195FD7] to-[#3080FF] py-16 sm:py-20 flex flex-col items-center justify-center text-center px-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
          <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-[#90C5FF] text-base sm:text-lg font-medium">
          TikFlow™ - Last updated: August 2026
        </p>
      </section>`;
      
const newHero = `<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
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
      </div>`;
code = code.replace(oldHero, newHero);


// 5. Update TOC Mobile Accordion
const oldToc = `<aside className="md:col-span-4 lg:col-span-3">
            <div className="bg-white border border-[#D1D5DB] rounded-lg p-5 sticky top-24">
              <h3 className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-4">
                CONTENTS
              </h3>`;
const newToc = `<aside className="md:col-span-4 lg:col-span-3">
            <div className="bg-white border border-[#D1D5DB] rounded-lg p-5 sticky top-24">
              <div 
                className="flex items-center justify-between cursor-pointer md:cursor-default" 
                onClick={() => setIsTocOpen(!isTocOpen)}
              >
                <h3 className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider md:mb-4">
                  CONTENTS
                </h3>
                <ChevronDown className={\`w-5 h-5 text-[#9CA3AF] transition-transform md:hidden \${isTocOpen ? 'rotate-180' : ''}\`} />
              </div>
              
              <div className={\`\${isTocOpen ? 'block mt-4' : 'hidden'} md:block\`}>`;
              
code = code.replace(oldToc, newToc);

const oldTocEnd = `Terms of Service</span>
              </Link>
            </div>
          </aside>`;
const newTocEnd = `Terms of Service</span>
              </Link>
              </div>
            </div>
          </aside>`;
code = code.replace(oldTocEnd, newTocEnd);


// 6. Fix Info Box order on Mobile
// The request asks for the "Your Privacy Matters" card to be ABOVE the TOC on mobile.
// So in the DOM structure, we should move the Info Box BEFORE the <aside> on mobile, or just rearrange it.
// The easiest way is to move the Info Box out of the `md:col-span-8` column and put it *above* the grid, or use flex ordering on mobile.
// Let's use CSS flex-order or grid ordering, OR just extract it to above the grid for mobile, but it needs to be inside the right column on desktop.
// Wait, the SnapTik layout shows: Hero, then Info Box, then TOC.
// Let's modify the grid wrapper to use flex col-reverse on mobile, and grid on desktop.
const oldMainContent = `<div className="md:col-span-8 lg:col-span-9 space-y-6">
            
            {/* Info Box */}`;
            
const newMainContent = `<div className="md:col-span-8 lg:col-span-9 space-y-6 flex flex-col order-first md:order-last">
            
            {/* Info Box */}`;
            
code = code.replace(oldMainContent, newMainContent);

const oldGridWrapper = `<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">`;
const newGridWrapper = `<div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-10">`;
code = code.replace(oldGridWrapper, newGridWrapper);

// Wait, if I make `.md:col-span-8` have `order-first`, then BOTH the Info Box and the Sections (1,2,3,4) will come BEFORE the TOC on mobile.
// The user wants: Hero -> Info Box -> TOC -> Sections.
// To achieve this, the Info Box MUST be separate from the Sections on mobile, or we duplicate it, or we use CSS grid areas.
// Let's duplicate the Info Box: hide it in the right column on mobile, show it above the grid on mobile.

code = fs.readFileSync('src/components/PrivacyPolicy.tsx', 'utf8');

// Start over the replacement for Mobile ordering to be more precise
let newCode = code;

// 1. Add imports & Logo & State
newCode = newCode.replace(
  "import React, { useEffect } from 'react';",
  "import React, { useEffect, useState } from 'react';"
);
newCode = newCode.replace(
  "import { Lock, Shield, User, PieChart, RefreshCw, CheckCircle2, ArrowLeft, FileText } from 'lucide-react';",
  "import { Lock, Shield, User, PieChart, RefreshCw, CheckCircle2, ArrowLeft, FileText, ChevronDown } from 'lucide-react';"
);
newCode = newCode.replace("export default function PrivacyPolicy() {\n", logoComponent);
newCode = newCode.replace(
  "  const { t } = useTranslation();",
  "  const { t } = useTranslation();\n  const [isTocOpen, setIsTocOpen] = useState(false);"
);
newCode = newCode.replace(oldHeaderLogoRegex, newHeaderLogo);
newCode = newCode.replace(oldHero, newHero);
newCode = newCode.replace(oldToc, newToc);
newCode = newCode.replace(oldTocEnd, newTocEnd);

// Now handle the Info Box split for mobile/desktop exact ordering
// Extract Info Box
const infoBoxRegex = /{\/\* Info Box \*\/}\s*<div className="bg-\[#F8F9FA\] border border-\[#D1D5DB\] rounded-lg p-6 flex items-start gap-4">[\s\S]*?<\/div>\s*<\/div>/;
const infoBoxMatch = newCode.match(infoBoxRegex);
if (infoBoxMatch) {
  const infoBoxHtml = infoBoxMatch[0];
  
  // Create a mobile version (hidden on md)
  const mobileInfoBoxHtml = infoBoxHtml.replace('flex items-start gap-4"', 'flex items-start gap-4 md:hidden mb-6"');
  
  // Modify the original one to be desktop only (hidden on mobile)
  const desktopInfoBoxHtml = infoBoxHtml.replace('flex items-start gap-4"', 'hidden md:flex items-start gap-4"');
  
  // Insert mobile version right before the grid
  newCode = newCode.replace('<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">', mobileInfoBoxHtml + '\n          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">');
  
  // Replace original with desktop version
  newCode = newCode.replace(infoBoxHtml, desktopInfoBoxHtml);
}

fs.writeFileSync('src/components/PrivacyPolicy.tsx', newCode);
