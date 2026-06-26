import type { Caso } from "../../types/caso";
const operacaoPrato: Caso = {
  slug: "operacao-prato",

  titulo: "Operação Prato",

  categoria: "Ufologia",

  local: "Colares, Pará, Brasil",

  dataInicio: "Setembro de 1977",

  status: "Operação militar encerrada",

  nivelEvidencia: "Alto",

  resumo:
    "A Operação Prato foi uma investigação conduzida pela Força Aérea Brasileira (FAB) em 1977 para documentar relatos de luzes e objetos voadores observados principalmente na região de Colares, no estado do Pará. Parte da documentação foi posteriormente liberada ao público.",

  imagem: "/casos/operacao-prato/capa.jpg",

  tags: [
    "Brasil",
    "FAB",
    "Colares",
    "UFO",
    "1977"
  ],

  cronologia: [

    {
      data: "Setembro de 1977",
      titulo: "Início da operação",
      descricao:
        "A FAB inicia oficialmente a Operação Prato após inúmeros relatos de fenômenos luminosos na região."
    },

    {
      data: "1977",
      titulo: "Coleta de evidências",
      descricao:
        "Militares registram fotografias, desenhos, relatórios e entrevistas com moradores."
    },

    {
      data: "1978",
      titulo: "Encerramento",
      descricao:
        "A operação é encerrada e seus documentos permanecem arquivados por muitos anos."
    },

    {
      data: "Anos 2000",
      titulo: "Documentos liberados",
      descricao:
        "Parte da documentação oficial da Operação Prato é disponibilizada ao público."
    }

  ],

  pessoas: [

    "Cel. Uyrangê Hollanda",

    "Militares da FAB",

    "Moradores de Colares"

  ],

  instituicoes: [

    "Força Aérea Brasileira",

    "Comando Aéreo Regional",

    "Arquivo Nacional"

  ],

  hipoteses: [

    {
      titulo: "Fenômeno aéreo desconhecido",
      status: "Sem conclusão oficial"
    },

    {
      titulo: "Fenômenos naturais",
      status: "Hipótese considerada"
    },

    {
      titulo: "Interpretação equivocada dos eventos",
      status: "Possível"
    }

  ],

  questoesEmAberto: [

    "Qual a natureza dos objetos registrados?",

    "Toda a documentação da operação já foi divulgada?",

    "Existem registros ainda classificados?"

  ],

  fontes: {

    primarias: [

      "Relatórios da Operação Prato",

      "Fotografias produzidas pela FAB",

      "Documentos do Arquivo Nacional"

    ],

    secundarias: [

      "Entrevistas do Cel. Uyrangê Hollanda",

      "Livros sobre a Operação Prato",

      "Pesquisas acadêmicas e documentários"

    ]

  }

};

export default operacaoPrato;