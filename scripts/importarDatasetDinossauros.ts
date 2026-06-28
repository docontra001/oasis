import { PrismaClient } from "@prisma/client";
import csv from "csv-parser";
import fs from "fs";
import slugify from "slugify";

const prisma = new PrismaClient();

async function main() {
  const dinos: any[] = [];

  fs.createReadStream("dados/dinoDatasetCSV.csv")
    .pipe(csv())
    .on("data", (row) => dinos.push(row))
    .on("end", async () => {
      const data = dinos.map((dino) => ({
        id: crypto.randomUUID(),

        slug: slugify(dino.scientific_name, {
          lower: true,
          strict: true,
        }),

        grupo: "Dinossauro",

        nome: dino.common_name || dino.scientific_name,
        nomeCientifico: dino.scientific_name,

        periodo: dino.geological_period || null,
        dieta: dino.diet || null,

        comprimento: dino.length_m
          ? `${dino.length_m} m`
          : null,

        altura: dino.height_m
          ? `${dino.height_m} m`
          : null,

        peso: dino.weight_kg
          ? `${dino.weight_kg} kg`
          : null,

        continente: dino.lived_in || null,

        descricao:
          dino.notable_features ||
          dino.behavior_notes ||
          null,
      }));

      const r = await prisma.fossil.createMany({
        data,
        skipDuplicates: true,
      });

      console.log(`${r.count} fósseis importados.`);

      await prisma.$disconnect();
    });
}

main();