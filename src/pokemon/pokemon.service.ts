import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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
}
