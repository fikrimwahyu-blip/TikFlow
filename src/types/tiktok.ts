/**
 * TypeScript type definitions for TikTok video downloader integration
 * @module types/tiktok
 */

/**
 * Request payload for TikTok video download API
 */
export interface TikTokDownloadRequest {
  /** TikTok video URL to download */
  url: string;
}

/**
 * API response structure from RapidAPI TikTok Downloader
 * Based on API specification in docs/tech.md
 */
export interface TikTokApiResponse {
  /** Status of the API request */
  status: 'success' | 'error';
  
  /** Video data (present on success) */
  data?: {
    /** Video title or caption text */
    title: string;
    
    /** TikTok username of the video author */
    author: string;
    
    /** URL to video thumbnail/cover image */
    cover: string;
    
    /** Direct download URL for video without watermark */
    downloadUrl: string;
    
    /** Video duration in seconds (optional) */
    duration?: number;
    
    /** Video view count (optional) */
    views?: number;
  };
  
  /** Error type (present on error) */
  error?: string;
  
  /** Detailed error message (present on error) */
  message?: string;
}

/**
 * Processed download result for application state
 * Represents successfully downloaded TikTok video metadata
 */
export interface TikTokDownloadResult {
  /** Video title or caption text */
  title: string;
  
  /** TikTok username of the video author */
  author: string;
  
  /** URL to video thumbnail/cover image */
  cover: string;
  
  /** Direct download URL for video without watermark */
  downloadUrl: string;
  
  /** Video duration in seconds (optional) */
  duration?: number;
  
  /** Video view count (optional) */
  views?: number;
}

/**
 * Return type for useTikTok custom React hook
 * Provides state management and actions for TikTok video downloading
 */
export interface UseTikTokReturn {
  /** Current input URL value from the form */
  inputUrl: string;
  
  /** Update the input URL */
  setInputUrl: (url: string) => void;
  
  /** Loading state during API request */
  isLoading: boolean;
  
  /** Error message (null if no error) */
  error: string | null;
  
  /** Download result data (null if no successful download yet) */
  result: TikTokDownloadResult | null;
  
  /** Initiate video download from current inputUrl */
  handleDownload: () => Promise<void>;
  
  /** Clear current error message */
  clearError: () => void;
  
  /** Reset all state to initial values */
  reset: () => void;
}
