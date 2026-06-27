import { PrismaClient } from "@prisma/client";
import axios from "axios";
import slugify from "slugify";

const prisma = new PrismaClient();

async function main() {
  const { data } = await axios.get(
    "https://paleobiodb.org/data1.2/taxa/list.json",
    {
      params: {
        base_name: "Dinosauria",
        limit: "300",
      },
    }
  );

  const arrayDeFosseis = data.records
    .filter((item: any) => item.nam)
    .map((item: any) => ({
      id: crypto.randomUUID(),
      slug: slugify(item.nam, {
        lower: true,
        strict: true,
      }),

      grupo: "Dinossauro",

      nome: item.nam,
      nomeCientifico: item.nam,

      periodo: item.oei ?? null,
      continente: item.cc2 ?? null,
      descricao: item.rnk ?? null,
    }));

  const resultado = await prisma.fossil.createMany({
    data: arrayDeFosseis,
    skipDuplicates: true,
  });

  console.log(`${resultado.count} dinossauros importados.`);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });