"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [texto, setTexto] = useState("");
  const router = useRouter();

  function pesquisar() {
    if (!texto.trim()) return;

    router.push(`/buscar?q=${encodeURIComponent(texto)}`);
  }

  return (
    <input
      type="text"
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          pesquisar();
        }
      }}
      placeholder="Pesquisar no OASIS..."
      className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 w-80 text-white outline-none focus:border-cyan-400"
    />
  );
}