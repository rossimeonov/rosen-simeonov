import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Mail, Send, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function Subscribe() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <>
      <Helmet>
        <title>Абонамент за Бюлетина | Росен Симеонов</title>
        <meta name="description" content="Абонирайте се за периодичния бюлетин и анализи за икономическото развитие на Русе директно във Вашата поща." />
      </Helmet>

      <div className="pt-32 bg-slate-50 min-h-screen flex flex-col justify-between selection:bg-brand-600 selection:text-white">
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 w-full flex-grow flex items-center justify-center">
          <div className="grid lg:grid-cols-12 gap-16 items-center w-full">
            
            {/* Context Left Column */}
            <div className="lg:col-span-6 space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600 block">Дигитален Бюлетин</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tighter leading-[1.1] text-slate-950 italic">
                Бъдете част от <br />
                <span className="text-brand-600">идеите за Русе.</span>
              </h1>
              
              <div className="space-y-6 text-slate-600 leading-relaxed font-light text-base md:text-lg">
                <p>
                  Този бюлетин съществува, за да споделя смислено и прагматично съдържание за бъдещето на Русе. Вярвам, че информираното и икономически грамотно гражданско общество е в основата на промяната.
                </p>
                <div className="p-6 bg-white border border-slate-100 rounded-2xl">
                  <h4 className="font-bold text-slate-900 mb-2">Честота и ангажимент:</h4>
                  <p className="text-sm text-slate-500">
                    Бюлетинът се изпраща периодично. Няма фиксиран седмичен или месечен график. Ще получавате съобщения единствено тогава, когато има нови авторски анализи, конкретни икономически идеи за Русе или предприети каузи.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link to="/publications" className="text-xs font-black uppercase tracking-widest text-brand-600 border-b border-brand-600 pb-1 hover:text-slate-950 hover:border-slate-950 transition-all flex items-center gap-2">
                  Прочетете последните статии <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Form Right Column */}
            <div className="lg:col-span-6">
              <div className="bg-white p-8 sm:p-12 md:p-16 rounded-[3rem] border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.03)] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={32} className="text-white" />
                      </div>
                      <h3 className="text-3xl font-syne font-black text-slate-950 mb-4">Успешен Абонамент!</h3>
                      <p className="text-slate-500 font-light leading-relaxed mb-8 max-w-sm mx-auto">
                        Благодарим Ви, че се присъединихте към нашия бюлетин. Вече сте част от споделеното развитие на града ни.
                      </p>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="px-8 py-4 bg-brand-600 text-white font-black uppercase tracking-widest text-[10px] hover:bg-brand-700 transition-all rounded-full shadow-lg"
                      >
                        Запишете друг имейл
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-8 relative z-10"
                    >
                      <div>
                        <h3 className="text-2xl font-syne font-extrabold text-slate-950 tracking-tight mb-2">Бюлетин за Русе</h3>
                        <p className="text-slate-400 font-light text-sm leading-relaxed">Получавайте нови анализи и идеи за икономическото развитие на Русе директно във Вашата поща, само когато има наистина важно съдържание.</p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block ml-1">Имейл адрес <span className="text-brand-600">*</span></label>
                          <div className="relative">
                            <input 
                              required 
                              type="email" 
                              placeholder="Вашият имейл адрес" 
                              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 outline-none focus:border-brand-600 focus:bg-white focus:ring-1 focus:ring-brand-600/20 transition-all font-medium text-slate-950 placeholder:text-slate-400 text-sm" 
                              name="email"
                            />
                          </div>
                        </div>

                        <div className="flex items-start gap-4 pt-2">
                          <input 
                            required 
                            type="checkbox" 
                            id="gdpr-sub" 
                            className="mt-1.5 h-4 w-4 shrink-0 rounded border-slate-200 text-brand-600 ring-offset-white focus:ring-brand-500 cursor-pointer" 
                          />
                          <label htmlFor="gdpr-sub" className="text-[10px] text-slate-400 leading-tight cursor-pointer selection:bg-transparent">
                            Съгласен съм предоставените от мен лични данни да бъдат обработвани за целите на изпращане на бюлетин съгласно Политиката за поверителност.
                          </label>
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        className="w-full py-6 bg-brand-950 text-white font-black text-xs uppercase tracking-[0.4em] hover:bg-brand-600 transition-all duration-300 rounded-2xl shadow-xl flex items-center justify-center gap-3 group"
                      >
                        <span>Абонирайте се сега</span>
                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>

                      <div className="text-center">
                        <span className="text-[9px] text-slate-400 uppercase tracking-widest block mb-1">
                          * Без фиксирани срокове, без натрапчив спам
                        </span>
                        <span className="text-[9px] text-slate-400 uppercase tracking-widest block">
                          Можете да се отпишете по всяко време с линк в писмата.
                        </span>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
