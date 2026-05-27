import sharp from 'sharp';
import fs from 'fs';

const files = [
  { in: 'public/Portfolio/penteadeira.webp', out: 'public/Portfolio/penteadeira-opt.webp' },
  { in: 'public/Portfolio/cabeceira.webp', out: 'public/Portfolio/cabeceira-opt.webp' },
  { in: 'public/logo-topo.png', out: 'public/logo-topo-opt.png' }
];

async function optimize() {
  for (const file of files) {
    if (!fs.existsSync(file.in)) continue;
    
    if (file.in.endsWith('.png')) {
      await sharp(file.in).resize({ width: 400, withoutEnlargement: true }).png({ quality: 80 }).toFile(file.out);
    } else {
      await sharp(file.in).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 80 }).toFile(file.out);
    }
    
    console.log(`Optimized ${file.in} -> ${file.out}`);
  }
}

optimize().catch(console.error);