# TikFlow - TikTok Video Downloader

TikFlow is a modern, responsive web application that allows users to download TikTok videos without a watermark. It features a clean, high-contrast utility interface inspired by SnapTik.

## 🚀 Features

- **No Watermark Downloads:** Get clean TikTok videos without any watermarks.
- **Video Metadata:** Displays video thumbnail, author profile, view count, comments, and shares.
- **Fast & Responsive:** Built with React and Tailwind CSS for a seamless experience across all devices.
- **No API Keys Required:** Integrates directly with the public [TikWM API](https://www.tikwm.com/) to fetch video data.
- **Clean UI:** A minimal, user-friendly interface designed for speed and practicality.

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Icons & Animations:** `lucide-react` & `tailwindcss-animate`

## ⚙️ How It Works

The application uses the public TikWM API (`https://www.tikwm.com/api/`) to process TikTok video URLs. When a user submits a link, the frontend makes a fetch request to the API, retrieves the clean video URL along with its metadata (thumbnail, author, statistics), and displays it on the UI for easy downloading. 

No backend or API keys (such as RapidAPI) are required for this to work, making it extremely easy to deploy and maintain.

## 📦 Installation & Setup

1. **Clone the repository** (if applicable) or download the source code.
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` (or the port specified by Vite) in your browser.

## 🚀 Deployment (Vercel)

Deploying TikFlow to Vercel is incredibly straightforward since it is a static Single Page Application (SPA).

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository.
4. Vercel will automatically detect that it's a Vite project. The default settings should be:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

Within seconds, your app will be live and fully functional!

## 📄 License

This project is for educational and utility purposes. Please respect the copyright of the original content creators when downloading videos. 

*Disclaimer: This service is not affiliated with TikTok or ByteDance.*
