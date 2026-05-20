import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { ChevronRight, Globe, TrendingUp, MapPin, Plus, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { visionPoints, blogPosts, mediaAppearances, faqs, FAQItem } from '../data';
import { Contact } from '../components/Contact';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants';
import { Newsletter } from '../components/Newsletter';

function FAQAccordion({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 md:py-8 flex justify-between items-center text-left hover:text-brand-600 transition-colors group"
      >
        <span className="text-xl md:text-2xl font-bold tracking-tight italic">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm"
        >
          <Plus size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-slate-500 text-lg font-light leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Helmet>
        <title>Росен Симеонов | Опит, дисциплина и ясна визия за Русе</title>
        <meta name="description" content="Росен Симеонов - икономист, финансист и предприемач. Открийте неговата визия за икономическото развитие и бъдещето на град Русе." />
      </Helmet>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand-600 origin-[0%] z-[60]" style={{ scaleX }} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center lg:pt-0 pt-24 overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.3]" style={{ backgroundImage: `url(${IMAGES.hero_bg})` }} />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-brand-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-brand-500">Русенец • Икономист • Финансист</span>
            </div>
            <h1 className="text-4xl md:text-9xl lg:text-[10rem] font-syne font-extrabold leading-[0.8] tracking-tighter mb-10 text-white">
              Росен<br/>
              <span className="text-brand-600">Симеонов</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-xl leading-relaxed mb-12 font-light italic font-serif text-balance">
              Опит, дисциплина и ясна визия за Русе.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/about" 
                className="px-10 py-5 bg-white text-brand-950 font-bold text-xs uppercase tracking-widest hover:bg-brand-600 hover:text-white transition-all duration-500 flex items-center gap-3 group"
              >
                Вижте Повече
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative lg:h-[80vh] aspect-[4/5] mx-auto lg:mx-0"
          >
            <div className="h-full w-full overflow-hidden border border-white/10 group shadow-2xl">
              <img 
                src={IMAGES.hero_portrait} 
                alt="Росен Симеонов" 
                className="h-full w-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Block */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
               <span className="section-label">Накратко</span>
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold tracking-tight italic text-slate-950 mb-12 leading-tight">Професионализъм и <span className="text-brand-600">отдаденост</span> към Русе.</h2>
               <p className="text-xl text-slate-500 leading-relaxed font-light mb-12">
                 След близо 20 години работа в Обединеното кралство, той се завърна в родния си град, за да приложи наученото в полза на русенското общество. Той вярва в реалните инвестиции, финансовата грамотност и прозрачното управление.
               </p>
               <Link to="/about" className="text-xs font-black uppercase tracking-widest text-brand-600 border-b border-brand-600 pb-1 hover:text-slate-950 hover:border-slate-950 transition-all">
                  Пълна Биография
               </Link>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Globe, title: "Глобален опит", desc: "Над 20 години в международни финансови среди." },
                  { icon: TrendingUp, title: "Финансова култура", desc: "Радетел за грамотност като основа на свободата." },
                  { icon: MapPin, title: "Русенски корен", desc: "Завърнал се със съзнателен избор за развитие." },
                  { icon: Plus, title: "Визия 2030", desc: "Работа за прозрачност и модерна инфраструктура." }
                ].map((item, i) => (
                  <div key={i} className="p-6 sm:p-10 bg-slate-50 flex flex-col justify-between hover:bg-brand-600 hover:text-white transition-all duration-500 group">
                    <item.icon size={24} className="mb-12" />
                    <div>
                      <h3 className="text-lg font-black uppercase tracking-tight mb-2">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed font-light text-sm group-hover:text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600 mb-6 block">Приоритети</span>
            <h2 className="text-4xl md:text-[5.5rem] font-syne font-extrabold tracking-tight leading-none mb-10">Ясни стъпки за <span className="text-brand-600">по-силен град</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visionPoints.map((point, idx) => (
              <motion.div 
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="p-6 sm:p-10 bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-brand-600/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 text-7xl font-black text-white/[0.02] group-hover:text-brand-600/5 transition-colors select-none">
                  0{idx + 1}
                </div>
                
                <div className="relative z-10">
                  <div className="h-1 w-12 bg-brand-600 mb-8 group-hover:w-24 transition-all duration-500" />
                  <h4 className="text-2xl font-syne font-bold mb-4 tracking-tight group-hover:text-brand-500 transition-colors uppercase">
                    {point.title}
                  </h4>
                  <p className="text-white/50 leading-relaxed font-light text-sm italic">
                    {point.description}
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-600 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="section-label">Публикации</span>
              <h2 className="text-3xl md:text-6xl font-syne font-extrabold tracking-tight text-slate-950 leading-none">Последни анализи</h2>
            </div>
            <Link to="/publications" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-600 border-b border-brand-600 pb-1 hover:text-slate-950 hover:border-slate-950 transition-all">
              Всички статии <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <Link to={`/publications/${blogPosts[0].slug}`} className="group">
                <div className="aspect-[16/9] overflow-hidden mb-10 relative">
                  <img src={blogPosts[0].image} alt="Featured" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                </div>
                <div className="flex gap-6 items-center mb-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  <span className="text-brand-600">{blogPosts[0].category}</span>
                  <span>{blogPosts[0].date}</span>
                </div>
                <h3 className="text-2xl md:text-5xl font-syne font-extrabold mb-8 text-slate-950 group-hover:text-brand-600 transition-colors leading-tight">
                  {blogPosts[0].title}
                </h3>
              </Link>
            </div>

            <div className="lg:col-span-4 flex flex-col divide-y divide-slate-100 border-t border-slate-100">
              {blogPosts.slice(1, 4).map((post) => (
                <Link key={post.id} to={`/publications/${post.slug}`} className="py-10 group first:pt-4">
                  <div className="flex gap-4 items-center mb-4 text-[10px] font-bold uppercase tracking-widest text-brand-600">
                    <span>{post.category}</span>
                    <span className="text-slate-400">{post.date}</span>
                  </div>
                  <h4 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors leading-tight">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Highlight */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex justify-between items-start mb-20">
              <div className="max-w-2xl">
                 <span className="section-label">Медии</span>
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold tracking-tight italic text-slate-950">Медийно присъствие</h2>
              </div>
              <Link to="/media" className="px-8 py-4 bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest hover:border-brand-600 hover:text-brand-600 hover:shadow-xl transition-all">
                 Всички Участия
              </Link>
           </div>
           <div className="grid md:grid-cols-2 gap-px bg-slate-200">
              {mediaAppearances.slice(0, 4).map((m, idx) => (
                <div key={idx} className="p-8 sm:p-12 bg-white flex flex-col justify-between group hover:bg-brand-50 transition-all duration-500">
                   <p className="text-2xl font-medium text-slate-900 leading-relaxed mb-10 italic font-serif">„{m.description}“</p>
                   <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-syne italic">{m.source}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ Center */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-brand-600 mb-8 block">Диалог</span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold tracking-tight italic text-slate-950">Често задавани въпроси</h3>
          </div>
          <div className="divide-y divide-slate-100 border-t border-slate-100">
            {faqs.map((faq) => (
              <FAQAccordion key={faq.question} item={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Final Call */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Newsletter 
            variant="light" 
          />
        </div>
      </section>

      <Contact />
    </>
  );
}
