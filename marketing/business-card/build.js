const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const QRCode = require("qrcode");

const dir = __dirname;
const fontsDir = path.join(dir, "..", "instagram-carousel", "fonts");
const logoPath = path.join(dir, "..", "..", "public", "logo-mark.png");
const inFile = "card.html";
const outFile = "card.build.html";
const QR_URL = "https://corteflow.com";
const QR_SIZE = 640;
const LOGO_PLATE = 152; // plate blanca central, px sobre el QR de 640
const LOGO_SIZE = 110;

async function buildQr() {
  const qrBuffer = await QRCode.toBuffer(QR_URL, {
    type: "png",
    errorCorrectionLevel: "H",
    margin: 1,
    width: QR_SIZE,
    color: { dark: "#141009", light: "#ffffffff" },
  });

  const plateSvg = Buffer.from(
    `<svg width="${LOGO_PLATE}" height="${LOGO_PLATE}"><rect width="${LOGO_PLATE}" height="${LOGO_PLATE}" rx="26" fill="#ffffff"/></svg>`
  );
  const logoResized = await sharp(logoPath).resize(LOGO_SIZE, LOGO_SIZE, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } }).toBuffer();

  const center = Math.round((QR_SIZE - LOGO_PLATE) / 2);
  const logoOffset = Math.round((QR_SIZE - LOGO_SIZE) / 2);

  const composed = await sharp(qrBuffer)
    .composite([
      { input: plateSvg, left: center, top: center },
      { input: logoResized, left: logoOffset, top: logoOffset },
    ])
    .png()
    .toBuffer();

  return composed.toString("base64");
}

async function main() {
  let html = fs.readFileSync(path.join(dir, inFile), "utf8");

  const sora = fs.readFileSync(path.join(fontsDir, "sora.b64"), "utf8").trim();
  const dmsans = fs.readFileSync(path.join(fontsDir, "dmsans.b64"), "utf8").trim();
  const jbmono = fs.readFileSync(path.join(fontsDir, "jbmono.b64"), "utf8").trim();

  const logoWebp = await sharp(logoPath).resize({ height: 460 }).webp({ quality: 92, alphaQuality: 100 }).toBuffer();
  const logo = logoWebp.toString("base64");

  const qr = await buildQr();

  html = html.split("__SORA_B64__").join(sora);
  html = html.split("__DMSANS_B64__").join(dmsans);
  html = html.split("__JBMONO_B64__").join(jbmono);
  html = html.split("__LOGO_B64__").join(logo);
  html = html.split("__QR_B64__").join(qr);

  fs.writeFileSync(path.join(dir, outFile), html);
  console.log(`Built ${outFile} (${(fs.statSync(path.join(dir, outFile)).size / 1024).toFixed(0)} KB)`);
  console.log(`QR apuntando a: ${QR_URL}`);
  console.log(`Abrilo haciendo doble clic, o corré "node export.js" para generar los PNG de impresión.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
