import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';

export default function HowToDownload() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="w-full bg-[#195FD7] px-4 py-8 sm:py-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl w-full mx-auto space-y-6">
          <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white/90 mx-auto mb-0" />
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-[26px] sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t('howToHeroTitle', 'How to Use TikFlow to Download TikTok Videos')}
            </h1>
            <p className="text-[15px] sm:text-base text-white font-normal max-w-xl mx-auto px-2">
              {t('howToHeroSubtitle', 'On iOS/Android Phones and Computers')}
            </p>
          </div>
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
        <section className="bg-slate-50 rounded-2xl p-4 sm:p-5">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            {t('aboutTikFlowTitle', 'About TikFlow')}
          </h2>
          <ul className="space-y-2.5">
            {[
              t('aboutNewPoint1', 'Download high-quality videos without logos.'),
              t('aboutNewPoint2', 'Support for Download Video TikTok on various devices: mobile, PC, and tablets.'),
              t('aboutNewPoint3', 'Completely free and unlimited: TikFlow commits to not charging any fees.'),
              t('aboutNewPoint4', 'Supports downloading TikTok videos in .mp3 and .mp4 formats for all devices.'),
              t('aboutNewPoint5', 'Accessible via web browsers or Android apps.')
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#195FD7] shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm sm:text-base leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Vertical Steps */}
        <section className="space-y-6 pt-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
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
                <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-[#195FD7] text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      
        {/* Conclusion Card */}
        <section className="bg-[#195FD7] rounded-3xl px-6 py-6 sm:px-10 sm:py-8 text-center flex flex-col items-center mt-12 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t('conclusionTitle', 'Conclusion')}
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl mb-8 font-medium">
            {t('conclusionDesc', 'The above instructions explain how to download TikTok videos on all three popular platforms: Android, iOS, and computers. With TikFlow, you can easily save your favorite TikTok videos without watermark, completely free!')}
          </p>
          <Link to="/" className="inline-flex justify-center items-center gap-2 bg-white text-[#195FD7] font-bold px-8 py-3.5 rounded-xl hover:bg-gray-50 active:scale-95 transition-all shadow-sm w-auto max-w-xs mx-auto">
            {t('tryTikFlowNow', 'Try TikFlow Now')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </main>
    </div>
  );
}
