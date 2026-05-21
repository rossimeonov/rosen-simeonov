import { motion } from 'motion/react';
import { ArrowRight, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { blogPosts } from '../data';
import { Newsletter } from '../components/Newsletter';
import { OptimizedImage } from '../components/OptimizedImage';

export function Publications() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 bg-white min-h-screen">
      <Helmet>
        <title>Блог и Публикации | Росен Симеонов</title>
        <meta name="description" content="Позиции, анализи и идеи за икономическото развитие и бъдещето на град Русе." />
      </Helmet>

      {/* Header */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end gap-12"
          >
            <div className="max-w-2xl">
              <span className="text-brand-600 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Блог & Публикации</span>
              <h1 className="text-4xl md:text-8xl font-syne font-black tracking-tighter leading-[0.9] italic">
                Статии и <br />
                <span className="text-brand-600">анализи.</span>
              </h1>
            </div>
            
            <div className="w-full md:w-96 relative">
              <div className="relative flex items-center bg-white/5 border border-white/15 hover:border-white/30 focus-within:border-brand-500 rounded-full transition-all duration-300 px-6 py-4">
                <Search className="text-slate-400 shrink-0 mr-3" size={18} />
                <input 
                  type="text" 
                  placeholder="Бързо търсене сред статиите..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-white text-sm placeholder:text-slate-500 font-light"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-slate-400 hover:text-brand-500 transition-colors pl-2 shrink-0"
                    aria-label="Изчисти търсенето"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post (only show if no search query) */}
      {!searchQuery && filteredPosts.length > 0 && (
       <section className="py-24 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
           <Link to={`/publications/${filteredPosts[0].slug}`} className="grid lg:grid-cols-2 gap-16 items-center group">
              <div className="aspect-[16/10]">
                 <OptimizedImage 
                   src={filteredPosts[0].image} 
                   alt={filteredPosts[0].title} 
                   className="h-full w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                 />
              </div>
              <div className="space-y-6">
                 <div className="flex gap-4 items-center text-[10px] font-black uppercase tracking-widest text-brand-600">
                    <span className="bg-brand-600 text-white px-3 py-1">Акцент</span>
                    <span>{filteredPosts[0].category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400">{filteredPosts[0].date}</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-syne font-black italic tracking-tight leading-tight group-hover:text-brand-600 transition-colors text-slate-900">
                    {filteredPosts[0].title}
                 </h2>
                 <p className="text-xl text-slate-500 font-light leading-relaxed mb-10">
                    {filteredPosts[0].excerpt}
                 </p>
                 <span className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-950 group-hover:translate-x-2 transition-all">
                    Прочетете целия анализ <ArrowRight size={16} className="text-brand-600" />
                 </span>
              </div>
           </Link>
        </div>
      </section>
      )}

      {/* Posts Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
           {filteredPosts.length === 0 ? (
             <div className="text-center py-20">
               <p className="text-slate-400 italic">Няма намерени публикации за "{searchQuery}"</p>
             </div>
           ) : (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                {(searchQuery ? filteredPosts : filteredPosts.slice(1)).map((post) => (
                  <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Link to={`/publications/${post.slug}`} className="group block h-full">
                      <div className="aspect-[4/3] mb-8 relative">
                          <OptimizedImage 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                          />
                          <div className="absolute inset-0 bg-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                      <div className="flex gap-3 items-center mb-4 text-[10px] font-bold uppercase tracking-widest text-brand-600">
                          <span>{post.category}</span>
                          <span className="text-slate-200">•</span>
                          <span className="text-slate-400">{post.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors leading-tight mb-4 italic">
                          {post.title}
                      </h3>
                      <p className="text-slate-500 font-light text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                      </p>
                    </Link>
                  </motion.div>
                ))}
             </div>
           )}
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
