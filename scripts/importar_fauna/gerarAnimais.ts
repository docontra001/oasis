import fs from "fs";
import path from "path";

export function gerarAnimais(
  especies: Record<string, string>[],
  nomes: Map<string, string>
) {
  const animais = especies.map((especie) => {
    const nomePopular = nomes.get(especie.id) ?? "";

    return {
      id: especie.id,

      slug: especie.scientificName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, "-"),

      nome: nomePopular,

      nomeCientifico: especie.scientificName,

      reino: especie.kingdom,

      filo: especie.phylum,

      classe: especie.class,

      ordem: especie.order,

      familia: especie.family,

      genero: especie.genus,
    };
  });

  fs.writeFileSync(
    path.join(process.cwd(), "saida", "animais.json"),
    JSON.stringify(animais, null, 2),
    "utf8"
  );

  console.log(`✅ ${animais.length} animais exportados.`);
}