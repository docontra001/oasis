import { importarNoticias } from "@/lib/news/importarNoticias";

export async function GET(request: Request) {
  const auth = request.headers.get("Authorization");

  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  await importarNoticias();

  return Response.json({
    ok: true,
  });
}