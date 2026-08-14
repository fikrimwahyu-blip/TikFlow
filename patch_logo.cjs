const fs = require('fs');
let code = fs.readFileSync('src/components/PrivacyPolicy.tsx', 'utf8');

const newLogo = `
            <div className="flex items-center gap-1.5">
              <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="20" fill="#195FD7"/>
                <path d="M50 20 L25 55 H45 L35 80 L75 40 H55 L65 20 H50 Z" fill="#FE6E00" />
              </svg>
              <div className="flex items-center">
                <span className="text-[#000000]">Tik</span>
                <span className="text-[#195FD7]">Flow</span>
              </div>
            </div>
`;

code = code.replace(/<div className="flex items-center gap-1\.5">[\s\S]*?<\/div>\s*<\/div>/, newLogo.trim() + '\n          </Link>');

fs.writeFileSync('src/components/PrivacyPolicy.tsx', code);
