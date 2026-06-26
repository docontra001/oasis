import { buscarFeedBiologia } from "@/lib/feeds";

export async function GET() {

  try {

    const noticias = await buscarFeedBiologia();

    return Response.json(noticias);

  } catch (erro) {

    console.error(erro);

    return Response.json(
      { erro: "Erro ao carregar notícias." },
      { status: 500 }
    );

  }

}