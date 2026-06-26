import { buscarNoticiasBiologia } from "./phys";

export async function buscarFeedBiologia() {

  const noticias = [
    ...(await buscarNoticiasBiologia()),
  ];

  return noticias.sort((a, b) => {
    return (
      new Date(b.data).getTime() -
      new Date(a.data).getTime()
    );
  });

}