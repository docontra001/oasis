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
                mode: "insensitive",
              },
            },
            {
              nomeCientifico: {
                contains: busca,
                mode: "insensitive",
              },
            },
          ],
        }
      : {
          destaque: true,
          imagem: {
            not: null,
          },
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

    orderBy: {
      nome: "asc",
    },

    take: 30,
  });

  return NextResponse.json(animais);
}