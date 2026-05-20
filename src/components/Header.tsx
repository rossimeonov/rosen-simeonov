import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Linkedin, Music2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navItems, socialLinks } from '../data';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Facebook': return <Facebook size={18} />;
      case 'Linkedin': return <Linkedin size={18} />;
      case 'Music2': return <Music2 size={18} />;
      default: return null;
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm border-b border-slate-100' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`font-syne text-xl font-extrabold uppercase tracking-widest ${scrolled || !isHome ? 'text-brand-950' : 'text-white'}`}>
           Росен <span className="text-brand-600">Симеонов</span>
        </Link>
        
        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-4 mr-4">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener"
                className={`transition-colors ${scrolled || !isHome ? 'text-slate-400 hover:text-brand-600' : 'text-white/40 hover:text-white'}`}
                title={social.label}
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>
          {navItems.filter(item => item.href !== '/subscribe').map((item) => (
            <Link 
              key={item.label} 
              to={item.href} 
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${scrolled || !isHome ? 'text-slate-500 hover:text-brand-600' : 'text-white/60 hover:text-white'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/subscribe" 
            className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${scrolled || !isHome ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-white text-brand-950 hover:bg-brand-600 hover:text-white'}`}
          >
            АБОНИРАЙТЕ СЕ
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${scrolled || !isHome ? 'text-brand-950' : 'text-white'}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl p-6 overflow-y-auto max-h-[85vh] z-50"
          >
            <div className="flex flex-col gap-6 items-center py-8">
              {navItems.filter(item => item.href !== '/subscribe').map((item) => (
                <Link 
                  key={item.label} 
                  to={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-black uppercase tracking-[0.3em] text-brand-920 hover:text-brand-600"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/subscribe" 
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 bg-brand-600 text-white font-black uppercase tracking-[0.3em]"
              >
                АБОНИРАЙТЕ СЕ
              </Link>
              
              <div className="flex gap-8 mt-4 pt-8 border-t border-slate-100 w-full justify-center">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener"
                    className="text-slate-400 hover:text-brand-600 transition-colors flex flex-col items-center gap-2"
                  >
                    {getSocialIcon(social.icon)}
                    <span className="text-[8px] font-black uppercase tracking-widest">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
