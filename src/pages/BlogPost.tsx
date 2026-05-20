import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowLeft, Clock, Tag, Calendar, Share2, Facebook, Linkedin, Twitter, MessageSquare, Send, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data';
import { useState, FormEvent } from 'react';
import { Newsletter } from '../components/Newsletter';
import { ProcurementChart } from '../components/ProcurementChart';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const location = useLocation();
  const currentUrl = encodeURIComponent(window.location.origin + location.pathname);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [commentStatus, setCommentStatus] = useState<'idle' | 'success'>('idle');

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Публикацията не е намерена</h1>
        <Link to="/publications" className="text-brand-600 hover:underline">Назад към публикациите</Link>
      </div>
    );
  }

  // Calculate reading time
  const wordsPerMinute = 200;
  const wordCount = post.content.split(/\s+/g).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  const handleComment = (e: FormEvent) => {
    e.preventDefault();
    setCommentStatus('success');
    setTimeout(() => setCommentStatus('idle'), 5000);
  };

  return (
    <div className="pt-32 bg-white min-h-screen">
      <Helmet>
        <title>{post.seo.title || post.title}</title>
        <meta name="description" content={post.seo.description || post.excerpt} />
        <meta property="og:title" content={post.seo.title || post.title} />
        <meta property="og:description" content={post.seo.description || post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-600 origin-[0%] z-[100]" 
        style={{ scaleX }}
      />

      {/* Hero Header */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to="/publications" 
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-xs font-black uppercase tracking-widest group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Назад към всички
              </Link>
              
              <div className="flex flex-wrap gap-6 items-center mb-8 text-[10px] font-black uppercase tracking-widest text-brand-500">
                <span className="flex items-center gap-2">
                  <Tag size={12} /> {post.category}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={12} /> {post.date}
                </span>
                <span className="flex items-center gap-2 text-white/50">
                  <Clock size={12} /> {readingTime} мин. четене
                </span>
              </div>
              
              <h1 className="text-3xl md:text-6xl font-syne font-extrabold text-white leading-[1.1] tracking-tight italic">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 py-24">
        {/* Main Article Content */}
        <div className="lg:col-span-8">
          {post.slug === 'miliohinite-na-ruse-obshtestveni-poruchki' ? (
            (() => {
              const parts = post.content.split('---');
              return (
                <>
                  <article className="markdown-body prose prose-slate prose-lg max-w-none prose-headings:font-syne prose-headings:font-black prose-headings:italic prose-headings:tracking-tight prose-a:text-brand-600">
                    <ReactMarkdown>{parts[0]}</ReactMarkdown>
                  </article>
                  
                  <ProcurementChart />
                  
                  <article className="markdown-body prose prose-slate prose-lg max-w-none prose-headings:font-syne prose-headings:font-black prose-headings:italic prose-headings:tracking-tight prose-a:text-brand-600">
                    <ReactMarkdown>{parts[1]}</ReactMarkdown>
                    <hr className="my-10 border-slate-150" />
                    <ReactMarkdown>{parts[2]}</ReactMarkdown>
                  </article>
                </>
              );
            })()
          ) : (
            <article className="markdown-body prose prose-slate prose-lg max-w-none prose-headings:font-syne prose-headings:font-black prose-headings:italic prose-headings:tracking-tight prose-a:text-brand-600">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
          )}
          
          {/* Social Sharing */}
          <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap items-center justify-between gap-8">
            <div className="flex items-center gap-3 text-slate-400">
              <Share2 size={18} />
              <span className="text-sm font-medium italic">Споделете статията</span>
            </div>
            <div className="flex gap-4">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-400 hover:bg-brand-600 hover:text-white transition-all rounded-full"
                aria-label="Сподели във Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-400 hover:bg-brand-600 hover:text-white transition-all rounded-full"
                aria-label="Сподели в LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-400 hover:bg-brand-600 hover:text-white transition-all rounded-full"
                aria-label="Сподели в Twitter/X"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Comments Form */}
          <section className="mt-32">
            <div className="flex items-center gap-4 mb-12">
              <MessageSquare className="text-brand-600" />
              <h3 className="text-2xl font-syne font-black italic">Коментари и мнения</h3>
            </div>
            
            <div className="bg-slate-50 p-10 border border-slate-100">
              {commentStatus === 'success' ? (
                <div className="py-10 text-center">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 tracking-tight">Благодаря за Вашия коментар!</h4>
                  <p className="text-slate-500">Вашето мнение е изпратено за преглед от екипа ни.</p>
                </div>
              ) : (
                <form onSubmit={handleComment} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Име</label>
                      <input required type="text" placeholder="Вашето име" className="w-full py-4 bg-white border-b border-slate-200 outline-none focus:border-brand-600 transition-colors px-4" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Имейл</label>
                      <input required type="email" placeholder="Вашият имейл" className="w-full py-4 bg-white border-b border-slate-200 outline-none focus:border-brand-600 transition-colors px-4" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Вашият коментар</label>
                    <textarea required rows={4} placeholder="Споделете мнението си тук..." className="w-full py-4 bg-white border-b border-slate-200 outline-none focus:border-brand-600 transition-colors px-4 resize-none font-sans"></textarea>
                  </div>
                  <button type="submit" className="px-10 py-5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-600 transition-all shadow-xl">
                    Публикувайте коментар
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-16">
          {/* Newsletter Signup */}
          <Newsletter variant="brand" sidebar={true} />

          {/* Related Articles */}
          {blogPosts.filter(p => p.id !== post.id).length > 0 && (
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-8 border-b border-slate-100 pb-4">Още публикации</h4>
              <div className="space-y-10">
                {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(other => (
                  <Link key={other.id} to={`/publications/${other.slug}`} className="flex gap-4 group">
                    <div className="w-20 h-20 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden bg-slate-100">
                      <img src={other.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-brand-600 mb-1 block">{other.category}</span>
                      <h5 className="font-bold leading-tight group-hover:text-brand-600 transition-colors line-clamp-2 italic tracking-tight text-slate-900">{other.title}</h5>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Suggested Posts Section */}
      {blogPosts.filter(p => p.id !== post.id).length > 0 && (
        <section className="py-32 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-syne font-black italic mb-16 border-l-4 border-brand-600 pl-8">Препоръчано за Вас</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(other => (
                <Link key={other.id} to={`/publications/${other.slug}`} className="group block h-full">
                  <div className="aspect-[16/9] overflow-hidden mb-6 relative">
                    <img 
                      src={other.image} 
                      alt={other.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 font-sans"
                    />
                    <div className="absolute inset-0 bg-brand-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-brand-600 transition-colors leading-tight mb-4 tracking-tight text-slate-900">
                    {other.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-brand-600 transition-colors">
                     Прочетете повече <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
