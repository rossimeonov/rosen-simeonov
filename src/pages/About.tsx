import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Globe, Plus, Award, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Сигурни локални импорти (точно едно ниво нагоре от pages към src)
import { IMAGES } from '../constants';
import { Newsletter } from '../components/Newsletter';
import { OptimizedImage } from '../components/OptimizedImage';

// ДИРЕКТЕН ИМПОРТ НА ДИПЛОМИТЕ (Заобикаля евентуални грешки в constants.ts)
import imgAchiever from '/images/top-achiever rosen-simeonov.webp';
import imgGraduation from '/images/rosen-simeonov-graduation.jpg';

interface FAQItem {
  question: string;
  answer: string;
}

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
            <p className="pb-8 text-slate-500 text-lg font-light leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function About() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const quickFacts = [
    'MBA от Anglia Ruskin University',
    'Над 20 години международен управленски опит',
    'Основател на AlphaInvest.bg',
    'Финансова и икономическа експертиза',
    'Обществен ангажимент към ДСБ Русе',
  ];

  const faqs = [
    {
      question: 'Кой е Росен Симеонов?',
      answer: 'Росен Симеонов е финансов експерт, предприемач и обществено ангажиран човек от Русе с над 20 години международен професионален опит.',
    },
    {
      question: 'Какъв е професионалният му опит?',
      answer: 'Работил е в международна среда в Обединеното кралство, включително в сферата на логистиката, управлението и инвестициите.',
    },
    {
      question: 'Какво е AlphaInvest.bg?',
      answer: 'AlphaInvest.bg е платформа за финансова грамотност и инвестиционна култура, насочена към дългосрочно финансово мислене.',
    },
    {
      question: 'Какво образование има?',
      answer: 'Притежава MBA от Anglia Ruskin University и магистратура по финанси.',
    },
  ];

  return (
    <div className="bg-white text-slate-900 pt-28 selection:bg-brand-600 selection:text-white">
      <Helmet>
        <title>За мен | Росен Симеонов — Опит, принципи и визия за Русе</title>
        <meta name="description" content="Научете повече за моя професионален път, икономическа експертиза, образование и ценности – от международния опит в Лондон до каузата за Русе." />
        <meta name="keywords" content="Росен Симеонов, Русе, ДСБ, AlphaInvest.bg, MBA, икономика, финансова грамотност, управление, инвестиции, местно развитие" />
      </Helmet>

      {/* Прогрес бар за страницата */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand-600 origin-[0%] z-[60]" style={{ scaleX }} />

      {/* HERO SECTION — ДИЗАЙНЕРСКИ И ИЗЦЯЛО СВЕТЪЛ ФОН */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center w-full relative z-10 py-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-brand-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600">За мен</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-syne font-extrabold leading-[0.9] tracking-tighter text-slate-950 uppercase">
              Опит по същество.<br />
              <span className="text-brand-600">Визия за Русе.</span>
            </h1>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {quickFacts.map((fact, index) => (
                <div key={index} className="flex items-start gap-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                  <CheckCircle2 className="text-brand-600 shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-slate-700 font-medium leading-relaxed">{fact}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="lg:col-span-5 relative w-full aspect-[4/5] overflow-hidden border border-slate-200 shadow-2xl rounded-[2rem] bg-white">
            <OptimizedImage
              src={IMAGES.about_main}
              alt="Росен Симеонов"
              className="h-full w-full object-cover grayscale opacity-95 hover:grayscale-0 transition-all duration-700"
              fit="cover"
            />
          </div>
        </div>
      </section>

      {/* BLOCK 1: ЗА ПОЛИТИКАТА */}
      <section className="py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 space-y-6 text-lg text-slate-500 leading-relaxed font-light font-sans">
            <p>
              Ангажиментът ми към обществения живот и политическите процеси в България е напълно осъзнат и продиктуван от едно ясно убеждение: решенията за бъдещето на регионите трябва да се вземат с професионализъм, икономическа логика и безкомпромисна почтеност.
            </p>
            <p>
              Към настоящия момент съм активно ангажиран с каузата на <strong>Демократи за силна България (ДСБ) в град Русе</strong>. За мен партийната дейност не е търсене на самоцелно присъствие в публичното пространство, а инструмент за изграждане на дясна, последователна и предвидима алтернатива за управление на местно и национално ниво.
            </p>
            <div className="p-6 sm:p-10 bg-slate-50 border-l-4 border-brand-600 text-slate-900 font-serif italic text-xl leading-relaxed my-8 shadow-sm">
              „В основата на убежденията ми стои правото на човека да има свободата сам да избира как да протече животът му и единствено самият той да бъде отговорен за последиците от решенията, които взема. Безусловно споделям принципа, че там, където няма ясни правила, ред и законност — няма и истинска икономическа и гражданска свобода.“
            </div>
            <p>
              В рамките на политическата си дейност се фокусирам върху регионалното развитие, привличането на стратегически инвестиции в Северна България и децентрализацията на публичните финанси, за да може заработените от русенци средства да се инвестират обратно в качеството на живот в нашия град.
            </p>
          </div>
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600 mb-6 block lg:text-right">Кауза</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold tracking-tight italic text-slate-950 uppercase leading-tight lg:text-right">
                За <br className="hidden lg:block" />
                <span className="text-brand-600">политиката</span>
              </h2>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden border border-slate-200 shadow-xl rounded-[2rem] bg-slate-50">
              <OptimizedImage
                src={IMAGES.about_dsb}
                alt="Росен Симеонов поема поста общински председател"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                fit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 2: ГРАЖДАНСКА АКТИВНОСТ (ALPHAINVEST.BG) */}
      <section className="py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[550px] bg-slate-50 overflow-hidden border border-slate-200 shadow-2xl rounded-[2rem]">
            <OptimizedImage
              src={IMAGES.about_conference}
              alt="Финансова конференция AlphaInvest"
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
              fit="cover"
            />
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600 mb-4 block">Просвещение</span>
              <h2 className="text-4xl md:text-5xl font-syne font-extrabold tracking-tight leading-tight uppercase text-slate-950">
                Гражданска <br className="hidden lg:block" />
                <span className="text-brand-600">активност</span>
              </h2>
            </div>
            <div className="space-y-6 text-slate-500 text-lg leading-relaxed font-light font-sans">
              <p>
                Преди и паралелно с активната ми политическа дейност, моята голяма гражданска кауза винаги е била икономическото просвещение и изграждането на независими граждани. Воден от това разбиране, създадох <strong>AlphaInvest.bg</strong> — платформа за финансова грамотност и инвестиционна култура в България.
              </p>
              <p>
                Вярвам, че финансово образованото общество е много по-устойчиво на кризи, имунно срещу евтин политически популизъм и далеч по-взискателно към това как държавата и общините управляват публичните пари и данъците на гражданите.
              </p>
            </div>
            <a
              href="https://www.alphainvest.bg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-950 text-white font-bold text-xs uppercase tracking-widest hover:bg-brand-600 hover:text-white transition-all duration-500 px-10 py-5 rounded-full shadow-lg"
            >
              Към AlphaInvest.bg <Globe size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* BLOCK 3: КАРИЕРА */}
      <section className="py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600 mb-6 block">Реален сектор</span>
            <h2 className="text-4xl md:text-6xl font-syne font-extrabold tracking-tighter italic text-slate-950 uppercase leading-none">
              Професионална <span className="text-brand-600">кариера</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-8 space-y-6 text-lg text-slate-500 leading-relaxed font-light font-sans">
              <p>
                Днес се занимавам активно с бизнес мениджмънт, консултиране на инвестиционни процеси и управление на проекти, но пътят ми назад е изцяло изграден в реалната икономика. Прекарах близо две десетилетия в Обединеното кралство, където преминах през всички нива на йерархията — от оперативна работа на терен до позиции с висока управленска и стратегическа отговорност в сферата на логистиката и генералния мениджмънт в Mattison.
              </p>
              <p>
                Този международен опит ми даде организационно мислене, способност за управление на бюджети, оптимизация на ресурси и координация на сложни екипи под високо напрежение.
              </p>
              <p>
                През 2022 г. взех категоричното решение да прекратя международната си кариера и да се завърна в родния си град Русе. Тук прилагам натрупаните бизнес модели, консултирайки предприемачи и развивайки собствени проекти в реалния сектор. Стремя се към висок професионализъм и вярвам, че управлението на една община изисква същите прагматични и ефективни бизнес подходи, каквито изисква и една успешна компания.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="p-6 bg-slate-50 border border-slate-100 flex items-center justify-center aspect-[4/3] shadow-sm rounded-2xl">
                <OptimizedImage
                  src={IMAGES.about_mattison_logo}
                  alt="Mattison Cargo"
                  className="max-h-full max-w-full"
                  fit="contain"
                />
              </div>
              <div className="overflow-hidden border border-slate-100 aspect-square shadow-md rounded-2xl">
                <OptimizedImage
                  src={IMAGES.about_mattison_manager}
                  alt="Управленски опит"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  fit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 4: ДИСЦИПЛИНА И СПОРТ */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="aspect-[3/4] w-full max-w-md mx-auto overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02] rounded-[2rem]">
              <OptimizedImage
                src={IMAGES.about_kickbox}
                alt="Росен Симеонов - Черен колан по Кикбокс"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                fit="cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <Award className="text-brand-500" size={24} />
              <span className="text-brand-400 text-xs uppercase tracking-[0.2em] font-bold">Характер</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-syne font-extrabold tracking-tight italic text-white uppercase leading-tight">
              Черният колан: <br />
              <span className="text-brand-600">дисциплина и спорт</span>
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light font-sans">
              <p>
                Спортът изгражда характер и устойчивост, които нито една академична или корпоративна среда не може да замени. Защитаването на черен колан по кикбокс е личната ми история за желязна самодисциплина, хиляди часове целенасочен труд, преодоляване на трудностите и запазване на абсолютен фокус под напрежение.
              </p>
              <p>
                Бойните изкуства учат на изключителен самоконтрол, бързо стратегическо мислене и дълбоко уважение към правилата и отсрещната страна. В реалния живот, бизнеса и обществената работа прилагам същата философия: пречките се преодоляват с хладнокръвие и фокус, а поетите ангажименти се изпълняват безкомпромисно и докрай.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 5: ОБРАЗОВАНИЕ (Променено на директни променливи за 100% сигурно показване) */}
      <section className="py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600 mb-6 block">Подготовка</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold tracking-tight italic text-slate-950 uppercase leading-tight">
                Образование <br />
                <span className="text-brand-600">и подготовка</span>
              </h2>
            </div>
            <div className="space-y-6 text-lg text-slate-500 leading-relaxed font-light font-sans">
              <p>
                Вярвам, че истинското и качествено образование се придобива най-вече по пътя на непрекъснатото самоусъвършенстване и учене през целия живот. Моята академична подготовка започна в Стопанска академия „Д. А. Ценов“ – Свищов, където завърших бакалавър по аграрна икономика и магистратура по финанси.
              </p>
              <p>
                По-късно, вече стъпил стабилно в професионалния мениджмънт, завърших магистратура по бизнес администрация (MBA) в Anglia Ruskin University в Обединеното кралство. Тази квалификация ми даде теоретичния апарат да виждам голямата картина и да изграждам устойчиви финансови и организационни модели.
              </p>
              <p>
                Надградих подготовката си в сферата на обществените процеси и лидерството, завършвайки 8-ия випуск на Политическата академия „Атанас Буров“ — опит, който ми помага да структурирам ясни и работещи политики в полза на гражданите.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-slate-200 shadow-md bg-white p-2 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={imgAchiever}
                  alt="Top Achiever Academic Award"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="border border-slate-200 shadow-md bg-white p-2 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={imgGraduation}
                  alt="MBA Graduation Diploma"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="w-full border border-slate-200 shadow-lg bg-white p-4 flex items-center justify-center overflow-hidden rounded-2xl">
              <OptimizedImage
                src={IMAGES.about_academy}
                alt="Political Academy Atanas Burov"
                className="w-full h-auto object-contain"
                fit="contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 6: СЕМЕЙСТВО */}
      <section className="py-32 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600 mb-4 block">Фундамент</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold tracking-tight italic text-slate-950 uppercase leading-none">
                Личен живот <br />
                <span className="text-brand-600">& семейство</span>
              </h2>
            </div>
            <div className="lg:col-span-8 text-lg text-slate-500 leading-relaxed font-light font-sans">
              <p>
                Всичко, което ми дава истински сили, увереност и мотивация да вървя напред, което ме кара да се чувствам истински полезен, отговорен и щастлив, е моето семейство — моята съпруга и децата ми.
              </p>
              <p className="mt-4">
                Завръщането ни в Русе беше изцяло семеен, осъзнат избор. Искам децата ми да растат тук, да познават корените си, да учат в български училища и да се свържат с духа на нашия град. Всяко мое действие в обществената работа е дълбоко мотивирано от желанието да оставим на следващото поколение един по-уреденост, по-силен и икономически развит Русе.
              </p>
            </div>
          </div>
          
          <div className="aspect-[16/9] w-full overflow-hidden border border-slate-200 shadow-2xl bg-white rounded-[2rem]">
            <OptimizedImage
              src={IMAGES.about_family}
              alt="Семейството на Росен Симеонов"
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
              fit="cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ CENTER */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600 mb-8 block">Диалог</span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold tracking-tight italic text-slate-950">
              Често задавани въпроси
            </h3>
          </div>
          <div className="divide-y divide-slate-100 border-t border-slate-100">
            {faqs.map((faq) => (
              <FAQAccordion key={faq.question} item={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Newsletter variant="light" />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-brand-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-syne font-black italic tracking-tight mb-8 leading-tight">
            Нека работим за по-силно бъдеще за Русе.
          </h2>
          <p className="text-xl text-white/85 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Ако споделяте визията за по-ефективно управление, икономическо развитие и повече възможности за Русе, свържете се с мен.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 md:px-14 py-5 md:py-7 bg-slate-950 text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-brand-600 transition-all shadow-2xl rounded-full"
          >
            Свържете се с мен
          </Link>
        </div>
      </section>
    </div>
  );
}