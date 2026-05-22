/**
 * Централизирано управление на изображенията
 * Тук можете да смените линковете с локални пътища (напр. '/assets/rosen.jpg')
 */
// Динамично сканиране на папка src/images за локално качени изображения
const localImages = (import.meta as any).glob('./images/*', { eager: true }) as Record<string, any>;

/**
 * Помощна функция за автоматично превключване към локално качена снимка,
 * ако такава съществува в src/images/, в противен случай използва отдалечения линк.
 * Поддържа указване на масив от файлови имена за гъвкаво търсене по приоритет.
 */
function getLocalOrFallback(fileNames: string | string[], fallbackUrl: string): string {
  const names = Array.isArray(fileNames) ? fileNames : [fileNames];
  
  // Create an extended list that prioritizes the WebP version of each filename first
  const prioritizedNames: string[] = [];
  for (const name of names) {
    const dotIndex = name.lastIndexOf('.');
    if (dotIndex !== -1) {
      const baseName = name.substring(0, dotIndex);
      prioritizedNames.push(`${baseName}.webp`);
    } else {
      prioritizedNames.push(`${name}.webp`);
    }
    prioritizedNames.push(name);
  }
  
  for (const fileName of prioritizedNames) {
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
  hero_portrait: "/images/rosen-simeonov-ruse.JPG",
  hero_bg: "/images/ruse.jpg",
  about_portrait: "/images/rosen-simeonov-ruse.JPG",
  contact_bg: "/images/ruse.jpg",
  media_placeholder: "/images/ruse.jpg",
  
  // Категории в блога
  blog_investments: "/images/ruse.jpg",
  blog_finance: "/images/ruse.jpg",
  blog_city: "/images/ruse.jpg",
  blog_logistics: "/images/ruse.jpg",
  blog_procurement: getLocalOrFallback(['obshtestveni-poruchki.jpeg', 'obshtestveni-poruchki.jpg'], "/images/obshtestveni-poruchki.jpeg"),
  blog_procurement_inline: getLocalOrFallback(['obshtetsveni-poruchki-ruse.jpg', 'obshtetsveni-poruchki-ruse.jpeg'], "/images/obshtetsveni-poruchki-ruse.jpg"),
  blog_georgiovden: "/images/rosen%20simeonov%20ivan%20belchev%20nadejda%20iordanova%20deyan%20gerasimov.jpg",
  blog_georgiovden_secondary: "/images/rosen%20simeonov-ivan%20belchev.jpg",

  // Биография / За мен
  about_main: "/images/rosen-simeonov-ruse.JPG",
  about_achiever: "/images/top%20achiever%20rosen%20simeonov.png",
  about_academy: "/images/rosen%20simeonov%20radan%20kanve%20atanas%20burov%20akademia.jpg",
  about_family: "/images/rosen%20simeonov%20semeistvo.jpg",
  about_kickbox: "/images/rosen%20simeonov%20black%20belt%20kick%20box.jpg",
  about_conference: "/images/finansova-konferncia-invest-pro-rosen-simeonov.jpg",
  about_mattison_logo: "/images/mattison-scaffolding.jpg",
  about_mattison_manager: "/images/rosen-simeonov-manager-mattison.jpg",
  about_mattison_yard: "/images/mattison-scaffolding-yard.jpg",
  about_graduation: "/images/top%20achiever%20rosen%20simeonov.png",
  about_dsb: "/images/Rosen%20Simeonov%20poema%20posta%20obshtinski%20predsedatel.jpg",
};
