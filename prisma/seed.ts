// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  await prisma.pokemon.upsert({
    where: { name: 'bulbasaur' },
    update: {},
    create: {
      name: 'bulbasaur',
    },
  });

  await prisma.pokemon.upsert({
    where: { name: 'charmander' },
    update: {},
    create: {
      name: 'charmander',
    },
  });

  await prisma.pokemon.upsert({
    where: { name: 'squirtle' },
    update: {},
    create: {
      name: 'squirtle',
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
