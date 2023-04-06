import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get(':type')
  findType(@Param('type') type: string): Promise<Pokemon[]> {
    return this.pokemonService.findType(type);
  }

  @Post()
  create(@Body() pokemon: PokemonDto): Promise<Pokemon> {
    return this.pokemonService.create(pokemon);
  }
}
