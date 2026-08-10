const http = require("http");
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");
const sharp = require("sharp");

const CHROME_CANDIDATES = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
];

const dir = __dirname;
const htmlPath = path.join(dir, "card.build.html");
const outDir = process.argv[2] || path.join(dir, "output");
const CARD_W = 1110;
const CARD_H = 638;

function startServer(rootDir) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const fp = path.join(rootDir, decodeURIComponent(req.url.split("?")[0]));
      fs.readFile(fp, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end("not found");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      });
    });
    server.listen(0, () => resolve(server));
  });
}

async function main() {
  if (!fs.existsSync(htmlPath)) throw new Error("Falta card.build.html — corré 'node build.js' primero.");
  const chrome = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
  if (!chrome) throw new Error("No se encontró Chrome instalado en las rutas esperadas.");

  fs.mkdirSync(outDir, { recursive: true });

  const server = await startServer(dir);
  const port = server.address().port;
  const baseUrl = `http://localhost:${port}/card.build.html`;

  const browser = await puppeteer.launch({ executablePath: chrome, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: CARD_W, height: CARD_H, deviceScaleFactor: 1 });

  for (const side of ["front", "back"]) {
    await page.goto(`${baseUrl}?export=${side}`, { waitUntil: "networkidle0" });
    await page.evaluate(() => document.fonts.ready);
    const tmp = path.join(outDir, `_${side}.png`);
    await page.screenshot({ path: tmp, clip: { x: 0, y: 0, width: CARD_W, height: CARD_H } });

    const final = path.join(outDir, `${side}.png`);
    const buf = await sharp(tmp).resize(CARD_W, CARD_H).withMetadata({ density: 300 }).png({ compressionLevel: 9 }).toBuffer();
    fs.writeFileSync(final, buf);
    fs.unlinkSync(tmp);
    console.log("guardado:", final);
  }

  await browser.close();
  server.close();
  console.log(`\nListo — front.png y back.png (${CARD_W}×${CARD_H}px, 300dpi, 94×54mm con sangría) en "${outDir}".`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
