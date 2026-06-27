import { notFound } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function PaginaAnimal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const animal = await prisma.animal.findFirst({
  where: {
    slug,
  },
});

  if (!animal) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-4 sm:p-6 lg:p-10">

      <a
        href="/fauna"
        className="text-cyan-400 hover:underline"
      >
        ← Voltar para a fauna
      </a>

      {animal.imagem && (
        <div className="w-full rounded-2xl overflow-hidden bg-zinc-900 mt-8 mb-8 border border-zinc-800">

          <Image
            src={animal.imagem}
            alt={animal.nomeCientifico}
            width={1600}
            height={900}
            unoptimized
            className="w-full h-auto"
          />

        </div>
      )}

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6">
        {animal.nome || "Sem nome popular"}
      </h1>

      <p className="text-lg sm:text-2xl italic text-cyan-400 mt-2">
        {animal.nomeCientifico}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

        <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">

          <h2 className="text-2xl font-bold mb-4">
            🧬 Classificação
          </h2>

          <div className="space-y-2 text-sm sm:text-base">
            <p><b>Reino:</b> {animal.reino}</p>
            <p><b>Filo:</b> {animal.filo}</p>
            <p><b>Classe:</b> {animal.classe}</p>
            <p><b>Ordem:</b> {animal.ordem}</p>
            <p><b>Família:</b> {animal.familia}</p>
            <p><b>Gênero:</b> {animal.genero}</p>
          </div>

        </div>

        <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">

          <h2 className="text-2xl font-bold mb-4">
            📖 Informações
          </h2>

          <p>
            Esta espécie faz parte do Catálogo Taxonômico da Fauna do Brasil.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 mt-4">
            Em breve esta página exibirá:
          </p>

          <ul className="list-disc pl-5 mt-3 space-y-2 text-zinc-300 text-sm sm:text-base">
            <li>🗺️ Distribuição</li>
            <li>🌿 Habitat</li>
            <li>🍖 Alimentação</li>
            <li>📏 Tamanho</li>
            <li>❤️ Estado de conservação</li>
            <li>📚 Referências científicas</li>
          </ul>

        </div>

      </div>

    </main>
  );
}