import { readFileSync, existsSync } from 'node:fs';

const required = ['index.html','assets/styles.css','assets/site.js','favicon.svg'];
const fail = [];
for (const file of required) if (!existsSync(file)) fail.push(`missing required file: ${file}`);

if (!fail.length) {
  const html = readFileSync('index.html','utf8');
  const css = readFileSync('assets/styles.css','utf8');
  const js = readFileSync('assets/site.js','utf8');

  if (/<style[\s>]/i.test(html)) fail.push('inline <style> blocks are prohibited');
  if (/<script(?![^>]*\bsrc=)[^>]*>/i.test(html)) fail.push('inline <script> blocks are prohibited');
  if (!html.includes('/assets/styles.css')) fail.push('canonical stylesheet is not linked');
  if (!html.includes('/assets/site.js')) fail.push('canonical script is not linked');

  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  const duplicates = ids.filter((id,i)=>ids.indexOf(id)!==i);
  if (duplicates.length) fail.push(`duplicate ids: ${[...new Set(duplicates)].join(', ')}`);

  const idSet = new Set(ids);
  const fragments = [...html.matchAll(/href="#([^"]+)"/g)].map(m=>m[1]);
  const missingFragments = fragments.filter(id=>!idSet.has(id));
  if (missingFragments.length) fail.push(`broken fragment targets: ${[...new Set(missingFragments)].join(', ')}`);

  for (const tag of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt="[^"]+"/i.test(tag[0])) fail.push(`image missing non-empty alt: ${tag[0].slice(0,100)}`);
  }

  for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)) {
    if (!/\brel="[^"]*noopener[^"]*"/i.test(tag[0])) fail.push(`target=_blank link missing noopener: ${tag[0].slice(0,120)}`);
  }

  for (const stale of ['premium.html','premium.css','premium.js','hotfix.css','site.css']) {
    if (html.includes(stale) || css.includes(stale) || js.includes(stale)) fail.push(`stale implementation reference: ${stale}`);
  }

  if (!css.includes(':focus-visible')) fail.push('focus-visible styling missing');
  if (!css.includes('prefers-reduced-motion')) fail.push('reduced-motion handling missing');
  if (!js.includes("e.key==='Escape'")) fail.push('Escape-key mobile-menu handling missing');
  if (!js.includes("aria-controls")) fail.push('accordion aria-controls wiring missing');

  const insecure = [...html.matchAll(/(?:href|src)="(http:\/\/[^"]+)"/g)].map(m=>m[1]);
  if (insecure.length) fail.push(`insecure http resources: ${insecure.join(', ')}`);
}

if (fail.length) {
  console.error('Site verification failed:');
  for (const item of fail) console.error(`- ${item}`);
  process.exit(1);
}
console.log('Site verification passed.');
