import AdmZip from "adm-zip";

export function lerVernacular(zip: any) {

    const arquivo = zip.getEntry("vernacularname.txt");

    if (!arquivo) {
        throw new Error("vernacularname.txt não encontrado.");
    }

    const texto = arquivo.getData().toString("utf8");

    const linhas = texto.split("\n");

    console.log(linhas[0]);
console.log(linhas[1]);

    const mapa = new Map<string, string>();

    for (let i = 1; i < linhas.length; i++) {

        const valores = linhas[i].split("\t");

        const id = valores[0];

        const nome = valores[1];

        if (!id || !nome) continue;

        if (!mapa.has(id)) {
            mapa.set(id, nome);
        }

    }

    return mapa;

}