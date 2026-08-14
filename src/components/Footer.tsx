import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Logo({ className = "w-8 h-8 sm:w-10 sm:h-10" }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#195FD7" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="24" fill="url(#footer-logo-grad)" />
      <path d="M56 24 L32 54 H48 L40 76 L68 44 H52 Z" fill="#ffffff" stroke="#ffffff" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
  );
}

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
