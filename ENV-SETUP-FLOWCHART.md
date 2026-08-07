# 🔄 Environment Setup Flowchart

```
┌─────────────────────────────────────────────┐
│  Start: Clone/Download TikFlow Project     │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Run: npm install                           │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Does .env file exist?                      │
└─────────────────┬───────────────────────────┘
                  │
         ┌────────┴────────┐
         │                 │
        YES               NO
         │                 │
         │                 ▼
         │    ┌────────────────────────────┐
         │    │  Run: cp .env.example .env │
         │    └────────────┬───────────────┘
         │                 │
         └─────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Do you have RapidAPI account?              │
└─────────────────┬───────────────────────────┘
                  │
         ┌────────┴────────┐
         │                 │
        YES               NO
         │                 │
         │                 ▼
         │    ┌────────────────────────────────────┐
         │    │  1. Go to https://rapidapi.com    │
         │    │  2. Sign Up (email/Google/GitHub) │
         │    │  3. Verify email                  │
         │    └────────────┬───────────────────────┘
         │                 │
         └─────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Go to TikTok Downloader API page:          │
│  rapidapi.com/atupal2116/api/               │
│  tiktok-video-downloader-no-watermark1      │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Click "Subscribe to Test"                  │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Select "Basic" Plan (FREE)                 │
│  - 50 requests/month                        │
│  - $0.00/month                              │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Click "Subscribe"                          │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Copy your API key                          │
│  (x-rapidapi-key: abc123def...)             │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Open .env file in text editor              │
│  (nano .env / vim .env / code .env)         │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Update these lines:                        │
│                                             │
│  VITE_RAPIDAPI_KEY=your_copied_key_here    │
│  VITE_RAPIDAPI_HOST=                       │
│    tiktok-video-downloader-no-watermark1   │
│    .p.rapidapi.com                         │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Save and close editor                      │
│  (Ctrl+O, Enter, Ctrl+X for nano)          │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Run: bash test-env.sh                      │
└─────────────────┬───────────────────────────┘
                  │
         ┌────────┴────────┐
         │                 │
    ✅ PASS            ❌ FAIL
         │                 │
         │                 ▼
         │    ┌────────────────────────────────┐
         │    │  Check error message:          │
         │    │  - Default value? → Edit .env  │
         │    │  - Missing file? → Create .env │
         │    │  - Wrong format? → Fix syntax  │
         │    └────────────┬───────────────────┘
         │                 │
         │                 ▼
         │    ┌────────────────────────────────┐
         │    │  Fix issue and rerun test      │
         │    └────────────┬───────────────────┘
         │                 │
         └─────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Run: npm run dev                           │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Open: http://localhost:5173                │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Paste TikTok URL                           │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Click "Get Video"                          │
└─────────────────┬───────────────────────────┘
                  │
         ┌────────┴────────┐
         │                 │
    ✅ SUCCESS         ❌ ERROR
         │                 │
         │                 ▼
         │    ┌────────────────────────────────┐
         │    │  Check error in console (F12): │
         │    │  - 401? → Wrong API key        │
         │    │  - 400? → Wrong host/method    │
         │    │  - 429? → Rate limit           │
         │    │  - Other? → See QUICK-FIX.md  │
         │    └────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  🎉 Setup Complete!                         │
│  Video metadata displayed correctly         │
└─────────────────────────────────────────────┘
```

---

## Quick Reference: File Locations

```
tikflow/
├── .env.example          # Template (don't edit)
├── .env                  # Your config (create this!)
├── test-env.sh          # Verification script
├── SETUP-ENV.md         # Detailed guide
├── QUICK-FIX.md         # Quick troubleshooting
└── README.md            # Project documentation
```

---

## Command Cheat Sheet

```bash
# 1. Setup
cp .env.example .env
nano .env                 # Edit and paste API key

# 2. Verify
bash test-env.sh         # Should show ✅ All OK

# 3. Run
npm run dev              # Start server

# 4. Troubleshoot
bash test-env.sh         # Check config
git status               # Check git doesn't track .env
ls -la .env              # Verify .env exists
```

---

## Visual: .env File Structure

```
┌─────────────────────────────────────────┐
│ .env File                               │
├─────────────────────────────────────────┤
│                                         │
│ GEMINI_API_KEY="..."                   │ ← Leave as is
│ APP_URL="..."                          │ ← Leave as is
│                                         │
│ VITE_RAPIDAPI_KEY=abc123...xyz         │ ← PASTE YOUR KEY HERE
│ VITE_RAPIDAPI_HOST=                    │ ← CHECK HAS "1"
│   tiktok-video-downloader-             │
│   no-watermark1.p.rapidapi.com         │
│                                         │
└─────────────────────────────────────────┘

       ⚠️ NO QUOTES ON VITE_RAPIDAPI_KEY!
       ✅ Must have "1": no-watermark1
```

---

## Common Mistakes to Avoid

```
❌ WRONG:
VITE_RAPIDAPI_KEY="abc123..."              # Has quotes
VITE_RAPIDAPI_KEY = abc123...              # Space around =
VITE_RAPIDAPI_HOST=no-watermark.p...       # Missing "1"

✅ CORRECT:
VITE_RAPIDAPI_KEY=abc123...                # No quotes
VITE_RAPIDAPI_HOST=no-watermark1.p...      # Has "1"
```

---

## Verification Checklist

- [ ] .env file exists (not .env.example)
- [ ] VITE_RAPIDAPI_KEY has your actual key
- [ ] No quotes around the API key
- [ ] Host has "1": no-watermark**1**.p.rapidapi.com
- [ ] `bash test-env.sh` shows all ✅
- [ ] Dev server restarted after .env changes
- [ ] Browser cache cleared (Ctrl+Shift+R)

---

**Pro Tip:** If you're still stuck, run these diagnostic commands:

```bash
# Check if .env is being loaded
bash test-env.sh

# Test API endpoint directly
bash .kiro/issues/2026-01-08-rapidapi-400-error/test-api-endpoint.sh

# Check git status (should NOT show .env)
git status
```
