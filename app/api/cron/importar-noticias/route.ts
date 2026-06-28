import { importarNoticias } from "@/lib/news/importarNoticias";

export async function GET() {
  await importarNoticias();

  return Response.json({
    ok: true,
  });
}