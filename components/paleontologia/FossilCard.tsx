"use client";

import Link from "next/link";
import Image from "next/image";

type Fossil = {
  id: string;
  slug: string;
  nome: string;
  nomeCientifico: string;
  grupo: string;
  periodo: string;
  imagem?: string | null;
};

type Props = {
  fossil: Fossil;
};

export default function FossilCard({ fossil }: Props) {
  return (
    <Link
      href={`/paleontologia/${fossil.slug}`}
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
      <div className="h-52 bg-zinc-800">

        {fossil.imagem ? (
          <Image
            src={fossil.imagem}
            alt={fossil.nomeCientifico}
            width={600}
            height={400}
            unoptimized
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-6xl">
            🦖
          </div>
        )}

      </div>

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {fossil.nome || "Sem nome popular"}
        </h2>

        <p className="mt-2 italic text-cyan-400">
          {fossil.nomeCientifico}
        </p>

        <div className="mt-5 space-y-1 text-sm text-zinc-400">
          <p><b>Grupo:</b> {fossil.grupo || "-"}</p>
          <p><b>Período:</b> {fossil.periodo || "-"}</p>
        </div>

      </div>

    </Link>
  );
}