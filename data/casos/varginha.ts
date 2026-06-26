import type { Caso } from "../../types/caso";
const varginha: Caso = {
  slug: "et-de-varginha",

  titulo: "ET de Varginha",

  categoria: "Ufologia",

  local: "Varginha, Minas Gerais, Brasil",

  dataInicio: "20 de janeiro de 1996",

  status: "Caso não resolvido",

  nivelEvidencia: "Médio",

  resumo:
    "O Caso Varginha reúne uma série de relatos ocorridos em janeiro de 1996 na cidade de Varginha (MG). Os acontecimentos incluem testemunhos sobre uma criatura incomum, intensa movimentação militar e alegações posteriores de captura de um ser desconhecido. O episódio tornou-se um dos casos ufológicos mais conhecidos do Brasil.",

  imagem: "/casos/varginha/capa.jpg",

  tags: [
    "Brasil",
    "UFO",
    "Varginha",
    "1996",
    "Militares"
  ],

  cronologia: [

    {
      data: "20/01/1996",
      titulo: "Relato das três jovens",
      descricao:
        "Três jovens afirmam ter observado uma criatura agachada próxima a um muro em um terreno baldio na cidade de Varginha."
    },

    {
      data: "20/01/1996",
      titulo: "Movimentação militar",
      descricao:
        "Moradores relataram intensa movimentação de veículos militares em diferentes pontos da cidade."
    },

    {
      data: "22/01/1996",
      titulo: "Boatos sobre captura",
      descricao:
        "Começaram a circular relatos de que uma criatura teria sido capturada por militares."
    },

    {
      data: "1996",
      titulo: "Investigações independentes",
      descricao:
        "Pesquisadores e ufólogos iniciaram entrevistas, coleta de depoimentos e documentação do caso."
    }

  ],

  pessoas: [

    "Liliane Silva",
    "Valquíria Silva",
    "Kátia Andrade Xavier"

  ],

  instituicoes: [

    "Exército Brasileiro",
    "Escola de Sargentos das Armas (ESA)",
    "Corpo de Bombeiros",
    "Polícia Militar de Minas Gerais"

  ],

  hipoteses: [

    {
      titulo: "Criatura extraterrestre",
      status: "Sem comprovação científica"
    },

    {
      titulo: "Animal conhecido confundido",
      status: "Hipótese apresentada por autoridades"
    },

    {
      titulo: "Mal-entendido coletivo",
      status: "Possível"
    },

    {
      titulo: "Fraude",
      status: "Sem comprovação conclusiva"
    }

  ],

  questoesEmAberto: [

    "O que motivou a movimentação militar relatada por moradores?",

    "Todos os relatos descrevem o mesmo evento?",

    "Existem documentos ainda não divulgados oficialmente?"

  ],

  fontes: {

    primarias: [

      "Reportagens publicadas em janeiro de 1996",

      "Entrevistas com testemunhas",

      "Documentos públicos disponíveis"

    ],

    secundarias: [

      "Livro 'Incidente em Varginha'",

      "Documentário 'Moment of Contact' (2022)",

      "Pesquisas e entrevistas de ufólogos brasileiros"

    ]

  }

};

export default varginha;