import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  videoId: string;
  thumbnail: string;
  title: string;
  className?: string;
}

export function YouTubeFacade({ videoId, thumbnail, title, className }: YouTubeFacadeProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        className={className}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className={`${className} relative group cursor-pointer`}
      aria-label={`Пусни видео: ${title}`}
    >
      <img src={thumbnail} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play size={28} className="text-brand-950 ml-1" fill="currentColor" />
        </div>
      </div>
    </button>
  );
}
