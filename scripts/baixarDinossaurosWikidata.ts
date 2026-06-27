import axios from "axios";
import fs from "fs";

const query = `
SELECT ?item ?itemLabel ?image WHERE {
  ?item wdt:P31 wd:Q8386.

  OPTIONAL { ?item wdt:P18 ?image. }

  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en".
  }
}
LIMIT 3000
`;

async function main() {
  const { data } = await axios.get(
    "https://query.wikidata.org/sparql",
    {
      params: {
        format: "json",
        query,
      },
      headers: {
        Accept: "application/sparql-results+json",
        "User-Agent": "OASIS/1.0 (https://github.com/docontra001/oasis)",
      },
    }
  );

  fs.writeFileSync(
    "dados/dinossauros_wikidata.json",
    JSON.stringify(data.results.bindings, null, 2)
  );

  console.log(
    `Baixados ${data.results.bindings.length} registros.`
  );
}

main().catch(console.error);