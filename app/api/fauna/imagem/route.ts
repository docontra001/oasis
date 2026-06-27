import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const nome = searchParams.get("nome");

  if (!nome) {
    return NextResponse.json(
      { erro: "Nome não informado." },
      { status: 400 }
    );
  }

  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
    nome
  )}`;

  const resposta = await fetch(url, {
    headers: {
      "User-Agent": "OASIS/1.0"
    }
  });

  if (!resposta.ok) {
    return NextResponse.json({
      imagem: null
    });
  }

  const dados = await resposta.json();

  return NextResponse.json({
    titulo: dados.title,
    descricao: dados.description,
    imagem: dados.thumbnail?.source ?? null
  });
}