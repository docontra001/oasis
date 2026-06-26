type NewsCardProps = {
  categoria: string;
  titulo: string;
  descricao: string;
  fonte: string;
  tempo: string;
};

export default function NewsCard({
  categoria,
  titulo,
  descricao,
  fonte,
  tempo,
}: NewsCardProps) {
  return (
    <a
      className="block bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-cyan-500 transition"
    >

      <span className="text-cyan-400 text-sm font-semibold">
        {categoria}
      </span>

      <h2 className="text-2xl font-bold mt-2">
        {titulo}
      </h2>

      <p className="text-zinc-400 mt-3 line-clamp-4">
        {descricao}
      </p>

      <p className="text-xs text-zinc-600 mt-6">
        {fonte} • {tempo}
      </p>

    </a>
  );
}