export default function Fauna() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-4">
        🦜 Fauna Brasileira
      </h1>

      <p className="text-zinc-400 text-lg mb-10">
        O catálogo oficial da fauna brasileira está em desenvolvimento.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">
          <h2 className="text-xl font-bold mb-3">
            📚 Espécies catalogadas
          </h2>

          <p className="text-4xl font-bold text-cyan-400">
            129.515
          </p>
        </div>

        <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">
          <h2 className="text-xl font-bold mb-3">
            🇧🇷 Região
          </h2>

          <p>Brasil</p>
        </div>

        <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">
          <h2 className="text-xl font-bold mb-3">
            🚧 Status
          </h2>

          <p className="text-yellow-400">
            Em desenvolvimento
          </p>
        </div>

      </div>

      <section className="mt-12">

        <h2 className="text-3xl font-bold mb-4">
          Próximas funcionalidades
        </h2>

        <ul className="space-y-3 text-zinc-300">

          <li>✅ Busca por nome popular</li>

          <li>✅ Busca por nome científico</li>

          <li>✅ Fotos das espécies</li>

          <li>✅ Distribuição no Brasil</li>

          <li>✅ Biomas</li>

          <li>✅ Estado de conservação</li>

          <li>✅ Página individual de cada espécie</li>

        </ul>

      </section>

    </main>
  );
}