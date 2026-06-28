import { prisma } from "@/lib/prisma";

const prioridade: Record<string, number> = {
  FAPESP: 100,
  Embrapa: 95,
  Fiocruz: 90,
  INPE: 85,
};

export async function GET() {
  const noticias = await prisma.news.findMany();

  // Ordena por prioridade e data
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

  // Mistura as fontes
  const resultado = [];
  const ultimaFonte = new Set<number>();

  while (noticias.length) {
    let indice = noticias.findIndex(
      (n) => !ultimaFonte.has(n.fonte as any)
    );

    if (indice === -1) {
      ultimaFonte.clear();
      indice = 0;
    }

    const noticia = noticias.splice(indice, 1)[0];

    resultado.push(noticia);
    ultimaFonte.add(noticia.fonte as any);
  }

  return Response.json(
    resultado.slice(0, 50).map((n) => ({
      titulo: n.tituloPt ?? n.titulo,
      descricao: n.descricaoPt ?? n.descricao,
      link: n.link,
      data: n.publicadaEm,
      imagem: n.imagem ?? "",
      fonte: n.fonte,
    }))
  );
}