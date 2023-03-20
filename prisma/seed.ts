// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  await prisma.type.upsert({
    where: { name: 'fire' },
    update: {},
    create: {
      name: 'fire',
    },
  });

  await prisma.type.upsert({
    where: { name: 'water' },
    update: {},
    create: {
      name: 'water',
    },
  });

  await prisma.type.upsert({
    where: { name: 'grass' },
    update: {},
    create: {
      name: 'grass',
    },
  });

  await prisma.type.upsert({
    where: { name: 'poison' },
    update: {},
    create: {
      name: 'poison',
    },
  });

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
