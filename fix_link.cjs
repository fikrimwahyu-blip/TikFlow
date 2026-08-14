const fs = require('fs');
let code = fs.readFileSync('src/components/PrivacyPolicy.tsx', 'utf8');
code = code.replace("          </Link>\n          </Link>", "          </Link>");
fs.writeFileSync('src/components/PrivacyPolicy.tsx', code);
