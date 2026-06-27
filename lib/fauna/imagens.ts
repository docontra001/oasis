import { buscarImagemWikipedia } from "./wikipedia";

export async function buscarImagem(
  nomeCientifico: string
) {

  const wikipedia = await buscarImagemWikipedia(
    nomeCientifico
  );

  if (wikipedia) {
    return wikipedia;
  }

  return {
    url: "/imagens/fauna/placeholder.jpg",
    fonte: "placeholder",
  };

}