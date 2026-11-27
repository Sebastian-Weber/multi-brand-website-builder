// 1. Drift: a fresh token build must match the generated files on disk.
// 2. Token references: every var(--…) the code names must exist.
// 3. Hex budget: hex colours in active code may not exceed scripts/hex-budget.json.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const generated = ['src/styles/tokens.css', 'tokens/build/tokens.json'];
const budgetFile = 'scripts/hex-budget.json';
let failed = false;
const fail = (m) => { failed = true; console.log(`FAIL   ${m}`); };

// 1. drift
const before = generated.map((f) => (fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : ''));
execFileSync('node', ['tokens/build.mjs'], { stdio: 'ignore' });
generated.forEach((f, i) => {
  if (fs.readFileSync(f, 'utf8') !== before[i]) fail(`drift: ${f} did not match a fresh build. It is rebuilt now; review and commit it.`);
});
if (!failed) console.log('pass   drift: generated files match the tokens');

// files to scan: active code, without generated output and stories
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(d, e.name);
  return e.isDirectory() ? walk(p) : [p];
});
const files = walk('src').filter((f) => /\.(tsx?|css)$/.test(f) && !f.endsWith('.stories.tsx') && f !== path.join('src', 'styles', 'tokens.css'));
const stripComments = (s) => s.replace(/\{\/\*[\s\S]*?\*\/\}/g, '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:'"`])\/\/.*$/gm, '$1');

// 2. token references
const css = fs.readFileSync('src/styles/tokens.css', 'utf8');
const defined = new Set([...css.matchAll(/^\s*--([\w-]+):/gm)].map((m) => m[1]));
let refs = 0;
for (const f of files) {
  for (const m of stripComments(fs.readFileSync(f, 'utf8')).matchAll(/var\(--([\w-]+)/g)) {
    refs++;
    if (!defined.has(m[1])) fail(`token ref: --${m[1]} in ${f} does not exist`);
  }
}
console.log(`${failed ? '' : 'pass   '}token refs: ${refs} references, ${defined.size} tokens defined`);

// 3. hex budget
const perFile = {};
for (const f of files) {
  const n = (stripComments(fs.readFileSync(f, 'utf8')).match(/#[0-9a-fA-F]{3,8}\b/g) || []).length;
  if (n) perFile[f.split(path.sep).join('/')] = n;
}
const total = Object.values(perFile).reduce((a, b) => a + b, 0);
if (process.argv.includes('--set-budget')) {
  fs.writeFileSync(budgetFile, JSON.stringify({ $description: 'Maximum number of hex colours in active code (src, without comments, stories and generated tokens). This number may only go down: lower it when you remove hex values. Set with npm run check:tokens -- --set-budget.', max: total, files: perFile }, null, 2) + '\n');
  console.log(`hex budget set to ${total}`);
}
const budget = JSON.parse(fs.readFileSync(budgetFile, 'utf8'));
if (total > budget.max) {
  fail(`hex budget: ${total} hex colours in active code, budget is ${budget.max}`);
  for (const [f, n] of Object.entries(perFile)) if (n > (budget.files[f] || 0)) console.log(`       ${f}: ${n} (was ${budget.files[f] || 0})`);
} else {
  console.log(`pass   hex budget: ${total} of ${budget.max}${total < budget.max ? ` (lower the budget to ${total})` : ''}`);
}
process.exit(failed ? 1 : 0);
