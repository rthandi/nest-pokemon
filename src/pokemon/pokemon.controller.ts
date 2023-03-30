import { Body, Controller, Get, Post } from '@nestjs/common';
import { Pokemon } from '@prisma/client';
import { PokemonService } from './pokemon.service';
import { PokemonDto } from './pokemon.dts';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Post()
  create(@Body() pokemon: PokemonDto): Promise<Pokemon> {
    return this.pokemonService.create(pokemon);
  }
}
