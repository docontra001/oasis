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

      <div className="grid xl:grid-cols-3 gap-6 mt-10">

        <div className="rounded-2xl bg-zinc-900/80 backdrop-blur border border-cyan-900/40 p-6 shadow-xl">

          <h2 className="text-2xl font-bold mb-4">
            🦖 Informações
          </h2>

          <div className="grid grid-cols-2 gap-4">

  <div className="bg-zinc-800 rounded-xl p-4">
    <div className="text-zinc-400 text-sm">Grupo</div>
    <div className="font-bold">{fossil.grupo ?? "-"}</div>
  </div>

  <div className="bg-zinc-800 rounded-xl p-4">
    <div className="text-zinc-400 text-sm">Período</div>
    <div className="font-bold">{fossil.periodo ?? "-"}</div>
  </div>

  <div className="bg-zinc-800 rounded-xl p-4">
    <div className="text-zinc-400 text-sm">Dieta</div>
    <div className="font-bold">{fossil.dieta ?? "-"}</div>
  </div>

  <div className="bg-zinc-800 rounded-xl p-4">
    <div className="text-zinc-400 text-sm">Comprimento</div>
    <div className="font-bold">{fossil.comprimento ?? "-"}</div>
  </div>

  <div className="bg-zinc-800 rounded-xl p-4">
    <div className="text-zinc-400 text-sm">Peso</div>
    <div className="font-bold">{fossil.peso ?? "-"}</div>
  </div>

  <div className="bg-zinc-800 rounded-xl p-4">
    <div className="text-zinc-400 text-sm">Continente</div>
    <div className="font-bold">{fossil.continente ?? "-"}</div>
  </div>

</div>

        </div>

        <div className="rounded-2xl bg-zinc-900/80 backdrop-blur border border-cyan-900/40 p-6 shadow-xl">

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