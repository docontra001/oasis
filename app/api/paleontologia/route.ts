import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const busca =
    request.nextUrl.searchParams.get("search")?.trim() ?? "";

  const fosseis = await prisma.fossil.findMany({
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
      grupo: true,
      periodo: true,
      imagem: true,
    },

    orderBy: {
      nome: "asc",
    },

    take: 30,
  });

  return NextResponse.json(fosseis);
}