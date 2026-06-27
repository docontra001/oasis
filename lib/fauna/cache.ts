const cache = new Map<string, any>();

export function getCache(chave: string) {
  return cache.get(chave);
}

export function setCache(chave: string, valor: any) {
  cache.set(chave, valor);
}