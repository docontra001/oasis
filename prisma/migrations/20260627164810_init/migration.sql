-- CreateTable
CREATE TABLE "Animal" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "nome" TEXT,
    "nomeCientifico" TEXT NOT NULL,
    "reino" TEXT,
    "filo" TEXT,
    "classe" TEXT,
    "ordem" TEXT,
    "familia" TEXT,
    "genero" TEXT,
    "destaque" BOOLEAN NOT NULL DEFAULT false,
    "imagem" TEXT,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fossil" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "grupo" TEXT NOT NULL,
    "nome" TEXT,
    "nomeCientifico" TEXT NOT NULL,
    "periodo" TEXT,
    "idade" TEXT,
    "dieta" TEXT,
    "comprimento" TEXT,
    "altura" TEXT,
    "peso" TEXT,
    "continente" TEXT,
    "pais" TEXT,
    "descricao" TEXT,
    "curiosidade" TEXT,
    "imagem" TEXT,
    "destaque" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Fossil_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Fossil_slug_key" ON "Fossil"("slug");
