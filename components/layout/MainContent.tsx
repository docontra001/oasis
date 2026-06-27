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

  return (
    <main className="flex-1 bg-zinc-950 p-8 overflow-y-auto">

  <BannerOasis />

  <h1 className="text-4xl font-bold">{titulo}</h1>

      <p className="text-zinc-500 mt-2 mb-8">
        Últimas atualizações.
      </p>

      <div className="grid grid-cols-2 gap-5">
        {noticias.map((noticia) => (
          <NewsCard
            key={noticia.link}
            titulo={noticia.titulo}
            descricao={noticia.descricao}
            link={noticia.link}
            data={noticia.data}
            imagem={noticia.imagem}
            fonte={noticia.fonte}
          />
        ))}
      </div>
    </main>
  );
}