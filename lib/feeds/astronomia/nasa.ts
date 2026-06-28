import Parser from "rss-parser";

const parser = new Parser();

export async function buscarNoticiasNASA() {
  const feed = await parser.parseURL(
    "https://www.nasa.gov/news-release/feed/"
  );

  return feed.items.map((item) => ({
    titulo: item.title ?? "",
    descricao: item.contentSnippet ?? "",
    link: item.link ?? "",
    data: item.pubDate ?? new Date().toISOString(),
    imagem: "",
    fonte: "NASA",
    categoria: "Astronomia",
  }));
}