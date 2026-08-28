import React, { useEffect, useRef, useState } from 'react';
import {
  Download,
  ShieldCheck,
  Smartphone,
  Clipboard,
  ClipboardPaste,
  Info,
  Globe,
  CircleDollarSign,
  Image as ImageIcon,
  Video,
  ChevronDown,
  ChevronUp,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Play,
  MessageCircle,
  ArrowUpRight,
  RefreshCw,
} from 'lucide-react';

import JSZip from 'jszip';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

import { useTranslation } from 'react-i18next';

/* =========================================================
   TYPES
========================================================= */

type DownloadResult = {
  type: 'video' | 'image';
  thumbnail: string;
  title: string;
  author: string;
  avatar: string;
  views: string;
  comments: string;
  shares: string;
  downloadUrl?: string;
  images?: string[];
  musicUrl?: string;
  videoId?: string;
};

/* =========================================================
   LANGUAGES
========================================================= */

const LANGUAGES = [
  {
    code: 'en',
    flag: '🇺🇸',
    name: 'English',
  },
  {
    code: 'id',
    flag: '🇮🇩',
    name: 'Bahasa Indonesia',
  },
  {
    code: 'es',
    flag: '🇪🇸',
    name: 'Español',
  },
  {
    code: 'fr',
    flag: '🇫🇷',
    name: 'Français',
  },
];

/* =========================================================
   LOGO
========================================================= */

