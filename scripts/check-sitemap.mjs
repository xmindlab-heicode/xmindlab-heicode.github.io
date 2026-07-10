import fs from 'node:fs';

const sitemap = 'public/sitemap.xml';

if (!fs.existsSync(sitemap)) {
  console.error('Missing sitemap:', sitemap);
  process.exit(1);
}

const content = fs.readFileSync(sitemap, 'utf8');

if (!content.includes('<urlset')) {
  console.error('Invalid sitemap format');
  process.exit(1);
}

console.log('Sitemap check passed');
