import { buscarNoticiasBiologia } from "./biologia";
import { buscarNoticiasAstronomia } from "./astronomia";

export async function buscarTodasNoticias() {
  const noticias = [];

  try {
    noticias.push(...await buscarNoticiasBiologia());
  } catch (e) {
    console.error("Biologia");
    console.error(e);
  }

  try {
    noticias.push(...await buscarNoticiasAstronomia());
  } catch (e) {
    console.error("Astronomia");
    console.error(e);
  }

  return noticias;
}

export { buscarNoticiasBiologia };
export { buscarNoticiasAstronomia };