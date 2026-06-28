"use client";

import BannerOasis from "../BannerOasis";
import { useEffect, useState } from "react";
import NewsCard from "../ui/NewsCard";

type Noticia = {
  titulo: string;
  descricao: string;
  link: string;
  data: string;
  imagem: string;
  fonte: string;
};

type Props = {
  titulo: string;
  endpoint: string;
};

export default function MainContent({
  titulo,
  endpoint,
}: Props) {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    async function carregarNoticias() {
      const resposta = await fetch(endpoint);
      const dados = await resposta.json();

      setNoticias(dados);
    }

    carregarNoticias();
  }, [endpoint]);

  const destaque = noticias[0];
  const restantes = noticias.slice(1);

  return (
    <main className="flex-1 bg-zinc-950 p-8 overflow-y-auto">

      <BannerOasis />

      <h1 className="text-5xl font-black mt-8">
        {titulo}
      </h1>

      <p className="text-zinc-400 mt-3 mb-8">
        {noticias.length} notícias disponíveis.
      </p>

      {destaque && (
        <div className="mb-10">
          <NewsCard
  {...destaque}
  destaque
/>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-bold">
          Últimas notícias
        </h2>

        <div className="flex gap-2 flex-wrap">

          <span className="rounded-full bg-cyan-700 px-3 py-1 text-sm">
            🧬 Genética
          </span>

          <span className="rounded-full bg-green-700 px-3 py-1 text-sm">
            🌿 Ecologia
          </span>

          <span className="rounded-full bg-red-700 px-3 py-1 text-sm">
            🦠 Saúde
          </span>

          <span className="rounded-full bg-amber-700 px-3 py-1 text-sm">
            🐘 Zoologia
          </span>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {restantes.map((noticia) => (
          <NewsCard
            key={noticia.link}
            {...noticia}
          />
        ))}
      </div>

    </main>
  );
}