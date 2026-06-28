import axios from "axios";
import * as cheerio from "cheerio";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const prisma = new PrismaClient();

async function buscarImagem(url: string) {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 OASIS",
      },
    });

    const $ = cheerio.load(data);

    return (
      $('meta[property="og:image"]').attr("content") ||
      $('meta[name="twitter:image"]').attr("content") ||
      $('link[rel="image_src"]').attr("href") ||
      null
    );
  } catch {
    return null;
  }
}

async function main() {
  const noticias = await prisma.news.findMany({
    where: {
      OR: [
        { imagem: null },
        { imagem: "" },
      ],
    },
  });

  console.log(`${noticias.length} notícias para enriquecer.`);

  const pasta = path.join(process.cwd(), "public", "news");

  fs.mkdirSync(pasta, {
    recursive: true,
  });

  for (const noticia of noticias) {
    try {
      const imagem = await buscarImagem(noticia.link);

      if (!imagem) {
        console.log(`❌ ${noticia.titulo}`);
        continue;
      }

      const resposta = await axios.get(imagem, {
        responseType: "arraybuffer",
        headers: {
          "User-Agent": "Mozilla/5.0 OASIS",
        },
      });

      const nomeArquivo = `${noticia.id}.webp`;

      await sharp(resposta.data)
        .resize({
          width: 1200,
          withoutEnlargement: true,
        })
        .webp({
          quality: 90,
        })
        .toFile(path.join(pasta, nomeArquivo));

      await prisma.news.update({
        where: {
          id: noticia.id,
        },
        data: {
          imagem: `/news/${nomeArquivo}`,
        },
      });

      console.log(`✅ ${noticia.titulo}`);
    } catch (e: any) {
  console.log(`❌ ${noticia.titulo}`);
  console.log(e.message);
}
  }
}

main().finally(async () => {
  await prisma.$disconnect();
});