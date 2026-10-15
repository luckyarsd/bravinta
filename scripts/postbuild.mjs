// Some hosts (GitHub Pages with Jekyll, a few CDNs) refuse to serve any folder that starts
// with an underscore. Next.js puts all CSS and JS in /_next/, which leaves the page unstyled.
// After the build we move that folder to /assets/ and fix every reference to it.
import { promises as fs } from 'node:fs';
import path from 'node:path';

const out = path.resolve('out');
const textFiles = /\.(html|js|css|txt|json|xml|map)$/;

async function walk(dir) {
  const files = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

await fs.rename(path.join(out, '_next'), path.join(out, 'assets'));

let changed = 0;
for (const file of await walk(out)) {
  if (!textFiles.test(file)) continue;
  const text = await fs.readFile(file, 'utf8');
  if (!text.includes('/_next/')) continue;
  await fs.writeFile(file, text.replaceAll('/_next/', '/assets/'));
  changed++;
}
await fs.writeFile(path.join(out, '.nojekyll'), '');
console.log(`postbuild: moved _next to assets, updated ${changed} files`);
