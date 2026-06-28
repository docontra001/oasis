import axios from "axios";
import * as cheerio from "cheerio";

async function main() {
  const { data } = await axios.get(
    "https://www.embrapa.br/busca-de-noticias",
    {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    }
  );

  const $ = cheerio.load(data);

  console.log("portlet-search-result:", $(".portlet-search-result").length);
  console.log("article:", $("article").length);
  console.log("journal-content-article:", $(".journal-content-article").length);
  console.log("h2:", $("h2").length);
}

main();