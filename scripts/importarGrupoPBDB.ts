import { PrismaClient } from "@prisma/client";
import axios from "axios";
import slugify from "slugify";

const prisma = new PrismaClient();

const grupos = [
  "Theropoda",
  "Sauropoda",
  "Ceratopsia",
  "Stegosauria",
  "Ankylosauria",
  "Hadrosauridae",
  "Dromaeosauridae",
  "Titanosauria"
];

async function importarGrupo(grupo: string) {
  console.log(`Importando ${grupo}...`);

  const { data } = await axios.get(
    "https://paleobiodb.org/data1.2/taxa/list.json",
    {
      params: {
        base_name: grupo,
        limit: "all",
      },
    }
  );

  const registros = (data.records ?? []).filter((r: any) => {
  return (
    r.rnk === "genus" ||
    r.rnk === "species"
  );
});

console.log(registros.slice(0, 20));

  const fosseis = registros
    .filter((r: any) => r.nam)
    .map((r: any) => ({
      id: crypto.randomUUID(),
      slug: slugify(r.nam, {
        lower: true,
        strict: true,
      }),
      grupo,
      nome: r.nam,
      nomeCientifico: r.nam,
      periodo: r.oei ?? null,
      continente: r.cc2 ?? null,
      descricao: r.rnk ?? null,
    }));

  const r = await prisma.fossil.createMany({
    data: fosseis,
    skipDuplicates: true,
  });

  console.log(`${grupo}: ${r.count} novos fósseis`);
}

async function main() {
  for (const grupo of grupos) {
    await importarGrupo(grupo);
  }
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });