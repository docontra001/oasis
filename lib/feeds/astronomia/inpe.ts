import axios from "axios";
import * as cheerio from "cheerio";

type Noticia = {
  titulo: string;
  descricao: string;
  link: string;
  data: string;
  imagem: string;
  fonte: string;
  categoria: string;
};

export async function buscarNoticiasINPE() {
  const { data } = await axios.get(
    "https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias",
    {
      headers: {
        "User-Agent": "Mozilla/5.0 OASIS",
      },
    }
  );

  const $ = cheerio.load(data);

  const noticias: Noticia[] = [];

  $("h2").each((_, el) => {
    const a = $(el).find("a");

    const titulo = a.text().trim();
    const link = a.attr("href") ?? "";

    if (!titulo || !link) return;

    noticias.push({
      titulo,
      descricao: "",
      link,
      data: new Date().toISOString(),
      imagem: "",
      fonte: "INPE",
      categoria: "Astronomia",
    });
  });

  return noticias;
}