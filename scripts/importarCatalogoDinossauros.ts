import { PrismaClient } from "@prisma/client";
import axios from "axios";
import slugify from "slugify";
import fs from "fs";

const prisma = new PrismaClient();

async function buscarPBDB(nome: string) {
  const { data } = await axios.get(
    "https://paleobiodb.org/data1.2/taxa/list.json",
    {
      params: {
        name: nome,
      },
    }
  );

  return data.records?.[0] ?? null;
}

async function main() {
  const nomes: string[] = JSON.parse(
    fs.readFileSync(
      "dados/catalogo/dinossauros.json",
      "utf8"
    )
  );

  let total = 0;

  for (const nome of nomes) {
    console.log(`Buscando ${nome}...`);

    const pbdb = await buscarPBDB(nome);

    const slug = slugify(nome, {
      lower: true,
      strict: true,
    });

    await prisma.fossil.upsert({
      where: { slug },

      update: {},

      create: {
        id: crypto.randomUUID(),
        slug,

        grupo: "Dinossauro",

        nome,
        nomeCientifico: nome,

        periodo: pbdb?.oei ?? null,
        continente: pbdb?.cc2 ?? null,
        descricao: pbdb?.rnk ?? null,
      },
    });

    total++;
  }

  console.log(`\n✅ ${total} espécies importadas.`);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });