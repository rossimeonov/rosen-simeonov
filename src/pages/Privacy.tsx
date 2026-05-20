import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export function Privacy() {
  return (
    <div className="pt-32 pb-32 bg-white selection:bg-brand-600 selection:text-white">
      <Helmet>
        <title>Политика за поверителност | Росен Симеонов</title>
      </Helmet>

      <section className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-syne font-black italic tracking-tight text-slate-950">Политика за поверителност</h1>
            <p className="text-slate-500 font-light italic">Последна актуализация: 18 май 2026 г.</p>
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed">
            <h2 className="text-2xl font-bold italic text-slate-950 mt-12 mb-6">1. Обща информация</h2>
            <p>
              Вашата поверителност е важна за нас. Тази политика обяснява как събираме, използваме и защитаваме Вашите лични данни, когато посещавате уебсайта rosensimeonov.com.
            </p>

            <h2 className="text-2xl font-bold italic text-slate-950 mt-12 mb-6">2. Какви данни събираме?</h2>
            <p>
              Ние събираме данни само в следните случаи:
            </p>
            <ul>
              <li><strong>Абонамент за бюлетин:</strong> Събираме Вашия имейл адрес, когато се запишете доброволно.</li>
              <li><strong>Контактна форма:</strong> Събираме Вашето име и имейл, за да отговорим на Вашето запитване.</li>
              <li><strong>Технически данни:</strong> Вашият IP адрес и тип браузър (чрез бисквитки) за анализ на посещаемостта.</li>
            </ul>

            <h2 className="text-2xl font-bold italic text-slate-950 mt-12 mb-6">3. Цел на обработката</h2>
            <p>
              Използваме Вашите данни единствено за:
            </p>
            <ul>
              <li>Изпращане на информационни материали (бюлетин).</li>
              <li>Осъществяване на комуникация по Ваша инициатива.</li>
              <li>Подобряване на функционалността на уебсайта.</li>
            </ul>

            <h2 className="text-2xl font-bold italic text-slate-950 mt-12 mb-6">4. Вашите права</h2>
            <p>
              Съгласно GDPR, Вие имате право на:
            </p>
            <ul>
              <li>Достъп до Вашите данни.</li>
              <li>Коригиране или изтриване („право да бъдете забравени“).</li>
              <li>Ограничаване на обработката.</li>
              <li>Оттегляне на съгласието по всяко време.</li>
            </ul>

            <h2 className="text-2xl font-bold italic text-slate-950 mt-12 mb-6">5. Контакт</h2>
            <p>
              За въпроси относно Вашите данни, можете да се свържете с нас чрез формата за контакт на заглавната страница.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
