"use client";

import { useEffect, useMemo, useState } from "react";
import FossilCard from "./FossilCard";
import SearchBar from "../fauna/SearchBar";

export default function PaleoClient() {
  const [fosseis, setFosseis] = useState<any[]>([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch(`/api/paleontologia?search=${encodeURIComponent(pesquisa)}`)
        .then((r) => r.json())
        .then(setFosseis)
        .catch(console.error);
    }, 300);

    return () => clearTimeout(timeout);
  }, [pesquisa]);

  const destaque = useMemo(() => {
    return [
      "Tyrannosaurus",
      "Spinosaurus",
      "Triceratops",
      "Velociraptor",
      "Giganotosaurus",
      "Argentinosaurus",
      "Carnotaurus",
      "Brachiosaurus",
      "Stegosaurus",
      "Ankylosaurus",
      "Allosaurus",
      "Diplodocus",
    ];
  }, []);

  const destaques = fosseis.filter((f) =>
    destaque.includes(f.nomeCientifico)
  );

  const lista =
    pesquisa.length > 0
      ? fosseis
      : destaques.length > 0
      ? destaques
      : fosseis.slice(0, 12);

  return (
    <>
      <SearchBar
        value={pesquisa}
        onChange={setPesquisa}
      />

      <div className="flex items-center justify-between mt-8 mb-6">
        <div>
          <h2 className="text-3xl font-bold">
            {pesquisa
              ? `${fosseis.length} resultados`
              : "🦖 Dinossauros em destaque"}
          </h2>

          <p className="text-zinc-400 mt-2">
            Catálogo com {fosseis.length} espécies.
          </p>
        </div>

        {!pesquisa && (
          <button
            onClick={() => {
              const r =
                fosseis[
                  Math.floor(Math.random() * fosseis.length)
                ];

              if (r) {
                location.href =
                  "/paleontologia/" + r.slug;
              }
            }}
            className="rounded-xl bg-cyan-600 hover:bg-cyan-500 px-5 py-3 font-bold transition"
          >
            🎲 Aleatório
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {lista.map((fossil) => (
          <FossilCard
            key={fossil.id}
            fossil={fossil}
          />
        ))}
      </div>
    </>
  );
}