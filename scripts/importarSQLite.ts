import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function main() {
  const arquivo = path.join(
    process.cwd(),
    "saida",
    "animais.json"
  );

  const animais = JSON.parse(
    fs.readFileSync(arquivo, "utf8")
  );

  console.log(`Importando ${animais.length} espécies...`);

  // limpa a tabela antes de importar
  await prisma.animal.deleteMany();

  const lote = 1000;

  for (let i = 0; i < animais.length; i += lote) {

    const parte = animais.slice(i, i + lote);

    await prisma.animal.createMany({
  data: parte.map((animal: any) => ({
    id: animal.id,
    slug: animal.slug,
    nome: animal.nome,
    nomeCientifico: animal.nomeCientifico,
    reino: animal.reino,
    filo: animal.filo,
    classe: animal.classe,
    ordem: animal.ordem,
    familia: animal.familia,
    genero: animal.genero,
  })),
});

    console.log(
      `${Math.min(i + lote, animais.length)} / ${animais.length}`
    );
  }

  console.log("✅ Importação concluída!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });