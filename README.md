# TikFlow - TikTok Video Downloader

A modern, React-based web application for downloading TikTok videos without watermarks. Built with React 19, TypeScript, Vite, and Tailwind CSS.

## Features

- ✨ **No Watermarks** - Download TikTok videos in their original quality without watermarks
- 📱 **All Devices** - Works on desktop, mobile, and tablet browsers
- 🚀 **Fast & Easy** - Simple 3-step process: copy link, paste, download
- 🎨 **Modern UI** - Clean, responsive design with smooth animations
- 🔒 **Secure** - No data tracking, client-side processing
- 🆓 **Always Free** - No subscription or account required
- 🌍 **Multi-language** - Built-in language selector (English, Indonesian, Spanish, French)
- 📸 **Slideshow Support** - Convert TikTok photo slideshows to MP4 format

## Tech Stack

- **React 19.0.1** - Modern React with TypeScript
- **TypeScript 5.8.2** - Type-safe development
- **Vite 6.2.3** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Axios 1.19.0** - HTTP client for API requests
- **Lucide React** - Beautiful icon library
- **RapidAPI** - TikTok Downloader API integration

## Prerequisites

- Node.js v26.4.0 or higher
- npm or yarn package manager
- RapidAPI account with TikTok Downloader API subscription

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tikflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

4. **Set up RapidAPI credentials**
   
   Get your RapidAPI key by following these steps:
   
   a. **Create a RapidAPI account** at https://rapidapi.com/
   
   b. **Subscribe to the TikTok Downloader API**:
      - Visit: https://rapidapi.com/atupal2116/api/tiktok-video-downloader-no-watermark1
      - Click "Subscribe to Test" button
      - Choose **"Basic"** plan (FREE - 50 requests/month)
      - Complete the subscription
   
   c. **Copy your API credentials**:
      - After subscribing, you'll see your API key in the API dashboard
      - Copy the `x-rapidapi-key` value (looks like: `a1b2c3d4e5f6...`)
   
   d. **Update your `.env` file**:
   ```bash
   VITE_RAPIDAPI_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3
   VITE_RAPIDAPI_HOST=tiktok-video-no-watermark2.p.rapidapi.com
   ```
   
   **Replace the placeholder with your actual API key from step (c)!**

   > ⚠️ **Important**: 
   > - Never commit your `.env` file to version control
   > - The API host must have "1" at the end: `no-watermark1.p.rapidapi.com`
   > - See [SETUP-ENV.md](SETUP-ENV.md) for detailed setup guide

5. **Verify configuration**
   ```bash
   bash test-env.sh
   ```
   
   Should output: `✅ All environment variables are configured correctly!`

## Running the Application

### Development Mode

```bash
npm run dev
```

The application will start at `http://localhost:5173` (or next available port).

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Usage

1. **Copy TikTok Video Link**
   - Open the TikTok app or website
   - Find the video you want to download
   - Tap the "Share" button
   - Select "Copy Link"

2. **Paste Link**
   - Return to TikFlow
   - Paste the link into the input field
   - Or use the clipboard paste button

3. **Download**
   - Click the "Download" button
   - Wait for the video to be processed
   - View video details (thumbnail, title, author, views, duration)
   - Click "Download Video" to save to your device

## Supported TikTok URL Formats

The application accepts the following TikTok URL patterns:

- `https://www.tiktok.com/@username/video/1234567890`
- `https://vm.tiktok.com/ZM8KQfS3J/` (short links)
- `https://vt.tiktok.com/ZSJQCtDKG/` (short links)
- `https://m.tiktok.com/v/1234567890.html` (mobile links)

## Error Handling

The application handles various error scenarios with user-friendly messages:

| Error Type | User Message | When It Happens |
|------------|-------------|-----------------|
| Empty URL | "Please enter a TikTok video URL" | No URL provided |
| Invalid URL | "Invalid TikTok URL format. Please use a valid TikTok video link." | URL doesn't match TikTok patterns |
| Rate Limit | "Rate limit exceeded. Please try again in a few minutes." | Too many requests (HTTP 429) |
| Not Found | "Video not found or is private. Please check the URL and try again." | Video doesn't exist (HTTP 404) |
| Unauthorized | "API authentication failed. Please check your API key configuration." | Invalid API key (HTTP 401) |
| Timeout | "Request timeout. Please check your internet connection and try again." | Network timeout (30 seconds) |
| Server Error | "TikTok API service is temporarily unavailable. Please try again later." | API server issues (HTTP 5xx) |

## Architecture

### Project Structure

```
tikflow/
├── src/
│   ├── components/         # React components
│   │   └── DownloadResult.tsx
│   ├── hooks/              # Custom React hooks
│   │   └── useTikTok.ts
│   ├── services/           # API services
│   │   └── tiktokService.ts
│   ├── types/              # TypeScript type definitions
│   │   └── tiktok.ts
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── docs/                   # Documentation
│   └── tech.md             # API research and technical docs
├── .env.example            # Environment variables template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

### Layered Architecture

```
┌─────────────────────────────────────────┐
│          User Interface (App.tsx)       │
│  - Hero section with input form         │
│  - Download button with loading state   │
│  - Error display                        │
│  - Result display (DownloadResult)      │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────┐
│      React Hook Layer (useTikTok.ts)    │
│  - State management (URL, loading,      │
│    error, result)                       │
│  - Business logic orchestration         │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────┐
│   Service Layer (tiktokService.ts)      │
│  - URL validation                       │
│  - HTTP API calls (axios)               │
│  - Error handling and transformation    │
│  - Response parsing                     │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────┐
│         RapidAPI (External)             │
│  - TikTok Video Downloader API          │
│  - Video metadata extraction            │
│  - Watermark-free download URLs         │
└─────────────────────────────────────────┘
```

### Key Components

#### `downloadTikTokVideo()` - Core Service Function
Located in `src/services/tiktokService.ts`, this function:
- Validates TikTok URL patterns with regex
- Configures axios with RapidAPI authentication headers
- Makes POST request to `/download` endpoint
- Transforms API response to application types
- Handles network errors, timeouts, and HTTP error codes
- Returns typed `TikTokDownloadResult` object

#### `useTikTok()` - Custom React Hook
Located in `src/hooks/useTikTok.ts`, this hook:
- Manages component state (input URL, loading, error, result)
- Provides `handleDownload()` async function
- Orchestrates service layer calls
- Updates UI state based on success/failure
- Exposes state reset and error clearing functions

#### `DownloadResult` - Display Component
Located in `src/components/DownloadResult.tsx`, this component:
- Displays video thumbnail with fallback for loading errors
- Shows video metadata (title, author, views, duration)
- Formats view counts (1.2M, 500K) and duration (MM:SS)
- Provides download button that opens video in new tab
- Matches application design system (Tailwind CSS)

## API Rate Limits

**Free Tier**: Typically 50-100 requests per month  
**Pro Tier**: 1000+ requests per month

Check your current usage in the RapidAPI dashboard: https://rapidapi.com/developer/billing

> 💡 **Tip**: The application handles rate limit errors (HTTP 429) gracefully with user-friendly messages. Consider upgrading to a paid plan for production use.

## Environment Variables Reference

| Variable | Required | Description | Example Value |
|----------|----------|-------------|---------------|
| `VITE_RAPIDAPI_KEY` | ✅ Yes | Your RapidAPI authentication key | `abc123xyz456...` |
| `VITE_RAPIDAPI_HOST` | ✅ Yes | RapidAPI host header for TikTok Downloader API | `tiktok-video-no-watermark2.p.rapidapi.com` |
| `GEMINI_API_KEY` | ❌ Optional | Gemini AI API key (AI Studio only) | Injected at runtime in AI Studio |
| `APP_URL` | ❌ Optional | Application URL (AI Studio only) | Injected at runtime in AI Studio |

> ℹ️ **Note**: Only `VITE_RAPIDAPI_KEY` and `VITE_RAPIDAPI_HOST` are required for local development. The `GEMINI_API_KEY` and `APP_URL` variables are automatically injected by AI Studio when deploying to Google Cloud Run.

## Security Notes

### ⚠️ Client-Side API Key Exposure

**Important**: This is a client-side Vite application. Environment variables prefixed with `VITE_` are bundled into the client JavaScript and are visible in browser DevTools Network tab. This means:

- ✅ **Safe for development and free-tier testing**
- ⚠️ **Not recommended for production with paid API plans** - Anyone can extract your API key and consume your paid quota

### Production Recommendation

For production deployments with paid API tiers, implement a backend proxy to keep API credentials server-side:

```
Client (Browser) → Backend Proxy (Express/Serverless) → RapidAPI
                   ↑ API key stored here
