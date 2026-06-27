import axios from "axios";
import fs from "fs";

async function main() {
  const { data } = await axios.get(
    "https://paleobiodb.org/data1.2/taxa/list.json",
    {
      params: {
        base_name: "Dinosauria",
        limit: "all",
      },
      headers: {
        "User-Agent":
          "OASIS/1.0 (https://github.com/docontra001/oasis)",
        Accept: "application/json",
      },
    }
  );

  fs.mkdirSync("dados", { recursive: true });

  fs.writeFileSync(
    "dados/pbdb.json",
    JSON.stringify(data.records, null, 2)
  );

  console.log(`✅ ${data.records.length} fósseis baixados.`);
}

main().catch(console.error);