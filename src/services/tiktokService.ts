/**
 * TikTok video download service
 * Handles URL validation and download URL construction for RapidAPI TikTok Downloader
 * Note: RapidAPI endpoint returns binary MP4 file directly, not JSON metadata
 * @module services/tiktokService
 */

import type { TikTokDownloadResult } from '../types/tiktok';

/**
 * Supported TikTok URL patterns
 * Matches: www.tiktok.com, vm.tiktok.com, vt.tiktok.com, m.tiktok.com
 */
const TIKTOK_URL_PATTERN = /^https?:\/\/(www\.|vm\.|vt\.|m\.)?tiktok\.com\/.+/i;

/**
 * API configuration
 */
const API_BASE_URL = 'https://tiktok-video-downloader-no-watermark1.p.rapidapi.com';

/**
 * Constructs RapidAPI download URL with query parameters
 * @param tiktokUrl - Original TikTok video URL
 * @returns Full RapidAPI endpoint URL with encoded query parameters
 */
export function buildDownloadUrl(tiktokUrl: string): string {
  return `${API_BASE_URL}/download?url=${encodeURIComponent(tiktokUrl)}`;
}

/**
 * Gets RapidAPI request headers from environment variables
 * @returns Headers object for RapidAPI request
 * @throws {TikTokApiError} If API credentials are missing
 */
export function getApiHeaders(): Record<string, string> {
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
  const apiHost = import.meta.env.VITE_RAPIDAPI_HOST;

  if (!apiKey || !apiHost) {
    throw new TikTokApiError(
      'API configuration missing. Please check your environment variables.',
      'MISSING_CONFIG'
    );
  }

  return {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': apiHost
  };
}

/**
 * Custom error class for TikTok API errors
 */
export class TikTokApiError extends Error {
  constructor(
    message: string,
    public readonly code?: string,
    public readonly statusCode?: number
  ) {
    super(message);
    this.name = 'TikTokApiError';
  }
}

/**
 * Validates TikTok URL format
 * @param url - URL to validate
 * @returns true if URL matches TikTok patterns
 */
function isValidTikTokUrl(url: string): boolean {
  if (!url || typeof url !== 'string') {
    return false;
  }
  return TIKTOK_URL_PATTERN.test(url.trim());
}

/**
 * Validates TikTok URL and prepares download information
 * Note: This function does NOT make HTTP requests. The RapidAPI endpoint returns
 * binary MP4 file directly, so the actual download is handled by the UI component.
 * 
 * @param url - TikTok video URL to download
 * @returns Video metadata with RapidAPI download URL
 * @throws {TikTokApiError} If validation fails or API config is missing
 * 
 * @example
 * ```typescript
 * try {
 *   const result = await downloadTikTokVideo('https://www.tiktok.com/@user/video/123');
 *   console.log(result.downloadUrl); // RapidAPI endpoint URL
 * } catch (error) {
 *   if (error instanceof TikTokApiError) {
 *     console.error(error.message);
 *   }
 * }
 * ```
 */
export async function downloadTikTokVideo(url: string): Promise<TikTokDownloadResult> {
  // Input validation
  const trimmedUrl = url.trim();
  
  if (!trimmedUrl) {
    throw new TikTokApiError(
      'Please enter a TikTok video URL',
      'EMPTY_URL'
    );
  }

  if (!isValidTikTokUrl(trimmedUrl)) {
    throw new TikTokApiError(
      'Invalid TikTok URL format. Please use a valid TikTok video link.',
      'INVALID_URL'
    );
  }

  // Validate API configuration (throws if missing)
  getApiHeaders();

  // Extract video ID from URL for display purposes
  const videoIdMatch = trimmedUrl.match(/\/video\/(\d+)/);
  const videoId = videoIdMatch ? videoIdMatch[1] : 'video';

  // Build the RapidAPI download URL with query parameters
  const downloadUrl = buildDownloadUrl(trimmedUrl);

  // Return result with fallback metadata
  // The actual video file will be downloaded by the UI component using this URL
  return {
    title: `TikTok Video ${videoId}`,
    author: 'TikTok User',
    cover: trimmedUrl, // Use original TikTok URL as cover fallback
    downloadUrl,
    duration: undefined,
    views: undefined
  };
}
