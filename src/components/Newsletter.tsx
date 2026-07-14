import { Send } from 'lucide-react';
import { NewsletterForm, NewsletterVariant } from './NewsletterForm';

interface NewsletterProps {
  variant?: NewsletterVariant;
  title?: string;
  description?: string;
  sidebar?: boolean;
}

const containerThemes: Record<NewsletterVariant, string> = {
  brand: 'bg-brand-600 text-white',
  dark: 'bg-slate-950 text-white',
  light: 'bg-slate-50 text-slate-900 border border-slate-100',
};

const iconThemes: Record<NewsletterVariant, string> = {
  brand: 'text-white/5',
  dark: 'text-white/5',
  light: 'text-slate-200/50',
};

export function Newsletter({
  variant = 'brand',
  title = "Бюлетин за Русе",
  description = "Получавайте нови анализи и идеи за икономическото развитие на Русе директно във Вашата поща, само когато има наистина важно съдържание.",
  sidebar = false
}: NewsletterProps) {
  return (
    <div className={`relative overflow-hidden ${sidebar ? 'p-6 sm:p-8' : 'p-6 sm:p-10 md:p-16'} ${containerThemes[variant]}`}>
      <div className={`relative z-10 max-w-2xl mx-auto text-center ${sidebar ? 'text-left flex flex-col gap-6' : 'md:text-left md:flex md:items-center md:gap-16'}`}>
        <div className={sidebar ? 'w-full mb-0' : 'flex-1 mb-10 md:mb-0'}>
          <h3 className={`${sidebar ? 'text-xl sm:text-2xl' : 'text-3xl md:text-4xl'} font-syne font-black italic mb-4 tracking-tight`}>{title}</h3>
          <p className={`${sidebar ? 'text-sm' : 'text-lg'} opacity-70 font-light leading-relaxed`}>
            {description}
          </p>
        </div>

        <div className={sidebar ? 'w-full' : 'flex-1 w-full'}>
          <NewsletterForm variant={variant} />
        </div>
      </div>

      <div className={`absolute top-0 right-0 pointer-events-none ${iconThemes[variant]}`}>
         <Send size={300} strokeWidth={1} />
      </div>
    </div>
  );
}
