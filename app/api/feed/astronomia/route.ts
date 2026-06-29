import { prisma } from "@/lib/prisma";

export async function GET() {
  const noticias = await prisma.news.findMany({
    where: {
      categoria: "Astronomia",
    },
    orderBy: {
      publicadaEm: "desc",
    },
    take: 50,
  });

  return Response.json(
    noticias.map((n) => ({
      titulo: n.tituloPt ?? n.titulo,
      descricao: n.descricaoPt ?? n.descricao,
      link: n.link,
      data: n.publicadaEm,
      imagem: n.imagem ?? "",
      fonte: n.fonte,
    }))
  );
}