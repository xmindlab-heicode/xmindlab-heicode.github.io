import fs from 'node:fs';

const required = [
  'public/robots.txt',
  'public/.well-known/security.txt',
  'public/site.webmanifest'
];

const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length) {
  console.error('Missing SEO files:', missing.join(', '));
  process.exit(1);
}

console.log('SEO baseline checks passed');
