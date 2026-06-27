import casos from "@/data/casos";

export default async function Caso({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const caso = casos.find((c) => c.slug === slug);

  if (!caso) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <h1 className="text-4xl">Caso não encontrado.</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-4">
        {caso.titulo}
      </h1>

      <div className="flex flex-wrap gap-4 text-cyan-400 mb-8">

        <span>📍 {caso.local}</span>

        <span>📅 {caso.dataInicio}</span>

        <span>📊 {caso.status}</span>

        <span>🟡 Evidência: {caso.nivelEvidencia}</span>

      </div>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">
          📖 Resumo
        </h2>

        <p className="text-zinc-300 leading-8">
          {caso.resumo}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">
          🕒 Linha do Tempo
        </h2>

        <div className="space-y-5">

          {caso.cronologia.map((evento: any) => (

            <div
              key={evento.titulo}
              className="rounded-xl bg-zinc-900 border border-zinc-800 p-5"
            >

              <p className="text-cyan-400">
                {evento.data}
              </p>

              <h3 className="text-xl font-bold mt-2">
                {evento.titulo}
              </h3>

              <p className="text-zinc-300 mt-2">
                {evento.descricao}
              </p>

            </div>

          ))}

        </div>
      </section>

      <section className="mb-10">

        <h2 className="text-3xl font-bold mb-4">
          👥 Pessoas Envolvidas
        </h2>

        <ul className="list-disc pl-6 space-y-2">

          {caso.pessoas.map((pessoa: any) => (
            <li key={pessoa}>{pessoa}</li>
          ))}

        </ul>

      </section>

      <section className="mb-10">

        <h2 className="text-3xl font-bold mb-4">
          🏛️ Instituições
        </h2>

        <ul className="list-disc pl-6 space-y-2">

          {caso.instituicoes.map((instituicao: any) => (
            <li key={instituicao}>{instituicao}</li>
          ))}

        </ul>

      </section>

      <section className="mb-10">

        <h2 className="text-3xl font-bold mb-4">
          🧠 Hipóteses
        </h2>

        <div className="space-y-4">

          {caso.hipoteses.map((hipotese: any) => (

            <div
              key={hipotese.titulo}
              className="rounded-lg bg-zinc-900 border border-zinc-800 p-4"
            >

              <h3 className="font-bold">
                {hipotese.titulo}
              </h3>

              <p className="text-zinc-400">
                {hipotese.status}
              </p>

            </div>

          ))}

        </div>

      </section>

      <section className="mb-10">

        <h2 className="text-3xl font-bold mb-4">
          ❓ Questões em Aberto
        </h2>

        <ul className="list-disc pl-6 space-y-2">

          {caso.questoesEmAberto.map((questao: any) => (
            <li key={questao}>{questao}</li>
          ))}

        </ul>

      </section>

      <section>

        <h2 className="text-3xl font-bold mb-4">
          📚 Fontes
        </h2>

        <h3 className="text-cyan-400 mb-2">
          Fontes Primárias
        </h3>

        <ul className="list-disc pl-6 mb-6">

          {caso.fontes.primarias.map((fonte: any) => (
            <li key={fonte}>{fonte}</li>
          ))}

        </ul>

        <h3 className="text-cyan-400 mb-2">
          Fontes Secundárias
        </h3>

        <ul className="list-disc pl-6">

          {caso.fontes.secundarias.map((fonte: any) => (
            <li key={fonte}>{fonte}</li>
          ))}

        </ul>

      </section>

    </main>
  );
}