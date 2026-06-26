import path from "path";
import AdmZip from "adm-zip";

import { lerTaxon } from "./lerTaxon";
import { lerVernacular } from "./lerVernacular";
import { gerarAnimais } from "./gerarAnimais";
const arquivo = path.join(process.cwd(), "database", "fauna.zip");

const zip = new AdmZip(arquivo);

const especies = lerTaxon(zip);

const nomes = lerVernacular(zip);

gerarAnimais(especies, nomes);

console.log("========== OASIS ==========\n");

console.log(`Espécies encontradas: ${especies.length}`);

console.log(`Nomes populares encontrados: ${nomes.size}`);

console.log("\nImportador funcionando corretamente.");

