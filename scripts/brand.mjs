// Genera iconos y la imagen para compartir: pnpm brand
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const tooth = 'M19 6C10 6 5 13 6 22c.7 6 4 10 5.5 16C13 45 13 58 20 58c6 0 4-18 12-18s6 18 12 18c7 0 7-13 8.5-20C54 32 57.3 28 58 22c1-9-4-16-13-16-6 0-8 3-13 3s-7-3-13-3Z';
const icon = (r) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="${r}" fill="#0b3f49"/><g transform="translate(18 18)"><path d="${tooth}" fill="#fff"/><path d="M23 25c2 5 5 7 9 7s7-2 9-7" fill="none" stroke="#b93a1e" stroke-width="3.5" stroke-linecap="round"/></g></svg>`;
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f8fbf9"/><path d="M760 630V330a220 220 0 0 1 440-40v340Z" fill="#d3f0e8"/><g transform="translate(800 150) scale(5.4)"><path d="${tooth}" fill="#0b3f49"/><path d="M23 25c2 5 5 7 9 7s7-2 9-7" fill="none" stroke="#8fd6c6" stroke-width="3.5" stroke-linecap="round"/></g><g font-family="Helvetica, Arial, sans-serif" fill="#0b3f49"><text x="80" y="270" font-size="94" font-weight="700">Dental Kaizen</text><text x="80" y="345" font-size="46">Clínica dentista en Guatemala</text><text x="80" y="440" font-size="38" fill="#b93a1e" font-weight="700">Tu mejor sonrisa empieza aquí</text></g></svg>`;

writeFileSync('public/favicon.svg', icon(22));
for (const [name, size] of [['apple-touch-icon', 180], ['icon-192', 192], ['icon-512', 512]]) {
  await sharp(Buffer.from(icon(0)), { density: 400 }).resize(size, size).png().toFile(`public/${name}.png`);
}
await sharp(Buffer.from(og)).png({ palette: true }).toFile('public/og.png');
