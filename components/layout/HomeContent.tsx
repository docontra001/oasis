import Link from "next/link";
import Image from "next/image";

const areas = [
  {
    emoji: "🧬",
    titulo: "Biologia",
    descricao:
      "Notícias científicas e, em breve, o catálogo da fauna brasileira.",
    href: "/biologia",
  },
  {
    emoji: "🚀",
    titulo: "Astronomia",
    descricao:
      "Missões espaciais, descobertas e exploração do universo.",
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

      <div className="flex items-center gap-6 mb-12">

        <Image
          src="/logo3.png"
          alt="OASIS"
          width={120}
          height={120}
          priority
        />

        <div>

          <h1 className="text-6xl font-black tracking-tight">
            OASIS
          </h1>

          <p className="mt-2 text-xl text-zinc-400">
            Explore o conhecimento.
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {areas.map((area) => (
          <Link
            key={area.href}
            href={area.href}
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              p-6
              transition
              hover:border-cyan-500
              hover:-translate-y-1
            "
          >

            <div className="text-4xl mb-4">
              {area.emoji}
            </div>

            <h2 className="text-2xl font-bold">
              {area.titulo}
            </h2>

            <p className="mt-3 text-zinc-400 leading-relaxed">
              {area.descricao}
            </p>

          </Link>
        ))}

      </div>

    </main>
  );
}