import React, { useState, useRef, useEffect } from 'react';
import { Download, ShieldCheck, Smartphone, Clipboard, Info, Globe, CircleDollarSign, Image, Video, ChevronDown, ChevronUp, Check, Zap, X, Loader2, Play, MessageCircle, ArrowUpRight, RefreshCw } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', flag: '🇺🇸', name: 'English' },
  { code: 'id', flag: '🇮🇩', name: 'Bahasa Indonesia' },
  { code: 'es', flag: '🇪🇸', name: 'Español' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
];

export default function App() {
  const [url, setUrl] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('en');
  const [isLoading, setIsLoading] = useState(false);
  const [downloadResult, setDownloadResult] = useState<{
    thumbnail: string;
    title: string;
    author: string;
    avatar: string;
    views: string;
    comments: string;
    shares: string;
    downloadUrl: string;
  } | null>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  const handleClear = () => {
    setUrl('');
    setDownloadResult(null);
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setIsLoading(true);
    setDownloadResult(null);
    
    try {
      // Menggunakan endpoint API asli (contoh menggunakan API publik TikWM)
      // Anda dapat menggantinya dengan endpoint backend Anda sendiri jika diperlukan.
      const response = await fetch('https://www.tikwm.com/api/?url=' + encodeURIComponent(url));
      const result = await response.json();

      if (result.code === 0 && result.data) {
        const videoData = result.data;
        
        const formatNumber = (num: number) => {
          if (!num) return '0';
          if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
          if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
          return num.toString();
        };

        setDownloadResult({
          thumbnail: videoData.cover || videoData.origin_cover,
          title: videoData.title,
          author: '@' + (videoData.author?.unique_id || 'user'),
          avatar: videoData.author?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80',
          views: formatNumber(videoData.play_count),
          comments: formatNumber(videoData.comment_count),
          shares: formatNumber(videoData.share_count),
          downloadUrl: videoData.play // URL video tanpa watermark
        });
      } else {
        throw new Error(result.msg || 'Video tidak ditemukan');
      }
    } catch (error) {
      console.error('Error fetching video:', error);
      alert('Gagal mengambil data video. Pastikan link TikTok valid atau coba lagi nanti.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Navigation */}
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          
          {/* LOGO & Install App */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="#" className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-1">
              <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-[#195FD7]" fill="currentColor" />
              <div className="flex items-center">
                <span className="text-slate-900">Tik</span>
                <span className="text-[#195FD7]">Flow</span>
              </div>
            </a>
            
            <a
              href="#"
              className="flex items-center gap-1.5 bg-[#EBF2FF] text-[#195FD7] text-[13px] sm:text-sm font-medium px-2.5 sm:px-3 py-2.5 rounded-lg hover:bg-[#d8e5ff] transition-colors"
            >
              <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
              <span className="inline">Install App</span>
            </a>
          </div>

          {/* Language Selector */}
          <div className="flex items-center relative" ref={langMenuRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 px-2 sm:px-3 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <span className="text-base leading-none">
                {LANGUAGES.find(l => l.code === activeLang)?.flag}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isLangOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden py-1 z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setActiveLang(lang.code);
                      setIsLangOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base leading-none">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </div>
                    {activeLang === lang.code && (
                      <Check className="w-4 h-4 text-[#195FD7]" strokeWidth={3} />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className={`w-full bg-[#195FD7] px-4 py-8 sm:py-12 flex flex-col items-center justify-center text-center ${downloadResult ? 'hidden' : ''}`}>
        <div className="max-w-2xl w-full mx-auto space-y-6">
          
          {/* HEADING & SUBTITLE */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-[26px] sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Tiktok Video Downloader
            </h1>
            <p className="text-[15px] sm:text-base text-white font-normal max-w-xl mx-auto px-2">
              Free TikTok Downloader - No watermark, HD quality, works on all devices
            </p>
          </div>

          {/* INPUT & BUTTON FORM */}
          <form onSubmit={handleDownload} className="w-full flex flex-col md:flex-row gap-4">
            
            {/* Input Field with Paste/Clear Icon */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Paste TikTok video link here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="w-full h-14 sm:h-16 pl-5 pr-14 rounded-xl text-gray-900 text-sm sm:text-base placeholder-gray-400 bg-white border-2 border-transparent focus:border-[#195FD7]/30 focus:outline-none shadow-lg transition-all"
              />
              {url ? (
                <button 
                  type="button" 
                  onClick={handleClear}
                  aria-label="Clear link"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              ) : (
                <button 
                  type="button" 
                  onClick={handlePaste}
                  aria-label="Paste link"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 rounded-lg"
                >
                  <Clipboard className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Download Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto md:px-8 h-14 sm:h-16 bg-white text-[#195FD7] font-bold text-base sm:text-lg rounded-xl hover:bg-gray-50 active:scale-[0.99] disabled:opacity-80 disabled:active:scale-100 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" strokeWidth={2.5} />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" strokeWidth={2.5} />
                  Download
                </>
              )}
            </button>

          </form>

        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 w-full py-12 sm:py-16">
        
        {/* Download Result */}
        {downloadResult && (
          <section className="bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.06)] p-5 sm:p-6 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-lg mx-auto">
            <div className="flex flex-col gap-6">
              {/* Header Info */}
              <div className="flex flex-row gap-4">
                {/* Thumbnail */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                   <img src={downloadResult.thumbnail} alt="Video Thumbnail" className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                       <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                           <Play className="w-5 h-5 text-gray-900 ml-1" fill="currentColor" />
                       </div>
                   </div>
                </div>
                {/* Text Info */}
                <div className="flex flex-col flex-1 justify-center">
                  <h3 className="font-semibold text-[15px] sm:text-[16px] text-[#121212] line-clamp-2 leading-[22px] mb-2">{downloadResult.title}</h3>
                  <div className="flex items-center gap-2 mb-2.5">
                      <img src={downloadResult.avatar} alt="Author Avatar" className="w-5 h-5 rounded-full object-cover" />
                      <p className="text-[14px] text-[#5B6475]">{downloadResult.author}</p>
                  </div>
                  <div className="flex items-center gap-3.5 text-[13px] text-[#5B6475]">
                      <span className="flex items-center gap-1"><Play className="w-3.5 h-3.5" fill="currentColor" /> {downloadResult.views}</span>
                      <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {downloadResult.comments}</span>
                      <span className="flex items-center gap-1"><ArrowUpRight className="w-4 h-4" /> {downloadResult.shares}</span>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col gap-3 mt-2">
                 <a href={downloadResult.downloadUrl} className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#195FD7] text-white font-semibold text-[16px] hover:bg-[#0F4EC0] transition-colors shadow-sm">
                    <Download className="w-5 h-5" /> Download Video
                 </a>
                 <button onClick={handleClear} className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-transparent text-[#5B6475] hover:text-[#121212] font-semibold text-[15px] transition-colors">
                    <RefreshCw className="w-5 h-5" /> Download Another Video
                 </button>
              </div>
            </div>
          </section>
        )}

        <div className={downloadResult ? 'hidden' : 'space-y-16 sm:space-y-24'}>
          {/* Info Card */}
          <section className="bg-white rounded-xl p-6 sm:p-10 shadow-sm border border-gray-200 text-center">
          <div className="flex flex-col items-center">
            {/* Info Icon */}
            <div className="w-12 h-12 bg-[#EBF2FF] rounded-xl flex items-center justify-center mb-6">
              <Info className="w-6 h-6 text-[#195FD7]" strokeWidth={2.5} />
            </div>
            
            {/* Heading */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#195FD7] mb-5">
              Download TikTok Videos Without Watermark FREE
            </h2>

            {/* Divider */}
            <div className="w-16 h-1 bg-[#195FD7] rounded-full mb-8"></div>
            
            {/* Paragraphs */}
            <div className="space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              <p>
                TikFlow is one of the best HD Tiktok Downloaders available online. TikFlow helps users download video tiktok without a watermark in MP4 format and in HD quality. You are not required to install any software on your computer or mobile phone. All that you need is a TikTok video link, paste the link to TikFlow and you can save your tiktok video instantly.
              </p>
              <p>
                TikFlow provides users with the ability to download TikTok's photo slide show as Mp4 Video format. The images and music in the TikTok slide show will be automatically merged by TikFlow.
              </p>
            </div>
          </div>
        </section>

        {/* How to use section */}
        <section>
          <h2 className="text-center font-bold text-2xl sm:text-3xl text-gray-900 mb-10 sm:mb-14">
            How to Download TikTok Videos Without Watermarks
          </h2>
          
          <div className="relative flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-between">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] h-[2px] bg-[#EBF2FF] z-0"></div>
            {/* Mobile connecting line */}
            <div className="md:hidden absolute top-7 bottom-7 left-7 w-[2px] bg-[#EBF2FF] z-0"></div>

            {/* Step 1 */}
            <div className="relative flex flex-row items-start gap-5 md:flex-col md:items-center text-left md:text-center w-full md:w-1/3 z-10">
              <div className="relative shrink-0">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                  <Clipboard className="w-6 h-6 text-[#195FD7]" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#195FD7] text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                  1
                </div>
              </div>
              <div className="mt-1 md:mt-6">
                <h3 className="font-bold text-gray-900 text-base mb-2">Copy Video Link</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-0 md:px-4">
                  Open TikTok app, find the video, tap Share and copy the video link.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-row items-start gap-5 md:flex-col md:items-center text-left md:text-center w-full md:w-1/3 z-10">
              <div className="relative shrink-0">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                  <Clipboard className="w-6 h-6 text-[#195FD7]" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#195FD7] text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                  2
                </div>
              </div>
              <div className="mt-1 md:mt-6">
                <h3 className="font-bold text-gray-900 text-base mb-2">Paste Link</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-0 md:px-4">
                  Paste the link into the input field above.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-row items-start gap-5 md:flex-col md:items-center text-left md:text-center w-full md:w-1/3 z-10">
              <div className="relative shrink-0">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                  <Download className="w-6 h-6 text-[#195FD7]" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#195FD7] text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                  3
                </div>
              </div>
              <div className="mt-1 md:mt-6">
                <h3 className="font-bold text-gray-900 text-base mb-2">Download</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-0 md:px-4">
                  Click Download and save the video without watermark to your device.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TikTok Download Features */}
        <section>
          <h2 className="text-center font-bold text-2xl sm:text-3xl text-gray-900 mb-10 sm:mb-14">
            TikTok Download Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col">
              <div className="w-10 h-10 bg-[#EBF2FF] rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-[#195FD7]" strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">No Watermarks</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Remove watermarks from TikTok videos for better quality, which most of the tools out there can't.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col">
              <div className="w-10 h-10 bg-[#EBF2FF] rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5 text-[#195FD7]" strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">All Devices</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Download Tiktok videos on any device: mobile, PC, or tablet. No app installation needed.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col">
              <div className="w-10 h-10 bg-[#EBF2FF] rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-[#195FD7]" strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Browser Only</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Download videos from TikTok using Snap TikTok on your Desktop or Mobile web browsers.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col">
              <div className="w-10 h-10 bg-[#EBF2FF] rounded-lg flex items-center justify-center mb-4">
                <CircleDollarSign className="w-5 h-5 text-[#195FD7]" strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Always Free</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                100% free forever. We only show some ads to support our services.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col">
              <div className="w-10 h-10 bg-[#EBF2FF] rounded-lg flex items-center justify-center mb-4">
                <Image className="w-5 h-5 text-[#195FD7]" strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Slideshow to MP4</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Convert TikTok photo slideshows to MP4 video with merged images and music.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col">
              <div className="w-10 h-10 bg-[#EBF2FF] rounded-lg flex items-center justify-center mb-4">
                <Video className="w-5 h-5 text-[#195FD7]" strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">HD Quality</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Download in the highest resolution available, up to Full HD or higher.
              </p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="max-w-3xl mx-auto w-full">
          <h2 className="text-center font-bold text-2xl sm:text-3xl text-gray-900 mb-10 sm:mb-14">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col space-y-4">
            {[
              {
                question: "How to Download video TikTok no watermark?",
                answer: (
                  <ul className="list-disc pl-5 space-y-2 mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    <li>Open TikTok app on your phone/or Web on your browser.</li>
                    <li>Choose whatever video you want to download.</li>
                    <li>Click to the Share button at the right bottom.</li>
                    <li>Click the Copy Link button.</li>
                    <li>Download by using your browsers: No need to download or install any software.</li>
                    <li>Go back to TikFlow and paste your download link to the field above then click to the Download button.</li>
                    <li>Wait for our server to do its job and then, save the video to your device.</li>
                  </ul>
                )
              },
              {
                question: "How to get the TikTok video download link?",
                answer: <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">You can find it by tapping the "Share" button on the video and then selecting "Copy Link".</p>
              },
              {
                question: "Where are TikTok videos saved after being downloaded?",
                answer: <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">They are usually saved in your device's default "Downloads" folder.</p>
              },
              {
                question: "Is TikFlow safe to use?",
                answer: <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">Yes, TikFlow is completely safe. We do not store your videos or track your personal information.</p>
              },
              {
                question: "Do I need to install any application or extension?",
                answer: <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">No, TikFlow is completely web-based. You don't need to install anything.</p>
              },
              {
                question: "Do I have to pay to TikTok Downloader without watermark (TikFlow)?",
                answer: <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">No, our service is completely free to use. We only show some ads to support our server costs.</p>
              },
              {
                question: "Can I use this TikTok video downloader on my Android phone?",
                answer: <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">Yes, TikFlow works perfectly on Android browsers like Chrome.</p>
              },
              {
                question: "How do I save TikTok video to my iPhone (iOS)?",
                answer: <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">On iOS 13+, you can download directly via Safari. For older versions, you may need to use an app like "Documents by Readdle".</p>
              },
              {
                question: "Is there a limit to download TikTok videos at TikFlow?",
                answer: <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">No, there is no limit. You can download as many videos as you want.</p>
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <div 
                  className="flex items-center justify-between p-5 sm:p-6 cursor-pointer select-none hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-sm sm:text-base font-medium text-gray-900 pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                  )}
                </div>
                {openFaq === index && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 bg-white border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 mt-12 sm:mt-16 py-8 sm:py-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 mb-10">
            {/* Logo and Intro */}
            <div className="max-w-sm">
              <a href="#" className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-1 mb-4">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-[#195FD7]" fill="currentColor" />
                <div className="flex items-center">
                  <span className="text-slate-900">Tik</span>
                  <span className="text-[#195FD7]">Flow</span>
                </div>
              </a>
              <p className="text-gray-600 text-sm leading-relaxed">
                The fastest and easiest way to download TikTok videos without watermark.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-auto">
              {/* Quick Links */}
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-gray-900 text-[15px]">Quick Links</h4>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-[15px] transition-colors">Home</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-[15px] transition-colors">How to Download TikTok</a>
              </div>

              {/* Tools */}
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-gray-900 text-[15px]">Tools</h4>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-[15px] transition-colors">TikTok Notes Downloader</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-[15px] transition-colors">Douyin Downloader</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-[15px] transition-colors">TikTok Slide Downloader</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-[15px] transition-colors">TikTok Story Downloader</a>
              </div>

              {/* Legal */}
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-gray-900 text-[15px]">Legal</h4>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-[15px] transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-[15px] transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-[15px] transition-colors">Cookie Policy</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-[15px] transition-colors">Contact</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col items-center text-center gap-1.5">
            <p className="text-gray-500 text-[15px]">© 2026 TikFlow. All rights reserved.</p>
            <p className="text-gray-400 text-sm">This service is not affiliated with TikTok or ByteDance.</p>
            <p className="text-gray-400 text-[13px] mt-1">by prstyaDev</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
