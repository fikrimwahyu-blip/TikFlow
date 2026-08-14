import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Logo = () => (
  <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-lg sm:rounded-xl shadow-sm overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black"></div>
    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  </div>
);

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "bg-gray-50 py-8 sm:py-12 border-t border-gray-200 mt-12 sm:mt-16" }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer className={className}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 mb-8">
          {/* Logo and Intro */}
          <div className="max-w-sm">
            <Link to="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-1 mb-4">
              <Logo />
              <div className="flex items-center ml-1 sm:ml-2">
                <span className="text-slate-900">Tik</span>
                <span className="text-[#195FD7]">Flow</span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('footerDesc', 'The fastest and easiest way to download TikTok videos without watermark.')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-auto flex-grow md:pl-10">
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 text-[15px]">{t('quickLinks', 'Quick Links')}</h4>
              <Link to="/" className="text-gray-700 hover:text-gray-900 text-[15px] transition-colors">{t('home', 'Home')}</Link>
              <Link to="/how-to-download-tiktok" className="text-gray-700 hover:text-gray-900 text-[15px] transition-colors">{t('howToDownloadMenu', 'How to Download TikTok')}</Link>
            </div>

            {/* Tools */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 text-[15px]">{t('tools', 'Tools')}</h4>
              <Link to="/" className="text-gray-700 hover:text-gray-900 text-[15px] transition-colors">{t('notesDownloader', 'TikTok Notes Downloader')}</Link>
              <Link to="/douyin-downloader" className="text-gray-700 hover:text-gray-900 text-[15px] transition-colors">{t('douyinDownloader', 'Douyin Downloader')}</Link>
              <Link to="/tiktok-slide-downloader" className="text-gray-700 hover:text-gray-900 text-[15px] transition-colors">{t('slideDownloader', 'TikTok Slide Downloader')}</Link>
              <Link to="/tiktok-story-downloader" className="text-gray-700 hover:text-gray-900 text-[15px] transition-colors">{t('storyDownloader', 'TikTok Story Downloader')}</Link>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 text-[15px]">{t('legal', 'Legal')}</h4>
              <Link to="/privacy" className="text-gray-700 hover:text-gray-900 text-[15px] transition-colors">{t('privacyPolicy', 'Privacy Policy')}</Link>
              <Link to="/terms" className="text-gray-700 hover:text-gray-900 text-[15px] transition-colors">{t('termsOfService', 'Terms of Service')}</Link>
              <Link to="/cookies" className="text-gray-700 hover:text-gray-900 text-[15px] transition-colors">{t('cookiePolicy', 'Cookie Policy')}</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900 text-[15px] transition-colors">{t('contact', 'Contact')}</Link>
            </div>
          </div>
        </div>

        {/* Divider and Bottom Section */}
        <div className="border-t border-gray-200 pt-6 mt-8 flex flex-col items-center text-center">
          <p className="text-sm text-gray-500 text-center mb-2">
             © 2026 TikFlow. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 text-center block mt-1">
             {t('disclaimer', 'This service is not affiliated with TikTok or ByteDance.')}
          </p>
          <p className="text-xs text-gray-400 font-medium text-center block mt-1">
             by prstyaDev
          </p>
        </div>
      </div>
    </footer>
  );
}
