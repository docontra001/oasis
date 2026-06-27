import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

async function main() {
  const fosseis = JSON.parse(
    fs.readFileSync("dados/catalogo/fosseis.json", "utf8")
  );

  console.log(`Importando ${fosseis.length} fósseis...`);

  await prisma.fossil.deleteMany();

  await prisma.fossil.createMany({
    data: fosseis,
  });

  console.log("✅ Catálogo importado com sucesso!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });