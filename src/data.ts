import { blogPosts as allBlogPosts } from './data/posts';

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface VisionPoint {
  title: string;
  description: string;
}

export interface MediaItem {
  source: string;
  description: string;
  link?: string;
  date?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rosen-simeonov/', icon: 'Linkedin' },
  { label: 'Facebook', href: 'https://www.facebook.com/rosen.simeonov.12', icon: 'Facebook' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@rossimeonov', icon: 'Music2' },
];

export const navItems: NavItem[] = [
  { label: 'Начало', href: '/' },
  { label: 'За Росен', href: '/about' },
  { label: 'Публикации', href: '/publications' },
  { label: 'Медии', href: '/media' },
  { label: 'Бюлетин', href: '/subscribe' },
  { label: 'Контакт', href: '/contact' },
];

// Твоите приоритети
export const visionPoints: VisionPoint[] = [
  { 
    title: 'Икономика и инвестиции', 
    description: 'Създаване на Инвестиционна агенция „Русе“ и подготовка на готови индустриални терени с изградена infrastructure, за да спрем да губим инвеститори в полза на други региони поради административно бездействие.' 
  },
  { 
    title: 'Финансова грамотност', 
    description: 'Стартиране на мащабна общинска инициатива за безплатни практически курсове по финансова грамотност и предприемачество за ученици, студенти и стартиращи бизнеси. Образованата общност е независима.' 
  },
  { 
    title: 'Градска среда', 
    description: 'Край на транспортната изолация на Русе. Въвеждане на интелигентно дигитално управление на трафика около Дунав мост и пренасочване на приходите от тир-паркингите директно за целеви ремонти на кварталните улици.' 
  },
  { 
    title: 'Млади хора', 
    description: 'Трансформация на Русе в регионален дигитален център. Общинска подкрепа за споделени работни пространства (Coworking hubs) и изграждане на работеща синергия между бизнеса и Русенския университет.' 
  },
  { 
    title: 'Прозрачност', 
    description: 'Въвеждане на публичен онлайн регистър в реално време за всяка една обществена поръчка, разход на администрацията и сделка с общинско имущество. Решенията за парите на Русе трябва да са на светло.' 
  },
  { 
    title: 'Отчетност', 
    description: 'Задължително включване на граждански съвети, независими експерти от реалния бизнес и академичната общност при планирането и контрола на големите инфраструктурни и социални проекти на града.' 
  }
];

// Насочваме масива
export const blogPosts = allBlogPosts;

// Обновените и подредени медийни участия
export const mediaAppearances: MediaItem[] = [
  { 
    source: 'Rousse.info', 
    description: 'Коалиция ПП-ДБ регистрира листата си с кандидати в Русе.', 
    link: 'https://rousse.info/koalicziya-prodalzhavame-promyanata-demokratichna-balgariya-registrira-lista-ot-kandidati-za-narodni-predstaviteli-v-19-i-mir-ruse-video/',
    date: '17.03.2026' 
  },
  { 
    source: 'Медийна позиция', 
    description: 'ПП - ДБ дават сделката за големия ТИР паркинг в Русе на прокуратурата', 
    link: 'https://kiss13.net/news/ruse/pp-db-davat-sdelkata-za-golemiya-tir-parking-v-ruse-na-prokuraturata',
    date: '04.02.2026' 
  },
  { 
    source: 'Economy.bg', 
    description: 'За грешките на индивидуалните инвеститори и нуждата от финансова дисциплина.', 
    link: 'https://www.economy.bg/featured/view/63166/Kakvi-greshki-dopuskat-naj-chesto-individualnite-investitori-v-Bylgariya',
    date: '30.01.2026' 
  },
  { 
    source: 'Вестник Утро', 
    description: 'Новият председател на ДСБ в Русе Росен Симеонов: Трябва да сме сред хората, да отговаряме и на неудобните въпроси дори. Това е начинът', 
    link: 'https://utroruse.com/article/1179302/',
    date: '21.12.2025' 
  },
  {
    source: 'Дунав Мост',
    description: 'Росен Симеонов: В Русе плащаме най-високите данъци, при рекордно ниска събираемост',
    link: 'https://www.dunavmost.com/novini/rosen-simeonov-v-ruse-plashtame-nai-visokite-danatsi-pri-rekordno-niska-sabiraemost',
    date: '30.11.2025'
  }
];

// Често задавани въпроси
export const faqs: FAQItem[] = [
  { 
    question: 'Кой е Росен Симеонов и защо се завръща в град Русе?', 
    answer: 'Аз съм русенец, икономист и финансист с MBA степен от Anglia Ruskin University и над 20 години опит в международния финансов сектор във Великобритания. Направих съзнателен личен избор да се завърна в родния си град, за да приложа натрупаните знания в полза на русенското общество и да докажа, че градът ни може да се развива прагматично, с европейска дисциплина и без партиен популизъм.' 
  },
  { 
    question: 'Какви са основните икономически проблеми на Община Русе днес?', 
    answer: 'Основните предизвикателства пред нашия град са административното бездействие, бавната дигитализация и сериозният дефицит на реална пазарна конкуренция при обществените поръчки. Това води до изтичане на публичен ресурс, ниски средни заплати и продължаващо икономическо изоставане от други водещи центрове в България.' 
  },
  { 
    question: 'Какво означава тезата, че финансовата грамотност е основа на личната свобода?', 
    answer: 'Когато хората притежават висока финансова култура, те управляват по-добре личните си бюджети, инвестират успешно и стават напълно независими от икономически зависимости и празни политически обещания. Финансово грамотните граждани изискват много по-висока отчетност и прозрачност от местната власт.' 
  },
  { 
    question: 'Какви са конкретните решения за привличане на инвестиции в региона?', 
    answer: 'Решенията изискват засилена дигитализация, премахване на бюрокрацията чрез реално обслужване на бизнеса на едно гише, и предварително изграждане на локална инфраструктура в индустриалните зони.' 
  }
];