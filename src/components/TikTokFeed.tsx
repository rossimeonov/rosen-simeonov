import { useEffect } from 'react';

export function TikTokFeed() {
  useEffect(() => {
    // Интелигентно и асинхронно зареждане на платформата
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Почистване на паметта при напускане на началната страница
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-[2rem] border border-slate-100 p-4 bg-white shadow-sm">
      {/* Твоят персонален TikTok поток */}
      <div className="elfsight-app-118e42b8-97e5-4196-b4de-3d95dec6cc26" data-elfsight-app-lazy></div>
    </div>
  );
}