import { Controller, Get } from '@nestjs/common';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}
  @Get()
  findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }
}
