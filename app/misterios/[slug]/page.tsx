import casos from "@/data/casos";

export default async function Caso({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const caso = casos.find(
    (c) =>
      c.titulo
        .toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll("ç", "c") === slug
  );

  if (!caso) {
    return <h1>Caso não encontrado.</h1>;
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-6">
        {caso.titulo}
      </h1>

      <p className="text-cyan-400 mb-6">
        {caso.pais} • {caso.ano}
      </p>

      <p className="text-lg">
        {caso.resumo}
      </p>

    </main>
  );
}