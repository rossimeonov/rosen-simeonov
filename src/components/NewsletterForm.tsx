import { useState, useId, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const MAILERLITE_ENDPOINT = 'https://assets.mailerlite.com/jsonp/2425025/forms/192956651999856534/subscribe';

type Status = 'idle' | 'submitting' | 'success' | 'error';
export type NewsletterVariant = 'light' | 'dark' | 'brand';

const themes: Record<NewsletterVariant, { input: string; button: string; checkbox: string; errorBox: string }> = {
  brand: {
    input: 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 focus:border-white/40',
    button: 'bg-white text-brand-600 hover:bg-slate-900 hover:text-white disabled:hover:bg-white disabled:hover:text-brand-600',
    checkbox: 'border-white/30 text-white ring-offset-brand-600',
    errorBox: 'bg-white/10 border-white text-white',
  },
  dark: {
    input: 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:bg-white/10 focus:border-white/30',
    button: 'bg-brand-600 text-white hover:bg-white hover:text-slate-950 disabled:hover:bg-brand-600 disabled:hover:text-white',
    checkbox: 'border-white/20 text-brand-600 ring-offset-slate-950',
    errorBox: 'bg-white/5 border-red-500 text-red-400',
  },
  light: {
    input: 'bg-slate-50 border-slate-100 text-slate-950 placeholder:text-slate-400 focus:border-brand-600 focus:bg-white focus:ring-1 focus:ring-brand-600/20',
    button: 'bg-brand-950 text-white hover:bg-brand-600 disabled:hover:bg-brand-950',
    checkbox: 'border-slate-200 text-brand-600 ring-offset-white',
    errorBox: 'bg-red-50 border-red-500 text-red-700',
  },
};

interface NewsletterFormProps {
  variant?: NewsletterVariant;
}

export function NewsletterForm({ variant = 'light' }: NewsletterFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const uid = useId();
  const theme = themes[variant];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');

    const body = new URLSearchParams();
    body.set('fields[email]', email);
    body.set('ml-submit', '1');
    body.set('anticsrf', 'true');

    try {
      const response = await fetch(MAILERLITE_ENDPOINT, {
        method: 'POST',
        body,
      });
      setStatus(response.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="flex flex-col items-center text-center py-10 gap-4"
        >
          <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle2 size={28} className="text-white" />
          </div>
          <p className="opacity-80 font-light leading-relaxed max-w-sm text-sm">
            Благодарим! Изпратихме ви имейл за потвърждение — моля, отворете го и кликнете върху линка, за да завършите абонамента. Ако не го виждате до няколко минути, проверете папка Спам/Junk.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-5"
        >
          {status === 'error' && (
            <div className={`p-4 border-l-4 flex items-center gap-3 text-sm font-medium rounded ${theme.errorBox}`}>
              <AlertCircle size={18} className="shrink-0" />
              <span>Нещо се обърка, опитайте отново.</span>
            </div>
          )}

          <div>
            <label htmlFor={`newsletter-email-${uid}`} className="sr-only">Имейл адрес</label>
            <input
              id={`newsletter-email-${uid}`}
              name="fields[email]"
              type="email"
              required
              autoComplete="email"
              aria-label="Имейл адрес"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Вашият имейл адрес"
              className={`w-full px-6 py-5 rounded-2xl outline-none border transition-all text-sm font-medium ${theme.input}`}
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id={`newsletter-consent-${uid}`}
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              className={`mt-1 h-4 w-4 shrink-0 rounded border transition-colors cursor-pointer ${theme.checkbox}`}
            />
            <label htmlFor={`newsletter-consent-${uid}`} className="text-[10px] opacity-60 leading-tight cursor-pointer selection:bg-transparent">
              Съгласен/на съм да получавам бюлетина и приемам{' '}
              <Link to="/privacy" className="underline hover:opacity-100 transition-opacity">
                Политиката за поверителност
              </Link>.
            </label>
          </div>

          <button
            type="submit"
            disabled={!consent || status === 'submitting'}
            className={`w-full py-5 font-black uppercase tracking-[0.2em] text-[10px] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed ${theme.button}`}
          >
            <span>{status === 'submitting' ? 'Изпращане...' : 'Абонирай се'}</span>
            {status !== 'submitting' && <Send size={14} className="group-hover:translate-x-1 transition-transform" />}
          </button>

          <p className="text-[9px] opacity-40 uppercase tracking-widest text-center">
            Без спам. Можете да се отпишете по всяко време.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
