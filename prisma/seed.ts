// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const types = ['fire', 'water', 'grass', 'poison'];

  for (const type of types) {
    await prisma.type.upsert({
      where: { name: type },
      update: {},
      create: { name: type },
    });
  }

  await prisma.pokemon.upsert({
    where: { name: 'bulbasaur' },
    update: {},
    create: {
      name: 'bulbasaur',
      types: {
        connect: [{ name: 'grass' }, { name: 'poison' }],
      },
    },
  });

  await prisma.pokemon.upsert({
    where: { name: 'charmander' },
    update: {},
    create: {
      name: 'charmander',
      types: {
        connect: [{ name: 'fire' }],
      },
    },
  });

  await prisma.pokemon.upsert({
    where: { name: 'squirtle' },
    update: {},
    create: {
      name: 'squirtle',
      types: {
        connect: [{ name: 'water' }],
      },
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
