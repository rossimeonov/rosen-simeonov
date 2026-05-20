import { useState, FormEvent } from 'react';
import { Mail, Facebook, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
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
    <section id="contact" className="py-20 md:py-32 bg-scroll md:bg-fixed bg-cover relative" style={{ backgroundImage: `url(${IMAGES.contact_bg})` }}>
      <div className="absolute inset-0 bg-brand-950/90 backdrop-blur-sm z-0" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start w-full">
          <div className="text-white">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-brand-500 mb-8 block">Контакт</span>
            <h3 className="text-3xl sm:text-5xl md:text-7xl font-syne font-extrabold tracking-tight mb-12 italic leading-none">Свържете се с<br/><span className="text-brand-600">Росен С.</span></h3>
            <p className="text-white/50 text-xl font-light leading-relaxed mb-16 max-w-lg">
              Ако имате въпрос, идея за проект или покана за среща по важна за Русе тема – не се колебайте да пишете.
            </p>
            
            <div className="space-y-10">
               <a href="mailto:office@rosensimeonov.com" className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 group cursor-pointer text-left">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-600 transition-all border border-white/10 group-hover:border-transparent shrink-0">
                     <Mail size={24} />
                  </div>
                  <div className="min-w-0">
                     <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Имейл</div>
                     <div className="text-lg sm:text-2xl font-bold hover:text-brand-600 transition-colors break-all text-white">office@rosensimeonov.com</div>
                  </div>
               </a>
               <div className="flex gap-6 pt-6">
                  <a href="https://www.facebook.com/rosen.simeonov.12" target="_blank" rel="noopener" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-600 hover:border-transparent transition-all"><Facebook size={20} /></a>
                  <a href="https://www.linkedin.com/in/rosen-simeonov/" target="_blank" rel="noopener" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-600 hover:border-transparent transition-all"><Linkedin size={20} /></a>
                  <a href="https://www.tiktok.com/@rossimeonov" target="_blank" rel="noopener" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-600 hover:border-transparent transition-all font-bold text-xs uppercase tracking-widest">TT</a>
               </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-12 md:p-16 shadow-[0_50px_100px_-20px_rgba(37,99,235,0.2)] border border-slate-100 rounded-[2rem] relative overflow-hidden w-full">
             {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <CheckCircle2 size={64} className="text-green-500 mb-6" />
                  <h4 className="text-3xl font-bold text-slate-900 mb-4">Благодаря Ви!</h4>
                  <p className="text-slate-600 mb-8 max-w-sm">Вашето съобщение бе изпратено успешно. Ще се свържем с Вас при първа възможност.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-10 py-4 bg-brand-600 text-white font-black uppercase tracking-widest text-[10px] hover:bg-brand-700 transition-all"
                  >
                    Изпрати друго съобщение
                  </button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                   {status === 'error' && (
                     <div className="p-4 bg-red-50 border-l-4 border-red-500 flex items-center gap-3 text-red-700">
                       <AlertCircle size={20} />
                       <span className="text-sm font-medium">{errorMsg}</span>
                     </div>
                   )}
                   <div className="grid md:grid-cols-2 gap-10">
                     <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 block">Име <span className="text-brand-600">*</span></label>
                       <input name="name" type="text" required placeholder="Вашето име" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-brand-600 focus:bg-white focus:ring-1 focus:ring-brand-600/20 transition-all font-medium text-slate-950 placeholder:text-slate-400 text-sm" />
                     </div>
                     <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 block">Имейл <span className="text-brand-600">*</span></label>
                       <input name="email" type="email" required placeholder="Вашият имейл" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-brand-600 focus:bg-white focus:ring-1 focus:ring-brand-600/20 transition-all font-medium text-slate-950 placeholder:text-slate-400 text-sm" />
                     </div>
                   </div>
                   <div className="space-y-4">
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 block">Тема</label>
                     <input name="topic" type="text" placeholder="Тема на съобщението" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-brand-600 focus:bg-white focus:ring-1 focus:ring-brand-600/20 transition-all font-medium text-slate-950 placeholder:text-slate-400 text-sm" />
                   </div>
                   <div className="space-y-4">
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 block">Съобщение <span className="text-brand-600">*</span></label>
                     <textarea name="message" rows={5} required placeholder="Вашето съобщение..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-brand-600 focus:bg-white focus:ring-1 focus:ring-brand-600/20 transition-all font-medium resize-none text-slate-950 placeholder:text-slate-400 text-sm" />
                   </div>
                   <button 
                    disabled={status === 'submitting'}
                    type="submit" 
                    className="w-full py-5 bg-brand-950 text-white font-black text-xs uppercase tracking-[0.4em] hover:bg-brand-600 transition-all duration-300 rounded-xl shadow-xl overflow-hidden group relative disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                   >
                     <span className="relative z-10">{status === 'submitting' ? 'Изпращане...' : 'Изпрати Съобщение'}</span>
                     <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                   </button>
                </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
}
