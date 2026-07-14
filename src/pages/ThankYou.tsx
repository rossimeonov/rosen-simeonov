import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants';

export function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <Helmet>
        <title>Абонаментът е потвърден | Росен Симеонов</title>
        <meta name="description" content="Вашият абонамент за бюлетина на Росен Симеонов е успешно потвърден." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Абонаментът е потвърден | Росен Симеонов" />
        <meta property="og:image" content={IMAGES.hero_bg} />
      </Helmet>

      <div className="max-w-xl w-full text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle2 size={40} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-syne font-black italic tracking-tight text-slate-950">
            Абонаментът Ви е потвърден!
          </h1>
        </motion.div>

        <p className="text-lg text-slate-500 font-light leading-relaxed">
          Благодарим Ви! Вече сте част от Дигиталния бюлетин за Русе и ще получавате нови анализи и идеи директно във Вашата поща.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <Link
            to="/publications"
            className="flex items-center gap-3 bg-brand-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all shadow-xl"
          >
            Прочетете последните статии <ArrowRight size={16} />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-3 border border-slate-200 text-slate-900 px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:border-brand-600 transition-all"
          >
            <Home size={18} /> Към началото
          </Link>
        </div>
      </div>
    </div>
  );
}
