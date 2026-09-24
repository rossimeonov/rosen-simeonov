// Post-build стъпка: генерира dist/publications/<slug>/index.html за всяка
// статия със собствени <title>/og:*/twitter:* тагове, взети от данните на
// статията. Причината: сайтът е чист client-side SPA (без SSR), а
// Facebook/Viber/WhatsApp/LinkedIn не изпълняват JavaScript, когато правят
// preview на споделен линк — виждат само суровия HTML файл. Без тази стъпка
// всяка статия щеше да показва общите (site-wide) og тагове от index.html.
// Пусни с: npm run build (извиква се автоматично след vite build)
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { getAllPosts } from '../src/blogUtils.ts';

const SITE_URL = 'https://www.rosensimeonov.com';
const DIST_DIR = path.join(process.cwd(), 'dist');

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function absoluteUrl(pathOrUrl) {
  return /^https?:\/\//.test(pathOrUrl) ? pathOrUrl : `${SITE_URL}${pathOrUrl}`;
}

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`Не намерих таг за замяна: ${pattern}`);
  }
  return html.replace(pattern, replacement);
}

async function run() {
  const template = await readFile(path.join(DIST_DIR, 'index.html'), 'utf-8');
  const posts = getAllPosts();

  for (const post of posts) {
    const title = escapeHtml(post.seo?.title || post.seoTitle || post.title);
    const description = escapeHtml(post.seo?.description || post.seoDescription || post.excerpt);
    const image = absoluteUrl(post.image);
    const url = `${SITE_URL}/publications/${post.slug}`;

    let html = template;
    html = replaceTag(html, /<title>.*?<\/title>/s, `<title>${title}</title>`);
    html = replaceTag(html, /<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${description}" />`);
    html = replaceTag(html, /<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${url}" />`);
    html = replaceTag(html, /<meta property="og:type" content=".*?" \/>/s, `<meta property="og:type" content="article" />`);
    html = replaceTag(html, /<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${url}" />`);
    html = replaceTag(html, /<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${title}" />`);
    html = replaceTag(html, /<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${description}" />`);
    html = replaceTag(html, /<meta property="og:image" content=".*?" \/>/s, `<meta property="og:image" content="${image}" />`);
    html = replaceTag(html, /<meta property="twitter:url" content=".*?" \/>/s, `<meta property="twitter:url" content="${url}" />`);
    html = replaceTag(html, /<meta property="twitter:title" content=".*?" \/>/s, `<meta property="twitter:title" content="${title}" />`);
    html = replaceTag(html, /<meta property="twitter:description" content=".*?" \/>/s, `<meta property="twitter:description" content="${description}" />`);
    html = replaceTag(html, /<meta property="twitter:image" content=".*?" \/>/s, `<meta property="twitter:image" content="${image}" />`);

    const outDir = path.join(DIST_DIR, 'publications', post.slug);
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, 'index.html'), html, 'utf-8');
  }

  console.log(`[prerender-og] Генерирани ${posts.length} статични страници с собствени og тагове в dist/publications/*/index.html`);
}

run().catch((err) => {
  console.error('[prerender-og] Провал:', err.message);
  process.exit(1);
});