```

**Backend proxy options**:
- Express.js server
- AWS Lambda function
- Google Cloud Functions
- Vercel Serverless Functions

This architecture ensures API keys never reach the client and remain secure.

### Git Security

The `.gitignore` file is configured to exclude:
- `.env` (local environment variables)
- `.env.local`, `.env.*.local` (environment-specific files)
- `node_modules/` (dependencies)
- `dist/` (build output)

Always verify before committing:
```bash
git status
git diff
```

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Troubleshooting

### "API configuration missing" error

**Cause**: Environment variables not loaded properly.

**Solutions**:
1. Verify `.env` file exists in project root
2. Check variable names start with `VITE_` prefix
3. Restart development server after changing `.env`
4. Confirm variables are set:
   ```bash
   cat .env | grep VITE_RAPIDAPI
   ```

### "Rate limit exceeded" error

**Cause**: Too many requests within the API's rate limit window.

**Solutions**:
1. Wait a few minutes before retrying
2. Check your RapidAPI dashboard for quota usage
3. Consider upgrading to a paid plan
4. Implement request throttling for high-traffic apps

### "Request timeout" error

**Cause**: Network issues or slow API response (>30 seconds).

**Solutions**:
1. Check your internet connection
2. Try a different network
3. Retry the request
4. Check RapidAPI status page for service issues

### Build fails with TypeScript errors

**Cause**: Type mismatches or missing type definitions.

**Solutions**:
```bash
# Clean node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Run type checking
npx tsc --noEmit

# Check for linting issues
npm run lint
```

### Videos not downloading on iOS

**Cause**: iOS Safari restrictions on programmatic downloads.

**Solutions**:
1. Long-press the "Download Video" button
2. Select "Download Linked File" from the context menu
3. Or use "Documents by Readdle" app for easier downloads

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow TypeScript strict mode conventions
- Use Tailwind CSS utility classes (no custom CSS)
- Add JSDoc comments to public functions
- Write type-safe code (no `any` types)
- Run linter before committing: `npm run lint`

## License

This project is for educational purposes. TikFlow is not affiliated with TikTok or ByteDance Ltd.

**Disclaimer**: Respect copyright and intellectual property rights. Only download videos you have permission to use. This tool should not be used to violate TikTok's Terms of Service.

## Support

For issues, questions, or feature requests:
- Open an issue on GitHub
- Check existing documentation in `docs/tech.md`
- Review RapidAPI documentation: https://rapidapi.com/atupal2116/api/tiktok-video-downloader-no-watermark1

## Changelog

### Version 1.0.0 (2026-05-15)
- ✨ Initial release
- ✅ TikTok video download without watermarks
- ✅ Modern React + TypeScript + Vite stack
- ✅ RapidAPI integration
- ✅ Responsive design with Tailwind CSS
- ✅ Error handling and user feedback
- ✅ Multi-language UI support
- ✅ Video metadata display (thumbnail, title, author, views, duration)

---

**Built with ❤️ using React, TypeScript, and Vite**
