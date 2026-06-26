import Link from "next/link";

const areas = [
  {
    emoji: "🧬",
    titulo: "Biologia",
    descricao: "Notícias científicas e, em breve, o catálogo da fauna brasileira.",
    href: "/biologia",
  },
  {
    emoji: "🚀",
    titulo: "Astronomia",
    descricao: "Missões espaciais, descobertas e exploração do universo.",
    href: "/astronomia",
  },
  {
    emoji: "🌎",
    titulo: "Geografia",
    descricao: "Clima, relevo, mapas e estudos ambientais.",
    href: "/geografia",
  },
  {
    emoji: "🦖",
    titulo: "Paleontologia",
    descricao: "Dinossauros, fósseis e história da vida.",
    href: "/paleontologia",
  },
  {
    emoji: "👽",
    titulo: "Mistérios",
    descricao: "Casos históricos documentados e catalogados.",
    href: "/misterios",
  },
  {
    emoji: "🏕️",
    titulo: "Sobrevivência",
    descricao: "Guias, equipamentos e técnicas outdoor.",
    href: "/sobrevivencia",
  },
];

export default function HomeContent() {
  return (
    <main className="p-10 text-white">

      <h1 className="text-5xl font-bold mb-3">
        🌍 OASIS
      </h1>

      <p className="text-zinc-400 text-lg mb-10">
        Ciência, Natureza, Mistérios e Exploração.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {areas.map((area) => (

          <Link
            key={area.href}
            href={area.href}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 hover:border-cyan-500 hover:scale-[1.02] transition"
          >

            <h2 className="text-2xl font-bold mb-3">
              {area.emoji} {area.titulo}
            </h2>

            <p className="text-zinc-400">
              {area.descricao}
            </p>

          </Link>

        ))}

      </div>

      <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="text-3xl font-bold mb-6">
          📊 OASIS em números
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div>
            <p className="text-4xl font-bold text-cyan-400">
              129.515
            </p>

            <p className="text-zinc-400">
              Espécies catalogadas
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-cyan-400">
              2
            </p>

            <p className="text-zinc-400">
              Casos catalogados
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-cyan-400">
              4
            </p>

            <p className="text-zinc-400">
              Fontes de notícias
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-cyan-400">
              6
            </p>

            <p className="text-zinc-400">
              Áreas do conhecimento
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}