import PaleoClient from "@/components/paleontologia/PaleoClient";

export default function Paleontologia() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-3">
        🦖 Paleontologia
      </h1>

      <p className="text-zinc-400 mb-8">
        Catálogo de organismos fósseis.
      </p>

      <PaleoClient />

    </main>
  );
}