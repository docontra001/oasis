import Parser from "rss-parser";

const parser = new Parser();

const feeds = [
  {
    nome: "Phys.org",
    url: "https://phys.org/rss-feed/biology-news/",
  },
  {
    nome: "ScienceDaily",
    url: "https://www.sciencedaily.com/rss/plants_animals.xml",
  },
  {
    nome: "Nature",
    url: "https://www.nature.com/subjects/biology.rss",
  },
  {
    nome: "NIH",
    url: "https://newsinhealth.nih.gov/feed.xml",
  },
];

export async function buscarNoticiasBiologia() {
  const noticias = [];

  for (const feedInfo of feeds) {
    try {
      const feed = await parser.parseURL(feedInfo.url);

      for (const item of feed.items) {
        
        noticias.push({
          titulo: item.title ?? "",
          descricao:
            item.contentSnippet ??
            item.content ??
            "",

          link: item.link ?? "",

          data: item.pubDate ?? "",

          imagem: (item as any).image ?? "",

          fonte: feedInfo.nome,

          categoria: "Biologia",
        });
      }
    } catch (e) {
  console.error(feedInfo.nome);
  console.error(e);
}
  }

  return noticias;
}