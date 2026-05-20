import { navItems, socialLinks } from '../data';
import { Facebook, Linkedin, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Facebook': return <Facebook size={16} />;
      case 'Linkedin': return <Linkedin size={16} />;
      case 'Music2': return <Music2 size={16} />;
      default: return null;
    }
  };

  return (
    <footer className="bg-white py-24 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div>
            <h4 className="text-3xl sm:text-4xl font-syne font-black uppercase tracking-tighter mb-6 text-slate-950">Росен <span className="text-brand-600">Симеонов</span></h4>
            <p className="text-slate-400 max-w-sm text-base font-light leading-relaxed">
              Русенец, икономист, финансист и предприемач. Човек с визия, дисциплина и отговорност към бъдещето на Русе.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16 sm:gap-32">
            <div className="space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Навигация</span>
              <nav className="flex flex-col gap-4">
                {navItems.map(item => (
                  <Link 
                    key={item.label} 
                    to={item.href} 
                    className="text-[10px] font-black text-slate-500 hover:text-brand-600 transition-colors uppercase tracking-widest"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Социални</span>
              <nav className="flex flex-col gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener" 
                    className="text-[10px] font-black text-slate-500 hover:text-brand-600 transition-colors uppercase tracking-widest flex items-center gap-2"
                  >
                    {getSocialIcon(social.icon)}
                    {social.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
           <div className="text-center md:text-left">© 2026 Росен Симеонов • Русе • Икономика • Общество</div>
           <div className="flex gap-12">
             <Link to="/privacy" className="hover:text-brand-600 transition-colors">Поверителност</Link>
             <Link to="/cookies" className="hover:text-brand-600 transition-colors">Бисквитки</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
