import { prisma } from "../lib/prisma";
import { destaques } from "../data/destaques";
import { buscarImagemWikipedia } from "../lib/fauna/wikipedia";

async function main() {
  console.log("Limpando destaques...");

  await prisma.animal.updateMany({
    data: {
      destaque: false
    },
  });

  let total = 0;

  for (const cientifico of destaques) {
  const wiki = await buscarImagemWikipedia(cientifico);

  const data: {
    destaque: boolean;
    imagem?: string;
  } = {
    destaque: true,
  };

  if (wiki?.imagem) {
    data.imagem = wiki.imagem;
  }

  const r = await prisma.animal.updateMany({
    where: {
      nomeCientifico: {
        startsWith: cientifico,
      },
    },
    data,
  });

  console.log(
    `${cientifico} -> ${r.count}${
      wiki?.imagem ? " (com imagem)" : " (sem imagem)"
    }`
  );

  total += r.count;
}

console.log(`\n${total} espécies marcadas com imagem.`);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });