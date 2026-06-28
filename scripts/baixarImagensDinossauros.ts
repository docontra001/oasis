import { PrismaClient } from "@prisma/client";
import axios from "axios";
import fs from "fs";
import sharp from "sharp";

const prisma = new PrismaClient();

async function buscarImagem(nome: string) {
  const { data } = await axios.get(
    "https://commons.wikimedia.org/w/api.php",
    {
      params: {
        action: "query",
        generator: "search",
        gsrsearch: nome,
        gsrnamespace: 6,
        prop: "imageinfo",
        iiprop: "url",
        iiurlwidth: 3000,
        format: "json",
      },
      headers: {
        "User-Agent":
          "OASIS/1.0 (https://github.com/docontra001/oasis)",
      },
    }
  );

  if (!data.query?.pages) return null;

  const page = Object.values(data.query.pages)[0] as any;

  return (
    page.imageinfo?.[0]?.thumburl ??
    page.imageinfo?.[0]?.url ??
    null
  );
}

async function baixar(nome: string, slug: string) {
  try {
    const url = await buscarImagem(nome);

    if (!url) {
      console.log(`⚠️ Sem imagem: ${nome}`);
      return;
    }

    const imagem = await axios.get(url, {
      responseType: "arraybuffer",
      headers: {
        "User-Agent":
          "OASIS/1.0 (https://github.com/docontra001/oasis)",
      },
    });

    fs.mkdirSync("public/fosseis", {
      recursive: true,
    });

    await sharp(imagem.data)
      .resize({
        width: 1600,
        withoutEnlargement: true,
      })
      .jpeg({
        quality: 95,
      })
      .toFile(`public/fosseis/${slug}.jpg`);

    await prisma.fossil.update({
      where: {
        slug,
      },
      data: {
        imagem: `/fosseis/${slug}.jpg`,
      },
    });

    console.log(`✅ ${nome}`);
  } catch (e: any) {
    console.log(`❌ ${nome}`);
    console.log(e.message);
  }
}

async function main() {
  const fosseis = await prisma.fossil.findMany({
  where: {
    imagem: null,
  },
  select: {
    slug: true,
    nomeCientifico: true,
  },
});

  console.log(`Encontrados ${fosseis.length} fósseis.`);

  let i = 1;

for (const fossil of fosseis) {
  console.log(`[${i}/${fosseis.length}] ${fossil.nomeCientifico}`);

  await baixar(fossil.nomeCientifico, fossil.slug);

  await new Promise((r) => setTimeout(r, 500));

  i++;
}

  console.log("✅ Finalizado.");
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });