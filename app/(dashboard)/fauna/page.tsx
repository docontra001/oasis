import fs from "fs";
import path from "path";
import AnimalCard from "@/components/fauna/AnimalCard";
import FaunaClient from "@/components/fauna/FaunaClient";

export default function Fauna() {
  const arquivo = path.join(
    process.cwd(),
    "saida",
    "animais.json"
  );

  const animais = JSON.parse(
    fs.readFileSync(arquivo, "utf8")
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-3">
        🦜 Fauna Brasileira
      </h1>

      <p className="text-zinc-400 mb-8">
        {animais.length.toLocaleString("pt-BR")} espécies catalogadas.
      </p>

      <FaunaClient animais={animais} />

    </main>
  );
}