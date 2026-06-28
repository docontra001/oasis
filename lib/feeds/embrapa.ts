import axios from "axios";
import * as cheerio from "cheerio";

export async function buscarNoticiasEmbrapa() {
  const { data } = await axios.get(
    "https://www.embrapa.br/busca-de-noticias",
    {
      headers: {
        "User-Agent": "Mozilla/5.0 OASIS",
      },
    }
  );

  const $ = cheerio.load(data);

  const noticias: {
  titulo: string;
  descricao: string;
  link: string;
  imagem: string;
  data: string;
  fonte: string;
  categoria: string;
}[] = [];

  $(".portlet-search-result").each((_, el) => {
    const titulo = $(el).find("h2 a").text().trim();

    let link = $(el).find("h2 a").attr("href") ?? "";

    if (link.startsWith("/")) {
      link = "https://www.embrapa.br" + link;
    }

    const descricao = $(el)
      .find(".asset-summary")
      .text()
      .trim();

    const imagem =
      $(el).find("img").attr("src") ?? "";

    const data =
      $(el).find(".asset-metadata").text().trim();

    noticias.push({
      titulo,
      descricao,
      link,
      imagem,
      data: new Date().toISOString(),
      fonte: "Embrapa",
      categoria: "Biologia",
    });
  });

  return noticias;
}