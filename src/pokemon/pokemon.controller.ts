import { Body, Controller, Get, Post } from '@nestjs/common';
import { Pokemon } from '@prisma/client';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}
  @Get()
  findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Post()
  create(@Body() name: string, types: string[]): Promise<Pokemon> {
    return this.pokemonService.create(name, types);
  }
}
