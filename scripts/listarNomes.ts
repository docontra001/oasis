import { prisma } from "../lib/prisma";

async function main() {
  const animais = await prisma.animal.findMany({
    where: {
      nome: {
        not: "",
      },
    },
    select: {
      nome: true,
      nomeCientifico: true,
    },
    orderBy: {
      nome: "asc",
    },
    take: 1000,
  });

  console.table(animais);
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });