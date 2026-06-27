"use client";

import { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";

export default function FaunaClient() {

  const [animais, setAnimais] = useState<any[]>([]);

  useEffect(() => {

    fetch("/api/fauna")
      .then(r => r.json())
      .then(setAnimais);

  }, []);

  return (

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

      {animais.map((animal) => (

        <AnimalCard
          key={animal.id}
          animal={animal}
        />

      ))}

    </div>

  );

}