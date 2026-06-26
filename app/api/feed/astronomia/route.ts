import Parser from "rss-parser";

const parser = new Parser();

export async function GET() {
  const feed = await parser.parseURL(
    "https://www.nasa.gov/news-release/feed/"
  );

  const noticias = feed.items.slice(0, 10).map((item) => ({
    titulo: item.title,
    descricao: item.contentSnippet,
    link: item.link,
    data: item.pubDate,
  }));

  return Response.json(noticias);
}