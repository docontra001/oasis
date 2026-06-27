import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const busca =
    request.nextUrl.searchParams.get("search")?.trim() ?? "";

  const animais = await prisma.animal.findMany({
    where: busca
      ? {
          OR: [
            {
              nome: {
                contains: busca,
              },
            },
            {
              nomeCientifico: {
                contains: busca,
              },
            },
          ],
        }
      : {
          AND: [
            {
              destaque: true,
            },
            {
              imagem: {
                not: null,
              },
            },
            {
              nome: {
                not: "",
              },
            },
          ],
        },

    select: {
      id: true,
      slug: true,
      nome: true,
      nomeCientifico: true,
      classe: true,
      ordem: true,
      familia: true,
      genero: true,
      imagem: true,
    },

    take: 30,

    orderBy: {
      nome: "asc",
    },
  });

  return NextResponse.json(animais);
}