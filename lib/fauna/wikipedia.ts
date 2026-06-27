export async function buscarImagemWikipedia(
  nomeCientifico: string
) {
  const nomePesquisa = nomeCientifico
    .replace(/\(.*?\)/g, "")
    .trim();

  const url =
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      nomePesquisa
    )}`;

  const resposta = await fetch(url, {
    headers: {
      "User-Agent":
        "OASIS/1.0 (https://github.com/docontra001/oasis)",
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!resposta.ok) {
    console.log(
      `${nomePesquisa}: ${resposta.status}`
    );
    return null;
  }

  const dados = await resposta.json();

  return {
    titulo: dados.title,
    descricao: dados.description,
    imagem:
      dados.originalimage?.source ??
      dados.thumbnail?.source ??
      null,
  };
}