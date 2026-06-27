"use client";

import { useEffect, useState } from "react";
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

  return (
    <>
      <SearchBar
        value={pesquisa}
        onChange={setPesquisa}
      />

      <h2 className="text-3xl font-bold mt-8 mb-6">
        {pesquisa
          ? `${fosseis.length} resultados`
          : "Fósseis em destaque"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {fosseis.map((fossil) => (
          <FossilCard
            key={fossil.id}
            fossil={fossil}
          />
        ))}
      </div>
    </>
  );
}