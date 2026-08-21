const https = require('https');
const fs = require('fs');
const path = require('path');

const katexDir = path.join(__dirname, 'katex');
if (!fs.existsSync(katexDir)) {
  fs.mkdirSync(katexDir);
}
const fontsDir = path.join(katexDir, 'fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir);
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  console.log("Downloading KaTeX files locally...");
  await downloadFile('https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css', path.join(katexDir, 'katex.min.css'));
  console.log("katex.min.css downloaded");
  await downloadFile('https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js', path.join(katexDir, 'katex.min.js'));
  console.log("katex.min.js downloaded");
  await downloadFile('https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js', path.join(katexDir, 'auto-render.min.js'));
  console.log("auto-render.min.js downloaded");

  const fonts = [
    'KaTeX_Main-Regular.woff2', 'KaTeX_Main-Bold.woff2', 'KaTeX_Main-Italic.woff2', 'KaTeX_Main-BoldItalic.woff2',
    'KaTeX_Math-Italic.woff2', 'KaTeX_Math-BoldItalic.woff2', 'KaTeX_Size1-Regular.woff2', 'KaTeX_Size2-Regular.woff2',
    'KaTeX_Size3-Regular.woff2', 'KaTeX_Size4-Regular.woff2', 'KaTeX_AMS-Regular.woff2'
  ];

  for (const font of fonts) {
    try {
      await downloadFile(`https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/fonts/${font}`, path.join(fontsDir, font));
      console.log(`Downloaded font ${font}`);
    } catch (e) {
      console.log(`Could not download font ${font}: ${e.message}`);
    }
  }

  console.log("All KaTeX assets downloaded locally!");
}

main();
