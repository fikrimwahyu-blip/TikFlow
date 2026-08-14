import React from 'react';

export default function ResultSkeleton() {
  return (
    <section className="bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.06)] p-5 sm:p-6 mb-4 max-w-lg mx-auto w-full animate-pulse">
      <div className="flex flex-col gap-6">
        {/* Header Info */}
        <div className="flex flex-row gap-4">
          {/* Thumbnail */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gray-200 shrink-0"></div>
          
          {/* Text Info */}
          <div className="flex-1 flex flex-col justify-center space-y-3">
            <div className="h-5 w-3/4 rounded-md bg-gray-200"></div>
            <div className="h-4 w-1/2 rounded-md bg-gray-200"></div>
            <div className="h-3 w-1/3 rounded-md bg-gray-200 mt-2"></div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-2">
          <div className="h-12 w-full rounded-xl bg-gray-200"></div>
          <div className="h-12 w-full rounded-xl bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
}
