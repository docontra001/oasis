import Parser from "rss-parser";
import { extract } from "@extractus/article-extractor";

const parser = new Parser();

function melhorarImagem(url: string) {
  return url
    .replace("?w=150&h=150&crop=1", "")
    .replace("/cq5dam.web.1280.1280.jpeg", "/cq5dam.web.2000.2000.jpeg")
    .replace("/cq5dam.web.1024.1024.jpeg", "/cq5dam.web.2000.2000.jpeg")
    .replace("/cq5dam.thumbnail.319.319.png", "/cq5dam.web.2000.2000.jpeg");
}

export async function GET() {
  const feed = await parser.parseURL(
    "https://www.nasa.gov/news-release/feed/"
  );

  const noticias = await Promise.all(
    feed.items.slice(0, 10).map(async (item) => {
      let imagem = "";

      try {
        const artigo = await extract(item.link!);

        imagem =
          artigo?.image ||
          (artigo as any)?.meta?.["og:image"] ||
          "";

        if (imagem) {
          imagem = melhorarImagem(imagem);
        }
      } catch {}

      return {
        titulo: item.title ?? "",
        descricao: item.contentSnippet ?? "",
        link: item.link ?? "",
        data: item.pubDate ?? "",
        imagem,
        fonte: "NASA",
      };
    })
  );

  return Response.json(noticias);
}