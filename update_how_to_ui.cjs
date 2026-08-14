const fs = require('fs');

// 1. Update HowToDownload.tsx
const newHowToContent = `import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, HelpCircle, Smartphone } from 'lucide-react';

export default function HowToDownload() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="w-full bg-[#195FD7] px-4 py-12 sm:py-16 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl w-full mx-auto space-y-4">
          <HelpCircle className="w-12 h-12 text-white/90 mx-auto mb-2" />
          <h1 className="text-[28px] sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {t('howToHeroTitle', 'How to Use TikFlow to Download TikTok Videos')}
          </h1>
          <p className="text-[16px] sm:text-lg text-white/90 font-medium max-w-xl mx-auto px-2">
            {t('howToHeroSubtitle', 'On iOS/Android Phones and Computers')}
          </p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Intro Paragraphs */}
        <section className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
          <p>
            {t('howToIntro1', "With TikTok's global popularity, the demand for downloading videos from this platform has been growing significantly. However, many users are not entirely satisfied with the built-in download feature on TikTok due to various reasons.")}
          </p>
          <p>
            {t('howToIntro2', "Many users prefer third-party tools because they want to avoid watermarks and handle restricted content. In this guide, we will show you how to use TikFlow - a free TikTok video downloader that works on all platforms.")}
          </p>
        </section>

        {/* About TikFlow List */}
        <section className="bg-[#f0f7ff] rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            {t('aboutTikFlowTitle', 'About TikFlow')}
          </h2>
          <ul className="space-y-4">
            {[
              t('aboutNewPoint1', 'Download high-quality videos without logos.'),
              t('aboutNewPoint2', 'Support for Download Video TikTok on various devices: mobile, PC, and tablets.'),
              t('aboutNewPoint3', 'Completely free and unlimited: TikFlow commits to not charging any fees.'),
              t('aboutNewPoint4', 'Supports downloading TikTok videos in .mp3 and .mp4 formats for all devices.'),
              t('aboutNewPoint5', 'Accessible via web browsers or Android apps.')
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                <span className="text-gray-700 text-base leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Vertical Steps */}
        <section className="space-y-6 pt-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-gray-900" />
            {t('howToStepsTitle', 'How to Download TikTok Videos')}
          </h2>
          
          <div className="space-y-6">
            {[
              t('step1VTitle', 'Select the TikTok video you want to download on your phone or browser.'),
              t('step2VTitle', "Tap/Click on the Share/Arrow icon and select 'Copy link'."),
              t('step3VTitle', 'Open your web browser and go to TikFlow (tikflow-prstyadev.vercel.app).'),
              t('step4VTitle', "Paste the copied link into TikFlow's input field (or let auto-paste do it)."),
              t('step5VTitle', "Click the 'Download' button to start processing the video."),
              t('step6VTitle', 'Choose your preferred format (HD Video / No Watermark).'),
              t('step7VTitle', 'Save the video directly to your device gallery or download folder.')
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-7 h-7 shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="text-gray-800 text-base leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
`;
fs.writeFileSync('src/components/HowToDownload.tsx', newHowToContent);

// 2. Update i18n.ts
let i18nCode = fs.readFileSync('src/i18n.ts', 'utf8');

const reps = [
  {
    lang: 'en',
    insertAfter: '"step7VTitle": "Save the video directly to your device gallery or download folder.",',
    content: `
      "aboutNewPoint1": "Download high-quality videos without logos.",
      "aboutNewPoint2": "Support for Download Video TikTok on various devices: mobile, PC, and tablets.",
      "aboutNewPoint3": "Completely free and unlimited: TikFlow commits to not charging any fees.",
      "aboutNewPoint4": "Supports downloading TikTok videos in .mp3 and .mp4 formats for all devices.",
      "aboutNewPoint5": "Accessible via web browsers or Android apps.",
      "howToStepsTitle": "How to Download TikTok Videos",`
  },
  {
    lang: 'id',
    insertAfter: '"step7VTitle": "Simpan video langsung ke galeri perangkat atau folder unduhan Anda.",',
    content: `
      "aboutNewPoint1": "Unduh video berkualitas tinggi tanpa logo.",
      "aboutNewPoint2": "Mendukung Unduh Video TikTok di berbagai perangkat: ponsel, PC, dan tablet.",
      "aboutNewPoint3": "Sepenuhnya gratis dan tanpa batas: TikFlow berkomitmen untuk tidak memungut biaya apa pun.",
      "aboutNewPoint4": "Mendukung pengunduhan video TikTok dalam format .mp3 dan .mp4 untuk semua perangkat.",
      "aboutNewPoint5": "Dapat diakses melalui peramban web atau aplikasi Android.",
      "howToStepsTitle": "Cara Mengunduh Video TikTok",`
  },
  {
    lang: 'es',
    insertAfter: '"step7VTitle": "Guarda el video directamente en la galería de tu dispositivo o en la carpeta de descargas.",',
    content: `
      "aboutNewPoint1": "Descarga videos de alta calidad sin logotipos.",
      "aboutNewPoint2": "Soporte para Descargar Video de TikTok en varios dispositivos: móvil, PC y tablets.",
      "aboutNewPoint3": "Completamente gratis e ilimitado: TikFlow se compromete a no cobrar ninguna tarifa.",
      "aboutNewPoint4": "Soporta la descarga de videos de TikTok en formatos .mp3 y .mp4 para todos los dispositivos.",
      "aboutNewPoint5": "Accesible a través de navegadores web o aplicaciones de Android.",
      "howToStepsTitle": "Cómo Descargar Videos de TikTok",`
  },
  {
    lang: 'fr',
    insertAfter: '"step7VTitle": "Enregistrez la vidéo directement dans la galerie de votre appareil ou le dossier de téléchargement.",',
    content: `
      "aboutNewPoint1": "Téléchargez des vidéos de haute qualité sans logos.",
      "aboutNewPoint2": "Prise en charge du téléchargement de vidéos TikTok sur divers appareils : mobile, PC et tablettes.",
      "aboutNewPoint3": "Entièrement gratuit et illimité : TikFlow s'engage à ne facturer aucun frais.",
      "aboutNewPoint4": "Prend en charge le téléchargement de vidéos TikTok aux formats .mp3 et .mp4 pour tous les appareils.",
      "aboutNewPoint5": "Accessible via les navigateurs Web ou les applications Android.",
      "howToStepsTitle": "Comment télécharger des vidéos TikTok",`
  }
];

reps.forEach(r => {
  i18nCode = i18nCode.replace(r.insertAfter, r.insertAfter + r.content);
});

fs.writeFileSync('src/i18n.ts', i18nCode);
