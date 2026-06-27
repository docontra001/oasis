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
          AND: [
            {
              destaque: true,
            },
            {
              imagem: {
                not: null,
              },
            },
          ],
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

    take: 30,

    orderBy: {
      nome: "asc",
    },
  });

  return NextResponse.json(fosseis);
}