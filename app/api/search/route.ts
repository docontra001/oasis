import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const busca =
    request.nextUrl.searchParams.get("q")?.trim() ?? "";

  if (!busca) {
    return NextResponse.json([]);
  }

  const fauna = await prisma.animal.findMany({
    where: {
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
    },

    take: 30,

    select: {
      id: true,
      slug: true,
      nome: true,
      nomeCientifico: true,
      imagem: true,
    },
  });

  return NextResponse.json({
    fauna,
    biologia: [],
    astronomia: [],
    geografia: [],
    paleontologia: [],
    misterios: [],
    sobrevivencia: [],
    biblioteca: [],
  });
}