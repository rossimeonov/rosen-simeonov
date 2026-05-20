import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Facebook, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mnjbakgl", {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setErrorMsg(data['errors'].map((error: any) => error['message']).join(", "));
        } else {
          setErrorMsg("Възникна грешка при изпращането.");
        }
        setStatus('error');
      }
    } catch (error) {
      setErrorMsg("Възникна техническа грешка. Моля, опитайте отново.");
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Контакт | Росен Симеонов</title>
        <meta name="description" content="Свържете се с Росен Симеонов. Изпратете своите въпроси, идеи или предложения за икономическото развитие и развитието на Русе." />
      </Helmet>

      <div className="pt-32 bg-slate-50 min-h-screen selection:bg-brand-600 selection:text-white">
        {/* Page Hero Header */}
        <section className="py-20 bg-brand-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.25] opacity-40" style={{ backgroundImage: `url(${IMAGES.contact_bg})` }} />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-500 mb-6 block">Обратна връзка</span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-syne font-black tracking-tighter leading-none italic mb-8">
                Свържете се с <br />
                <span className="text-brand-600">Росен Симеонов.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                Ако имате въпроси, конкретни идеи за проекти или предложения по важни икономически и социални каузи за Русе – оставете Вашето съобщение тук.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content & Form Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Info Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-600 mb-3 block">Координати</span>
                <h2 className="text-3xl font-syne font-bold text-slate-900 tracking-tight">Потърсете ни директно</h2>
              </div>

              <div className="space-y-6">
                {/* Email Box */}
                <div className="p-6 sm:p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex flex-col sm:flex-row items-start gap-4 sm:gap-6 hover:shadow-md transition-all min-w-0">
                  <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center shrink-0">
                     <Mail size={24} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Официална поща</span>
                    <a href="mailto:info@rosensimeonov.com" className="text-base sm:text-lg font-bold text-slate-900 hover:text-brand-600 transition-colors break-all block">
                      info@rosensimeonov.com
                    </a>
                  </div>
                </div>

                {/* Social Connect Platform */}
                <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">Социални мрежи</span>
                  <div className="grid grid-cols-3 gap-4">
                    <a 
                      href="https://www.facebook.com/rosen.simeonov.12" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-brand-600 hover:text-white transition-all rounded-2xl group border border-slate-100"
                    >
                      <Facebook size={24} className="mb-2 group-hover:scale-110 transition-transform text-slate-700 group-hover:text-white" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-white group-hover:text-white/80">Facebook</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/rosen-simeonov/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-brand-600 hover:text-white transition-all rounded-2xl group border border-slate-100"
                    >
                      <Linkedin size={24} className="mb-2 group-hover:scale-110 transition-transform text-slate-700 group-hover:text-white" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white/80">LinkedIn</span>
                    </a>
                    <a 
                      href="https://www.tiktok.com/@rossimeonov" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-brand-600 hover:text-white transition-all rounded-2xl group border border-slate-100"
                    >
                      <span className="text-lg font-syne font-black mb-2 transition-transform text-slate-700 group-hover:text-white leading-none">TT</span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white/80">TikTok</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Mission Statement Callout */}
              <div className="p-8 bg-brand-50 border border-brand-100/50 rounded-[2rem]">
                <p className="text-slate-700 italic leading-relaxed font-light">
                  „Свободният и независим Русе се гради върху активен диалог с хората. Вашето мнение има значение. Благодаря Ви за гражданската позиция.“
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-0.5 w-8 bg-brand-600" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-600">Росен Симеонов</span>
                </div>
              </div>
            </motion.div>

            {/* Right Form Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-7"
            >
              <div className="bg-white p-6 sm:p-12 md:p-16 rounded-[3rem] border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.03)]">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <CheckCircle2 size={64} className="text-green-500 mb-6 animate-pulse" />
                    <h4 className="text-3xl font-syne font-black text-slate-950 mb-4">Благодаря Ви!</h4>
                    <p className="text-slate-600 mb-8 max-w-sm font-light leading-relaxed">
                      Вашето съобщение бе изпратено успешно. Росен Симеонов или член от екипа му ще се свърже с Вас при първа възможност.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="px-8 py-4 bg-brand-600 text-white font-black uppercase tracking-widest text-[10px] hover:bg-brand-700 transition-all rounded-full shadow-lg hover:shadow-xl"
                    >
                      Изпрати друго съобщение
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="border-b border-slate-100 pb-8 mb-4">
                      <h3 className="text-2xl font-syne font-extrabold text-slate-950 tracking-tight mb-2">Изпратете съобщение</h3>
                      <p className="text-slate-400 font-light text-sm">Всички полета отбелязани със звездичка (*) са задължителни.</p>
                    </div>

                    {status === 'error' && (
                      <div className="p-4 bg-red-50 border-l-4 border-red-500 flex items-center gap-3 text-red-700 rounded-r-2xl">
                        <AlertCircle size={20} />
                        <span className="text-sm font-medium">{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block ml-1">Име / Име на организация <span className="text-brand-600">*</span></label>
                        <input 
                          name="name" 
                          type="text" 
                          required 
                          placeholder="Вашето име" 
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-600 focus:bg-white focus:ring-1 focus:ring-brand-600/20 transition-all font-medium text-slate-950 placeholder:text-slate-400 text-sm" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block ml-1">Имейл адрес <span className="text-brand-600">*</span></label>
                        <input 
                          name="email" 
                          type="email" 
                          required 
                          placeholder="Вашият имейл" 
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-600 focus:bg-white focus:ring-1 focus:ring-brand-600/20 transition-all font-medium text-slate-950 placeholder:text-slate-400 text-sm" 
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block ml-1">Тема на съобщението</label>
                      <input 
                        name="topic" 
                        type="text" 
                        placeholder="Тема" 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-600 focus:bg-white focus:ring-1 focus:ring-brand-600/20 transition-all font-medium text-slate-950 placeholder:text-slate-400 text-sm" 
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block ml-1">Вашето съобщение <span className="text-brand-600">*</span></label>
                      <textarea 
                        name="message" 
                        rows={6} 
                        required 
                        placeholder="Опишете Вашия въпрос или предложение..." 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-600 focus:bg-white focus:ring-1 focus:ring-brand-600/20 transition-all font-medium resize-none text-slate-950 placeholder:text-slate-400 text-sm" 
                      />
                    </div>

                    <button 
                      disabled={status === 'submitting'}
                      type="submit" 
                      className="w-full py-6 bg-brand-950 text-white font-black text-xs uppercase tracking-[0.4em] hover:bg-brand-600 transition-all duration-500 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden group relative disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <span className="relative z-10">{status === 'submitting' ? 'Изпращане...' : 'Изпрати Съобщение'}</span>
                      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
