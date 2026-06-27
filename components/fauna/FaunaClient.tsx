"use client";

import { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";
import SearchBar from "./SearchBar";

export default function FaunaClient() {
  const [animais, setAnimais] = useState<any[]>([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch(
        `/api/fauna?search=${encodeURIComponent(pesquisa)}`
      )
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

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
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