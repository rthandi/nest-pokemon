import { INestApplication, Injectable } from '@nestjs/common';
import { PokemonModule } from './pokemon.module';
import { Test } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import * as request from 'supertest';

describe('Pokemon', () => {
  let app: INestApplication;
  const prisma = new PrismaClient();

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PokemonModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await prisma.pokemon.deleteMany();
    await prisma.type.deleteMany();

    await prisma.$disconnect();
  });

  it(`post creates Pokemon, `, async () => {
    await prisma.type.create({
      data: {
        name: 'electric',
      },
    });

    const response = await request(app.getHttpServer())
      .post('/pokemon')
      .send({ name: 'Pikachu', types: ['electric'] });

    console.log(response.body);
    expect(response.status).toEqual(201);

    const results = await prisma.pokemon.findMany({
      include: {
        types: true,
      },
    });

    expect(results).toHaveLength(1);
    expect(results[0].name).toEqual('Pikachu');
    expect(results[0].types).toHaveLength(1);
    expect(results[0].types[0].name).toEqual('electric');
  });
});
