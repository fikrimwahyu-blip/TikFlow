const fs = require('fs');
let code = fs.readFileSync('src/components/HowToDownload.tsx', 'utf8');

code = code.replace(
  "import { useTranslation }\nimport { Link } from 'react-router-dom'; from 'react-i18next';",
  "import { useTranslation } from 'react-i18next';\nimport { Link } from 'react-router-dom';"
);

fs.writeFileSync('src/components/HowToDownload.tsx', code);
