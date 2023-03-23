import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Pokemon } from '@prisma/client';

@Injectable()
export class PokemonService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.pokemon.findMany({
      include: {
        types: true,
      },
    });
  }

  create(name: string, types: string[]) {
    return this.prisma.pokemon.create({
      data: {
        name: name,
        types: {
          connect: types.map((type) => ({ name: type })),
        },
      },
    });
  }
}
