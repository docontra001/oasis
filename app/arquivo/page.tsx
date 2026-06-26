import casos from "@/data/casos";

export default function ArquivoPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        🛸 Arquivo OASIS
      </h1>

      <div className="grid gap-6">

        {casos.map((caso) => (
          <div
            key={caso.titulo}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h2 className="text-2xl font-bold">
              {caso.titulo}
            </h2>

            <p className="text-cyan-400 mt-2">
              {caso.local} • {caso.dataInicio}
            </p>

            <p className="mt-4 text-zinc-300">
              {caso.resumo}
            </p>

            <p className="mt-4 text-sm text-zinc-500">
              Status: {caso.status}
            </p>
          </div>
        ))}

      </div>

    </main>
  );
}