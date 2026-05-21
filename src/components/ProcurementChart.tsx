import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Users, ShieldAlert, Award, FileText, CheckCircle2, AlertTriangle, Play, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';

type TabType = 'competition' | 'pricing' | 'simulator';

export function ProcurementChart() {
  const [activeTab, setActiveTab] = useState<TabType>('competition');
  
  // Simulator states
  const [simStep, setSimStep] = useState<'intro' | 'running' | 'results'>('intro');
  const [simModel, setSimModel] = useState<'current' | 'reformed'>('current');
  const [userBid, setUserBid] = useState<number>(85000); // 85,000 BGN competitive bid
  const budgetLimit = 100000; // 100,000 BGN maximum budget

  const runSimulation = (model: 'current' | 'reformed') => {
    setSimModel(model);
    setSimStep('running');
  };

  return (
    <div className="my-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-10 text-slate-900 shadow-xl relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10 mb-8 border-b border-slate-200 pb-6">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-600 mb-2 block">
          Интерактивен Аналитичен Портал
        </span>
        <h3 className="text-xl md:text-2xl font-syne font-black italic text-slate-950 flex items-center gap-3">
          <TrendingUp className="text-brand-600" size={24} />
          Как се разпределят парите ни?
        </h3>
        <p className="text-slate-600 text-xs md:text-sm mt-2 font-light">
          Изследвайте статистиката от първите 20 обществени поръчки през интерактивните табове по-долу:
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-3 gap-2 bg-slate-200/50 p-1 rounded-xl mb-8 relative z-10 border border-slate-200">
        <button
          onClick={() => { setActiveTab('competition'); setSimStep('intro'); }}
          className={`py-3 px-2 text-center rounded-lg font-syne font-bold text-[10px] md:text-xs tracking-wider uppercase transition-all flex flex-col md:flex-row items-center justify-center gap-2 ${
            activeTab === 'competition'
              ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25 font-black'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/30'
          }`}
        >
          <Users size={14} />
          <span>Конкуренция</span>
        </button>
        <button
          onClick={() => { setActiveTab('pricing'); setSimStep('intro'); }}
          className={`py-3 px-2 text-center rounded-lg font-syne font-bold text-[10px] md:text-xs tracking-wider uppercase transition-all flex flex-col md:flex-row items-center justify-center gap-2 ${
            activeTab === 'pricing'
              ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25 font-black'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/30'
          }`}
        >
          <Award size={14} />
          <span>Цени на Договорите</span>
        </button>
        <button
          onClick={() => { setActiveTab('simulator'); setSimStep('intro'); }}
          className={`py-3 px-2 text-center rounded-lg font-syne font-bold text-[10px] md:text-xs tracking-wider uppercase transition-all flex flex-col md:flex-row items-center justify-center gap-2 ${
            activeTab === 'simulator'
              ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25 font-black'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/30'
          }`}
        >
          <Play size={14} />
          <span>Симулатор на Поръчки</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 min-h-[350px]">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: COMPETITION LEVEL */}
          {activeTab === 'competition' && (
            <motion.div
              key="competition"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h4 className="text-lg font-syne font-bold italic text-slate-900 mb-4 flex items-center gap-2">
                  <ShieldAlert className="text-brand-600" size={18} />
                  Резултат от Търговете: 85% без Конкуренция
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-light mb-4">
                  В масовия случай (85% от проучените договори), общината допуска само един-единствен участник до финала. Други потенциални фирми или се отказват поради нереалистични изисквания, или биват премахнати по формални грешки.
                </p>
                <div className="space-y-3 bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 text-brand-600">
                    <CheckCircle2 size={16} className="text-brand-600 flex-shrink-0" />
                    <span className="text-xs text-slate-700 font-light">
                      <strong className="font-semibold text-slate-900">15% конкурентни процедури:</strong> Едва 3 от 20 изследвани поръчки допускат реално пазарно състезание.
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-red-600">
                    <AlertTriangle size={16} className="text-red-500 flex-shrink-0" />
                    <span className="text-xs text-slate-700 font-light">
                      <strong className="font-semibold text-slate-900">85% празни търгове:</strong> Кандидатът е напълно сам в процедурата и сам определя цената си.
                    </span>
                  </div>
                </div>
              </div>

              {/* Graphical Visualization */}
              <div className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm relative">
                {/* SVG Ring Chart */}
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                      cx="96"
                      cy="96"
                      r="70"
                      className="stroke-slate-100"
                      strokeWidth="16"
                      fill="transparent"
                    />
                    {/* 85% Segment (Alone/No Competition) */}
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="70"
                      className="stroke-red-500"
                      strokeWidth="16"
                      fill="transparent"
                      strokeDasharray="440"
                      initial={{ strokeDashoffset: 440 }}
                      animate={{ strokeDashoffset: 440 * (1 - 0.85) }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                    {/* 15% Segment (With Competition) */}
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="70"
                      className="stroke-brand-600"
                      strokeWidth="16"
                      fill="transparent"
                      strokeDasharray="440"
                      initial={{ strokeDashoffset: 440 }}
                      animate={{ strokeDashoffset: 440 * (1 - 0.15) }}
                      // Shift to start where the other circle ends
                      transform="rotate(306 96 96)"
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-syne font-black italic text-red-500">85%</span>
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-500">Без конкуренция</span>
                  </div>
                </div>

                {/* Legend labels */}
                <div className="flex gap-6 mt-6 justify-center text-xs font-sans">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="text-slate-600 font-light">Само 1 кандидат (85%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-brand-600 rounded-full" />
                    <span className="text-slate-600 font-light">2+ кандидати (15%)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: PRICING RELATION TO BUDGET */}
          {activeTab === 'pricing' && (
            <motion.div
              key="pricing"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h4 className="text-lg font-syne font-bold italic text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="text-brand-600" size={18} />
                  80% са на „Хирургически Точни“ Цени
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-light mb-4">
                  При липса на конкуренти възниква следният парадокс - печелившите оферти за обществените ни поръчки са изключително близки или напълно идентични (до последната стотинка) с максимално заложения в бюджета финансов праг на Общината.
                </p>
                <p className="text-slate-700 text-xs italic font-semibold border-l-2 border-brand-600 pl-4 py-1 mb-4">
                  На напълно свободния пазар фирмите предлагат намаления, за да заслужат договора. В Русе отстъпки на практика няма.
                </p>
              </div>

              {/* Price comparison visualization */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm space-y-6">
                <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="font-semibold text-slate-700">Общински Бюджет (Праг по закон)</span>
                    <span className="text-slate-500 font-mono font-bold">100 000 лв. (100%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                    <div className="bg-slate-400 h-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="font-semibold text-red-500 flex items-center gap-1.5">
                      Средна печеливша оферта в Русе
                    </span>
                    <span className="text-red-500 font-mono font-bold">99 750 лв. (99.75%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-red-500 h-full"
                      initial={{ width: 0 }}
                      animate={{ width: "99.75%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                  <div className="text-[10px] text-red-500 mt-1 font-light italic">
                    Спестени публични средства за гражданите: под 0.25%
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="font-semibold text-brand-600 flex items-center gap-1.5">
                      Конкурентна среда (Стара Загора, Бургас)
                    </span>
                    <span className="text-brand-600 font-mono font-bold">84 500 лв. (84.50%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-brand-600 h-full"
                      initial={{ width: 0 }}
                      animate={{ width: "84.5%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    />
                  </div>
                  <div className="text-[10px] text-brand-600 mt-1 font-light italic">
                    Реални спестени и пренасочени публични средства: 15.5% (Намаление от конкуренция)
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: PROCUREMENT SIMULATOR (GAMIFIED EXPERIENCE) */}
          {activeTab === 'simulator' && (
            <motion.div
              key="simulator"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              {simStep === 'intro' && (
                <div className="text-center max-w-2xl mx-auto py-4">
                  <h4 className="text-xl font-syne font-black italic text-slate-900 mb-4 flex items-center justify-center gap-2">
                    <FileText className="text-brand-600" size={24} />
                    Интерактивен Симулатор на Търгове
                  </h4>
                  <p className="text-slate-600 text-sm font-light mb-6">
                    Влезте в ролята на сериозен местен бизнес, който подава оферта от <strong className="text-slate-950 font-semibold">85 000 лв.</strong> (с висококачествени материали) за проект на стойност <span className="text-slate-500 font-medium">100 000 лв.</span>
                  </p>
                  
                  <div className="p-4 bg-white border border-slate-200 rounded-xl text-left mb-6 max-w-lg mx-auto shadow-sm">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Вашите параметри:</span>
                    <ul className="text-xs space-y-1.5 text-slate-700 font-light">
                      <li className="flex justify-between border-b border-slate-100 pb-1"><span>Прогнозна цена на общината:</span> <b className="text-slate-900 font-semibold">100 000 BGN</b></li>
                      <li className="flex justify-between border-b border-slate-100 pb-1"><span>Вашата честна цена:</span> <b className="text-brand-600 font-semibold">85 000 BGN (Спестявате 15%)</b></li>
                      <li className="flex justify-between"><span>Качество на офертата:</span> <b className="text-emerald-600 font-semibold">Сертифицирано & Отлично</b></li>
                    </ul>
                  </div>

                  <p className="text-xs text-slate-500 mb-6 font-light">Изберете кой модел на управление искате да тествате:</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => runSimulation('current')}
                      className="px-6 py-4 bg-red-50 border border-red-200 text-red-700 rounded-xl hover:bg-red-100 transition-colors text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 flex-1 shadow-sm"
                    >
                      <AlertTriangle size={16} />
                      Модел „Сегашното Управление“
                    </button>
                    <button
                      onClick={() => runSimulation('reformed')}
                      className="px-6 py-4 bg-brand-50 border border-brand-200 text-brand-700 rounded-xl hover:bg-brand-100 transition-colors text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 flex-1 shadow-sm"
                    >
                      <CheckCircle2 size={16} />
                      Модел „Прозрачна Отворена Система“
                    </button>
                  </div>
                </div>
              )}

              {simStep === 'running' && (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 border-4 border-brand-200 rounded-full" />
                    <div className="absolute inset-0 border-4 border-brand-600 border-t-transparent rounded-full animate-spin" />
                  </div>
                  <h5 className="text-sm font-bold uppercase tracking-widest text-slate-700">
                    {simModel === 'current' ? 'Оценяване на офертите по „сегашния“ модел на Русе...' : 'Оценяване на офертите по нов прозрачен дигитален модел...'}
                  </h5>
                  <p className="text-slate-500 text-xs mt-2 font-light">Проверка на административни изисквания, технически спецификации и точкова методология...</p>
                  
                  {/* Fake timeout process animation */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.2 }}
                    onAnimationComplete={() => setSimStep('results')}
                    className="w-48 bg-slate-200 h-1 rounded-full mt-6 overflow-hidden"
                  >
                    <div className="bg-brand-600 h-full w-full" />
                  </motion.div>
                </div>
              )}

              {simStep === 'results' && (
                <div className="py-4 md:px-6">
                  {simModel === 'current' ? (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-red-50 border border-red-100 p-6 rounded-2xl md:p-8 shadow-sm"
                    >
                      <div className="flex items-center gap-4 mb-4 text-red-600">
                        <AlertTriangle size={36} className="bg-white p-2 rounded-xl border border-red-100 shadow-sm" />
                        <div>
                          <h4 className="text-lg font-syne font-black italic">Вашата оферта е ОТСТРАНЕНА!</h4>
                          <span className="text-xs text-red-500 font-medium">Резултати от заседание на комисията</span>
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                        Поради изключително сложната и субективна точкова система, оценителят е присъдил максимален брой точки на „позната“ куха фирма, която подава оферта от <strong className="text-slate-900 font-semibold">99 900 лв.</strong> (99.9% от максимума). 
                        Вашата кандидатура е елиминирана на етап технически преглед под предлог, че <em className="text-red-700">„номерацията на приложения 4 и 12 е объркана, а мотивационното писмо съдържа несъответстващ шрифт“</em>.
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4 text-xs font-light bg-white p-4 border border-slate-100 shadow-sm rounded-xl mb-6">
                        <div>
                          <span className="text-slate-500 block mb-0.5">Възложител заплаща:</span>
                          <span className="text-base font-bold text-red-600">99 900 лв. (Загуба на данъци)</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block mb-0.5">Разлика/Спестени средства:</span>
                          <span className="text-base font-bold text-slate-600">100 лв. (0.1%)</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-red-100 pt-6">
                        <span className="text-xs text-slate-500 italic">Сравнете как същата поръчка минава при прозрачен модел:</span>
                        <div className="flex gap-3 w-full sm:w-auto">
                          <button
                            onClick={() => { setSimStep('intro'); }}
                            className="px-4 py-2.5 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 flex-1 sm:flex-none"
                          >
                            <RotateCcw size={12} /> Назад
                          </button>
                          <button
                            onClick={() => runSimulation('reformed')}
                            className="px-5 py-2.5 bg-brand-600 text-white hover:bg-brand-500 rounded-lg transition-colors text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 flex-1 sm:flex-none shadow-sm"
                          >
                            Виж Новия Модел <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-brand-50 border border-brand-100 p-6 rounded-2xl md:p-8 shadow-sm"
                    >
                      <div className="flex items-center gap-4 mb-4 text-brand-600">
                        <CheckCircle2 size={36} className="bg-white p-2 rounded-xl border border-brand-100 shadow-sm" />
                        <div>
                          <h4 className="text-lg font-syne font-black italic">Вашата оферта е СПЕЧЕЛИЛА!</h4>
                          <span className="text-xs text-brand-600 font-medium">Прозрачна електронна система за оценка</span>
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                        При новия дигитален и отворен модел на общински поръчки на Росен Симеонов, всички субективни и нагласени изисквания се премахват. Вашата сериозна оферта за <strong className="text-slate-900 font-semibold">85 000 лв.</strong> се разглежда при абсолютно равни и детайлно публикувани в интернет условия. Резултатът е заслужена победа чрез по-съвършено качество на по-атрактивна цена!
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4 text-xs font-light bg-white p-4 border border-slate-100 shadow-sm rounded-xl mb-6">
                        <div>
                          <span className="text-slate-500 block mb-0.5">Възложител заплаща:</span>
                          <span className="text-base font-bold text-brand-600">85 000 BGN</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block mb-0.5">Директна спестена сума за града:</span>
                          <span className="text-base font-bold text-emerald-600">15 000 BGN (15% Спестяване)</span>
                        </div>
                      </div>

                      <div className="text-slate-500 text-xs font-light leading-relaxed mb-6">
                        Това спестяване от <strong className="text-slate-950 font-semibold">15%</strong> при всички общински търгове би върнало милиони левове обратно в бюджета на Русе. Тези средства могат да бъдат пренасочени за ремонт на квартали, детски градини, чист въздух и истински инвестиции в индустриални зони!
                      </div>

                      <div className="flex flex-wrap gap-3 items-center justify-between border-t border-brand-100 pt-6">
                        <span className="text-xs text-slate-500 italic">Искате ли да тествате и да сравните отново?</span>
                        <button
                          onClick={() => { setSimStep('intro'); }}
                          className="px-6 py-3 bg-white border border-slate-200 text-brand-600 hover:text-brand-750 hover:bg-slate-50 rounded-lg transition-colors text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
                        >
                          <RotateCcw size={14} /> Нулиране & Рестарт
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Footer Info Badge */}
      <div className="relative z-10 mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 gap-4">
        <span className="flex items-center gap-1.5 justify-center"><HelpCircle size={12} /> Анализира се извадка от първите 20 реални поръчки на Русе за 2025/2026</span>
        <span className="text-brand-600 font-syne font-bold italic">За едно прозрачно утре</span>
      </div>
    </div>
  );
}
