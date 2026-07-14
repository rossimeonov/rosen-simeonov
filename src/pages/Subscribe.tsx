import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { NewsletterForm } from '../components/NewsletterForm';

export function Subscribe() {
  return (
    <>
      <Helmet>
        <title>Абонамент за Бюлетина | Росен Симеонов</title>
        <meta name="description" content="Абонирайте се за периодичния бюлетин и анализи за икономическото развитие на Русе директно във Вашата поща." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Абонамент за Бюлетина | Росен Симеонов" />
        <meta property="og:description" content="Абонирайте се за периодичния бюлетин и анализи за икономическото развитие на Русе директно във Вашата поща." />
        <meta property="og:image" content={IMAGES.hero_bg} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Абонамент за Бюлетина | Росен Симеонов" />
        <meta name="twitter:description" content="Абонирайте се за периодичния бюлетин и анализи за икономическото развитие на Русе директно във Вашата поща." />
        <meta name="twitter:image" content={IMAGES.hero_bg} />
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
                <div className="mb-8 relative z-10">
                  <h3 className="text-2xl font-syne font-extrabold text-slate-950 tracking-tight mb-2">Бюлетин за Русе</h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">Получавайте нови анализи и идеи за икономическото развитие на Русе директно във Вашата поща, само когато има наистина важно съдържание.</p>
                </div>
                <NewsletterForm />
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
