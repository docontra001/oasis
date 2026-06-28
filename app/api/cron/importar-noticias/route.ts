import { importarNoticias } from "@/lib/news/importarNoticias";

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");

  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json(
      { erro: "Não autorizado" },
      { status: 401 }
    );
  }

  const inicio = Date.now();

  try {
    const total = await importarNoticias();

    return Response.json({
      ok: true,
      noticiasImportadas: total,
      tempo: `${((Date.now() - inicio) / 1000).toFixed(1)}s`,
    });
  } catch (e) {
    console.error(e);

    return Response.json(
      {
        ok: false,
        erro: String(e),
      },
      { status: 500 }
    );
  }
}