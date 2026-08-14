const fs = require('fs');
const newContent = `import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, HelpCircle } from 'lucide-react';

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

        {/* About TikFlow Card */}
        <section className="bg-[#EBF2FF] rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-[#195FD7]" />
            {t('aboutTikFlowTitle', 'About TikFlow')}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              t('aboutPoint1', 'Download high-quality videos without watermark.'),
              t('aboutPoint2', 'Supports all devices: Mobile, PC, and Tablets.'),
              t('aboutPoint3', '100% Free and Unlimited.'),
              t('aboutPoint4', 'Supports MP3 and MP4 formats.')
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-blue-50">
                <CheckCircle2 className="w-5 h-5 text-[#195FD7] shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm sm:text-base font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Vertical Steps */}
        <section className="space-y-6 pt-4">
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
              <div className="w-10 h-10 shrink-0 bg-[#195FD7] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                {i + 1}
              </div>
              <div className="pt-1.5">
                <p className="text-gray-800 text-base sm:text-lg font-medium">{text}</p>
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}
`;
fs.writeFileSync('src/components/HowToDownload.tsx', newContent);
