const fs = require('fs');
let code = fs.readFileSync('src/components/HowToDownload.tsx', 'utf8');

// 1. Remove Smartphone import
code = code.replace(
  "import { CheckCircle2, HelpCircle, Smartphone } from 'lucide-react';",
  "import { CheckCircle2, HelpCircle } from 'lucide-react';"
);

// 2. Update About TikFlow Card
code = code.replace(
  '<section className="bg-[#f0f7ff] rounded-2xl p-6 sm:p-8">',
  '<section className="bg-slate-50 rounded-2xl p-4 sm:p-5">'
);

code = code.replace(
  '<ul className="space-y-4">',
  '<ul className="space-y-2.5">'
);

code = code.replace(
  '<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">',
  '<h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">'
);

code = code.replace(
  '<span className="text-gray-700 text-base leading-relaxed">{text}</span>',
  '<span className="text-slate-600 text-sm sm:text-base leading-relaxed">{text}</span>'
);
code = code.replace(
  '<CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />',
  '<CheckCircle2 className="w-5 h-5 text-[#195FD7] shrink-0 mt-0.5" />'
);

// 3. Update Vertical Steps
const oldTitleSection = `<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-gray-900" />
            {t('howToStepsTitle', 'How to Download TikTok Videos')}
          </h2>`;
const newTitleSection = `<h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            {t('howToStepsTitle', 'How to Download TikTok Videos')}
          </h2>`;
code = code.replace(oldTitleSection, newTitleSection);

code = code.replace(
  '<div className="w-7 h-7 shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm mt-0.5">',
  '<div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-[#195FD7] text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm mt-0.5">'
);

code = code.replace(
  '<p className="text-gray-800 text-base leading-relaxed">{text}</p>',
  '<p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">{text}</p>'
);

fs.writeFileSync('src/components/HowToDownload.tsx', code);
