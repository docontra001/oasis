export interface Caso {
  slug: string;

  titulo: string;

  categoria: string;

  local: string;

  dataInicio: string;

  status: string;

  nivelEvidencia: string;

  resumo: string;

  imagem: string;

  tags: string[];

  cronologia: {
    data: string;
    titulo: string;
    descricao: string;
  }[];

  pessoas: string[];

  instituicoes: string[];

  hipoteses: {
    titulo: string;
    status: string;
  }[];

  questoesEmAberto: string[];

  fontes: {
    primarias: string[];
    secundarias: string[];
  };
}