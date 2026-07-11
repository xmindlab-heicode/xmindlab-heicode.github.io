import fs from 'node:fs';
import path from 'node:path';

const docs = path.join(process.cwd(), 'content/docs');

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const files = walk(docs).filter((f) => f.endsWith('.mdx'));
const missing = [];

for (const file of files) {
  if (file.includes('.zh.')) continue;
  const zh = file.replace('.mdx', '.zh.mdx');
  if (!fs.existsSync(zh)) missing.push(path.relative(docs, zh));
}

if (missing.length) {
  console.error('Missing Chinese documentation pages:');
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log('i18n documentation check passed.');
