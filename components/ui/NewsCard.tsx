import Image from "next/image";

type Props = {
  titulo: string;
  descricao: string;
  link: string;
  data: string;
  fonte: string;
  imagem: string;
};

export default function NewsCard({
  titulo,
  descricao,
  link,
  data,
  fonte,
  imagem,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20">

      {imagem && (
        <Image
          src={imagem}
          alt={titulo}
          width={800}
          height={450}
          className="h-52 w-full object-cover"
        />
      )}

      <div className="p-5">

        <p className="mb-2 text-sm font-semibold text-cyan-400">
          {fonte}
        </p>

        <h2 className="mb-3 text-xl font-bold">
          {titulo}
        </h2>

        <p className="mb-5 line-clamp-3 text-zinc-400">
          {descricao}
        </p>

        <div className="flex items-center justify-between">

          <span className="text-sm text-zinc-500">
            {new Date(data).toLocaleDateString("pt-BR")}
          </span>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Ler matéria →
          </a>

        </div>

      </div>

    </div>
  );
}