import { useState, FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NewsletterProps {
  variant?: 'light' | 'dark' | 'brand';
  title?: string;
  description?: string;
}

export function Newsletter({ 
  variant = 'brand', 
  title = "Бюлетин за Русе", 
  description = "Получавайте нови анализи и идеи за икономическото развитие на Русе директно във Вашата поща, само когато има наистина важно съдържание." 
}: NewsletterProps) {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
  };

  const themes = {
    brand: {
      container: "bg-brand-600 text-white",
      input: "bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/20",
      button: "bg-white text-brand-600 hover:bg-slate-900 hover:text-white",
      checkbox: "border-white/30 text-white ring-offset-brand-600",
      icon: "text-white/5"
    },
    dark: {
      container: "bg-slate-950 text-white",
      input: "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:bg-white/10",
      button: "bg-brand-600 text-white hover:bg-white hover:text-slate-950",
      checkbox: "border-white/20 text-brand-600 ring-offset-slate-950",
      icon: "text-white/5"
    },
    light: {
      container: "bg-slate-50 text-slate-900 border border-slate-100",
      input: "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-brand-600",
      button: "bg-slate-900 text-white hover:bg-brand-600",
      checkbox: "border-slate-200 text-brand-600 ring-offset-white",
      icon: "text-slate-200/50"
    }
  };

  const currentTheme = themes[variant];

  return (
    <div className={`relative overflow-hidden p-6 sm:p-10 md:p-16 ${currentTheme.container}`}>
      <div className="relative z-10 max-w-2xl mx-auto text-center md:text-left md:flex md:items-center md:gap-16">
        <div className="flex-1 mb-10 md:mb-0">
          <h3 className="text-3xl md:text-4xl font-syne font-black italic mb-6 tracking-tight">{title}</h3>
          <p className="text-lg opacity-70 font-light leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex-1 w-full">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 flex flex-col items-center md:items-start"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Успешен абонамент!</h4>
                <p className="opacity-70 text-sm">Благодарим Ви, че се присъединихте.</p>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div className="relative">
                  <input 
                    required
                    type="email" 
                    placeholder="Вашият имейл адрес" 
                    className={`w-full px-6 py-5 rounded-2xl outline-none border transition-all text-sm ${currentTheme.input}`}
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="gdpr" 
                    required 
                    className={`mt-1 h-4 w-4 rounded border transition-colors ${currentTheme.checkbox}`}
                  />
                  <label htmlFor="gdpr" className="text-[10px] opacity-60 leading-tight cursor-pointer selection:bg-transparent">
                    Съгласен съм предоставените от мен лични данни да бъдат обработвани за целите на изпращане на бюлетин съгласно Политиката за поверителност.
                  </label>
                </div>

                <button 
                  type="submit"
                  className={`w-full py-5 font-black uppercase tracking-[0.2em] text-[10px] transition-all shadow-xl active:scale-95 ${currentTheme.button}`}
                >
                  Абонирайте се сега
                </button>
                <p className="text-[9px] opacity-40 uppercase tracking-widest text-center md:text-left">
                  * Без спам. Можете да се отпишете по всяко време.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <div className={`absolute top-0 right-0 pointer-events-none group-hover:scale-110 transition-transform duration-1000 ${currentTheme.icon}`}>
         <Send size={300} strokeWidth={1} />
      </div>
    </div>
  );
}
