import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('content');
const errors = [];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      const content = await readFile(file, 'utf8');
      const links = [...content.matchAll(/\]\(([^)]+)\)/g)].map(m => m[1]);
      for (const link of links) {
        if (link.startsWith('http') || link.startsWith('#')) continue;
        const target = path.resolve(path.dirname(file), link.split('#')[0]);
        if (!target.endsWith('.') && !target.includes('.')) continue;
      }
    }
  }
}

await walk(ROOT);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('Documentation link check completed');
