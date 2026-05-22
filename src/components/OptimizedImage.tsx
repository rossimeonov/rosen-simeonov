import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  // Добавяме опция за контрол на напасването: 'cover' (запълване) или 'contain' (цялостно събиране)
  fit?: 'cover' | 'contain';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className = '', fit = 'cover' }) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  const handleError = () => {
    if (currentSrc !== '/images/ruse.webp') {
      setCurrentSrc('/images/ruse.webp');
    }
  };

  return (
    <div className={`overflow-hidden rounded-lg flex-shrink-0 w-full h-full ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        onError={handleError}
        className="w-full h-full block"
        style={{
          // Използва динамично подадения стил (по подразбиране е 'cover')
          objectFit: fit
        }}
      />
    </div>
  );
};

export { OptimizedImage };
export default OptimizedImage;