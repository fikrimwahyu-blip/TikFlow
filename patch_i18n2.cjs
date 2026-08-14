const fs = require('fs');
let code = fs.readFileSync('src/i18n.ts', 'utf8');

const reps = [
  {
    find: '"faq9a": "No, there is no limit. You can download as many videos as you want.",',
    repl: `"faq9a": "No, there is no limit. You can download as many videos as you want.",
      
      "howToHeroTitle": "How to Use TikFlow to Download TikTok Videos",
      "howToHeroSubtitle": "On iOS/Android Phones and Computers",
      "aboutTikFlowTitle": "About TikFlow",
      "aboutPoint1": "Download high-quality videos without watermark.",
      "aboutPoint2": "Supports all devices: Mobile, PC, and Tablets.",
      "aboutPoint3": "100% Free and Unlimited.",
      "aboutPoint4": "Supports MP3 and MP4 formats.",
      "stepIosTitle": "iOS (iPhone/iPad)",
      "stepAndroidTitle": "Android",
      "stepPcTitle": "PC / Computer",
      "step1Copy": "Copy Link from TikTok App",
      "step2Paste": "Paste URL in TikFlow",
      "step3Download": "Click Download",`
  },
  {
    find: '"faq9a": "Tidak ada batas. Anda dapat mengunduh video sebanyak yang Anda inginkan.",',
    repl: `"faq9a": "Tidak ada batas. Anda dapat mengunduh video sebanyak yang Anda inginkan.",
      
      "howToHeroTitle": "Cara Menggunakan TikFlow untuk Mengunduh Video TikTok",
      "howToHeroSubtitle": "Di Ponsel iOS/Android dan Komputer",
      "aboutTikFlowTitle": "Tentang TikFlow",
      "aboutPoint1": "Unduh video berkualitas tinggi tanpa tanda air.",
      "aboutPoint2": "Mendukung semua perangkat: Ponsel, PC, dan Tablet.",
      "aboutPoint3": "100% Gratis dan Tanpa Batas.",
      "aboutPoint4": "Mendukung format MP3 dan MP4.",
      "stepIosTitle": "iOS (iPhone/iPad)",
      "stepAndroidTitle": "Android",
      "stepPcTitle": "PC / Komputer",
      "step1Copy": "Salin Tautan dari Aplikasi TikTok",
      "step2Paste": "Tempel URL di TikFlow",
      "step3Download": "Klik Unduh",`
  },
  {
    find: '"faq9a": "No hay límite. Puedes descargar tantos videos como desees.",',
    repl: `"faq9a": "No hay límite. Puedes descargar tantos videos como desees.",
      
      "howToHeroTitle": "Cómo Usar TikFlow para Descargar Videos de TikTok",
      "howToHeroSubtitle": "En teléfonos iOS/Android y Computadoras",
      "aboutTikFlowTitle": "Acerca de TikFlow",
      "aboutPoint1": "Descarga videos de alta calidad sin marca de agua.",
      "aboutPoint2": "Soporta todos los dispositivos: Móvil, PC y Tablets.",
      "aboutPoint3": "100% Gratis e Ilimitado.",
      "aboutPoint4": "Soporta formatos MP3 y MP4.",
      "stepIosTitle": "iOS (iPhone/iPad)",
      "stepAndroidTitle": "Android",
      "stepPcTitle": "PC / Computadora",
      "step1Copy": "Copia el enlace de la app de TikTok",
      "step2Paste": "Pega la URL en TikFlow",
      "step3Download": "Haz clic en Descargar",`
  },
  {
    find: '"faq9a": "Non, il n\'y a pas de limite. Vous pouvez télécharger autant de vidéos que vous le souhaitez.",',
    repl: `"faq9a": "Non, il n\'y a pas de limite. Vous pouvez télécharger autant de vidéos que vous le souhaitez.",
      
      "howToHeroTitle": "Comment utiliser TikFlow pour télécharger des vidéos TikTok",
      "howToHeroSubtitle": "Sur les téléphones iOS/Android et les ordinateurs",
      "aboutTikFlowTitle": "À propos de TikFlow",
      "aboutPoint1": "Téléchargez des vidéos de haute qualité sans filigrane.",
      "aboutPoint2": "Prend en charge tous les appareils : Mobile, PC et Tablettes.",
      "aboutPoint3": "100% Gratuit et Illimité.",
      "aboutPoint4": "Prend en charge les formats MP3 et MP4.",
      "stepIosTitle": "iOS (iPhone/iPad)",
      "stepAndroidTitle": "Android",
      "stepPcTitle": "PC / Ordinateur",
      "step1Copy": "Copiez le lien de l'application TikTok",
      "step2Paste": "Collez l'URL dans TikFlow",
      "step3Download": "Cliquez sur Télécharger",`
  }
];

reps.forEach(r => {
  code = code.replace(r.find, r.repl);
});

fs.writeFileSync('src/i18n.ts', code);
