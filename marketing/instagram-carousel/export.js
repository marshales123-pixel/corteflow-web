const http = require("http");
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");
const sharp = require("sharp");

const CHROME_CANDIDATES = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
];

const htmlArg = process.argv[2];
const outDir = process.argv[3];

if (!htmlArg || !outDir) {
  console.error("Uso: node export.js <archivo.build.html> <carpeta-salida>");
  process.exit(1);
}

const htmlPath = path.resolve(htmlArg);
const htmlDir = path.dirname(htmlPath);
const htmlName = path.basename(htmlPath);
fs.mkdirSync(outDir, { recursive: true });

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
  const chrome = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
  if (!chrome) throw new Error("No se encontró Chrome instalado en las rutas esperadas.");

  const server = await startServer(htmlDir);
  const port = server.address().port;
  const baseUrl = `http://localhost:${port}/${htmlName}`;

  const browser = await puppeteer.launch({ executablePath: chrome, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });

  await page.goto(baseUrl, { waitUntil: "networkidle0" });
  const total = await page.evaluate(() => document.querySelectorAll(".deck > .frame").length);
  if (!total) throw new Error("No se encontraron slides (.deck > .frame) en el HTML.");

  for (let i = 1; i <= total; i++) {
    await page.goto(`${baseUrl}?export=${i}`, { waitUntil: "networkidle0" });
    await page.evaluate(() => document.fonts.ready);
    const num = String(i).padStart(2, "0");
    const tmp = path.join(outDir, `_slide-${num}.png`);
    await page.screenshot({ path: tmp, clip: { x: 0, y: 0, width: 1080, height: 1350 } });

    const final = path.join(outDir, `slide-${num}.png`);
    const buf = await sharp(tmp).resize(1080, 1350).png({ compressionLevel: 9 }).toBuffer();
    fs.writeFileSync(final, buf);
    fs.unlinkSync(tmp);
    console.log("guardado:", final);
  }

  await browser.close();
  server.close();
  console.log(`\nListo — ${total} slides exportadas a "${outDir}".`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
