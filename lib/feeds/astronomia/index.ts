import { buscarNoticiasNASA } from "./nasa";
import { buscarNoticiasINPE } from "./inpe";

export async function buscarNoticiasAstronomia() {
  const noticias = [];

  try {
    noticias.push(...await buscarNoticiasNASA());
  } catch (e) {
    console.error("NASA");
    console.error(e);
  }

  try {
    noticias.push(...await buscarNoticiasINPE());
  } catch (e) {
    console.error("INPE");
    console.error(e);
  }

  return noticias;
}