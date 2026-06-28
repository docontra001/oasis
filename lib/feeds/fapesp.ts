import axios from "axios";
import * as cheerio from "cheerio";
import { extract } from "@extractus/article-extractor";

export async function buscarNoticiasFapesp() {
  const { data } = await axios.get(
    "https://agencia.fapesp.br/noticias",
    {
      headers: {
        "User-Agent": "Mozilla/5.0 OASIS",
      },
    }
  );

  const $ = cheerio.load(data);

  const noticias = [];

  const cards = $("ul.newsList > li").slice(0, 20);

  for (const card of cards.toArray()) {
    const titulo = $(card).find("h4.card-title a").text().trim();

    const link =
      $(card).find("h4.card-title a").attr("href") ?? "";

    const descricao = $(card)
      .find(".description")
      .text()
      .trim();

    const textoData = $(card)
  .find("small.subtitle")
  .text()
  .trim();

const meses: Record<string, number> = {
  janeiro: 0,
  fevereiro: 1,
  março: 2,
  abril: 3,
  maio: 4,
  junho: 5,
  julho: 6,
  agosto: 7,
  setembro: 8,
  outubro: 9,
  novembro: 10,
  dezembro: 11,
};

let dataPublicacao = new Date();

const match = textoData.match(
  /(\d{1,2}) de ([a-zç]+) de (\d{4})/i
);

if (match) {
  const dia = Number(match[1]);
  const mes = meses[match[2].toLowerCase()];
  const ano = Number(match[3]);

  dataPublicacao = new Date(ano, mes, dia);
}

    let imagem = "";

    try {
      const artigo = await extract(link);

      imagem = artigo?.image ?? "";
    } catch {}

    noticias.push({
  titulo,
  descricao,
  link,
  data: dataPublicacao.toISOString(),
  imagem,
  fonte: "FAPESP",
  categoria: "Biologia",
});
  }

  return noticias;
}