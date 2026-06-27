import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const arquivo = path.join(
    process.cwd(),
    "saida",
    "animais.json"
  );

  const animais = JSON.parse(
    fs.readFileSync(arquivo, "utf8")
  );

  return NextResponse.json(
    animais
      .filter((a: any) => a.nome)
      .slice(0, 30)
  );
}