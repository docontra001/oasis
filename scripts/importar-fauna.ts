import path from "path";
import AdmZip from "adm-zip";

const arquivo = path.join(process.cwd(), "database", "fauna.zip");

const zip = new AdmZip(arquivo);

const meta = zip.getEntry("meta.xml");

if (!meta) {
  console.log("meta.xml não encontrado.");
  process.exit(1);
}

console.log(meta.getData().toString("utf8"));