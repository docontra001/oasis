import Link from "next/link";
import { prisma } from "@/lib/prisma";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function BuscarPage({
  searchParams,
}: Props) {
  const { q = "" } = await searchParams;

  const fauna = q
    ? await prisma.animal.findMany({
        where: {
          OR: [
            {
              nome: {
                contains: q,
                mode: "insensitive",
              },
            },
            {
              nomeCientifico: {
                contains: q,
                mode: "insensitive",
              },
            },
          ],
        },

        select: {
          id: true,
          slug: true,
          nome: true,
          nomeCientifico: true,
          imagem: true,
        },

        take: 30,

        orderBy: {
          nome: "asc",
        },
      })
    : [];

  return (
    <main className="p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">
        Resultados para "{q}"
      </h1>

      <section>

        <h2 className="text-2xl font-bold mb-5">
          🐆 Fauna
        </h2>

        <div className="space-y-3">

          {fauna.length === 0 ? (
            <p className="text-zinc-400">
              Nenhum resultado encontrado.
            </p>
          ) : (
            fauna.map((animal) => (
              <Link
                key={animal.id}
                href={`/fauna/${animal.slug}`}
                className="block rounded-xl border border-zinc-800 bg-zinc-900 p-5 hover:border-cyan-500 transition"
              >
                <h3 className="text-xl font-bold">
                  {animal.nome || "Sem nome popular"}
                </h3>

                <p className="italic text-cyan-400">
                  {animal.nomeCientifico}
                </p>
              </Link>
            ))
          )}

        </div>

      </section>

    </main>
  );
}