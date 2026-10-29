#!/usr/bin/env node
/*
  checar-site.js — verificador de rolagem horizontal e erros de console (kit-sites)
  Uso:  node kit-sites/ferramentas/checar-site.js site/ [--screens] [--out ../qa-screens]
    - renderiza cada *.html da pasta com Playwright (Chromium headless) em 320/375/768/1280px,
      com reducedMotion 'reduce' (os .reveal aparecem na captura);
    - imprime "<pagina> <largura> ok" ou "ROLAGEM HORIZONTAL" (scrollWidth > clientWidth) + erros de console;
    - --screens salva capturas de página inteira em <pasta-do-site>/../qa-screens/ (ou em --out).
  Requisito: `npm i playwright` (ou Playwright global) e o Chromium instalado (`npx playwright install chromium`).
  Saída 1 se houver rolagem horizontal ou erro de console em alguma página.
*/
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const dir = path.resolve(args.find((a) => !a.startsWith('--')) || '.');
const screens = args.includes('--screens');
const outIdx = args.indexOf('--out');
const outDir = path.resolve(outIdx > -1 && args[outIdx + 1] ? args[outIdx + 1] : path.join(dir, '..', 'qa-screens'));
const VIEWPORTS = [320, 375, 768, 1280];

let chromium;
try {
  ({ chromium } = require('playwright'));
} catch (e) {
  console.error('Playwright não encontrado: npm i playwright && npx playwright install chromium');
  process.exit(2);
}

(async () => {
  const pages = fs.readdirSync(dir).filter((f) => f.endsWith('.html')).sort();
  if (!pages.length) { console.error('Nenhum .html em ' + dir); process.exit(2); }
  if (screens) fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  let failed = false;
  for (const file of pages) {
    for (const width of VIEWPORTS) {
      const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
      const page = await context.newPage();
      const errors = [];
      page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
      page.on('pageerror', (e) => errors.push(e.message));
      await page.goto('file://' + path.join(dir, file));
      await page.waitForTimeout(500);
      const overflow = await page.evaluate(() => {
        const d = document.documentElement;
        return { scroll: d.scrollWidth, client: d.clientWidth };
      });
      const over = overflow.scroll > overflow.client;
      if (screens) {
        await page.screenshot({ path: path.join(outDir, `${file.replace(/\.html$/, '')}-${width}.png`), fullPage: true });
      }
      const status = over ? `ROLAGEM HORIZONTAL (${overflow.scroll} > ${overflow.client})` : 'ok';
      console.log(`${file} ${width}px ${status}${errors.length ? ' | erros: ' + errors.join(' || ') : ''}`);
      if (over || errors.length) failed = true;
      await context.close();
    }
  }
  await browser.close();
  if (screens) console.log('Capturas em ' + outDir + ' (olhe todas).');
  process.exit(failed ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
