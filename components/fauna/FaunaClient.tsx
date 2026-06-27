"use client";

import { useMemo, useState } from "react";
import AnimalCard from "./AnimalCard";
import SearchBar from "./SearchBar";

type Animal = {
  id: string;
  slug: string;
  nome: string;
  nomeCientifico: string;
  familia: string;
  ordem: string;
  classe: string;
};

type Props = {
  animais: Animal[];
};

export default function FaunaClient({ animais }: Props) {

  const [busca, setBusca] = useState("");

  const animaisFiltrados = useMemo(() => {

    const texto = busca.toLowerCase().trim();

    if (!texto) {
      return animais;
    }

    return animais.filter((animal) =>

      animal.nome?.toLowerCase().includes(texto) ||
      animal.nomeCientifico?.toLowerCase().includes(texto)

    );

  }, [busca, animais]);

  return (
    <>

      <SearchBar
        value={busca}
        onChange={setBusca}
      />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {animaisFiltrados
          .filter((animal) => animal.nome)
          .slice(0, 30)
          .map((animal) => (

            <AnimalCard
              key={animal.id}
              animal={animal}
            />

          ))}

      </div>

    </>
  );
}