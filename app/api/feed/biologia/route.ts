import { prisma } from "@/lib/prisma";

const prioridade: Record<string, number> = {
  FAPESP: 100,
  Embrapa: 95,
  Fiocruz: 90,
  INPE: 85,
};

export async function GET() {
  const noticias = await prisma.news.findMany();

  noticias.sort((a, b) => {
    const pa = prioridade[a.fonte] ?? 0;
    const pb = prioridade[b.fonte] ?? 0;

    if (pa !== pb) {
      return pb - pa;
    }

    return (
      new Date(b.publicadaEm).getTime() -
      new Date(a.publicadaEm).getTime()
    );
  });

  return Response.json(
    noticias.slice(0, 50).map((n) => ({
      titulo: n.tituloPt ?? n.titulo,
      descricao: n.descricaoPt ?? n.descricao,
      link: n.link,
      data: n.publicadaEm,
      imagem: n.imagem ?? "",
      fonte: n.fonte,
    }))
  );
}