"use client";

import { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";
import SearchBar from "./SearchBar";

export default function FaunaClient() {
  const [animais, setAnimais] = useState<any[]>([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch(`/api/fauna?search=${encodeURIComponent(pesquisa)}`)
        .then((r) => r.json())
        .then(setAnimais)
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
          ? `${animais.length} resultados`
          : "Espécies em destaque"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {animais.map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
          />
        ))}
      </div>
    </>
  );
}