import { motion } from 'motion/react';
import { ExternalLink, Calendar, Radio, Tv, Newspaper, MessageSquare } from 'lucide-react';
import { mediaAppearances } from '../data';
import { Newsletter } from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

function getMediaIcon(source: string) {
  const srcLower = (source || '').toLowerCase();
  if (srcLower.includes('btv') || srcLower.includes('бтв') || srcLower.includes('nova') || srcLower.includes('нова') || srcLower.includes('bnt') || srcLower.includes('бнт') || srcLower.includes('tv') || srcLower.includes('тв') || srcLower.includes('kiss')) {
    return <Tv size={16} className="text-brand-600" />;
  }
  if (srcLower.includes('радио') || srcLower.includes('radio') || srcLower.includes('bnr') || srcLower.includes('бнр')) {
    return <Radio size={16} className="text-brand-600" />;
  }
  if (srcLower.includes('вестник') || srcLower.includes('24 часа') || srcLower.includes('капитал') || srcLower.includes('дневник')) {
    return <Newspaper size={16} className="text-brand-600" />;
  }
  return <MessageSquare size={16} className="text-brand-600" />;
}

function parseBulgarianDate(dateStr: string): Date {
  if (!dateStr) return new Date(0);
  try {
    const parts = dateStr.split('.');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
  } catch (e) {
    console.error("Грешка при парсване на дата:", dateStr);
  }
  return new Date(0);
}

function Media() {
  const sortedAppearances = [...mediaAppearances].sort((a, b) => {
    return parseBulgarianDate(b.date || '').getTime() - parseBulgarianDate(a.date || '').getTime();
  });

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": sortedAppearances.map((item, idx) => ({
      "@type": "Article",
      "@id": `https://www.rosensimeonov.com/media#article-${idx}`,
      "headline": item.description || '',
      "datePublished": parseBulgarianDate(item.date || '').toISOString().split('T')[0],
      "publisher": {
        "@type": "Organization",
        "name": item.source || 'Медия'
      },
      "author": {
        "@type": "Person",
        "name": "Росен Симеонов"
      },
      "contentLocation": {
        "@type": "Place",
        "name": "Русе, България"
      }
    }))
  };

  return (
    <div className="pt-32 bg-slate-50/50 min-h-screen">
      <Helmet>
        <title>Медийни участия и интервюта | Росен Симеонов</title>
        <meta name="description" content="Официален хронологичен архив с медийни изяви, интервюта, позиции и анализи на икономиста Росен Симеонов в национални и регионални медии." />
        <meta name="keywords" content="Росен Симеонов медии, интервю Росен Симеонов, Русе икономика, изявления Русе" />
        <meta name="geo.region" content="BG-18" />
        <meta name="geo.placename" content="Русе" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Медийни участия и интервюта | Росен Симеонов" />
        <meta property="og:description" content="Официален хронологичен архив с медийни изяви, интервюта и анализи на Росен Симеонов." />
        <meta property="og:image" content="https://www.rosensimeonov.com/assets/hero_portrait.jpg" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      
      <section className="py-24 bg-brand-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/20 to-brand-950/40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-brand-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-500">Хронологичен архив</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-syne font-extrabold tracking-tight uppercase leading-none">
              Медийно <br className="hidden sm:block" /><span className="text-brand-600">присъствие</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-sans font-light max-w-2xl leading-relaxed pt-2">
              Публични позиции, коментари, телевизионни и радио интервюта на Росен Симеонов по теми, свързани с икономическото развитие на Русе.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2rem] border border-slate-200/60 p-6 md:p-8 shadow-xl relative overflow-hidden grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 aspect-video w-full rounded-2xl overflow-hidden shadow-md bg-slate-900 border border-slate-100">
            <iframe 
              className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              src="https://www.youtube.com/embed/CJSZhxKOHno"
              title="KISS 13 Официален Репортаж"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-50 text-brand-700 rounded-full text-[10px] font-black uppercase tracking-wider w-max">
              <Tv size={12} /> Видео акцент • Репортаж
            </div>
            <h2 className="text-2xl md:text-3xl font-syne font-extrabold text-slate-950 tracking-tight leading-tight">
              ПП - ДБ дават сделката за големия ТИР паркинг в Русе на прокуратурата
            </h2>
            <p className="text-slate-600 font-sans font-light text-base leading-relaxed">
              Официална позиция и икономически анализ относно прозрачността на управление на общинските активи на територията на град Русе.
            </p>
            <div className="pt-2">
              <a href="https://kiss13.net/news/ruse/pp-db-davat-sdelkata-za-golemiya-tir-parking-v-ruse-na-prokuraturata" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-600 hover:text-slate-950 transition-colors border-b-2 border-brand-600 pb-1">
                Официален репортаж в KISS 13 <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {sortedAppearances.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="bg-white border border-slate-200/80 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-brand-600/40 transition-all duration-500 flex flex-col justify-between h-full group relative">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-brand-50 transition-colors">
                      {getMediaIcon(item.source || '')}
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider text-slate-900 group-hover:text-brand-600 transition-colors">
                      {item.source}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <Calendar size={12} />
                    {item.date}
                  </div>
                </div>
                <p className="text-slate-950 font-serif font-medium text-lg md:text-xl leading-relaxed italic tracking-tight pt-2">
                  „{item.description}“
                </p>
              </div>
              <div className="pt-8 mt-6 border-t border-slate-50 flex items-center">
                <a href={item.link || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-brand-600 transition-colors">
                  Преглед на публикацията <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-500 block">Контакти</span>
           <h3 className="text-3xl md:text-4xl font-syne font-extrabold uppercase tracking-tight">За медийни запитвания</h3>
           <p className="text-white/60 font-sans font-light max-w-xl mx-auto leading-relaxed text-base">
             Моля свържете се чрез официалния прес имейл.
           </p>
           <div className="pt-4">
             <a href="mailto:info@rosensimeonov.com" className="inline-block py-5 px-10 bg-brand-600 text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-950 transition-all duration-300 shadow-xl rounded-full">
               info@rosensimeonov.com
             </a>
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}

export default Media;