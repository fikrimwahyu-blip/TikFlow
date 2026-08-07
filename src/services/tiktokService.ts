/**
 * TikTok video download service
 * Handles API communication with RapidAPI TikTok Downloader
 * @module services/tiktokService
 */

import axios, { AxiosError } from 'axios';
import type { TikTokApiResponse, TikTokDownloadResult } from '../types/tiktok';

/**
 * Supported TikTok URL patterns
 * Matches: www.tiktok.com, vm.tiktok.com, vt.tiktok.com, m.tiktok.com
 */
const TIKTOK_URL_PATTERN = /^https?:\/\/(www\.|vm\.|vt\.|m\.)?tiktok\.com\/.+/i;

/**
 * API configuration
 */
const API_TIMEOUT = 30000; // 30 seconds

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
 * Downloads TikTok video metadata and returns download information
 * @param url - TikTok video URL to download
 * @returns Video metadata including download URL
 * @throws {TikTokApiError} If validation fails, API request fails, or video not found
 * 
 * @example
 * ```typescript
 * try {
 *   const result = await downloadTikTokVideo('https://www.tiktok.com/@user/video/123');
 *   console.log(result.downloadUrl);
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

  // Environment variable validation
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
  const apiHost = import.meta.env.VITE_RAPIDAPI_HOST;

  if (!apiKey || !apiHost) {
    throw new TikTokApiError(
      'API configuration missing. Please check your environment variables.',
      'MISSING_CONFIG'
    );
  }

  try {
    // Make GET request with URL as query parameter
    const response = await axios.get<TikTokApiResponse>(
      `https://${apiHost}/`,
      {
        params: { url: trimmedUrl },
        timeout: API_TIMEOUT,
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': apiHost
        }
      }
    );

    // Handle API response
    const apiResponse = response.data;

    // Check for error response
    if (apiResponse.code !== 0 || !apiResponse.data) {
      throw new TikTokApiError(
        apiResponse.msg || 'Failed to download video',
        'API_ERROR'
      );
    }

    // Extract and return video data
    const videoData = apiResponse.data;

    return {
      title: videoData.title,
      author: videoData.author.nickname,
      cover: videoData.cover,
      downloadUrl: videoData.play, // Use 'play' for no watermark version
      duration: videoData.duration,
      views: videoData.play_count
    };

  } catch (error) {
    // Re-throw TikTokApiError as-is
    if (error instanceof TikTokApiError) {
      throw error;
    }

    // Handle axios errors
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<TikTokApiResponse>;
      const statusCode = axiosError.response?.status;
      const responseData = axiosError.response?.data;

      // Network timeout
      if (axiosError.code === 'ECONNABORTED' || axiosError.code === 'ETIMEDOUT') {
        throw new TikTokApiError(
          'Request timeout. Please check your internet connection and try again.',
          'TIMEOUT',
          statusCode
        );
      }

      // HTTP error codes
      switch (statusCode) {
        case 400:
          // Try to extract error message from response
          const errorMsg = responseData?.msg || 'Invalid request. Please check the URL and try again.';
          throw new TikTokApiError(
            errorMsg,
            'BAD_REQUEST',
            400
          );
        
        case 401:
          throw new TikTokApiError(
            'API authentication failed. Please check your API key configuration.',
            'UNAUTHORIZED',
            401
          );
        
        case 404:
          throw new TikTokApiError(
            'Video not found or is private. Please check the URL and try again.',
            'NOT_FOUND',
            404
          );
        
        case 429:
          throw new TikTokApiError(
            'Rate limit exceeded. Please try again in a few minutes.',
            'RATE_LIMIT',
            429
          );
        
        case 500:
        case 502:
        case 503:
        case 504:
          throw new TikTokApiError(
            'TikTok API service is temporarily unavailable. Please try again later.',
            'SERVER_ERROR',
            statusCode
          );
        
        default:
          throw new TikTokApiError(
            responseData?.msg || 'An unexpected error occurred. Please try again.',
            'UNKNOWN_ERROR',
            statusCode
          );
      }
    }

    // Unknown error type
    throw new TikTokApiError(
      error instanceof Error ? error.message : 'An unexpected error occurred',
      'UNKNOWN_ERROR'
    );
  }
}
