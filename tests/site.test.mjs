import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const html = readFileSync('index.html','utf8');
const css = readFileSync('assets/styles.css','utf8');
const js = readFileSync('assets/site.js','utf8');

test('single canonical implementation is used', () => {
  assert.match(html, /\/assets\/styles\.css/);
  assert.match(html, /\/assets\/site\.js/);
  assert.doesNotMatch(html, /<style[\s>]/i);
  assert.doesNotMatch(html, /<script(?![^>]*\bsrc=)[^>]*>/i);
});

test('all internal fragment links resolve', () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
  const fragments = [...html.matchAll(/href="#([^"]+)"/g)].map(m=>m[1]);
  for (const target of fragments) assert.ok(ids.has(target), `missing #${target}`);
});

test('ids are unique', () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(new Set(ids).size, ids.length);
});

test('accessibility guardrails remain present', () => {
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(js, /aria-controls/);
  assert.match(js, /Escape/);
});

test('all images include alt text', () => {
  for (const match of html.matchAll(/<img\b[^>]*>/gi)) assert.match(match[0], /\balt="[^"]+"/i);
});

test('legacy visual override names cannot return', () => {
  const all = html + css + js;
  for (const stale of ['premium.html','premium.css','premium.js','hotfix.css','site.css']) assert.doesNotMatch(all, new RegExp(stale.replace('.','\\.')));
});

test('authored Marrero identity and Compass remain part of the product', () => {
  assert.match(html, /id="brandIntro"/);
  assert.match(html, /id="guide"/);
  assert.match(html, /Marrero Compass/);
  const options = [...html.matchAll(/data-guide="[^"]+"/g)];
  assert.equal(options.length, 6);
  assert.match(js, /marrero-intro-seen/);
  assert.match(js, /guideData/);
});

test('all first-party destination pages exist', () => {
  const requiredPages = [
    'services/index.html','insurance/index.html','medicare/index.html',
    'life-retirement/index.html','agents/index.html','podcast/index.html',
    'community/index.html','sir-kendrick/index.html','schedule/index.html',
    'contact/index.html','about/index.html'
  ];
  for (const page of requiredPages) assert.ok(existsSync(page), `missing ${page}`);
});
