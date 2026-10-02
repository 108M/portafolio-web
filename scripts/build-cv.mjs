// Renders the built /cv and /es/cv pages to ATS-friendly PDFs in public/cv/.
// Run via `npm run cv` (builds the site first).
import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(fileURLToPath(import.meta.url), '../..');
const outDir = path.join(root, 'public', 'cv');
const author = 'Markel Álvarez Alonso';

const targets = [
  { lang: 'EN', html: 'dist/cv/index.html', locale: 'en-GB' },
  { lang: 'ES', html: 'dist/es/cv/index.html', locale: 'es-ES' },
];

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage();

for (const { lang, html, locale } of targets) {
  await page.goto(pathToFileURL(path.join(root, html)).href);
  const meta = await page.evaluate(() => ({
    description: document.querySelector('meta[name="description"]')?.content ?? '',
    keywords: document.querySelector('meta[name="keywords"]')?.content ?? '',
  }));

  const bytes = await page.pdf({
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    outline: true,
  });

  // Chromium only writes Title; add the rest so parsers get clean metadata.
  const pdf = await PDFDocument.load(bytes, { updateMetadata: false });
  pdf.setTitle(`${author} — CV`);
  pdf.setAuthor(author);
  pdf.setSubject(meta.description);
  pdf.setKeywords(meta.keywords.split(',').map((k) => k.trim()));
  pdf.setLanguage(locale);
  pdf.setCreator('markel108.dev');

  const file = path.join(outDir, `Markel-Alvarez-Alonso-CV-${lang}.pdf`);
  await writeFile(file, await pdf.save());
  console.log(`✓ ${path.relative(root, file)} (${pdf.getPageCount()} page${pdf.getPageCount() > 1 ? 's' : ''})`);
}

await browser.close();
