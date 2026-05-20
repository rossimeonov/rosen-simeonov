import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <Helmet>
        <title>404 - Страницата не е намерена | Росен Симеонов</title>
      </Helmet>
      
      <div className="max-w-xl w-full text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <span className="text-[8rem] md:text-[20rem] font-syne font-black italic text-slate-100 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-syne font-black italic tracking-tight text-slate-950">
              Грешка 404
            </h1>
          </div>
        </motion.div>

        <div className="space-y-6">
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Изглежда, че страницата, която търсите, не съществува или е била преместена.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link 
              to="/" 
              className="flex items-center gap-3 bg-brand-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all shadow-xl"
            >
              <Home size={18} /> Към началото
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-3 border border-slate-200 text-slate-900 px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:border-brand-600 transition-all"
            >
              <ArrowLeft size={18} /> Назад
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
