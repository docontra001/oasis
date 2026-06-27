"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
};

const itens = [
  { nome: "Início", emoji: "🏠", rota: "/" },

  {
    nome: "Biologia",
    emoji: "🧬",
    rota: "/biologia",
    filhos: [
      {
        nome: "Notícias",
        rota: "/biologia",
      },
      {
        nome: "Fauna Brasileira",
        rota: "/fauna",
      },
    ],
  },

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

  const pathname = usePathname();

  const [bioAberta, setBioAberta] = useState(true);

  return (
    <aside
      className={`
        ${collapsed ? "w-20" : "w-64"}
        bg-zinc-950
        border-r
        border-zinc-800
        p-4
        transition-all
        duration-500
      `}
    >

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mb-6 w-full rounded-lg bg-zinc-900 p-2 hover:bg-cyan-600 transition"
      >
        {collapsed ? "❯" : "❮"}
      </button>

      {itens.map((item) => (

        <div key={item.nome}>

          {item.filhos ? (

            <>
              <button
                onClick={() => setBioAberta(!bioAberta)}
                className={`
                  w-full flex items-center justify-between
                  rounded-lg p-3
                  hover:bg-zinc-800
                `}
              >

                <div className="flex items-center gap-3">
                  <span>{item.emoji}</span>

                  {!collapsed && <span>{item.nome}</span>}
                </div>

                {!collapsed && (
                  <span>{bioAberta ? "▾" : "▸"}</span>
                )}

              </button>

              {!collapsed && bioAberta && (

                <div className="ml-8 mt-1 mb-2 space-y-1">

                  {item.filhos.map((filho) => (

                    <Link
                      key={filho.rota}
                      href={filho.rota}
                      className={`
                        block rounded-lg px-3 py-2 text-sm

                        ${
                          pathname === filho.rota
                            ? "bg-cyan-500/10 text-cyan-400"
                            : "hover:bg-zinc-800"
                        }
                      `}
                    >
                      {filho.nome}
                    </Link>

                  ))}

                </div>

              )}

            </>

          ) : (

            <Link
              href={item.rota}
              className={`
                flex items-center gap-3 rounded-lg p-3 transition

                ${
                  pathname === item.rota
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                    : "hover:bg-zinc-800 hover:text-cyan-400"
                }
              `}
            >

              <span>{item.emoji}</span>

              {!collapsed && <span>{item.nome}</span>}

            </Link>

          )}

        </div>

      ))}

    </aside>
  );
}