import React, { useState } from 'react';
import { VisualAsset } from './VisualAssets';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackVariant?: 'hero' | 'copacking' | 'procurement' | 'foodsafety' | 'machinery' | 'partnership';
  className?: string;
  aspectClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackVariant = 'hero',
  className = '',
  aspectClassName = 'aspect-video'
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#16181D] ${aspectClassName} ${className}`}>
      {/* Loading Shimmer */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#1B1E24] animate-pulse z-10">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
      )}

      {/* Render Real Photographic Image */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            console.warn(`Image failed to load: ${src}. Displaying high-fidelity fallback.`);
            setHasError(true);
          }}
          className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        /* Guaranteed high-fidelity fallback asset */
        <VisualAsset variant={fallbackVariant} className="w-full h-full" />
      )}

      {/* Subtle measured scrim for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111215]/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
