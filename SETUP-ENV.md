# 🔑 Setup Environment Variables

## Problem
Error: **"API configuration missing. Please check your environment variables."**

This happens because the `.env` file either:
1. Doesn't exist
2. Has default/placeholder values
3. Missing required API key

---

## ✅ Solution: Get RapidAPI Key and Configure .env

### Step 1: Get Your RapidAPI Key (5 minutes)

#### 1.1 Create RapidAPI Account
- Go to: https://rapidapi.com/
- Click "Sign Up" (top right)
- Sign up with email or Google/GitHub

#### 1.2 Find the TikTok Downloader API
- Go to: https://rapidapi.com/atupal2116/api/tiktok-video-downloader-no-watermark1
- Or search "tiktok downloader no watermark" in RapidAPI

#### 1.3 Subscribe to the API
- Click **"Subscribe to Test"** button (blue button)
- Select **"Basic"** plan (FREE - 50 requests/month)
- Click **"Subscribe"**
- Confirm if prompted

#### 1.4 Copy Your API Key
After subscribing, you'll see:
```
Code Snippets
▼ Choose language: [Shell] [Node.js] [Python] ...

Your API Key:
x-rapidapi-key: abc123def456ghi789...  [Copy]
```

**Click "Copy" button** to copy your API key.

It will look like this (50 characters):
```
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3
```

---

### Step 2: Configure .env File

#### Option A: Using Text Editor

**1. Open .env file:**
```bash
nano .env
# or
vim .env
# or use VS Code
```

**2. Find this line:**
```bash
VITE_RAPIDAPI_KEY="your_rapidapi_key_here"
```

**3. Replace with your actual key:**
```bash
VITE_RAPIDAPI_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3
```

**4. Verify the host line (should have "1" at the end):**
```bash
VITE_RAPIDAPI_HOST=tiktok-video-downloader-no-watermark1.p.rapidapi.com
```
Notice the `1` before `.p.rapidapi.com` ↑

**5. Save and exit**
- nano: `Ctrl+O` → `Enter` → `Ctrl+X`
- vim: `:wq` → `Enter`

---

#### Option B: Using sed Command

If you're comfortable with command line:

```bash
# Replace YOUR_ACTUAL_KEY_HERE with your key from RapidAPI
sed -i 's/your_rapidapi_key_here/YOUR_ACTUAL_KEY_HERE/' .env

# Example:
sed -i 's/your_rapidapi_key_here/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3/' .env
```

---

### Step 3: Verify Configuration

Run the test script:
```bash
bash test-env.sh
```

**Expected output:**
```
=== Environment Variables Test ===

✓ .env file exists
✓ VITE_RAPIDAPI_KEY is set: a1b2c3d4e5f6g7h8i9j0... (masked)
✓ VITE_RAPIDAPI_HOST is set: tiktok-video-downloader-no-watermark1.p.rapidapi.com

✅ All environment variables are configured correctly!

You can now run:
  npm run dev
```

---

### Step 4: Test the Application

**Start dev server:**
```bash
npm run dev
```

**Open browser:**
```
http://localhost:5173
```

**Test with a TikTok URL:**
```
https://www.tiktok.com/@zachking/video/7086711203962940715
```

Click "Get Video" → Should work now! ✅

---

## 🔍 Troubleshooting

### Still getting "API configuration missing" after setup?

**1. Check if .env was loaded:**
```bash
bash test-env.sh
```

**2. Restart dev server:**
Vite doesn't hot-reload .env changes. Stop server (Ctrl+C) and restart:
```bash
npm run dev
```

**3. Check browser console:**
Press F12 → Console tab → Look for error messages

**4. Verify API key is correct:**
- Go back to RapidAPI dashboard
- Check if key matches
- Make sure you subscribed to the API

---

### Getting 401 Unauthorized error?

**Possible causes:**
1. **Wrong API key** - Copy again from RapidAPI
2. **Not subscribed** - Subscribe to the API first
3. **Subscription expired** - Check your RapidAPI subscription status

**Fix:**
```bash
# Re-copy key from RapidAPI dashboard
# Edit .env with new key
nano .env

# Restart dev server
npm run dev
```

---

### Getting 429 Rate Limit error?

**Cause:** Exceeded free tier limit (50 requests/month)

**Solutions:**
1. Wait until next month
2. Upgrade to paid plan on RapidAPI
3. Create a new RapidAPI account (not recommended)

---

### .env file syntax rules

**✅ Correct:**
```bash
VITE_RAPIDAPI_KEY=abc123def456
VITE_RAPIDAPI_HOST=tiktok-video-downloader-no-watermark1.p.rapidapi.com
```

**❌ Wrong:**
```bash
# No spaces around =
VITE_RAPIDAPI_KEY = abc123def456

# No quotes needed for these values
VITE_RAPIDAPI_KEY="abc123def456"

# No trailing spaces
VITE_RAPIDAPI_KEY=abc123def456   
```

---

## 📋 Complete .env File Example

Your `.env` should look like this:

```bash
# GEMINI_API_KEY: Required for Gemini AI API calls.
GEMINI_API_KEY="MY_GEMINI_API_KEY"

# APP_URL: The URL where this applet is hosted.
APP_URL="MY_APP_URL"

# VITE_RAPIDAPI_KEY: RapidAPI authentication key for TikTok Downloader API.
# Get from: https://rapidapi.com/atupal2116/api/tiktok-video-downloader-no-watermark1
VITE_RAPIDAPI_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3

# VITE_RAPIDAPI_HOST: RapidAPI host header for TikTok Downloader API.
# Note the "1" at the end: no-watermark1
VITE_RAPIDAPI_HOST=tiktok-video-downloader-no-watermark1.p.rapidapi.com
```

**Replace `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3` with your actual API key!**

---

## 🔒 Security Notes

1. **Never commit .env to git**
   - Already in `.gitignore` ✅
   - Check with: `git status` (should not show .env)

2. **Keep API key private**
   - Don't share in screenshots
   - Don't post in public forums
   - Don't commit to public repos

3. **If key leaked:**
   - Go to RapidAPI dashboard
   - Rotate/regenerate API key
   - Update .env with new key

---

## ✅ Checklist

- [ ] Created RapidAPI account
- [ ] Subscribed to TikTok Downloader API (free tier)
- [ ] Copied API key from RapidAPI
- [ ] Created/updated .env file
- [ ] Pasted API key into VITE_RAPIDAPI_KEY
- [ ] Verified host is correct (with "1")
- [ ] Ran `bash test-env.sh` → All checks pass
- [ ] Restarted dev server
- [ ] Tested app in browser → Works! 🎉

---

## 🚀 Quick Start Commands

```bash
# 1. Create .env from example (if not exists)
cp .env.example .env

# 2. Edit .env and add your API key
nano .env

# 3. Test configuration
bash test-env.sh

# 4. Start dev server
npm run dev

# 5. Open browser
# http://localhost:5173
```

---

## 📞 Need Help?

If still having issues:

1. **Check RapidAPI subscription:**
   - https://rapidapi.com/developer/apps
   - Look for "TikTok Video Downloader No Watermark1"
   - Verify status is "Active"

2. **Test API key directly:**
   ```bash
   bash .kiro/issues/2026-01-08-rapidapi-400-error/test-api-endpoint.sh
   ```

3. **Check error details:**
   - Browser console (F12)
   - Network tab → Check request/response

---

**Last Updated:** 2026-01-08  
**Status:** Ready to Use
