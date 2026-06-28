import { buscarNoticiasNASA } from "./nasa";

export async function buscarNoticiasAstronomia() {
  const noticias = [];

  try {
    noticias.push(...await buscarNoticiasNASA());
  } catch (e) {
    console.error("NASA");
    console.error(e);
  }

  return noticias;
}