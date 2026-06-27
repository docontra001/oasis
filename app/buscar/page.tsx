"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BuscarPage() {
  const params = useSearchParams();
  const q = params.get("q") ?? "";

  const [dados, setDados] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/search?q=${encodeURIComponent(q)}`)
      .then((r) => r.json())
      .then(setDados);
  }, [q]);

  if (!dados) {
    return (
      <main className="p-10 text-white">
        Carregando...
      </main>
    );
  }

  return (
    <main className="p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">
        Resultados para "{q}"
      </h1>

      <section>

        <h2 className="text-2xl font-bold mb-4">
          🐆 Fauna
        </h2>

        <div className="space-y-3">

          {dados.fauna.length === 0 && (
            <p>Nenhum resultado.</p>
          )}

          {dados.fauna.map((animal: any) => (

            <Link
              key={animal.id}
              href={`/fauna/${animal.slug}`}
              className="block rounded-lg border border-zinc-800 p-4 hover:border-cyan-500"
            >
              <h3 className="font-bold">
                {animal.nome || "Sem nome popular"}
              </h3>

              <p className="italic text-cyan-400">
                {animal.nomeCientifico}
              </p>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}