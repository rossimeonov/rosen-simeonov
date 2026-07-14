// One-off image optimization pass. Re-run with: npm run optimize-images
// Resizes each source image to its real display size, writes WebP (q80) +
// JPEG fallback pairs. Single-size images overwrite the .webp in place and
// add a sibling .jpg. Multi-size (srcset) entries write `<name>-<width>.ext`.
import sharp from 'sharp';
import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const QUALITY = 80;

const manifest = [
  { file: 'rosen-simeonov-ruse.webp', widths: [640, 1080, 1920] },
  { file: 'ruse.webp', width: 1920 },
  { file: 'mattison-scaffolding.webp', width: 800 },
  { file: 'rosen-simeonov-manager-mattison.webp', width: 900 },
  { file: 'Rosen-Simeonov-poema-posta-obshtinski-predsedatel.webp', width: 1100 },
  { file: 'finansova-konferncia-invest-pro-rosen-simeonov.webp', width: 1100 },
  { file: 'rosen-simeonov-semeistvo.webp', width: 1400 },
  { file: 'rosen-simeonov-black-belt-kick-box.webp', width: 640 },
  { file: 'rosen-simeonov-radan-kanve-atanas-burov-akademia.webp', width: 560 },
  { file: 'rosen-simeonov-graduation.jpg', width: 500 },
  { file: 'top-achiever-rosen-simeonov.webp', width: 500 },
  { file: 'obshtestveni-poruchki-article.webp', width: 1600 },
  { file: 'obshtetsveni-poruchki-ruse.webp', width: 526 },
  { file: 'rosen-simeonov-ivan-belchev-nadejda-iordanova-deyan-gerasimov.webp', width: 1600 },
  { file: 'rosen-simeonov-ivan-belchev.webp', width: 1000 },
  { file: 'business-meeting-ruse.webp', width: 1600 },
  { file: 'business-meeting-ruse-db.webp', width: 1000 },
  { file: 'dnevnik-medii-mulchanie.jpg', width: 1600 },
  { file: 'pencho-milkov-invetinruse.webp', width: 1000 },
  { file: 'invest-in-stara-zagora.webp', width: 1000 },
  { file: 'invest-in-burgas.webp', width: 1000 },
];

function baseName(file) {
  return file.replace(/\.(webp|jpg|jpeg)$/i, '');
}

async function writePair(inputPath, outBase, width) {
  const inputBuffer = await readFile(inputPath);
  const resized = sharp(inputBuffer).resize({ width, withoutEnlargement: true });
  const webpPath = path.join(IMAGES_DIR, `${outBase}.webp`);
  const jpgPath = path.join(IMAGES_DIR, `${outBase}.jpg`);

  const webpInfo = await resized.clone().webp({ quality: QUALITY }).toFile(webpPath);
  await resized.clone().flatten({ background: '#ffffff' }).jpeg({ quality: QUALITY, mozjpeg: true }).toFile(jpgPath);

  return { width: webpInfo.width, height: webpInfo.height };
}

async function run() {
  const results = [];

  for (const entry of manifest) {
    const inputPath = path.join(IMAGES_DIR, entry.file);
    const base = baseName(entry.file);

    if (entry.widths) {
      const dims = [];
      for (const w of entry.widths) {
        const outBase = `${base}-${w}`;
        const dim = await writePair(inputPath, outBase, w);
        dims.push({ width: w, ...dim });
      }
      results.push({ file: entry.file, outputs: dims });
    } else {
      const dim = await writePair(inputPath, base, entry.width);
      results.push({ file: entry.file, outputs: [{ width: entry.width, ...dim }] });
    }
  }

  console.log('\nDone. Output dimensions (use these for width/height props):\n');
  for (const r of results) {
    for (const o of r.outputs) {
      console.log(`${r.file} @ ${o.width}w -> ${o.width}x${o.height}`);
    }
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
