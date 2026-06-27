import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const busca =
    searchParams.get("search")?.toLowerCase().trim() ?? "";

  const arquivo = path.join(
    process.cwd(),
    "saida",
    "animais.json"
  );

  const animais = JSON.parse(
    fs.readFileSync(arquivo, "utf8")
  );

  let resultado = animais.filter((a: any) => a.nome);

  if (busca) {
    resultado = resultado.filter((animal: any) => {
      return (
        animal.nome?.toLowerCase().includes(busca) ||
        animal.nomeCientifico?.toLowerCase().includes(busca)
      );
    });
  }

  return NextResponse.json(
    resultado.slice(0, 30)
  );
}