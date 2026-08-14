const fs = require('fs');
let code = fs.readFileSync('src/components/PrivacyPolicy.tsx', 'utf8');

// Replacements for Section 1, 2, 3, 4
const sections = [
  { id: '1', icon: 'User', title: 'Personal identification information' },
  { id: '2', icon: 'PieChart', title: 'Advertising' },
  { id: '3', icon: 'RefreshCw', title: 'Changes to this privacy policy' },
  { id: '4', icon: 'CheckCircle2', title: 'Your acceptance of these terms' },
];

sections.forEach(s => {
  const regex = new RegExp(
    \`<div className="w-10 h-10 rounded-full bg-\\[#F8F9FA\\] flex items-center justify-center mb-4">\\s*<\\w+ className="w-5 h-5 text-\\[#195FD7\\]" \\/>\\s*<\\/div>\\s*<div className="text-xs font-semibold text-\\[#9CA3AF\\] uppercase tracking-wider mb-2">SECTION \\d+<\\/div>\\s*<h2 className="text-xl font-bold text-\\[#000000\\] mb-4">[\\s\\S]*?<\\/h2>\`
  );
  
  const replacement = \`<div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <\${s.icon} className="w-5 h-5 text-[#195FD7]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SECTION \${s.id}</div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">\${s.title}</h2>
                </div>
              </div>\`;
  
  code = code.replace(regex, replacement);
});

// Replace Contact Card
const oldContactCardRegex = /{\/\* Contact Card \*\/}\s*<div className="bg-\[#195FD7\] rounded-xl p-8 text-center mt-8 shadow-sm">[\s\S]*?<\/div>/;

const newContactCard = \`{/* Contact Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center shadow-sm flex flex-col items-center justify-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Have questions about our privacy practices?</h2>
              <Link to="/" className="inline-flex items-center gap-2 bg-[#195FD7] text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors">
                Contact Us
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>\`;

code = code.replace(oldContactCardRegex, newContactCard);

fs.writeFileSync('src/components/PrivacyPolicy.tsx', code);
