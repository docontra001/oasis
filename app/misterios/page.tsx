import Link from "next/link";
import casos from "@/data/casos";

export default function MisteriosPage() {
  return (
    <main className="flex-1 bg-zinc-950 text-white p-8 overflow-y-auto">

      <h1 className="text-5xl font-bold mb-2">
        🛸 Arquivo OASIS
      </h1>

      <p className="text-zinc-500 mb-8">
        Casos históricos catalogados.
      </p>

      <div className="grid gap-6">

        {casos.map((caso) => (

          <Link
            key={caso.titulo}
            href={`/misterios/${caso.titulo
              .toLowerCase()
              .replaceAll(" ", "-")
              .replaceAll("ç", "c")
            }`}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-500 hover:-translate-y-1"
          >

            <h2 className="text-2xl font-bold">
              {caso.titulo}
            </h2>

            <p className="mt-2 text-cyan-400">
              {caso.pais} • {caso.ano}
            </p>

            <p className="mt-4 text-zinc-300">
              {caso.resumo}
            </p>

            <p className="mt-6 text-cyan-400">
              Abrir caso →
            </p>

          </Link>

        ))}

      </div>

    </main>
  );
}