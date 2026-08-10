const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inFile = process.argv[2] || "template.html";
const outFile = process.argv[3] || inFile.replace(/\.html$/, ".build.html");

const dir = __dirname;
// Logo "Geometric C" — misma fuente de verdad que la web (corteflow-web/public/logo-mark.png)
const logoPath = path.join(dir, "..", "..", "public", "logo-mark.png");

async function main() {
  let html = fs.readFileSync(path.join(dir, inFile), "utf8");
  const sora = fs.readFileSync(path.join(dir, "fonts", "sora.b64"), "utf8").trim();
  const dmsans = fs.readFileSync(path.join(dir, "fonts", "dmsans.b64"), "utf8").trim();
  const jbmono = fs.readFileSync(path.join(dir, "fonts", "jbmono.b64"), "utf8").trim();
  // Reconvertido a WebP liviano (el logo real pesa ~320KB en PNG; para 20 usos por slide conviene achicarlo)
  const logoWebp = await sharp(logoPath).resize({ height: 460 }).webp({ quality: 92, alphaQuality: 100 }).toBuffer();
  const logo = logoWebp.toString("base64");

  html = html.split("__SORA_B64__").join(sora);
  html = html.split("__DMSANS_B64__").join(dmsans);
  html = html.split("__JBMONO_B64__").join(jbmono);
  html = html.split("__LOGO_B64__").join(logo);

  fs.writeFileSync(path.join(dir, outFile), html);
  console.log(`Built ${outFile} (${(fs.statSync(path.join(dir, outFile)).size / 1024).toFixed(0)} KB)`);
  console.log(`Abrilo haciendo doble clic, o corré "node export.js ${outFile} <carpeta-salida>" para generar los PNG.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
