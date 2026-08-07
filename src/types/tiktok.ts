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
 * Based on actual API response format
 */
export interface TikTokApiResponse {
  /** Response code: 0 = success, -1 = error */
  code: number;
  
  /** Response message */
  msg: string;
  
  /** Processing time in seconds */
  processed_time: number;
  
  /** Video data (present on success) */
  data?: {
    /** TikTok video ID */
    aweme_id: string;
    
    /** Video ID */
    id: string;
    
    /** Region code */
    region: string;
    
    /** Video title/description */
    title: string;
    
    /** Cover image URL */
    cover: string;
    
    /** Video duration in seconds */
    duration: number;
    
    /** Video URL without watermark */
    play: string;
    
    /** Video URL with watermark */
    wmplay: string;
    
    /** Music/audio URL */
    music: string;
    
    /** Music information */
    music_info: {
      id: string;
      title: string;
      play: string;
      cover: string;
      author: string;
      original: boolean;
      duration: number;
      album: string;
    };
    
    /** Play count */
    play_count: number;
    
    /** Likes count */
    digg_count: number;
    
    /** Comment count */
    comment_count: number;
    
    /** Share count */
    share_count: number;
    
    /** Download count */
    download_count: number;
    
    /** Author information */
    author: {
      id: string;
      unique_id: string;
      nickname: string;
      avatar: string;
    };
    
    /** File size in bytes */
    size: number;
    
    /** Creation timestamp */
    create_time: number;
  };
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
