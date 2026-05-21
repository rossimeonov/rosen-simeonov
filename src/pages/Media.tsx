import { motion } from 'motion/react';
import { PlayCircle, ExternalLink } from 'lucide-react';
import { mediaAppearances } from '../data';
import { IMAGES } from '../constants';
import { Newsletter } from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

export function Media() {
  return (
    <div className="pt-32 bg-white">
      <Helmet>
        <title>Медийни участия | Росен Симеонов</title>
        <meta name="description" content="Архив с публични участия, телевизионни интервюта и статии на Росен Симеонов в медиите." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Медийни участия | Росен Симеонов" />
        <meta property="og:description" content="Архив с публични участия, телевизионни интервюта и статии на Росен Симеонов в медиите." />
        <meta property="og:image" content={IMAGES.media_placeholder} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Медийни участия | Росен Симеонов" />
        <meta name="twitter:description" content="Архив с публични участия, телевизионни интервюта и статии на Росен Симеонов в медиите." />
        <meta name="twitter:image" content={IMAGES.media_placeholder} />
      </Helmet>
      {/* Header */}
      <section className="py-24 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-500 mb-6 block">Архив</span>
            <h1 className="text-4xl md:text-8xl font-syne font-extrabold tracking-tight italic mb-8 leading-[0.9]">
              Медийни <span className="text-brand-600">участия</span>.
            </h1>
            <p className="text-xl text-white/50 font-light max-w-2xl leading-relaxed">
              Публично присъствие, интервюта и позиции в национални и регионални медии.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="relative aspect-video bg-slate-100 overflow-hidden group cursor-pointer shadow-2xl">
              {/* Using an iframe for the actual video if we have a direct link or embed */}
              <iframe 
                className="w-full h-full grayscale opacity-80 hover:opacity-100 transition-all duration-700"
                src="https://www.youtube.com/embed/CJSZhxKOHno" // Пълният репортаж от KISS 13
                title="KISS 13 Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-12 left-12 right-12 text-white pointer-events-none">
                 <div className="text-[10px] font-black uppercase tracking-widest bg-brand-600 inline-block px-4 py-2 mb-4">Видео Репортаж</div>
                 <h2 className="text-4xl font-syne font-black tracking-tight drop-shadow-lg">ПП - ДБ дават сделката за големия ТИР паркинг в Русе на прокуратурата</h2>
              </div>
           </div>
           <div className="mt-8 flex justify-center">
              <a 
                href="https://kiss13.net/news/ruse/pp-db-davat-sdelkata-za-golemiya-tir-parking-v-ruse-na-prokuraturata" 
                target="_blank" 
                rel="noopener"
                className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-brand-600 hover:text-slate-950 transition-colors"
              >
                Вижте целия репортаж в KISS 13 <ExternalLink size={16} />
              </a>
           </div>
        </div>
      </section>

      {/* Grid of appearances */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-12">
              {mediaAppearances.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-12 border border-slate-100 hover:bg-brand-50 transition-all duration-500 group"
                >
                   <div className="flex justify-between items-start mb-8">
                      <div className="text-xs font-black uppercase tracking-widest text-brand-600">
                         {item.source}
                      </div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.date}</div>
                   </div>
                   <p className="text-2xl font-medium text-slate-900 leading-relaxed italic font-serif mb-12 group-hover:translate-x-2 transition-transform">
                      „{item.description}“
                   </p>
                   <a 
                     href={item.link} 
                     target="_blank" 
                     rel="noopener"
                     className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-brand-600 transition-colors"
                   >
                      Към публикацията <ExternalLink size={14} />
                   </a>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Media Inquiries */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
           <h3 className="text-3xl font-syne font-black mb-8 italic">За медийни запитвания</h3>
           <p className="text-slate-500 font-light mb-12">
             Ако желаете да поканите Росен Симеонов за интервю, коментар или участие в събитие, моля използвайте формата за контакт или пишете на имейл.
           </p>
           <a href="mailto:info@rosensimeonov.com" className="inline-block py-5 px-12 bg-brand-600 text-white font-black text-[10px] uppercase tracking-widest hover:bg-brand-700 transition-all shadow-xl">
             info@rosensimeonov.com
           </a>
        </div>
      </section>

      <section className="pb-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Newsletter variant="brand" />
        </div>
      </section>
    </div>
  );
}
