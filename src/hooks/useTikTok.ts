/**
 * Custom React hook for TikTok video download state management
 * Encapsulates download logic and provides state/actions to components
 * @module hooks/useTikTok
 */

import { useState } from 'react';
import { downloadTikTokVideo, TikTokApiError } from '../services/tiktokService';
import type { TikTokDownloadResult, UseTikTokReturn } from '../types/tiktok';

/**
 * Custom hook for managing TikTok video download state
 * 
 * @returns {UseTikTokReturn} State and actions for TikTok download functionality
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { inputUrl, setInputUrl, isLoading, error, result, handleDownload } = useTikTok();
 *   
 *   return (
 *     <form onSubmit={(e) => { e.preventDefault(); handleDownload(); }}>
 *       <input value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} />
 *       <button disabled={isLoading}>Download</button>
 *       {error && <p>{error}</p>}
 *       {result && <p>Downloaded: {result.title}</p>}
 *     </form>
 *   );
 * }
 * ```
 */
export function useTikTok(): UseTikTokReturn {
  // State management
  const [inputUrl, setInputUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TikTokDownloadResult | null>(null);

  /**
   * Handles video download request
   * - Validates input URL
   * - Calls TikTok API service
   * - Updates loading, error, and result states
   */
  const handleDownload = async (): Promise<void> => {
    // Clear previous state
    setError(null);
    setResult(null);

    // Validate input
    if (!inputUrl.trim()) {
      setError('Please enter a TikTok video URL');
      return;
    }

    // Start loading
    setIsLoading(true);

    try {
      // Call API service
      const downloadResult = await downloadTikTokVideo(inputUrl);
      
      // Update result state on success
      setResult(downloadResult);
    } catch (err) {
      // Handle errors
      if (err instanceof TikTokApiError) {
        setError(err.message);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      // Stop loading
      setIsLoading(false);
    }
  };

  /**
   * Clears the current error message
   */
  const clearError = (): void => {
    setError(null);
  };

  /**
   * Resets all state to initial values
   * Useful for starting a new download session
   */
  const reset = (): void => {
    setInputUrl('');
    setIsLoading(false);
    setError(null);
    setResult(null);
  };

  // Return hook interface
  return {
    inputUrl,
    setInputUrl,
    isLoading,
    error,
    result,
    handleDownload,
    clearError,
    reset,
  };
}
