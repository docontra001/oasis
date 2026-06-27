import axios from "axios";
import fs from "fs";

async function main() {
  const url =
    "https://paleobiodb.org/data1.2/taxa/list.json?base_name=Dinosauria&limit=all";

  const { data } = await axios.get(url);

  fs.writeFileSync(
    "dados/pbdb.json",
    JSON.stringify(data.records, null, 2)
  );

  console.log(
    `Foram baixados ${data.records.length} registros.`
  );
}

main().catch(console.error);