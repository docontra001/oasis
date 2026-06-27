import { PrismaClient } from "@prisma/client";
import { buscarImagemWikipedia } from "../lib/fauna/wikipedia";

const prisma = new PrismaClient();

async function main() {
  const dinos = await prisma.fossil.findMany({
    where: {
      OR: [
        { imagem: null },
        { descricao: null },
      ],
    },
  });

  console.log(`${dinos.length} fósseis para enriquecer.`);

  for (const dino of dinos) {
    try {
      const wiki = await buscarImagemWikipedia(dino.nomeCientifico);

      if (!wiki) {
        console.log(`❌ ${dino.nomeCientifico}`);
        continue;
      }

      await prisma.fossil.update({
        where: {
          id: dino.id,
        },
        data: {
          imagem: wiki.imagem ?? dino.imagem,
          descricao: wiki.descricao ?? dino.descricao,
        },
      });

      console.log(`✅ ${dino.nomeCientifico}`);
    } catch {
      console.log(`⚠️ ${dino.nomeCientifico}`);
    }
  }
}

main().finally(() => prisma.$disconnect());