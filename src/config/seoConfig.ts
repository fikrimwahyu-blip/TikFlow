export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}

export const seoConfigs: Record<string, SEOConfig> = {
  '/': {
    title: 'TikFlow - Download TikTok Videos Without Watermark Free HD',
    description: 'Download TikTok videos without watermark in HD quality. Free TikTok video downloader - no app needed. Works on all devices. Fast, safe, and easy to use.',
    keywords: 'tiktok downloader, download tiktok video, tiktok video downloader, tiktok downloader no watermark, download tiktok without watermark, tiktok to mp4, save tiktok video, tiktok download free, tikflow',
    canonical: 'https://tikflow-prstyadev.vercel.app/'
  },
  '/douyin-downloader': {
    title: 'Douyin Video Downloader - Download Douyin Videos Without Watermark',
    description: 'Free Douyin video downloader. Download Douyin videos without watermark in HD quality. Fast and easy Douyin downloader for all devices.',
    keywords: 'douyin downloader, download douyin video, douyin video downloader, douyin no watermark, douyin to mp4, save douyin video, chinese tiktok downloader',
    canonical: 'https://tikflow-prstyadev.vercel.app/douyin-downloader'
  },
  '/tiktok-slide-downloader': {
    title: 'TikTok Slideshow Downloader - Download TikTok Slides & Photos Free',
    description: 'Download TikTok slideshow and photo slideshows without watermark. Convert TikTok slides to MP4 video or download images separately. Free TikTok photo downloader.',
    keywords: 'tiktok slideshow downloader, tiktok slide downloader, download tiktok photos, tiktok image downloader, tiktok photo slideshow, tiktok slides to mp4, save tiktok slideshow',
    canonical: 'https://tikflow-prstyadev.vercel.app/tiktok-slide-downloader'
  },
  '/tiktok-story-downloader': {
    title: 'TikTok Story Downloader - Save TikTok Stories Without Watermark',
    description: 'Download TikTok stories without watermark. Free TikTok story saver and downloader in HD quality. Save TikTok stories before they disappear.',
    keywords: 'tiktok story downloader, download tiktok story, tiktok story saver, save tiktok stories, tiktok story download free, download tiktok story without watermark',
    canonical: 'https://tikflow-prstyadev.vercel.app/tiktok-story-downloader'
  }
};
