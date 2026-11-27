// Runs axe-core on every story in storybook-static (build it first).
// Violations listed in scripts/a11y-known.json are reported but do not fail.
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { chromium } from 'playwright';

const dir = 'storybook-static';
const knownFile = 'scripts/a11y-known.json';
const skip = (id) => id.startsWith('foundations-'); // documentation pages, not components
if (!fs.existsSync(path.join(dir, 'index.json'))) { console.log('FAIL   a11y: run npm run build-storybook first'); process.exit(1); }

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => {
  const f = path.join(dir, decodeURIComponent(req.url.split('?')[0]));
  fs.readFile(f, (err, buf) => {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); res.end(buf);
  });
}).listen(0, '127.0.0.1');
await new Promise((r) => server.once('listening', r));
const base = `http://127.0.0.1:${server.address().port}`;

const entries = Object.values(JSON.parse(fs.readFileSync(path.join(dir, 'index.json'), 'utf8')).entries).filter((e) => e.type === 'story' && !skip(e.id));
const known = JSON.parse(fs.readFileSync(knownFile, 'utf8')).stories;
const axe = fs.readFileSync(path.join(path.dirname(new URL(import.meta.resolve('axe-core')).pathname), 'axe.min.js'), 'utf8');

const browser = await chromium.launch(process.env.PW_CHANNEL ? { channel: process.env.PW_CHANNEL } : {});
const page = await browser.newPage();
let failed = 0, knownCount = 0;
for (const e of entries) {
  await page.goto(`${base}/iframe.html?id=${e.id}&viewMode=story`, { waitUntil: 'networkidle' });
  await page.waitForSelector('#storybook-root > *', { timeout: 10000 });
  await page.addScriptTag({ content: axe });
  const violations = await page.evaluate(async () => (await window.axe.run('#storybook-root', { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] })).violations.map((v) => ({ id: v.id, nodes: v.nodes.length })));
  const allowed = new Set(known[e.id]?.rules || []);
  const fresh = violations.filter((v) => !allowed.has(v.id));
  const old = violations.filter((v) => allowed.has(v.id));
  knownCount += old.length;
  for (const r of allowed) if (!violations.some((v) => v.id === r)) console.log(`FIXED  ${e.id}: ${r} -> remove it from ${knownFile}`);
  if (fresh.length) { failed++; console.log(`FAIL   ${e.id}: ${fresh.map((v) => `${v.id} (${v.nodes})`).join(', ')}`); }
  else console.log(`${old.length ? 'KNOWN ' : 'pass  '} ${e.id}${old.length ? ': ' + old.map((v) => v.id).join(', ') : ''}`);
}
await browser.close(); server.close();
console.log(`a11y: ${entries.length} stories, ${failed} failing, ${knownCount} known violations`);
process.exit(failed ? 1 : 0);
