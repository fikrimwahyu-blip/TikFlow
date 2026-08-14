const fs = require('fs');
let code = fs.readFileSync('src/components/HowToDownload.tsx', 'utf8');

// 1. Add Imports
if (!code.includes("import { Link }")) {
  code = code.replace(
    "import { useTranslation }",
    "import { useTranslation }\nimport { Link } from 'react-router-dom';"
  );
}
if (!code.includes("ArrowRight")) {
  code = code.replace(
    "import { CheckCircle2, HelpCircle } from 'lucide-react';",
    "import { CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';"
  );
}

// 2. Add Conclusion Card before </main>
const conclusionCard = `
        {/* Conclusion Card */}
        <section className="bg-[#195FD7] rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center mt-12 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t('conclusionTitle', 'Conclusion')}
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl mb-8 font-medium">
            {t('conclusionDesc', 'The above instructions explain how to download TikTok videos on all three popular platforms: Android, iOS, and computers. With TikFlow, you can easily save your favorite TikTok videos without watermark, completely free!')}
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-white text-[#195FD7] font-bold px-8 py-3.5 rounded-xl hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
            {t('tryTikFlowNow', 'Try TikFlow Now')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </main>`;

code = code.replace("</main>", conclusionCard);

fs.writeFileSync('src/components/HowToDownload.tsx', code);

// 3. Update i18n
let i18nCode = fs.readFileSync('src/i18n.ts', 'utf8');

const reps = [
  {
    lang: 'en',
    insertAfter: '"howToStepsTitle": "How to Download TikTok Videos",',
    content: `
      "conclusionTitle": "Conclusion",
      "conclusionDesc": "The above instructions explain how to download TikTok videos on all three popular platforms: Android, iOS, and computers. With TikFlow, you can easily save your favorite TikTok videos without watermark, completely free!",
      "tryTikFlowNow": "Try TikFlow Now",`
  },
  {
    lang: 'id',
    insertAfter: '"howToStepsTitle": "Cara Mengunduh Video TikTok",',
    content: `
      "conclusionTitle": "Kesimpulan",
      "conclusionDesc": "Instruksi di atas menjelaskan cara mengunduh video TikTok di ketiga platform populer: Android, iOS, dan komputer. Dengan TikFlow, Anda dapat dengan mudah menyimpan video TikTok favorit Anda tanpa tanda air, sepenuhnya gratis!",
      "tryTikFlowNow": "Coba TikFlow Sekarang",`
  },
  {
    lang: 'es',
    insertAfter: '"howToStepsTitle": "Cómo Descargar Videos de TikTok",',
    content: `
      "conclusionTitle": "Conclusión",
      "conclusionDesc": "Las instrucciones anteriores explican cómo descargar videos de TikTok en las tres plataformas populares: Android, iOS y computadoras. ¡Con TikFlow, puedes guardar fácilmente tus videos favoritos de TikTok sin marca de agua, completamente gratis!",
      "tryTikFlowNow": "Prueba TikFlow Ahora",`
  },
  {
    lang: 'fr',
    insertAfter: '"howToStepsTitle": "Comment télécharger des vidéos TikTok",',
    content: `
      "conclusionTitle": "Conclusion",
      "conclusionDesc": "Les instructions ci-dessus expliquent comment télécharger des vidéos TikTok sur les trois plateformes populaires : Android, iOS et ordinateurs. Avec TikFlow, vous pouvez facilement enregistrer vos vidéos TikTok préférées sans filigrane, tout à fait gratuitement !",
      "tryTikFlowNow": "Essayez TikFlow Maintenant",`
  }
];

reps.forEach(r => {
  i18nCode = i18nCode.replace(r.insertAfter, r.insertAfter + r.content);
});

fs.writeFileSync('src/i18n.ts', i18nCode);
