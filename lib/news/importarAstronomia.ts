import { buscarNoticiasAstronomia } from "@/lib/feeds";

export async function importarAstronomia() {
  return await buscarNoticiasAstronomia();
}