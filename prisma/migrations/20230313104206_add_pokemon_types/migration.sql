-- CreateTable
CREATE TABLE "Type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PokemonOnTypes" (
    "pokemonId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,

    CONSTRAINT "PokemonOnTypes_pkey" PRIMARY KEY ("pokemonId","typeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");

-- AddForeignKey
ALTER TABLE "PokemonOnTypes" ADD CONSTRAINT "PokemonOnTypes_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonOnTypes" ADD CONSTRAINT "PokemonOnTypes_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
