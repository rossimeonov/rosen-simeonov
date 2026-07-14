import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  // Контрол на напасването: 'cover' (запълване) или 'contain' (цялостно събиране)
  fit?: 'cover' | 'contain';
  // Реални intrinsic размери на изображението — задължителни срещу layout shift (CLS)
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'auto';
  // Само за hero-подобни случаи: генерира <picture> srcset с няколко ширини
  srcWidths?: number[];
  sizes?: string;
}

const FALLBACK_SRC = '/images/ruse.webp';

function withoutExt(src: string) {
  return src.replace(/\.(webp|jpg|jpeg|png)$/i, '');
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  fit = 'cover',
  width,
  height,
  loading = 'lazy',
  fetchPriority = 'auto',
  srcWidths,
  sizes,
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  const handleError = () => {
    if (currentSrc !== FALLBACK_SRC) {
      setCurrentSrc(FALLBACK_SRC);
    }
  };

  const base = withoutExt(currentSrc);

  const webpSrcSet = srcWidths?.map((w) => `${base}-${w}.webp ${w}w`).join(', ');
  const jpgSrcSet = srcWidths?.map((w) => `${base}-${w}.jpg ${w}w`).join(', ');
  const jpgFallback = srcWidths ? `${base}-${srcWidths[srcWidths.length - 1]}.jpg` : `${base}.jpg`;

  return (
    <div className={`overflow-hidden rounded-lg flex-shrink-0 w-full h-full ${className}`}>
      <picture>
        <source
          type="image/webp"
          srcSet={webpSrcSet ?? `${base}.webp`}
          sizes={srcWidths ? sizes : undefined}
        />
        <img
          src={jpgFallback}
          srcSet={jpgSrcSet}
          sizes={srcWidths ? sizes : undefined}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={fetchPriority}
          onError={handleError}
          className="w-full h-full block"
          style={{
            objectFit: fit,
          }}
        />
      </picture>
    </div>
  );
};

export { OptimizedImage };
export default OptimizedImage;
