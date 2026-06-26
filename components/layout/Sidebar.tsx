import Link from "next/link";

const itens = [
  { nome: "🏠 Início", rota: "/" },
  { nome: "🧬 Biologia", rota: "/biologia" },
  { nome: "🔭 Astronomia", rota: "/astronomia" },
  { nome: "🌎 Geografia", rota: "/geografia" },
  { nome: "🦖 Paleontologia", rota: "/paleontologia" },
  { nome: "🛸 Mistérios", rota: "/misterios" },
  { nome: "🏕️ Sobrevivência", rota: "/sobrevivencia" },
  { nome: "📚 Biblioteca", rota: "/biblioteca" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800 p-5">

      {itens.map((item) => (

        <Link
          key={item.rota}
          href={item.rota}
          className="block rounded-lg p-3 hover:bg-zinc-800 hover:text-cyan-400 transition"
        >
          {item.nome}
        </Link>

      ))}

    </aside>
  );
}