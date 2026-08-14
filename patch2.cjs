const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const hookReplacement = `  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState(() => {
    if (typeof window !== 'undefined') {
      return !(window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone);
    }
    return true;
  });

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    
    const handleAppInstalled = () => {
      setShowInstallBtn(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);`;

code = code.replace(
`  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);`, hookReplacement);

const btnReplacement = `            {showInstallBtn && (
              <a
                href="#"
                onClick={handleInstallClick}
                className="flex items-center gap-1.5 bg-[#EBF2FF] text-[#195FD7] text-[13px] sm:text-sm font-medium px-2.5 sm:px-3 py-2.5 rounded-lg hover:bg-[#d8e5ff] transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
                <span className="inline">{t('installApp', 'Install App')}</span>
              </a>
            )}`;

code = code.replace(
`            <a
              href="#"
              onClick={handleInstallClick}
              className="flex items-center gap-1.5 bg-[#EBF2FF] text-[#195FD7] text-[13px] sm:text-sm font-medium px-2.5 sm:px-3 py-2.5 rounded-lg hover:bg-[#d8e5ff] transition-colors"
            >
              <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
              <span className="inline">Install App</span>
            </a>`, btnReplacement);

fs.writeFileSync('src/App.tsx', code);
