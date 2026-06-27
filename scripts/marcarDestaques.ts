import { prisma } from "../lib/prisma";
import { destaques } from "../data/destaques";
import { buscarImagemWikipedia } from "../lib/fauna/wikipedia";

async function main() {
  console.log("Limpando destaques...");

  await prisma.animal.updateMany({
    data: {
      destaque: false,
      imagem: null,
    },
  });

  let total = 0;

  for (const cientifico of destaques) {
    const wiki = await buscarImagemWikipedia(cientifico);

    if (!wiki?.imagem) {
      console.log(`${cientifico} -> sem imagem`);
      continue;
    }

    const r = await prisma.animal.updateMany({
      where: {
        nomeCientifico: {
          startsWith: cientifico,
        },
      },
      data: {
        destaque: true,
        imagem: wiki.imagem,
      },
    });

    console.log(`${cientifico} -> ${r.count}`);

    total += r.count;
  }

  console.log(`\n${total} espécies marcadas com imagem.`);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });