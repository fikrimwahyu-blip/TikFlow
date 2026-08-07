/**
 * DownloadResult component
 * Displays TikTok video metadata and download button after successful download
 * @module components/DownloadResult
 */

import React, { useState } from 'react';
import { Download, User, Eye, Clock, Loader2 } from 'lucide-react';
import type { TikTokDownloadResult } from '../types/tiktok';

interface DownloadResultProps {
  /** Download result data (null if no result) */
  result: TikTokDownloadResult | null;
}

/**
 * Formats view count to human-readable format (e.g., 1.2M, 500K)
 */
function formatViews(views?: number): string {
  if (!views) return 'N/A';
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
  if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
  return views.toString();
}

/**
 * Formats duration in seconds to MM:SS format
 */
function formatDuration(duration?: number): string {
  if (!duration) return 'N/A';
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * DownloadResult component
 * Shows video thumbnail, title, author, and download button
 * 
 * @param {DownloadResultProps} props - Component props
 * @returns React component or null if no result
 */
export default function DownloadResult({ result }: DownloadResultProps): React.ReactElement | null {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  // Don't render if no result
  if (!result) {
    return null;
  }

  /**
   * Handles download button click
   * Downloads video file from the URL provided by RapidAPI
   */
  const handleDownloadClick = async (): Promise<void> => {
    setIsDownloading(true);
    setDownloadError(null);

    try {
      // Fetch the video file from TikTok CDN (URL from RapidAPI response)
      const response = await fetch(result.downloadUrl);

      if (!response.ok) {
        throw new Error(`Download failed: ${response.status} ${response.statusText}`);
      }

      // Get the blob from response
      const blob = await response.blob();

      // Create object URL and trigger download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${result.title}.mp4`;
      document.body.appendChild(a);
      a.click();

      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

    } catch (error) {
      console.error('Download error:', error);
      setDownloadError(
        error instanceof Error 
          ? error.message 
          : 'Failed to download video. Please try again.'
      );
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
        
        {/* Video Thumbnail */}
        <div className="w-full sm:w-48 shrink-0">
          <div className="relative w-full aspect-[9/16] sm:aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
              src={result.cover}
              alt={result.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect fill="%23EBF2FF" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%23195FD7"%3ENo Image%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
        </div>

        {/* Video Metadata */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          
          {/* Title and Author */}
          <div className="space-y-3 mb-4">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-2">
              {result.title}
            </h3>
            
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <User className="w-4 h-4 shrink-0" strokeWidth={2} />
              <span className="font-medium truncate">{result.author}</span>
            </div>

            {/* Optional metadata (views, duration) */}
            {(result.views || result.duration) && (
              <div className="flex items-center gap-4 text-sm text-gray-500">
                {result.views && (
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4 shrink-0" strokeWidth={2} />
                    <span>{formatViews(result.views)} views</span>
                  </div>
                )}
                {result.duration && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 shrink-0" strokeWidth={2} />
                    <span>{formatDuration(result.duration)}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Download Button */}
          <div className="space-y-2">
            <button
              onClick={handleDownloadClick}
              disabled={isDownloading}
              className="w-full sm:w-auto px-6 py-3 bg-[#195FD7] text-white font-bold text-sm rounded-lg hover:bg-[#164fbb] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2.5} />
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" strokeWidth={2.5} />
                  Download Video
                </>
              )}
            </button>

            {/* Download error message */}
            {downloadError && (
              <p className="text-sm text-red-600">
                {downloadError}
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
