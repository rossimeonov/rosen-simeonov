import { businessMeetingPost } from './businessMeeting';
import { economicStagnationPost } from './economicStagnation';
import { gergyovdenPost } from './gergyovden';
import { publicProcurementPost } from './publicProcurement';

// ==========================================
// МЕДИЙНИ УЧАСТИЯ И ИНТЕРВЮТА
// ==========================================
export interface MediaAppearance {
  source: string;
  date: string;
  description: string;
  link: string;
}

export const mediaAppearances: MediaAppearance[] = [
  {
    source: 'Дунав Мост',
    date: '30.11.2025',
    description: 'Росен Симеонов: В Русе плащаме най-високите ... данни при рекордно ниска събираемост', // Твоето първо участие
    link: 'https://www.dunavmost.com/novini/rosen-simeonov-v-ruse-plashtame-nai-visokite-danatsi-pri-rekordno-niska-sabiraemost'
  },
  {
    source: 'Rousse.info',
    date: '17.03.2026',
    description: 'Коалиция ПП-ДБ регистрира листата си с кандидати в Русе.',
    link: 'https://rousse.info/koalicziya-prodalzhavame-promyanata-demokratichna-balgariya-registrira-lista-ot-kandidati-za-narodni-predstaviteli-v-19-i-mir-ruse-video/'
  },
  {
    source: 'Вестник Утро',
    date: '21.12.2025',
    description: 'Новият председател на ДСБ в Русе Росен Симеонов: Трябва да сме сред хората, да отговаряме и на неудобните въпроси дори. Това е начинът',
    link: 'https://utroruse.com/article/1179302/'
  },
  {
    source: 'Медийна позиция',
    date: '04.02.2026',
    description: 'ПП - ДБ дават сделката за големия ТИР паркинг в Русе на прокуратурата',
    link: 'https://kiss13.net/news/ruse/pp-db-davat-sdelkata-za-golemiya-tir-parking-v-ruse-na-prokuraturata' // Запазваме оригиналния линк към репортажа
  },
  {
    source: 'Economy.bg',
    date: '30.01.2026',
    description: 'За грешките на индивидуалните инвеститори и нуждата от финансова дисциплина.',
    link: 'https://www.economy.bg/' // Ако имаш точен линк за тази статия, го подмени тук
  }
];

export const blogPosts = [
  gergyovdenPost,
  economicStagnationPost,
  publicProcurementPost,
  businessMeetingPost
];