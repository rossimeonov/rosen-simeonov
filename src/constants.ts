/**
 * Централизирано управление на изображенията
 * Тук можете да смените линковете с локални пътища (напр. '/assets/rosen.jpg')
 */
// Динамично сканиране на папка src/images за локално качени изображения
const localImages = (import.meta as any).glob('./images/*', { eager: true }) as Record<string, any>;

/**
 * Помощна функция за автоматично превключване към локално качена снимка,
 * ако такава съществува в src/images/, в противен случай използва отдалечения линк.
 */
function getLocalOrFallback(fileName: string, fallbackUrl: string): string {
  const normalizedFileName = fileName.toLowerCase().trim();
  
  // Търсене на съвпадение по име на файл в сканираните локални файлове
  const matchingKey = Object.keys(localImages).find((filePath) => {
    const nameFromPath = filePath.split('/').pop() || '';
    return nameFromPath.toLowerCase().trim() === normalizedFileName;
  });

  if (matchingKey) {
    const fileModule = localImages[matchingKey];
    // Във Vite статичните активи (картинки) се връщат или като стрингове (импорт тип url), или през default експорт
    return typeof fileModule === 'string' ? fileModule : (fileModule?.default || fallbackUrl);
  }

  return fallbackUrl;
}

/**
 * Централизирано управление на изображенията.
 * Папката за Вашите снимки е 'src/images'. 
 * Когато качите файл там (напр. 'rosen-simeonov.JPG'), системата автоматично
 * ще го засече и ще го използва вместо отдалечения адрес.
 */
export const IMAGES = {
  hero_portrait: getLocalOrFallback(
    "rosen-simeonov.JPG", 
    "https://rosensimeonov.com/assets/images/rosen-simeonov.JPG"
  ),
  hero_bg: getLocalOrFallback(
    "hero_bg.jpg",
    "https://images.unsplash.com/photo-1605146761889-ee401df340ee?auto=format&fit=crop&q=80&w=2000"
  ),
  about_portrait: getLocalOrFallback(
    "about_portrait.jpg",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200"
  ),
  contact_bg: getLocalOrFallback(
    "contact_bg.jpg",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
  ),
  media_placeholder: getLocalOrFallback(
    "media_placeholder.jpg",
    "https://images.unsplash.com/photo-1478720143022-10d08220952d?auto=format&fit=crop&q=80&w=2000"
  ),
  
  // Категории в блога
  blog_investments: getLocalOrFallback(
    "blog_investments.jpg",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  ),
  blog_finance: getLocalOrFallback(
    "blog_finance.jpg",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  ),
  blog_city: getLocalOrFallback(
    "blog_city.jpg",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800"
  ),
  blog_logistics: getLocalOrFallback(
    "blog_logistics.jpg",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  ),

  // Биография / За мен
  about_main: getLocalOrFallback(
    "rosen-simeonov-ruse.JPG",
    "https://rosensimeonov.com/rosen-simeonov-ruse.JPG"
  ),
  about_achiever: getLocalOrFallback(
    "top achiever rosen simeonov.png",
    "https://rosensimeonov.com/top%20achiever%20rosen%20simeonov.png"
  ),
  about_academy: getLocalOrFallback(
    "rosen simeonov radan kanve atanas burov akademia.jpg",
    "https://rosensimeonov.com/rosen%20simeonov%20radan%20kanve%20atanas%20burov%20akademia.jpg"
  ),
  about_family: getLocalOrFallback(
    "rosen simeonov semeistvo.jpg",
    "https://rosensimeonov.com/rosen%20simeonov%20semeistvo.jpg"
  ),
  about_kickbox: getLocalOrFallback(
    "rosen simeonov black belt kick box.jpg",
    "https://rosensimeonov.com/rosen%20simeonov%20black%20belt%20kick%20box.jpg"
  ),
  about_conference: getLocalOrFallback(
    "finansova-konferncia-invest-pro-rosen-simeonov.jpg",
    "https://rosensimeonov.com/finansova-konferncia-invest-pro-rosen-simeonov.jpg"
  ),
  about_mattison_logo: getLocalOrFallback(
    "mattison-scaffolding.jpg",
    "https://rosensimeonov.com/mattison-scaffolding.jpg"
  ),
  about_mattison_manager: getLocalOrFallback(
    "rosen-simeonov-manager-mattison.jpg",
    "https://rosensimeonov.com/rosen-simeonov-manager-mattison.jpg"
  ),
  about_dsb: getLocalOrFallback(
    "Rosen Simeonov poema posta obshtinski predsedatel.jpg",
    "https://rosensimeonov.com/Rosen%20Simeonov%20poema%20posta%20obshtinski%20predsedatel.jpg"
  ),
};
