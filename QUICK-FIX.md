# ⚡ Quick Fix Guide

## Error: "API configuration missing. Please check your environment variables."

### ✅ Quick Solution (2 minutes)

1. **Check if .env exists:**
   ```bash
   ls -la .env
   ```
   
   If **not found**, create it:
   ```bash
   cp .env.example .env
   ```

2. **Get RapidAPI Key:**
   - Go to: https://rapidapi.com/atupal2116/api/tiktok-video-downloader-no-watermark1
   - Click "Subscribe to Test"
   - Choose "Basic" (FREE)
   - Copy your API key

3. **Edit .env file:**
   ```bash
   nano .env
   ```
   
   Change this line:
   ```bash
   VITE_RAPIDAPI_KEY="your_rapidapi_key_here"
   ```
   
   To your actual key (remove quotes):
   ```bash
   VITE_RAPIDAPI_KEY=abc123def456...your_key...xyz
   ```
   
   Verify this line has "1":
   ```bash
   VITE_RAPIDAPI_HOST=tiktok-video-downloader-no-watermark1.p.rapidapi.com
   ```
   
   Save: `Ctrl+O` → `Enter` → `Ctrl+X`

4. **Verify:**
   ```bash
   bash test-env.sh
   ```
   
   Should say: ✅ All environment variables are configured correctly!

5. **Restart dev server:**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

6. **Test in browser:**
   - Open: http://localhost:5173
   - Paste TikTok URL
   - Click "Get Video"
   - Should work! 🎉

---

## Still Not Working?

### Check 1: API Key Format
Your API key should be ~50 characters, alphanumeric, NO quotes:

✅ **Correct:**
```bash
VITE_RAPIDAPI_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

❌ **Wrong:**
```bash
VITE_RAPIDAPI_KEY="a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"
VITE_RAPIDAPI_KEY='a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'
VITE_RAPIDAPI_KEY = a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

### Check 2: API Host
Must have "1" at the end:

✅ **Correct:**
```bash
VITE_RAPIDAPI_HOST=tiktok-video-downloader-no-watermark1.p.rapidapi.com
```

❌ **Wrong:**
```bash
VITE_RAPIDAPI_HOST=tiktok-video-downloader-no-watermark.p.rapidapi.com
```

### Check 3: RapidAPI Subscription
- Go to: https://rapidapi.com/developer/apps
- Check "TikTok Video Downloader No Watermark1"
- Status should be "Active"
- If not, subscribe again (free)

### Check 4: Browser Cache
```bash
# Clear browser cache: Ctrl+Shift+R
# Or hard refresh in DevTools (F12) → Right-click refresh button → "Empty Cache and Hard Reload"
```

---

## Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| API configuration missing | .env not configured | Follow steps above |
| 401 Unauthorized | Wrong API key | Re-copy key from RapidAPI |
| 429 Rate Limit | Used all free requests | Wait or upgrade plan |
| 400 Bad Request | Wrong API host | Add "1" to host name |
| CORS error on download | TikTok CDN blocking | Expected - not our bug |

---

## Test Commands

```bash
# Test 1: Check if .env configured
bash test-env.sh

# Test 2: Test API endpoint directly
bash .kiro/issues/2026-01-08-rapidapi-400-error/test-api-endpoint.sh

# Test 3: Start dev server
npm run dev
```

---

## Need Detailed Instructions?

See [SETUP-ENV.md](SETUP-ENV.md) for complete step-by-step guide with screenshots.

---

**Last Updated:** 2026-01-08
