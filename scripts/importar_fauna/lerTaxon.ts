import AdmZip from "adm-zip";

export function lerTaxon(zip: AdmZip) {

    const arquivo = zip.getEntry("taxon.txt");

    if (!arquivo) {
        throw new Error("taxon.txt não encontrado.");
    }

    const texto = arquivo.getData().toString("utf8");

    const linhas = texto.split("\n");

    const cabecalho = linhas[0].split("\t");

    const especies = [];

    for (let i = 1; i < linhas.length; i++) {

        const valores = linhas[i].split("\t");

        const registro: Record<string, string> = {};

        cabecalho.forEach((coluna: string, indice: number) => {
            registro[coluna] = valores[indice] || "";
        });

        if (
            registro.taxonRank !== "species" ||
            registro.taxonomicStatus !== "accepted"
        ) {
            continue;
        }

        especies.push(registro);

    }

    return especies;

}