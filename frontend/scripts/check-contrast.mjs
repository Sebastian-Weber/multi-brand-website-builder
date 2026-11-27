// WCAG 2.2 AA contrast for every pair in tokens/contrast-pairs.json.
import fs from 'node:fs';

const file = 'tokens/contrast-pairs.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const tokens = Object.fromEntries(JSON.parse(fs.readFileSync('tokens/build/tokens.json', 'utf8')).map((t) => [t.name, t.value]));
const update = process.argv.includes('--record-known');

const hex = (v) => {
  const h = v.startsWith('#') ? v : tokens[v];
  if (!h) throw new Error(`contrast: unknown token "${v}" in ${file}`);
  return h;
};
const lum = (h) => {
  const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };

let failed = 0, known = 0;
for (const p of data.pairs) {
  const r = ratio(hex(p.text), hex(p.bg));
  const min = p.size === 'large' ? 3 : 4.5;
  const ok = r >= min;
  const label = `${r.toFixed(2)}:1  ${p.text} on ${p.bg} (${p.size}, needs ${min}:1)`;
  if (ok) {
    if (p.knownFailure) console.log(`FIXED  ${label}  -> remove knownFailure`);
    else console.log(`pass   ${label}`);
  } else if (p.knownFailure) { known++; console.log(`KNOWN  ${label}  since ${p.knownFailure.since}`); }
  else if (update) { p.knownFailure = { since: new Date().toISOString().slice(0, 10) }; known++; console.log(`KNOWN  ${label}  (recorded now)`); }
  else { failed++; console.log(`FAIL   ${label}  ${p.where}`); }
}
if (update) fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
console.log(`contrast: ${data.pairs.length} pairs, ${failed} failing, ${known} known`);
process.exit(failed ? 1 : 0);
