import Link from "next/link";

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
};

const itens = [
  { nome: "Início", emoji: "🏠", rota: "/" },
  { nome: "Biologia", emoji: "🧬", rota: "/biologia" },
  { nome: "Astronomia", emoji: "🔭", rota: "/astronomia" },
  { nome: "Geografia", emoji: "🌎", rota: "/geografia" },
  { nome: "Paleontologia", emoji: "🦖", rota: "/paleontologia" },
  { nome: "Mistérios", emoji: "🛸", rota: "/misterios" },
  { nome: "Sobrevivência", emoji: "🏕️", rota: "/sobrevivencia" },
  { nome: "Biblioteca", emoji: "📚", rota: "/biblioteca" },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
}: SidebarProps) {
  return (
    <aside
      className={`
        ${collapsed ? "w-20" : "w-64"}
        bg-zinc-950
        border-r
        border-zinc-800
        p-4
        transition-all
        duration-300
      `}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mb-6 w-full rounded-lg bg-zinc-800 p-2 hover:bg-zinc-700 transition"
      >
        {collapsed ? "▶" : "◀"}
      </button>

      {itens.map((item) => (
        <Link
          key={item.rota}
          href={item.rota}
          className="flex items-center gap-3 rounded-lg p-3 hover:bg-zinc-800 hover:text-cyan-400 transition"
        >
          <span className="text-xl">{item.emoji}</span>

          {!collapsed && (
            <span>{item.nome}</span>
          )}
        </Link>
      ))}
    </aside>
  );
}