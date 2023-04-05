import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PokemonDto } from './pokemon.dts';

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

  create(pokemon: PokemonDto) {
    return this.prisma.pokemon.create({
      data: {
        name: pokemon.name,
        types: {
          connect: pokemon.types,
        },
      },
    });
  }
}