function Logo({
  className = 'w-6 h-6 sm:w-7 sm:h-7',
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <defs>
        <linearGradient
          id="logo-grad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#195FD7" />
        </linearGradient>
      </defs>

      <rect
        width="100"
        height="100"
        rx="24"
        fill="url(#logo-grad)"
      />

      <path
        d="M56 24 L32 54 H48 L40 76 L68 44 H52 Z"
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   PAGE CONFIG
========================================================= */

const getPageConfigs = (t: any) => ({
  '/': {
    title: t(
      'appTitle',
      'TikTok Video Downloader'
    ),
    subtitle: t(
      'appSubtitle',
      'Free TikTok Downloader - No watermark, HD quality, works on all devices'
    ),
    placeholder: t(
      'placeholder',
      'Paste TikTok link here...'
    ),
    pageTitle: 'TikFlow - TikTok Video Downloader',
  },

  '/douyin-downloader': {
    title: 'Douyin Video Downloader',
    subtitle:
      'Download Douyin videos without watermark',
    placeholder:
      'Paste Douyin video link here...',
    pageTitle:
      'Douyin Video Downloader - TikFlow',
  },

  '/tiktok-slide-downloader': {
    title: 'TikTok Slideshow Downloader',
    subtitle:
      'Download TikTok slideshows and photos without watermarks',
    placeholder:
      'Paste TikTok slideshow link here...',
    pageTitle:
      'TikTok Slideshow Downloader - TikFlow',
  },

  '/tiktok-story-downloader': {
    title: 'Download TikTok Stories',
    subtitle:
      'Free TikTok Story Downloader - No watermark, HD quality',
    placeholder:
      'Paste TikTok story link here...',
    pageTitle:
      'TikTok Story Downloader - TikFlow',
  },
});

/* =========================================================
   ROUTE TRANSITION
========================================================= */

function RouteTransition() {
  const { pathname } = useLocation();

  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    setVisible(true);
    setProgress(30);

    const timer1 = window.setTimeout(
      () => setProgress(70),
      100
    );

    const timer2 = window.setTimeout(
      () => setProgress(100),
      300
    );

    const timer3 = window.setTimeout(() => {
      setVisible(false);

      window.setTimeout(
        () => setProgress(0),
        300
      );
    }, 500);

    return () => {
      window.clearTimeout(timer1);
      window.clearTimeout(timer2);
      window.clearTimeout(timer3);
    };
  }, [pathname]);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-[#195FD7] z-[100] transition-all duration-300 ease-out"
      style={{
        width: `${progress}%`,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}

/* =========================================================
   SIMPLE CONTENT PAGES
========================================================= */

function SimplePage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center">
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-1"
          >
            <Logo />

            <div className="flex items-center">
              <span className="text-slate-900">
                Tik
              </span>

              <span className="text-[#195FD7]">
                Flow
              </span>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            {title}
          </h1>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* =========================================================
   HOW TO DOWNLOAD
========================================================= */

function HowToDownload() {
  return (
    <SimplePage title="How to Download TikTok Videos">
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          1. Copy the TikTok video link
        </h2>

        <p>
          Open TikTok and find the video you want
          to download. Tap the Share button and
          choose Copy Link.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          2. Paste the link
        </h2>

        <p>
          Return to TikFlow and paste the TikTok
          video link into the input field.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          3. Click Download
        </h2>

        <p>
          Click the Download button and wait for
          the video information to load.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          4. Save your video
        </h2>

        <p>
          Once the result appears, click Download
          Video to save the available video file
          to your device.
        </p>
      </section>

      <Link
        to="/"
        className="inline-flex items-center justify-center bg-[#195FD7] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0F4EC0]"
      >
        Back to TikFlow
      </Link>
    </SimplePage>
  );
}

/* =========================================================
   PRIVACY POLICY
========================================================= */

function PrivacyPolicy() {
  return (
    <SimplePage title="Privacy Policy">
      <p>
        TikFlow respects your privacy. This page
        explains the general way information may be
        handled when using this website.
      </p>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Information
        </h2>

        <p>
          TikFlow does not require users to create
          an account to use the basic downloader
          functionality.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Links and third-party services
        </h2>

        <p>
          The service may communicate with third-party
          services to process publicly available
          video information. Their own privacy
          policies may apply.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Contact
        </h2>

        <p>
          If you have questions regarding this
          privacy policy, please contact the website
          operator.
        </p>
      </section>
    </SimplePage>
  );
}

/* =========================================================
   COOKIE POLICY
========================================================= */

function CookiePolicy() {
  return (
    <SimplePage title="Cookie Policy">
      <p>
        TikFlow may use cookies or similar browser
        technologies to remember preferences and
        improve the website experience.
      </p>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What are cookies?
        </h2>

        <p>
          Cookies are small pieces of information
          stored by your browser that can help a
          website remember settings and preferences.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Managing cookies
        </h2>

        <p>
          You can manage or delete cookies through
          your browser settings.
        </p>
      </section>
    </SimplePage>
  );
}

/* =========================================================
   TERMS OF SERVICE
========================================================= */

function TermsOfService() {
  return (
    <SimplePage title="Terms of Service">
      <p>
        By using TikFlow, you agree to use the
        service responsibly and in accordance with
        applicable laws.
      </p>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Content responsibility
        </h2>

        <p>
          Users are responsible for ensuring they
          have the necessary rights or permission to
          download and use any content.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Service availability
        </h2>

        <p>
          TikFlow may change, suspend, or discontinue
          parts of the service when necessary.
        </p>
      </section>
    </SimplePage>
  );
}

/* =========================================================
   CONTACT
========================================================= */

function ContactUs() {
  return (
    <SimplePage title="Contact Us">
      <p>
        If you have questions, suggestions, or
        encounter a problem while using TikFlow,
        you can contact the website operator through
        the available contact channel.
      </p>

      <p>
        Please include enough information about the
        problem so it can be investigated.
      </p>

      <Link
        to="/"
        className="inline-flex items-center justify-center bg-[#195FD7] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0F4EC0]"
      >
        Back to TikFlow
      </Link>
    </SimplePage>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer({
  className = '',
}: {
  className?: string;
}) {
  return (
    <footer
      className={`bg-gray-50 py-8 sm:py-12 border-t border-gray-200 ${className}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6" />

            <span className="font-bold text-gray-900">
              Tik
              <span className="text-[#195FD7]">
                Flow
              </span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-500">
            <Link
              to="/how-to-download-tiktok"
              className="hover:text-gray-900"
            >
              How To Download
            </Link>

            <Link
              to="/privacy"
              className="hover:text-gray-900"
            >
              Privacy
            </Link>

            <Link
              to="/cookies"
              className="hover:text-gray-900"
            >
              Cookies
            </Link>

            <Link
              to="/terms"
              className="hover:text-gray-900"
            >
              Terms
            </Link>

            <Link
              to="/contact"
              className="hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} TikFlow.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   DOWNLOADER
========================================================= */

function Downloader() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isHowToPage =
    location.pathname ===
    '/how-to-download-tiktok';

  const pageConfigs = getPageConfigs(t);

  const config =
    pageConfigs[
      location.pathname as keyof typeof pageConfigs
    ] || pageConfigs['/'];

  /* -------------------------------------------------------
     PAGE TITLE
  ------------------------------------------------------- */

  useEffect(() => {
    document.title = config.pageTitle;
  }, [config.pageTitle]);

  /* -------------------------------------------------------
     BASIC STATES
  ------------------------------------------------------- */

  const [url, setUrl] = useState('');
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined'
      ? navigator.onLine
      : true
  );

  const [openFaq, setOpenFaq] =
    useState<number | null>(0);

  const [isLangOpen, setIsLangOpen] =
    useState(false);

  const [isPreviewOpen, setIsPreviewOpen] =
    useState(false);

  const [currentPreviewIndex, setCurrentPreviewIndex] =
    useState(0);

  const [isLoading, setIsLoading] =
    useState(false);

  const [downloadingUrl, setDownloadingUrl] =
    useState<string | null>(null);

  const [isDownloadingZip, setIsDownloadingZip] =
    useState(false);

  const [downloadResult, setDownloadResult] =
    useState<DownloadResult | null>(null);

  const langMenuRef =
    useRef<HTMLDivElement>(null);

  /* -------------------------------------------------------
     PWA INSTALL
  ------------------------------------------------------- */

  const [deferredPrompt, setDeferredPrompt] =
    useState<any>(null);

  const [showInstallBtn, setShowInstallBtn] =
    useState(() => {
      if (typeof window === 'undefined') {
        return true;
      }

      return !(
        window.matchMedia(
          '(display-mode: standalone)'
        ).matches ||
        (window.navigator as any).standalone
      );
    });

  /* -------------------------------------------------------
     ONLINE / OFFLINE
  ------------------------------------------------------- */

  useEffect(() => {
    const handleOnline = () =>
      setIsOnline(true);

    const handleOffline = () =>
      setIsOnline(false);

    window.addEventListener(
      'online',
      handleOnline
    );

    window.addEventListener(
      'offline',
      handleOffline
    );

    return () => {
      window.removeEventListener(
        'online',
        handleOnline
      );

      window.removeEventListener(
        'offline',
        handleOffline
      );
    };
  }, []);

  /* -------------------------------------------------------
     SHARE TARGET
  ------------------------------------------------------- */

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const sharedUrl =
      params.get('url') ||
      params.get('text');

    if (sharedUrl) {
      setUrl(sharedUrl);

      window.history.replaceState(
        {},
        document.title,
        window.location.pathname
      );
    }
  }, []);

  /* -------------------------------------------------------
     CLIPBOARD AUTO READ
  ------------------------------------------------------- */

  useEffect(() => {
    const handleFocus = async () => {
      try {
        if (
          navigator.clipboard &&
          typeof navigator.clipboard
            .readText === 'function'
        ) {
          const text =
            await navigator.clipboard.readText();

          if (
            text &&
            (
              text.includes('tiktok.com') ||
              text.includes('douyin.com')
            )
          ) {
            setUrl((previous) =>
              previous !== text
                ? text
                : previous
            );
          }
        }
      } catch {
        // Clipboard permission denied.
      }
    };

    window.addEventListener(
      'focus',
      handleFocus
    );

    if (document.hasFocus()) {
      handleFocus();
    }

    return () => {
      window.removeEventListener(
        'focus',
        handleFocus
      );
    };
  }, []);

  /* -------------------------------------------------------
     PREVIEW BODY LOCK
  ------------------------------------------------------- */

  useEffect(() => {
    document.body.style.overflow =
      isPreviewOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isPreviewOpen]);

  /* -------------------------------------------------------
     ESCAPE PREVIEW
  ------------------------------------------------------- */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === 'Escape') {
        setIsPreviewOpen(false);
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, []);

  /* -------------------------------------------------------
     LANGUAGE DROPDOWN
  ------------------------------------------------------- */

  const activeLang =
    i18n.language?.split('-')[0] || 'en';

  const handleLangChange = (
    code: string
  ) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(
          event.target as Node
        )
      ) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener(
      'mousedown',
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);

  /* -------------------------------------------------------
     PWA INSTALL
  ------------------------------------------------------- */

  useEffect(() => {
    const handleBeforeInstallPrompt = (
      event: Event
    ) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    const handleAppInstalled = () => {
      setShowInstallBtn(false);
      setDeferredPrompt(null);
    };

    window.addEventListener(
      'beforeinstallprompt',
      handleBeforeInstallPrompt
    );

    window.addEventListener(
      'appinstalled',
      handleAppInstalled
    );

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      );

      window.removeEventListener(
        'appinstalled',
        handleAppInstalled
      );
    };
  }, []);

  const handleInstallClick = async (
    event: React.MouseEvent
  ) => {
    event.preventDefault();

    if (!deferredPrompt) {
      alert(
        'PWA install prompt is not available right now.'
      );
      return;
    }

    deferredPrompt.prompt();

    const { outcome } =
      await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  /* -------------------------------------------------------
     PASTE
  ------------------------------------------------------- */

  const handlePaste = async () => {
    try {
      const text =
        await navigator.clipboard.readText();

      setUrl(text);
    } catch (error) {
      console.error(
        'Failed to read clipboard:',
        error
      );

      alert(
        'Clipboard tidak dapat diakses. Silakan paste link secara manual.'
      );
    }
  };

  /* -------------------------------------------------------
     CLEAR
  ------------------------------------------------------- */

  const handleClear = () => {
    setUrl('');
    setDownloadResult(null);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /* -------------------------------------------------------
     FORMAT NUMBER
  ------------------------------------------------------- */

  const formatNumber = (
    value: number | undefined
  ) => {
    if (!value) {
      return '0';
    }

    if (value >= 1000000) {
      return (
        (value / 1000000).toFixed(1) + 'M'
      );
    }

    if (value >= 1000) {
      return (
        (value / 1000).toFixed(1) + 'K'
      );
    }

    return value.toString();
  };

  /* -------------------------------------------------------
     DOWNLOAD / FETCH TIKTOK DATA
  ------------------------------------------------------- */

  const handleDownload = async (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    if (!url.trim()) {
      return;
    }

    setIsLoading(true);
    setDownloadResult(null);

    try {
      const response = await fetch(
        'https://www.tikwm.com/api/?url=' +
          encodeURIComponent(url.trim())
      );

      if (!response.ok) {
        throw new Error(
          'API request failed'
        );
      }

      const result =
        await response.json();

      if (
        result.code === 0 &&
        result.data
      ) {
        const videoData =
          result.data;

        const isImage =
          Array.isArray(
            videoData.images
          ) &&
          videoData.images.length > 0;

        setDownloadResult({
          type: isImage
            ? 'image'
            : 'video',

          thumbnail:
            videoData.cover ||
            videoData.origin_cover ||
            '',

          title:
            videoData.title ||
            'TikTok Video',

          author:
            '@' +
            (
              videoData.author
                ?.unique_id ||
              'user'
            ),

          avatar:
            videoData.author?.avatar ||
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80',

          views: formatNumber(
            videoData.play_count
          ),

          comments: formatNumber(
            videoData.comment_count
          ),

          shares: formatNumber(
            videoData.share_count
          ),

          downloadUrl:
            videoData.play,

          images:
            videoData.images,

          musicUrl:
            videoData.music ||
            videoData.music_info?.play,

          videoId:
            videoData.id,
        });
      } else {
        throw new Error(
          result.msg ||
            'Video tidak ditemukan'
        );
      }
    } catch (error) {
      console.error(
        'Error fetching video:',
        error
      );

      alert(
        'Gagal mengambil data video. Pastikan link TikTok valid atau coba lagi nanti.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  /* -------------------------------------------------------
     DOWNLOAD SINGLE FILE
  ------------------------------------------------------- */

  const handleDownloadFile = async (
    fileUrl: string
  ) => {
    try {
      setDownloadingUrl(fileUrl);

      const response =
        await fetch(fileUrl);

      if (!response.ok) {
        throw new Error(
          'Failed to fetch file'
        );
      }

      const blob =
        await response.blob();

      const blobUrl =
        URL.createObjectURL(blob);

      const link =
        document.createElement('a');

      link.href = blobUrl;

      const timestamp =
        Date.now();

      const authorId =
        downloadResult?.author
          ?.replace('@', '') ||
        'video';

      const videoId =
        downloadResult?.videoId ||
        timestamp;

      let filename =
        `TikFlow_${authorId}_${videoId}`;

      if (
        fileUrl.includes('.mp3')
      ) {
        filename += '.mp3';
      } else if (
        fileUrl.match(
          /\.(jpeg|jpg|webp|png)/i
        )
      ) {
        filename += '.jpg';
      } else {
        filename += '.mp4';
      }

      link.download = filename;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      /*
       * Redirect optional.
       * Hapus blok ini jika tidak ingin redirect
       * ke Shopee setelah download.
       */
      window.setTimeout(() => {
        window.location.assign(
          'https://s.shopee.co.id/4LIvSTctrY'
        );
      }, 5000);

      window.setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
      }, 6000);
    } catch (error) {
      console.error(
        'Download failed:',
        error
      );

      alert(
        'Gagal mengunduh file secara langsung. Silakan coba lagi.'
      );
    } finally {
      setDownloadingUrl(null);
    }
  };

  /* -------------------------------------------------------
     DOWNLOAD ZIP
  ------------------------------------------------------- */

  const handleDownloadZip = async () => {
    if (
      !downloadResult ||
      !downloadResult.images ||
      downloadResult.images.length === 0
    ) {
      return;
    }

    try {
      setIsDownloadingZip(true);

      const zip = new JSZip();

      const imagePromises =
        downloadResult.images.map(
          async (
            imgUrl,
            index
          ) => {
            try {
              const response =
                await fetch(imgUrl);

              if (!response.ok) {
                throw new Error(
                  'Image request failed'
                );
              }

              const blob =
                await response.blob();

              const extension =
                imgUrl
                  .split('?')[0]
                  .split('.')
                  .pop() ||
                'jpg';

              zip.file(
                `slide-${index + 1}.${extension}`,
                blob
              );
            } catch (error) {
              console.error(
                `Failed to fetch image ${
                  index + 1
                }:`,
                error
              );
            }
          }
        );

      await Promise.all(
        imagePromises
      );

      const content =
        await zip.generateAsync({
          type: 'blob',
        });

      const blobUrl =
        URL.createObjectURL(
          content
        );

      const link =
        document.createElement('a');

      link.href = blobUrl;

      const timestamp =
        Date.now();

      const authorId =
        downloadResult.author?.replace(
          '@',
          ''
        ) || 'video';

      const videoId =
        downloadResult.videoId ||
        timestamp;

      link.download =
        `TikFlow_${authorId}_${videoId}_slides.zip`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error(
        'ZIP creation failed:',
        error
      );

      alert(
        'Gagal membuat file ZIP. Silakan coba download gambar satu per satu.'
      );
    } finally {
      setIsDownloadingZip(false);
    }
  };

  /* -------------------------------------------------------
     PREVIEW
  ------------------------------------------------------- */

  const openPreview = (
    index = 0
  ) => {
    setCurrentPreviewIndex(index);
    setIsPreviewOpen(true);
  };

  /* -------------------------------------------------------
     FAQ
  ------------------------------------------------------- */

  const faqs = [
    {
      question: t(
        'faq1q',
        'How to Download video TikTok no watermark?'
      ),
      answer: t(
        'faq1a',
        'Copy your TikTok video link, paste it into TikFlow, and click Download.'
      ),
    },
    {
      question: t(
        'faq2q',
        'How to get the TikTok video download link?'
      ),
      answer: t(
        'faq2a',
        'Open TikTok, tap Share on the video, then choose Copy Link.'
      ),
    },
    {
      question: t(
        'faq3q',
        'Where are TikTok videos saved after being downloaded?'
      ),
      answer: t(
        'faq3a',
        'Downloaded files are normally saved in your browser download folder.'
      ),
    },
    {
      question: t(
        'faq4q',
        'Is TikFlow safe to use?'
      ),
      answer: t(
        'faq4a',
        'TikFlow does not require you to install a downloader application.'
      ),
    },
    {
      question: t(
        'faq5q',
        'Do I need to install any application or extension?'
      ),
      answer: t(
        'faq5a',
        'No. TikFlow is designed to work through your web browser.'
      ),
    },
    {
      question: t(
        'faq6q',
        'Do I have to pay to TikTok Downloader without watermark (TikFlow)?'
      ),
      answer: t(
        'faq6a',
        'The basic downloader is provided free of charge.'
      ),
    },
    {
      question: t(
        'faq7q',
        'Can I use this TikTok video downloader on my Android phone?'
      ),
      answer: t(
        'faq7a',
        'Yes. TikFlow can be accessed from a compatible mobile browser.'
      ),
    },
    {
      question: t(
        'faq8q',
        'How do I save TikTok video to my iPhone (iOS)?'
      ),
      answer: t(
        'faq8a',
        'Open TikFlow in Safari, paste the link, and download the available file.'
      ),
    },
    {
      question: t(
        'faq9q',
        'Is there a limit to download TikTok videos at TikFlow?'
      ),
      answer: t(
        'faq9a',
        'Availability may depend on the third-party processing service and network conditions.'
      ),
    },
  ];

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">

      {/* OFFLINE BAR */}
      {!isOnline && (
        <div className="bg-red-500 text-white text-center py-2 text-sm font-medium z-[100] relative">
          Anda sedang offline. Silakan
          periksa koneksi internet Anda.
        </div>
      )}

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">

          <div className="flex items-center gap-3 sm:gap-6">

            <Link
              to="/"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-1"
            >
              <Logo />

              <div className="flex items-center">
                <span className="text-slate-900">
                  Tik
                </span>

                <span className="text-[#195FD7]">
                  Flow
                </span>
              </div>
            </Link>

            {showInstallBtn && (
              <a
                href="#"
                onClick={handleInstallClick}
                className="flex items-center gap-1.5 bg-[#EBF2FF] text-[#195FD7] text-[13px] sm:text-sm font-medium px-2.5 sm:px-3 py-2.5 rounded-lg hover:bg-[#d8e5ff] transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />

                <span>
                  {t(
                    'installApp',
                    'Install App'
                  )}
                </span>
              </a>
            )}
          </div>

          {/* LANGUAGE */}

          <div
            className="flex items-center relative"
            ref={langMenuRef}
          >
            <button
              onClick={() =>
                setIsLangOpen(
                  !isLangOpen
                )
              }
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 px-2 sm:px-3 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <span className="text-base leading-none">
                {LANGUAGES.find(
                  (language) =>
                    language.code ===
                    activeLang
                )?.flag || '🌐'}
              </span>

              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform ${
                  isLangOpen
                    ? 'rotate-180'
                    : ''
                }`}
              />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden py-1 z-50">
                {LANGUAGES.map(
                  (language) => (
                    <button
                      key={
                        language.code
                      }
                      onClick={() =>
                        handleLangChange(
                          language.code
                        )
                      }
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span>
                          {
                            language.flag
                          }
                        </span>

                        <span className="font-medium">
                          {
                            language.name
                          }
                        </span>
                      </div>

                      {activeLang ===
                        language.code && (
                        <Check className="w-4 h-4 text-[#195FD7]" />
                      )}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* =================================================
          HOW TO PAGE
      ================================================= */}

      {isHowToPage ? (
        <HowToDownload />
      ) : (
        <>
          {/* =================================================
              HERO
          ================================================= */}

          <section
            className={`w-full bg-[#195FD7] px-4 py-8 sm:py-12 flex flex-col items-center justify-center text-center ${
              downloadResult
                ? 'hidden'
                : ''
            }`}
          >
            <div className="max-w-2xl w-full mx-auto space-y-6">

              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-[26px] sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {config.title}
                </h1>

                <p className="text-[15px] sm:text-base text-white font-normal max-w-xl mx-auto px-2">
                  {config.subtitle}
                </p>
              </div>

              {/* FORM */}

              <form
                onSubmit={
                  handleDownload
                }
                className="w-full flex flex-col md:flex-row gap-4"
              >
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder={
                      config.placeholder
                    }
                    value={url}
                    onChange={(event) =>
                      setUrl(
                        event.target.value
                      )
                    }
                    required
                    className="w-full h-14 sm:h-16 pl-5 pr-14 rounded-xl text-gray-900 text-sm sm:text-base placeholder-gray-400 bg-white border-2 border-transparent focus:border-[#195FD7]/30 focus:outline-none shadow-lg transition-all"
                  />

                  {url ? (
                    <button
                      type="button"
                      onClick={
                        handleClear
                      }
                      aria-label="Clear link"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 rounded-lg"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={
                        handlePaste
                      }
                      aria-label="Paste link"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 rounded-lg"
                    >
                      <ClipboardPaste className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto md:px-8 h-14 sm:h-16 bg-white text-[#195FD7] font-bold text-base sm:text-lg rounded-xl hover:bg-gray-50 active:scale-[0.99] disabled:opacity-80 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />

                      {t(
                        'processing',
                        'Processing...'
                      )}
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />

                      {t(
                        'downloadBtn',
                        'Download'
                      )}
                    </>
                  )}
                </button>
              </form>
            </div>
          </section>

          {/* =================================================
              MAIN
          ================================================= */}

          <main
            className={`flex-1 max-w-5xl mx-auto px-4 sm:px-6 w-full ${
              downloadResult
                ? 'pt-8 pb-4'
                : 'py-12 sm:py-16'
            }`}
          >

            {/* =================================================
                RESULT
            ================================================= */}

            {downloadResult && (
              <section className="bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.06)] p-5 sm:p-6 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-lg mx-auto">

                <div className="flex flex-col gap-6">

                  {/* HEADER INFO */}

                  <div className="flex flex-row gap-4">

                    <div
                      className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 cursor-pointer group"
                      onClick={() =>
                        openPreview(0)
                      }
                    >
                      <img
                        src={
                          downloadResult.thumbnail
                        }
                        alt="Video Thumbnail"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                          <Play
                            className="w-5 h-5 text-gray-900 ml-1"
                            fill="currentColor"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 justify-center">
                      <h3 className="font-semibold text-[15px] sm:text-[16px] text-[#121212] line-clamp-2 leading-[22px] mb-2">
                        {
                          downloadResult.title
                        }
                      </h3>

                      <div className="flex items-center gap-2 mb-2.5">
                        <img
                          src={
                            downloadResult.avatar
                          }
                          alt="Author Avatar"
                          className="w-5 h-5 rounded-full object-cover"
                        />

                        <p className="text-[14px] text-[#5B6475]">
                          {
                            downloadResult.author
                          }
                        </p>
                      </div>

                      <div className="flex items-center gap-3.5 text-[13px] text-[#5B6475]">

                        <span className="flex items-center gap-1">
                          <Play
                            className="w-3.5 h-3.5"
                            fill="currentColor"
                          />
                          {
                            downloadResult.views
                          }
                        </span>

                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3.5 h-3.5" />
                          {
                            downloadResult.comments
                          }
                        </span>

                        <span className="flex items-center gap-1">
                          <ArrowUpRight className="w-4 h-4" />
                          {
                            downloadResult.shares
                          }
                        </span>

                      </div>
                    </div>
                  </div>

                  {/* VIDEO */}

                  {downloadResult.type ===
                    'video' &&
                    downloadResult.downloadUrl && (
                      <div className="flex flex-col gap-3 mt-2">

                        <button
                          onClick={() =>
                            handleDownloadFile(
                              downloadResult.downloadUrl!
                            )
                          }
                          disabled={
                            downloadingUrl ===
                            downloadResult.downloadUrl
                          }
                          className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#195FD7] text-white font-semibold text-[16px] hover:bg-[#0F4EC0] transition-colors shadow-sm disabled:opacity-70"
                        >
                          {downloadingUrl ===
                          downloadResult.downloadUrl ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              {t(
                                'downloading',
                                'Downloading...'
                              )}
                            </>
                          ) : (
                            <>
                              <Download className="w-5 h-5" />
                              {t(
                                'downloadVideo',
                                'Download Video'
                              )}
                            </>
                          )}
                        </button>

                        <button
                          onClick={
                            handleClear
                          }
                          className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-transparent text-[#5B6475] hover:text-[#121212] font-semibold text-[15px]"
                        >
                          <RefreshCw className="w-5 h-5" />

                          {t(
                            'downloadAnother',
                            'Download Another Video'
                          )}
                        </button>

                      </div>
                    )}

                  {/* IMAGES */}

                  {downloadResult.type ===
                    'image' &&
                    downloadResult.images && (
                      <>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-4">

                          {downloadResult.images.map(
                            (
                              image,
                              index
                            ) => (
                              <div
                                key={
                                  index
                                }
                                className="flex flex-col gap-2"
                              >
                                <div
                                  className="relative rounded-xl overflow-hidden aspect-[3/4] bg-gray-100 border border-gray-200 cursor-pointer group"
                                  onClick={() =>
                                    openPreview(
                                      index
                                    )
                                  }
                                >
                                  <img
                                    src={image}
                                    alt={`Slide ${
                                      index +
                                      1
                                    }`}
                                    className="w-full h-full object-cover"
                                  />

                                  <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md font-medium">
                                    {
                                      index +
                                      1
                                    }
                                  </div>
                                </div>

                                <button
                                  onClick={() =>
                                    handleDownloadFile(
                                      image
                                    )
                                  }
                                  disabled={
                                    downloadingUrl ===
                                    image
                                  }
                                  className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#195FD7] text-white font-semibold text-[13px] sm:text-[14px] hover:bg-[#0F4EC0] disabled:opacity-70"
                                >
                                  {downloadingUrl ===
                                  image ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                  ) : (
                                    <Download className="w-4 h-4" />
                                  )}

                                  {t(
                                    'download',
                                    'Download'
                                  )}
                                </button>
                              </div>
                            )
                          )}

                        </div>

                        <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-gray-100">

                          <button
                            onClick={
                              handleDownloadZip
                            }
                            disabled={
                              isDownloadingZip
                            }
                            className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-transparent border-2 border-dashed border-gray-300 text-gray-700 font-semibold text-[16px] hover:bg-gray-50 disabled:opacity-70"
                          >
                            {isDownloadingZip ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                {t(
                                  'creatingZip',
                                  'Creating ZIP...'
                                )}
                              </>
                            ) : (
                              <>
                                <Download className="w-5 h-5" />

                                {t(
                                  'downloadAllZip',
                                  'Download All (ZIP)'
                                )}{' '}
                                (
                                {
                                  downloadResult
                                    .images
                                    .length
                                }
                                )
                              </>
                            )}
                          </button>

                          {downloadResult.downloadUrl && (
                            <button
                              onClick={() =>
                                handleDownloadFile(
                                  downloadResult.downloadUrl!
                                )
                              }
                              disabled={
                                downloadingUrl ===
                                downloadResult.downloadUrl
                              }
                              className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#195FD7] text-white font-semibold text-[16px] hover:bg-[#0F4EC0] disabled:opacity-70"
                            >
                              {downloadingUrl ===
                              downloadResult.downloadUrl ? (
                                <>
                                  <Loader2 className="w-5 h-5 animate-spin" />
                                  {t(
                                    'downloading',
                                    'Downloading...'
                                  )}
                                </>
                              ) : (
                                <>
                                  <Download className="w-5 h-5" />

                                  {t(
                                    'downloadSlideshow',
                                    'Download Slideshow'
                                  )}
                                </>
                              )}
                            </button>
                          )}

                          <button
                            onClick={
                              handleClear
                            }
                            className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-transparent text-[#5B6475] font-semibold text-[15px]"
                          >
                            <RefreshCw className="w-5 h-5" />

                            {t(
                              'downloadAnother',
                              'Download Another Video'
                            )}
                          </button>

                        </div>
                      </>
                    )}

                </div>
              </section>
            )}

            {/* =================================================
                NORMAL CONTENT
            ================================================= */}

            <div
              className={
                downloadResult
                  ? 'hidden'
                  : 'space-y-16 sm:space-y-24'
              }
            >

              {/* INFO CARD */}

              <section className="bg-white rounded-xl p-6 sm:p-10 shadow-sm border border-gray-200 text-center">

                <div className="flex flex-col items-center">

                  <div className="w-12 h-12 bg-[#EBF2FF] rounded-xl flex items-center justify-center mb-6">
                    <Info
                      className="w-6 h-6 text-[#195FD7]"
                      strokeWidth={2.5}
                    />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#195FD7] mb-5">
                    {t(
                      'infoHeading',
                      'Download TikTok Videos Without Watermark FREE'
                    )}
                  </h2>

                  <div className="w-16 h-1 bg-[#195FD7] rounded-full mb-8" />

                  <div className="space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">

                    <p>
                      {t(
                        'infoP1',
                        'TikFlow is one of the best HD TikTok Downloaders available online. TikFlow helps users download TikTok videos without a watermark in MP4 format and in HD quality. You are not required to install any software on your computer or mobile phone. All that you need is a TikTok video link, paste the link to TikFlow and you can save your TikTok video instantly.'
                      )}
                    </p>

                    <p>
                      {t(
                        'infoP2',
                        'TikFlow provides users with the ability to download TikTok photo slideshows as MP4 video format. The images and music in the TikTok slideshow can be merged by the service.'
                      )}
                    </p>

                  </div>
                </div>
              </section>

              {/* =================================================
                  HOW TO USE
              ================================================= */}

              <section>
                <h2 className="text-center font-bold text-2xl sm:text-3xl text-gray-900 mb-10 sm:mb-14">
                  How to Download TikTok Videos Without Watermarks
                </h2>

                <div className="relative flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-between">

                  <div className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] h-[2px] bg-[#EBF2FF] z-0" />

                  <div className="md:hidden absolute top-7 bottom-7 left-7 w-[2px] bg-[#EBF2FF] z-0" />

                  {[
                    {
                      icon: Clipboard,
                      title: 'Copy Video Link',
                      text: 'Open TikTok app, find the video, tap Share and copy the video link.',
                    },
                    {
                      icon: Clipboard,
                      title: 'Paste Link',
                      text: 'Paste the link into the input field above.',
                    },
                    {
                      icon: Download,
                      title: 'Download',
                      text: 'Click Download and save the video without watermark to your device.',
                    },
                  ].map(
                    (
                      step,
                      index
                    ) => {
                      const Icon =
                        step.icon;

                      return (
                        <div
                          key={
                            step.title
                          }
                          className="relative flex flex-row items-start gap-5 md:flex-col md:items-center text-left md:text-center w-full md:w-1/3 z-10"
                        >
                          <div className="relative shrink-0">

                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                              <Icon className="w-6 h-6 text-[#195FD7]" />
                            </div>

                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#195FD7] text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                              {index +
                                1}
                            </div>
                          </div>

                          <div className="mt-1 md:mt-6">
                            <h3 className="font-bold text-gray-900 text-base mb-2">
                              {
                                step.title
                              }
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed px-0 md:px-4">
                              {
                                step.text
                              }
                            </p>
                          </div>
                        </div>
                      );
                    }
                  )}

                </div>
              </section>

              {/* =================================================
                  FEATURES
              ================================================= */}

              <section>
                <h2 className="text-center font-bold text-2xl sm:text-3xl text-gray-900 mb-10 sm:mb-14">
                  TikTok Download Features
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

                  {[
                    {
                      icon: ShieldCheck,
                      title: 'No Watermarks',
                      text: 'Download available TikTok videos without the original watermark when supported by the processing service.',
                    },
                    {
                      icon: Smartphone,
                      title: 'All Devices',
                      text: 'Use TikFlow on mobile phones, tablets, and desktop browsers.',
                    },
                    {
                      icon: Globe,
                      title: 'Browser Only',
                      text: 'Use the downloader directly through your web browser without installing a downloader application.',
                    },
                    {
                      icon: CircleDollarSign,
                      title: 'Always Free',
                      text: 'The basic downloader is available free of charge.',
                    },
                    {
                      icon: ImageIcon,
                      title: 'Slideshow to MP4',
                      text: 'Process TikTok photo slideshows when supported by the service.',
                    },
                    {
                      icon: Video,
                      title: 'HD Quality',
                      text: 'Download the highest available quality provided by the source.',
                    },
                  ].map(
                    (feature) => {
                      const Icon =
                        feature.icon;

                      return (
                        <div
                          key={
                            feature.title
                          }
                          className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col"
                        >
                          <div className="w-10 h-10 bg-[#EBF2FF] rounded-lg flex items-center justify-center mb-4">
                            <Icon
                              className="w-5 h-5 text-[#195FD7]"
                              strokeWidth={
                                2.5
                              }
                            />
                          </div>

                          <h3 className="font-bold text-gray-900 text-base mb-2">
                            {
                              feature.title
                            }
                          </h3>

                          <p className="text-gray-600 text-sm leading-relaxed">
                            {
                              feature.text
                            }
                          </p>
                        </div>
                      );
                    }
                  )}

                </div>
              </section>

              {/* =================================================
                  FAQ
              ================================================= */}

              <section className="max-w-3xl mx-auto w-full">

                <h2 className="text-center font-bold text-2xl sm:text-3xl text-gray-900 mb-10 sm:mb-14">
                  Frequently Asked Questions
                </h2>

                <div className="flex flex-col space-y-4">

                  {faqs.map(
                    (
                      faq,
                      index
                    ) => (
                      <div
                        key={
                          index
                        }
                        className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                      >
                        <button
                          type="button"
                          className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                          onClick={() =>
                            setOpenFaq(
                              openFaq ===
                                index
                                ? null
                                : index
                            )
                          }
                        >
                          <h3 className="text-sm sm:text-base font-medium text-gray-900 pr-4">
                            {
                              faq.question
                            }
                          </h3>

                          {openFaq ===
                          index ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                          )}
                        </button>

                        {openFaq ===
                          index && (
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 bg-white border-t border-gray-100">
                            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                              {
                                faq.answer
                              }
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  )}

                </div>
              </section>
            </div>
          </main>
        </>
      )}

      {/* =================================================
          PREVIEW MODAL
      ================================================= */}

      {isPreviewOpen &&
        downloadResult && (
          <div
            className="bg-black/80 backdrop-blur-sm z-50 fixed inset-0 flex items-center justify-center p-4"
            onClick={() =>
              setIsPreviewOpen(
                false
              )
            }
          >
            <button
              onClick={() =>
                setIsPreviewOpen(
                  false
                )
              }
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-gray-300 z-[60] bg-black/20 rounded-full p-2"
              aria-label="Close preview"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <div
              className="relative w-full max-w-4xl flex items-center justify-center"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              {downloadResult.type ===
                'video' &&
              downloadResult.downloadUrl ? (
                <video
                  src={
                    downloadResult.downloadUrl
                  }
                  controls
                  autoPlay
                  className="max-h-[80vh] max-w-full rounded-2xl shadow-2xl"
                />
              ) : (
                downloadResult.type ===
                  'image' &&
                downloadResult.images && (
                  <div className="relative flex items-center justify-center w-full">

                    <img
                      src={
                        downloadResult
                          .images[
                          currentPreviewIndex
                        ]
                      }
                      alt={`Preview ${
                        currentPreviewIndex +
                        1
                      }`}
                      className="max-h-[80vh] max-w-full rounded-2xl shadow-2xl object-contain"
                    />

                    {downloadResult.images.length >
                      1 && (
                      <>
                        <button
                          onClick={(
                            event
                          ) => {
                            event.stopPropagation();

                            setCurrentPreviewIndex(
                              (
                                previous
                              ) =>
                                previous >
                                0
                                  ? previous -
                                    1
                                  : downloadResult
                                      .images!
                                      .length -
                                    1
                            );
                          }}
                          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                        </button>

                        <button
                          onClick={(
                            event
                          ) => {
                            event.stopPropagation();

                            setCurrentPreviewIndex(
                              (
                                previous
                              ) =>
                                previous <
                                downloadResult
                                  .images!
                                  .length -
                                  1
                                  ? previous +
                                    1
                                  : 0
                            );
                          }}
                          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1.5 rounded-full font-medium">
                          {currentPreviewIndex +
                            1}{' '}
                          /{' '}
                          {
                            downloadResult
                              .images
                              .length
                          }
                        </div>
                      </>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        )}

      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer
        className={`${
          downloadResult
            ? 'mt-4'
            : 'mt-12 sm:mt-16'
        }`}
      />
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  return (
    <BrowserRouter>
      <RouteTransition />

      <Routes>

        <Route
          path="/landing/privacy"
          element={
            <PrivacyPolicy />
          }
        />

        <Route
          path="/privacy"
          element={
            <PrivacyPolicy />
          }
        />

        <Route
          path="/cookies"
          element={
            <CookiePolicy />
          }
        />

        <Route
          path="/cookie-policy"
          element={
            <CookiePolicy />
          }
        />

        <Route
          path="/terms"
          element={
            <TermsOfService />
          }
        />

        <Route
          path="/terms-of-service"
          element={
            <TermsOfService />
          }
        />

        <Route
          path="/contact"
          element={
            <ContactUs />
          }
        />

        <Route
          path="/*"
          element={
            <Downloader />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
