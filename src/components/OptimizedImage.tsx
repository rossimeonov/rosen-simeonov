import { useState, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export function OptimizedImage({ src, alt, className = '', ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    setErrorOccurred(false);

    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setErrorOccurred(true);
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {/* Shimmer / Skeleton Placeholder */}
      {!isLoaded && !errorOccurred && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
          <div className="w-full h-full animate-pulse bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100" />
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setErrorOccurred(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'
        }`}
        {...props}
      />
    </div>
  );
}
