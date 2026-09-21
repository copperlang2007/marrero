import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const required = ['index.html','assets/styles.css','assets/site.js','favicon.svg'];
const fail = [];
for (const file of required) if (!existsSync(file)) fail.push(`missing required file: ${file}`);

function walk(dir='.') {
  const out=[];
  for (const name of readdirSync(dir)) {
    if (['.git','node_modules','.vercel'].includes(name)) continue;
    const path=join(dir,name);
    const stat=statSync(path);
    if (stat.isDirectory()) out.push(...walk(path));
    else out.push(path);
  }
  return out;
}

const htmlFiles = walk('.').filter(path=>path.endsWith('.html')).map(path=>relative('.',path).replaceAll('\\','/')).sort();

function routeExists(href) {
  if (href === '/') return existsSync('index.html');
  const clean=href.split('#')[0].split('?')[0];
  if (!clean || clean === '/') return true;
  if (clean.startsWith('/assets/') || clean === '/favicon.svg') return true;
  const path=clean.replace(/^\//,'').replace(/\/$/,'');
  return existsSync(path) && statSync(path).isFile() || existsSync(join(path,'index.html'));
}

if (!fail.length) {
  const css = readFileSync('assets/styles.css','utf8');
  const js = readFileSync('assets/site.js','utf8');

  if (!htmlFiles.length) fail.push('no HTML pages found');

  for (const file of htmlFiles) {
    const html=readFileSync(file,'utf8');
    const prefix=`[${file}] `;

    if (/<style[\s>]/i.test(html)) fail.push(prefix+'inline <style> blocks are prohibited');
    if (/<script(?![^>]*\bsrc=)[^>]*>/i.test(html)) fail.push(prefix+'inline <script> blocks are prohibited');
    if (!html.includes('/assets/styles.css')) fail.push(prefix+'canonical stylesheet is not linked');
    if (!html.includes('/assets/site.js')) fail.push(prefix+'canonical script is not linked');

    const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
    const duplicates=ids.filter((id,i)=>ids.indexOf(id)!==i);
    if (duplicates.length) fail.push(prefix+`duplicate ids: ${[...new Set(duplicates)].join(', ')}`);

    const idSet=new Set(ids);
    const fragments=[...html.matchAll(/href="#([^"]+)"/g)].map(m=>m[1]);
    const missingFragments=fragments.filter(id=>!idSet.has(id));
    if (missingFragments.length) fail.push(prefix+`broken fragment targets: ${[...new Set(missingFragments)].join(', ')}`);

    for (const tag of html.matchAll(/<img\b[^>]*>/gi)) {
      if (!/\balt="[^"]+"/i.test(tag[0])) fail.push(prefix+`image missing non-empty alt: ${tag[0].slice(0,100)}`);
      const src=tag[0].match(/\bsrc="([^"]+)"/i)?.[1];
      if (src?.startsWith('https://')) {
        const host=new URL(src).hostname;
        if (host !== 'static.wixstatic.com') fail.push(prefix+`unapproved external image host: ${host}`);
      }
    }

    for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)) {
      if (!/\brel="[^"]*noopener[^"]*"/i.test(tag[0])) fail.push(prefix+`target=_blank link missing noopener: ${tag[0].slice(0,120)}`);
    }

    const hrefs=[...html.matchAll(/\bhref="([^"]+)"/g)].map(m=>m[1]);
    for (const href of hrefs) {
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      if (!routeExists(href)) fail.push(prefix+`broken internal route: ${href}`);
    }

    const insecure=[...html.matchAll(/(?:href|src)="(http:\/\/[^"]+)"/g)].map(m=>m[1]);
    if (insecure.length) fail.push(prefix+`insecure http resources: ${insecure.join(', ')}`);
  }

  const legacyPageUrl = /https:\/\/www\.marrerogroupllc\.com\//i;
  for (const file of htmlFiles) {
    const html=readFileSync(file,'utf8');
    if (legacyPageUrl.test(html)) fail.push(`[${file}] legacy Marrero site URL found; route internally instead`);
  }
  if (legacyPageUrl.test(js)) fail.push('assets/site.js legacy Marrero site URL found; route internally instead');

  for (const stale of ['premium.html','premium.css','premium.js','hotfix.css','site.css']) {
    if (css.includes(stale) || js.includes(stale)) fail.push(`stale implementation reference: ${stale}`);
    for (const file of htmlFiles) if (readFileSync(file,'utf8').includes(stale)) fail.push(`[${file}] stale implementation reference: ${stale}`);
  }

  if (!css.includes(':focus-visible')) fail.push('focus-visible styling missing');
  if (!css.includes('prefers-reduced-motion')) fail.push('reduced-motion handling missing');
  if (!js.includes("e.key==='Escape'")) fail.push('Escape-key mobile-menu handling missing');
  if (!js.includes('aria-controls')) fail.push('accordion aria-controls wiring missing');
}

if (fail.length) {
  console.error('Site verification failed:');
  for (const item of fail) console.error(`- ${item}`);
  process.exit(1);
}
console.log(`Site verification passed for ${htmlFiles.length} HTML pages.`);
