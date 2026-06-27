export async function buscarImagemWikipedia(
  nomeCientifico: string
) {
  const nomePesquisa = nomeCientifico
    .replace(/\(.*?\)/g, "")
    .trim();

  console.log("Buscando:", nomePesquisa);

  const url =
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      nomePesquisa
    )}`;

  const resposta = await fetch(url, {
    headers: {
      "User-Agent": "OASIS/1.0",
    },
    cache: "force-cache",
  });

  if (!resposta.ok) {
    return null;
  }

  const dados = await resposta.json();

  const imagem =
    dados.originalimage?.source ??
    dados.thumbnail?.source ??
    null;

  return {
    titulo: dados.title,
    descricao: dados.description,
    imagem,
  };
}