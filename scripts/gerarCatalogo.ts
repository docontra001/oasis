import axios from "axios";
import fs from "fs";

const especies = fs
  .readFileSync("dados/catalogo/especies.txt", "utf8")
  .split(/\r?\n/)
  .map((e) => e.trim())
  .filter(Boolean);

async function buscar(nome: string) {
  const query = `
SELECT ?item ?itemLabel ?descricao ?imagem WHERE {
  ?item rdfs:label "${nome}"@en.

  OPTIONAL { ?item schema:description ?descricao FILTER(LANG(?descricao)="en") }
  OPTIONAL { ?item wdt:P18 ?imagem }

  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "pt,en".
  }
}
LIMIT 1
`;

  const { data } = await axios.get(
    "https://query.wikidata.org/sparql",
    {
      params: {
        format: "json",
        query,
      },
      headers: {
        "User-Agent":
          "OASIS/1.0 (https://github.com/docontra001/oasis)",
      },
    }
  );

  return data.results.bindings[0] ?? null;
}

async function main() {
  const catalogo = [];

  for (const especie of especies) {
    console.log(`🔍 ${especie}`);

    const r = await buscar(especie);

    if (!r) {
      console.log("❌ Não encontrado");
      continue;
    }

    catalogo.push({
      nomeCientifico: especie,
      nome: r.itemLabel?.value ?? especie,
      descricao: r.descricao?.value ?? "",
      imagem: r.imagem?.value ?? "",
    });

    await new Promise((r) => setTimeout(r, 500));
  }

  fs.writeFileSync(
    "dados/catalogo/catalogo.json",
    JSON.stringify(catalogo, null, 2)
  );

  console.log(`✅ ${catalogo.length} espécies salvas.`);
}

main().catch(console.error);