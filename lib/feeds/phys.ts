import Parser from "rss-parser";

const parser = new Parser();

export async function buscarNoticiasBiologia() {
  const feed = await parser.parseURL(
    "https://phys.org/rss-feed/biology-news/"
  );

  return feed.items.slice(0, 10).map((item) => ({
    titulo: item.title ?? "",
    descricao: item.contentSnippet ?? "",
    link: item.link ?? "",
    data: item.pubDate ?? "",
    imagem: "",
    fonte: "Phys.org",
    categoria: "Biologia",
  }));
}