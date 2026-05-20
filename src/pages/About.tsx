import { motion } from 'motion/react';
import { Globe, TrendingUp, MapPin, Users, Scale, Lightbulb, GraduationCap, Building2, ShieldCheck, Heart } from 'lucide-react';
import { IMAGES } from '../constants';
import { Helmet } from 'react-helmet-async';
import { Newsletter } from '../components/Newsletter';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="pt-32 bg-white selection:bg-brand-600 selection:text-white">
      <Helmet>
        <title>За Росен Симеонов | Опит, принципи и визия за Русе</title>
        <meta name="description" content="Научете повече за професионалния път, образованието и ценностите на Росен Симеонов – от международния опит в Лондон до завръщането в родния град Русе." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 overflow-hidden text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-600 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] mb-8 block"
            >
              Кой е Росен Симеонов
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-8xl font-syne font-black tracking-tighter leading-[0.9] italic text-slate-950 mb-12"
            >
              Опит, който работи за <span className="text-brand-600 underline decoration-2 underline-offset-8">Русе.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl"
            >
              Две десетилетия професионален опит в международна среда, предприемаческо мислене и решение за завръщане в родния град. Това е основата на пътя, по който Росен Симеонов върви днес.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Biography */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] bg-slate-100 overflow-hidden rounded-2xl shadow-2xl"
              >
                <img 
                  src={IMAGES.about_main} 
                  alt="Росен Симеонов" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-1000"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-600 -z-10 rounded-2xl hidden xl:block" />
            </div>

            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-syne font-bold italic tracking-tight text-slate-950">История за дисциплина и израстване</h2>
                <p className="text-brand-600 font-black uppercase tracking-widest text-[10px]">Генерален мениджмънт & Стратегия</p>
              </div>
              <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed font-sans">
                <p>
                  Роден в Русе през 1977 г., Росен Симеонов изгражда професионалния си път в продължение на близо две десетилетия в Обединеното кралство. Там преминава през различни нива на реалната икономика – от оперативна работа до управленски отговорности в логистиката и инвестициите.
                </p>
                <p>
                  Този път му дава не само професионален опит, но и ясен поглед към това как работят успешните системи – когато правилата са еднакви за всички, когато усилието има значение и когато има дългосрочно мислене.
                </p>
                <p>
                  Завършва бакалавър по аграрна икономика и магистратура по финанси в Стопанска академия „Д. А. Ценов“ – Свищов, а по-късно придобива и MBA от Anglia Ruskin University. Съчетава академичната подготовка с реален практически опит – комбинация, която му помага да вижда както голямата картина, така и конкретните решения.
                </p>
                <div className="bg-slate-50 p-6 md:p-8 border-l-4 border-brand-600 italic font-medium text-slate-900 leading-relaxed">
                  През 2022 г. Росен Симеонов се завръща в родния град със семейството си. Решението му не е продиктувано от търсене на лесен път, а от убеждението, че натрупаният опит и знания могат и трябва да работят в полза на Русе.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Education & Academy */}
      <section className="py-32 bg-slate-50 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600 mb-4 block">Подготовка и знания</span>
            <h2 className="text-3xl md:text-5xl font-syne font-black italic tracking-tight">Образование с цел</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="w-16 h-16 bg-white flex items-center justify-center shrink-0 shadow-xl rounded-xl">
                  <GraduationCap className="text-brand-600" size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight">MBA & Финансова експертиза</h3>
                  <p className="text-slate-500 text-lg leading-relaxed font-light">
                    За Росен образованието не е формалност, а инструмент за по-добри решения. MBA обучението и магистратурата по финанси дават способност да се мисли не само оперативно, а и стратегически – как се изгражда устойчив модел и как се управлява ресурс.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="w-16 h-16 bg-white flex items-center justify-center shrink-0 shadow-xl rounded-xl">
                  <Building2 className="text-brand-600" size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight">Политическа академия „Атанас Буров“</h3>
                  <p className="text-slate-500 text-lg leading-relaxed font-light">
                    Завършва 8-ми випуск на академията, където надгражда знания по политически мениджмънт, лидерство и работа с обществени каузи – подготовка, която допълва професионалния му профил.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 items-start">
              <div className="bg-white p-4 shadow-xl rounded-2xl group">
                <div className="aspect-[3/4] bg-slate-100 overflow-hidden rounded-xl">
                  <img 
                    src={IMAGES.about_achiever} 
                    alt="Academic Achievement" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
              <div className="bg-white p-4 shadow-xl rounded-2xl group mt-8 sm:mt-12">
                <div className="aspect-[3/4] bg-slate-100 overflow-hidden rounded-xl">
                  <img 
                    src={IMAGES.about_graduation} 
                    alt="MBA Graduation" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="bg-white p-6 shadow-2xl rounded-3xl group order-2 lg:order-1">
              <div className="aspect-[3/2] bg-slate-100 overflow-hidden rounded-xl">
                <img 
                  src={IMAGES.about_academy} 
                  alt="Political Academy" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <blockquote className="text-2xl md:text-4xl font-syne font-bold italic text-slate-800 leading-tight">
                „Образованието и практиката трябва да вървят ръка за ръка. По-малко лозунги, повече разбиране какво работи и как се постига реален резултат.“
              </blockquote>
              <div className="h-2 w-24 bg-brand-600 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-black">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Семейство", desc: "Съпруг и баща. Гледа на развитието на Русе през перспективата на бъдещето за следващото поколение." },
              { icon: Scale, title: "Принципи", desc: "Вярва, че правилата трябва да важат еднакво за всички и че доверието се печели с последователност." },
              { icon: Lightbulb, title: "Мислене", desc: "Фокус върху решения, а не върху шум. Управленски подход, основан на факти, ресурс и ефект." },
              { icon: MapPin, title: "Връзка с Русе", desc: "Не наблюдава отстрани. Избира да бъде тук и да работи за мястото, от което е тръгнал." }
            ].map((item, id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: id * 0.1 }}
                className="p-6 sm:p-10 border border-slate-100 bg-white hover:border-brand-600 transition-all group rounded-2xl"
              >
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-bold italic mb-4 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 font-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-6 rounded-3xl shadow-lg group">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                <img src={IMAGES.about_family} alt="Family" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl shadow-lg group">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                <img src={IMAGES.about_kickbox} alt="Kickbox" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AlphaInvest Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 space-y-10">
            <span className="text-brand-500 font-black uppercase tracking-[0.4em] text-[10px]">Мисия за свобода</span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-syne font-black italic leading-[1.1] tracking-tight">AlphaInvest.bg</h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/70 font-light leading-relaxed text-xl">
                Паралелно с професионалния си път, Росен е създател на AlphaInvest.bg – платформа за финансово образование. За него икономическата грамотност не е просто знание, а фундаментът на гражданската свобода.
              </p>
              <p className="text-white/70 font-light leading-relaxed">
                Финансово независимият човек е много по-устойчив на популизъм и кризи. Когато гражданите умеят да градят дългосрочни стратегии, те стават по-взискателни към управлението на публичните средства.
              </p>
            </div>
            <a 
              href="https://www.alphainvest.bg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-brand-600 px-8 py-5 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-brand-600 transition-all rounded-full"
            >
              Към платформата <Globe size={18} />
            </a>
          </div>
          <div className="lg:col-span-5 relative">
             <div className="aspect-video bg-white/5 overflow-hidden rounded-2xl border border-white/10 p-4">
               <img src={IMAGES.about_conference} alt="Finance Conference" className="w-full h-full object-cover opacity-90" />
             </div>
             <div className="absolute -top-6 -left-6 w-24 h-24 border-l-4 border-t-4 border-brand-600 rounded-tl-2xl" />
          </div>
        </div>
      </section>

      {/* Newsletter Placement 2 */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Newsletter 
            variant="light" 
            title="Бюлетин за Русе" 
            description="Получавайте нови анализи и идеи за икономическото развитие на Русе директно във Вашата поща, само когато има наистина важно съдържание." 
          />
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-black">
          <div className="mb-20">
            <span className="text-brand-600 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] mb-4 block">Професионален път</span>
            <h2 className="text-3xl md:text-5xl font-syne font-black italic tracking-tight">Управленски опит в Mattison</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 grid grid-cols-2 gap-8">
              <div className="aspect-square bg-slate-50 overflow-hidden shadow-xl rounded-3xl p-4">
                <img src={IMAGES.about_mattison_logo} alt="Mattison" className="w-full h-full object-contain" />
              </div>
              <div className="aspect-square bg-slate-50 overflow-hidden shadow-xl rounded-3xl translate-y-12 p-4">
                <img src={IMAGES.about_mattison_manager} alt="Manager" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-10">
              <div className="prose prose-slate prose-lg text-slate-600 font-light leading-relaxed">
                <p>
                  Работата в международна среда изгражда у Росен дисциплина, отговорност и управленски поглед към процесите. Пътят му в логистиката в Обединеното кралство не е теоретичен, а изцяло изграден през практика и резултати.
                </p>
                <p>
                  Именно този тип опит му дава увереност да говори не с абстракции, а с разбиране как се организира екип, как се носи отговорност и как се търси максимална ефективност на всеки ресурс.
                </p>
              </div>
              <div className="flex flex-wrap gap-8 pt-8">
                {[
                  { icon: ShieldCheck, label: "Дисциплина" },
                  { icon: TrendingUp, label: "Ефективност" },
                  { icon: Users, label: "Лидерство" }
                ].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-xl border border-slate-100 shadow-sm">
                    <skill.icon className="text-brand-600" size={24} />
                    <span className="text-xs font-black uppercase tracking-widest italic">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Political Commitment */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center text-black">
           <div className="lg:col-span-7 space-y-10">
              <span className="text-brand-600 font-black uppercase tracking-[0.4em] text-[10px]">Обществена отговорност</span>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-syne font-black italic tracking-tight text-slate-950">ДСБ и каузата за Русе</h2>
              <div className="prose prose-slate prose-lg text-slate-600 font-light leading-relaxed">
                <p className="text-xl italic">
                  Ангажиментът му към обществения живот не е случаен. Той идва от убеждението, че политиката има смисъл само ако е близо до хората, ако защитава правила и ако носи реална отчетност.
                </p>
                <p>
                  Работата му в ДСБ Русе е естествено продължение на натрупания опит, на ценностите, които следва, и на желанието Русе да има по-силно, честно и последователно представителство в управлението.
                </p>
              </div>
              <div className="h-px w-full bg-slate-100" />
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 bg-brand-600 flex items-center justify-center text-white rounded-3xl shadow-xl">
                   <Heart size={40} />
                </div>
                <p className="text-2xl font-syne font-bold italic text-slate-900 tracking-tight leading-tight">
                  „За Русе с последователност <br /> и работа по същество.“
                </p>
              </div>
           </div>
           <div className="lg:col-span-5 bg-white p-6 shadow-2xl rounded-[3rem] group">
              <div className="aspect-[3/2] bg-slate-100 overflow-hidden rounded-[2rem]">
                <img src={IMAGES.about_dsb} alt="ДСБ Русе" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000" />
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-600 text-white text-center sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl sm:text-5xl md:text-8xl font-syne font-black italic mb-12 tracking-tighter">Градете бъдещето заедно с него.</h2>
           <p className="text-xl md:text-2xl text-white/80 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
             Ако споделяте неговата визия за по-силен и икономически стабилен Русе, свържете се с него.
           </p>
           <Link 
             to="/contact" 
             className="inline-block px-10 md:px-14 py-5 md:py-7 bg-slate-950 text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-brand-600 transition-all shadow-2xl rounded-full"
           >
             Свържете се с него директно
           </Link>
        </div>
      </section>
    </div>
  );
}
