import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-[9999] md:left-auto md:max-w-md"
        >
          <div className="bg-white border border-slate-200 shadow-2xl p-8 rounded-3xl">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-slate-50 shrink-0 flex items-center justify-center rounded-2xl text-brand-600">
                <ShieldCheck size={28} />
              </div>
              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="font-syne font-bold italic text-slate-950 mb-2">Използваме бисквитки</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    Този сайт използва бисквитки за подобряване на Вашето преживяване. Научете повече в нашата{' '}
                    <Link to="/cookies" className="text-brand-600 underline">Политика за бисквитки</Link>.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-slate-950 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-600 transition-all"
                  >
                    Приемам
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-4 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-xl transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
