import { notFound } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function PaginaFossil({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const fossil = await prisma.fossil.findFirst({
    where: {
      slug,
    },
  });

  if (!fossil) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-4 sm:p-6 lg:p-10">

      <a
        href="/paleontologia"
        className="text-cyan-400 hover:underline"
      >
        ← Voltar para Paleontologia
      </a>

      {fossil.imagem && (
        <div className="w-full rounded-2xl overflow-hidden bg-zinc-900 mt-8 mb-8 border border-zinc-800">

          <Image
            src={fossil.imagem}
            alt={fossil.nomeCientifico}
            width={1600}
            height={900}
            unoptimized
            className="w-full h-auto"
          />

        </div>
      )}

      <h1 className="text-5xl font-bold mt-6">
        {fossil.nome}
      </h1>

      <p className="text-2xl italic text-cyan-400 mt-2">
        {fossil.nomeCientifico}
      </p>

      <div className="grid lg:grid-cols-2 gap-6 mt-10">

        <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">

          <h2 className="text-2xl font-bold mb-4">
            🦖 Informações
          </h2>

          <div className="space-y-2">

            <p><b>Grupo:</b> {fossil.grupo}</p>
            <p><b>Período:</b> {fossil.periodo}</p>
            <p><b>Idade:</b> {fossil.idade}</p>
            <p><b>Dieta:</b> {fossil.dieta}</p>
            <p><b>Comprimento:</b> {fossil.comprimento}</p>
            <p><b>Altura:</b> {fossil.altura}</p>
            <p><b>Peso:</b> {fossil.peso}</p>
            <p><b>Continente:</b> {fossil.continente}</p>
            <p><b>País:</b> {fossil.pais}</p>

          </div>

        </div>

        <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">

          <h2 className="text-2xl font-bold mb-4">
            📖 Descrição
          </h2>

          <p>
            {fossil.descricao}
          </p>

          {fossil.curiosidade && (
            <>
              <h3 className="text-xl font-bold mt-8 mb-3">
                💡 Curiosidade
              </h3>

              <p>
                {fossil.curiosidade}
              </p>
            </>
          )}

        </div>

      </div>

    </main>
  );
}