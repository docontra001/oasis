import { PrismaClient } from "@prisma/client";
import { buscarNoticiasBiologia } from "@/lib/feeds/biologia";
import { extract } from "@extractus/article-extractor";
import axios from "axios";
import sharp from "sharp";
import { put } from "@vercel/blob";

const prisma = new PrismaClient();

export async function importarNoticias() {
  console.log("Importando notícias...");

  const noticias = await buscarNoticiasBiologia();
  const noticiasFiltradas = noticias.filter((noticia, index) => {
  const titulo = noticia.titulo
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();

  return (
    index ===
    noticias.findIndex((n) =>
      n.titulo
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .trim() === titulo
    )
  );
});

  let total = 0;

  for (const noticia of noticiasFiltradas) {
    console.log(
  `${noticias.length - noticiasFiltradas.length} notícias duplicadas removidas.`
);
    let imagem = noticia.imagem || null;

    // Se o feed não trouxe imagem, tenta extrair da página
    if (!imagem) {
      try {
        const artigo = await extract(noticia.link);

        imagem =
          artigo?.image ||
          (artigo as any)?.meta?.["og:image"] ||
          (artigo as any)?.meta?.["twitter:image"] ||
          null;
      } catch {
        console.log("Sem imagem:", noticia.link);
      }
    }

    // Se encontrou uma imagem, baixa e envia para o Blob
    if (imagem?.startsWith("http")) {
      try {
        const resposta = await axios.get(imagem, {
          responseType: "arraybuffer",
          headers: {
            "User-Agent": "Mozilla/5.0 OASIS",
          },
        });

        const nomeArquivo =
          (
            noticia.link
              .split("/")
              .pop()
              ?.replace(".htm", "")
              .replace(/[^a-zA-Z0-9_-]/g, "") ??
            crypto.randomUUID()
          ) + ".webp";

        const buffer = await sharp(resposta.data)
          .resize({
            width: 1200,
            withoutEnlargement: true,
          })
          .webp({
            quality: 90,
          })
          .toBuffer();

        const blob = await put(`news/${nomeArquivo}`, buffer, {
          access: "public",
          allowOverwrite: true,
        });

        imagem = blob.url;
      } catch (error) {
        console.error("Erro ao baixar imagem:", noticia.titulo);
        console.error(error);
      }
    }

    // Placeholder caso nenhuma imagem seja encontrada
    if (!imagem) {
      imagem = "/images/news-placeholder.webp";
    }

    await prisma.news.upsert({
      where: {
        link: noticia.link,
      },
      update: {
        titulo: noticia.titulo,
        descricao: noticia.descricao,
        imagem,
        fonte: noticia.fonte,
        categoria: noticia.categoria,
        publicadaEm: new Date(noticia.data),
      },
      create: {
        titulo: noticia.titulo,
        descricao: noticia.descricao,
        imagem,
        link: noticia.link,
        fonte: noticia.fonte,
        categoria: noticia.categoria,
        publicadaEm: new Date(noticia.data),
      },
    });

    total++;
  }

  console.log(`✅ ${total} notícias importadas.`);
return total;
}