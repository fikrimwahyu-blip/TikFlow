const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const replacements = {
  'The fastest and easiest way to download TikTok videos without watermark.': "{t('footerDesc', 'The fastest and easiest way to download TikTok videos without watermark.')}",
  'Quick Links': "{t('quickLinks', 'Quick Links')}",
  '>Home<': ">{t('home', 'Home')}<",
  '>How to Download TikTok<': ">{t('howToDownloadMenu', 'How to Download TikTok')}<",
  '<h4>Tools</h4>': "<h4>{t('tools', 'Tools')}</h4>", // handle <h4...
  '>TikTok Notes Downloader<': ">{t('notesDownloader', 'TikTok Notes Downloader')}<",
  '>Douyin Downloader<': ">{t('douyinDownloader', 'Douyin Downloader')}<",
  '>TikTok Slide Downloader<': ">{t('slideDownloader', 'TikTok Slide Downloader')}<",
  '>TikTok Story Downloader<': ">{t('storyDownloader', 'TikTok Story Downloader')}<",
  '<h4>Legal</h4>': "<h4>{t('legal', 'Legal')}</h4>",
  '>Privacy Policy<': ">{t('privacyPolicy', 'Privacy Policy')}<",
  '>Terms of Service<': ">{t('termsOfService', 'Terms of Service')}<",
  '>Cookie Policy<': ">{t('cookiePolicy', 'Cookie Policy')}<",
  '>Contact<': ">{t('contact', 'Contact')}<",
  'This service is not affiliated with TikTok or ByteDance.': "{t('disclaimer', 'This service is not affiliated with TikTok or ByteDance.')}"
};

code = code.replace(/>Tools</g, ">{t('tools', 'Tools')}<");
code = code.replace(/>Legal</g, ">{t('legal', 'Legal')}<");
code = code.replace(/>Quick Links</g, ">{t('quickLinks', 'Quick Links')}<");
code = code.replace(/The fastest and easiest way to download TikTok videos without watermark\./g, "{t('footerDesc', 'The fastest and easiest way to download TikTok videos without watermark.')}");
code = code.replace(/>Home</g, ">{t('home', 'Home')}<");
code = code.replace(/>How to Download TikTok</g, ">{t('howToDownloadMenu', 'How to Download TikTok')}<");
code = code.replace(/>TikTok Notes Downloader</g, ">{t('notesDownloader', 'TikTok Notes Downloader')}<");
code = code.replace(/>Douyin Downloader</g, ">{t('douyinDownloader', 'Douyin Downloader')}<");
code = code.replace(/>TikTok Slide Downloader</g, ">{t('slideDownloader', 'TikTok Slide Downloader')}<");
code = code.replace(/>TikTok Story Downloader</g, ">{t('storyDownloader', 'TikTok Story Downloader')}<");
code = code.replace(/>Privacy Policy</g, ">{t('privacyPolicy', 'Privacy Policy')}<");
code = code.replace(/>Terms of Service</g, ">{t('termsOfService', 'Terms of Service')}<");
code = code.replace(/>Cookie Policy</g, ">{t('cookiePolicy', 'Cookie Policy')}<");
code = code.replace(/>Contact</g, ">{t('contact', 'Contact')}<");
code = code.replace(/This service is not affiliated with TikTok or ByteDance\./g, "{t('disclaimer', 'This service is not affiliated with TikTok or ByteDance.')}");

fs.writeFileSync('src/App.tsx', code);
