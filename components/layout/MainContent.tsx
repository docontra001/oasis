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
    <main className="flex-1 bg-zinc-950 overflow-y-auto">

      {/* HEADER COM IMAGEM */}
      <div className="relative h-[340px] w-full overflow-hidden">

        <img
          src="/images/header-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-zinc-950" />

        <div className="relative z-10 p-8 h-full flex flex-col justify-end">

      

          <h1 className="text-6xl font-black mt-8">
            {titulo}
          </h1>

          <p className="text-zinc-300 mt-3">
            {noticias.length} notícias disponíveis.
          </p>

        </div>
      </div>

      <div className="p-8">

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

      </div>

    </main>
  );
}