import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export function Cookies() {
  return (
    <div className="pt-32 pb-32 bg-white selection:bg-brand-600 selection:text-white">
      <Helmet>
        <title>Политика за бисквитки | Росен Симеонов</title>
      </Helmet>

      <section className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-syne font-black italic tracking-tight text-slate-950">Политика за бисквитки</h1>
            <p className="text-slate-500 font-light italic">Последна актуализация: 18 май 2026 г.</p>
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed">
            <p>
              Нашият уебсайт използва „бисквитки“ (cookies), за да подобри Вашето потребителско преживяване и да анализира трафика.
            </p>

            <h2 className="text-2xl font-bold italic text-slate-950 mt-12 mb-6">1. Какво представляват бисквитките?</h2>
            <p>
              Бисквитките са малки текстови файлове, които се съхраняват на Вашия компютър или мобилно устройство, когато посещавате даден уебсайт. Те позволяват на сайта да запомни Вашите действия и предпочитания.
            </p>

            <h2 className="text-2xl font-bold italic text-slate-950 mt-12 mb-6">2. Какви бисквитки използваме?</h2>
            <ul>
              <li><strong>Необходими бисквитки:</strong> Те са важни за функционирането на сайта и не могат да бъдат изключени.</li>
              <li><strong>Аналитични бисквитки:</strong> Помагат ни да разберем как посетителите взаимодействат със сайта (напр. Google Analytics).</li>
            </ul>

            <h2 className="text-2xl font-bold italic text-slate-950 mt-12 mb-6">3. Как да управлявате бисквитките?</h2>
            <p>
              Можете да контролирате и/или изтривате бисквитките чрез настройките на Вашия браузър. Можете да изтриете всички бисквитки, които вече са на Вашия компютър, а също така можете да настроите повечето браузъри да ги блокират.
            </p>
            <p>
              Ако направите това обаче, може да се наложи ръчно да настройвате някои предпочитания всеки път, когато посещавате сайт, а някои услуги и функции може да не работят.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
