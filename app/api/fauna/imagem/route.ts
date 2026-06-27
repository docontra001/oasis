import { NextResponse } from "next/server";
import { buscarImagemWikipedia } from "@/lib/fauna/wikipedia";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const nome = searchParams.get("nome");

  if (!nome) {
    return NextResponse.json(
      { erro: "Nome não informado." },
      { status: 400 }
    );
  }

  const resultado = await buscarImagemWikipedia(nome);

  return NextResponse.json(resultado);
}