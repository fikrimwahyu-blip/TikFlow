const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

if (!code.includes('import HowToDownload')) {
  code = code.replace(
    "import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';",
    "import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';\nimport HowToDownload from './components/HowToDownload';"
  );
}

// Add conditional rendering in Downloader
const isHowToPageCode = "  const isHowToPage = location.pathname === '/how-to-download-tiktok';";
if (!code.includes('isHowToPage')) {
  code = code.replace(
    "const location = useLocation();",
    "const location = useLocation();\n" + isHowToPageCode
  );
}

// Wrap Hero and Main Content in conditional
const heroStart = "      {/* Hero Section */}";
const mainEnd = "      {/* Footer */}";

// Let's use regex to find the block to wrap, or simpler, replace ` {/* Hero Section */}` with ` {isHowToPage ? <HowToDownload /> : (<>\n      {/* Hero Section */}` and `</main>` with `</main>\n      </>)}` before Footer
code = code.replace(
  "      {/* Hero Section */}",
  "      {isHowToPage ? <HowToDownload /> : (<>\n      {/* Hero Section */}"
);

code = code.replace(
  "      </main>\n      {/* Footer */}",
  "      </main>\n      </>)}\n      {/* Footer */}"
);

fs.writeFileSync('src/App.tsx', code);
