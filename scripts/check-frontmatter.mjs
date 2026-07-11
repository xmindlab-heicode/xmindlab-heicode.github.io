import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const required = ['title'];
const root = path.resolve('content/docs');
const failures = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    if (!entry.name.endsWith('.mdx')) continue;
    const text = await readFile(file, 'utf8');
    if (!text.startsWith('---')) {
      failures.push(`${file}: missing frontmatter`);
      continue;
    }
    for (const key of required) {
      if (!text.includes(`${key}:`)) failures.push(`${file}: missing ${key}`);
    }
  }
}

await walk(root);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('Frontmatter validation completed');
