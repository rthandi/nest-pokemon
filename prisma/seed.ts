// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const fireType = await prisma.type.upsert({
    where: { name: 'fire' },
    update: {},
    create: {
      name: 'fire',
    },
  });

  const waterType = await prisma.type.upsert({
    where: { name: 'water' },
    update: {},
    create: {
      name: 'water',
    },
  });

  const grassType = await prisma.type.upsert({
    where: { name: 'grass' },
    update: {},
    create: {
      name: 'grass',
    },
  });

  const poisonType = await prisma.type.upsert({
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
        connect: [{ id: grassType.id }, { id: poisonType.id }],
      },
    },
    include: {
      types: true,
    },
  });

  await prisma.pokemon.upsert({
    where: { name: 'charmander' },
    update: {},
    create: {
      name: 'charmander',
      types: {
        connect: [{ id: fireType.id }],
      },
    },
  });

  await prisma.pokemon.upsert({
    where: { name: 'squirtle' },
    update: {},
    create: {
      name: 'squirtle',
      types: {
        connect: [{ id: waterType.id }],
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
