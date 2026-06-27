import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Image from "next/image";
import { buscarImagemWikipedia } from "@/lib/fauna/wikipedia";

export default async function PaginaAnimal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const arquivo = path.join(
    process.cwd(),
    "saida",
    "animais.json"
  );

  const animais = JSON.parse(
    fs.readFileSync(arquivo, "utf8")
  );

  const animal = animais.find(
    (a: any) => a.slug === slug
  );

  if (!animal) {
    notFound();
  }

  const imagem = await buscarImagemWikipedia(
    animal.nomeCientifico
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-4 sm:p-6 lg:p-10">

      <a
        href="/fauna"
        className="text-cyan-400 hover:underline"
      >
        ← Voltar para a fauna
      </a>

      {imagem?.imagem && (
  <div className="w-full rounded-2xl overflow-hidden bg-zinc-900 mt-8 mb-8 border border-zinc-800">

    <Image
      src={imagem.imagem}
      alt={animal.nomeCientifico}
      width={1600}
      height={900}
      unoptimized
      className="w-full h-auto"
    />

  </div>
)}

      <h1 className="text-5xl font-bold">
        {animal.nome || "Sem nome popular"}
      </h1>

      <p className="text-2xl italic text-cyan-400 mt-2">
        {animal.nomeCientifico}
      </p>

      {imagem?.descricao && (
        <p className="text-zinc-400 mt-2">
          {imagem.descricao}
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            🧬 Classificação
          </h2>

          <p><b>Reino:</b> {animal.reino}</p>
          <p><b>Filo:</b> {animal.filo}</p>
          <p><b>Classe:</b> {animal.classe}</p>
          <p><b>Ordem:</b> {animal.ordem}</p>
          <p><b>Família:</b> {animal.familia}</p>
          <p><b>Gênero:</b> {animal.genero}</p>

        </div>

        <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">

          <h2 className="text-2xl font-bold mb-4">
            📖 Informações
          </h2>

          <p>
            Esta espécie faz parte do Catálogo Taxonômico da Fauna do Brasil.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 mb-8">
            Em breve esta página exibirá:
          </p>

          <ul className="list-disc pl-5 mt-3 space-y-2 text-zinc-300">
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