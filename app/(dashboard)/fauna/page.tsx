import FaunaClient from "@/components/fauna/FaunaClient";

export default function Fauna() {

  return (

    <main className="min-h-screen bg-zinc-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-3">
        🦜 Fauna Brasileira
      </h1>

      <p className="text-zinc-400 mb-8">
        Catálogo da fauna brasileira.
      </p>

      <FaunaClient />

    </main>

  );

}