/*
  Warnings:

  - You are about to drop the `PokemonOnTypes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PokemonOnTypes" DROP CONSTRAINT "PokemonOnTypes_pokemonId_fkey";

-- DropForeignKey
ALTER TABLE "PokemonOnTypes" DROP CONSTRAINT "PokemonOnTypes_typeId_fkey";

-- DropTable
DROP TABLE "PokemonOnTypes";

-- CreateTable
CREATE TABLE "_PokemonToType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToType_AB_unique" ON "_PokemonToType"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToType_B_index" ON "_PokemonToType"("B");

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD CONSTRAINT "_PokemonToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD CONSTRAINT "_PokemonToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
