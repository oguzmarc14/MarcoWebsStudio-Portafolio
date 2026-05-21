// Requiere: npm install --save-dev sharp glob
// Uso: npm run images-optimize

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import glob from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const PATTERN = path.join(PUBLIC_DIR, '**/*.png');

async function convertFile(file) {
  const out = file.replace(/\.png$/i, '.webp');
  try {
    await sharp(file)
      .webp({ quality: 78 })
      .toFile(out);
    console.log('Converted', file, '→', out);
  } catch (err) {
    console.error('Error converting', file, err);
  }
}

glob(PATTERN, async (err, files) => {
  if (err) return console.error(err);
  console.log(`Found ${files.length} png files`);
  for (const f of files) {
    // skip tiny images like icons if you want; for now convert all
    await convertFile(f);
  }
});
