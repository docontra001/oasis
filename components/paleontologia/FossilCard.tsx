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
  dieta?: string | null;
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
      group
      overflow-hidden
      rounded-2xl
      border border-zinc-800
      bg-zinc-900
      shadow-xl
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-cyan-500
      hover:shadow-cyan-900/40
    "
    >
      <div className="relative h-64 overflow-hidden bg-zinc-800">
        {fossil.imagem ? (
          <Image
            src={fossil.imagem}
            alt={fossil.nomeCientifico}
            width={800}
            height={600}
            unoptimized
            className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
          />
        ) : (
          <div className="flex h-full items-center justify-center text-7xl">
            🦖
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div
  className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold text-white ${
    fossil.dieta === "Carnivore"
      ? "bg-red-600/90"
      : fossil.dieta === "Herbivore"
      ? "bg-green-600/90"
      : "bg-amber-600/90"
  }`}
>
  {fossil.dieta ?? "Desconhecida"}
</div>

        
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-bold group-hover:text-cyan-400 transition">
          {fossil.nome}
        </h2>

        <p className="mt-2 italic text-cyan-400">
          {fossil.nomeCientifico}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm">
          <span className="rounded-lg bg-zinc-800 px-3 py-2">
            🕒 {fossil.periodo ?? "-"}
          </span>

          <span className="text-cyan-400 font-semibold">
            Ver ficha →
          </span>
        </div>
      </div>
    </Link>
  );
}