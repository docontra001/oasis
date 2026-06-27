import Link from "next/link";

type Animal = {
  id: string;
  slug: string;
  nome: string;
  nomeCientifico: string;
  familia: string;
  ordem: string;
  classe: string;
};

type Props = {
  animal: Animal;
};

export default function AnimalCard({ animal }: Props) {
  return (
    <Link
      href={`/fauna/${animal.slug}`}
      className="
        block
        overflow-hidden
        rounded-xl
        border
        border-zinc-800
        bg-zinc-900
        transition
        hover:border-cyan-500
        hover:scale-[1.02]
      "
    >

      <div className="h-48 bg-zinc-800 flex items-center justify-center text-6xl">
        🦜
      </div>

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {animal.nome || "Sem nome popular"}
        </h2>

        <p className="mt-2 italic text-cyan-400">
          {animal.nomeCientifico}
        </p>

        <div className="mt-5 space-y-1 text-sm text-zinc-400">

          <p><b>Classe:</b> {animal.classe || "-"}</p>

          <p><b>Ordem:</b> {animal.ordem || "-"}</p>

          <p><b>Família:</b> {animal.familia || "-"}</p>

        </div>

      </div>

    </Link>
  );
}