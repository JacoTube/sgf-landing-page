import fs from 'fs';
import path from 'path';
import SponsorsSlider from './SponsorsSlider';

export default function Sponsors() {
  const sponsorsDir = path.join(process.cwd(), 'src/assets/sponsors');
  let files = [];

  try {
    if (fs.existsSync(sponsorsDir)) {
      files = fs.readdirSync(sponsorsDir).filter(file =>
        /^sponsor_\d+\.(png|jpe?g|svg|webp)$/i.test(file)
      );
    }
  } catch (e) {
    console.error('Error reading sponsors directory:', e);
  }

  if (files.length === 0) {
    return null;
  }

  files.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

  return <SponsorsSlider files={files} />;
}
