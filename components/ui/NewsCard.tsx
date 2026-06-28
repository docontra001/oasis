import Image from "next/image";

type Props = {
  titulo: string;
  descricao: string;
  link: string;
  data: string;
  fonte: string;
  imagem: string;
  destaque?: boolean;
};

export default function NewsCard({
  titulo,
  descricao,
  link,
  data,
  fonte,
  imagem,
  destaque = false,
}: Props) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-500
        hover:shadow-cyan-500/20
      "
    >
      <div
        className={`relative overflow-hidden bg-zinc-800 ${
          destaque ? "h-[520px]" : "h-64"
        }`}
      >
        {imagem ? (
          <Image
            src={imagem}
            alt={titulo}
            fill
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />
        ) : (
          <div className="flex h-full items-center justify-center text-7xl">
            🧬
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute top-4 left-4 rounded-full bg-cyan-600/90 px-3 py-1 text-xs font-bold">
          {fonte}
        </div>
      </div>

      <div className="p-6">
        <h2
          className={`font-bold transition group-hover:text-cyan-400 ${
            destaque
              ? "text-5xl line-clamp-3"
              : "text-2xl line-clamp-2"
          }`}
        >
          {titulo}
        </h2>

        <p className="mt-4 line-clamp-4 text-zinc-400">
          {descricao}
        </p>

        <div className="mt-6 flex items-center justify-between flex-wrap gap-3">

          <span className="text-sm text-zinc-500">
            {new Date(data).toLocaleDateString("pt-BR")}
          </span>

          <div className="flex gap-2">

            <button
              className="
                rounded-lg
                border
                border-zinc-700
                px-4
                py-2
                text-sm
                font-semibold
                transition
                hover:border-cyan-500
                hover:text-cyan-400
              "
            >
              🌐 Traduzir
            </button>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-lg
                bg-cyan-600
                px-4
                py-2
                font-semibold
                text-white
                transition
                hover:bg-cyan-500
              "
            >
              Ler →
            </a>

          </div>

        </div>
      </div>
    </article>
  );
}