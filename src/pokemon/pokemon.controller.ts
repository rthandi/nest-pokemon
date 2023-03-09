import { Controller, Get } from '@nestjs/common';
import { Pokemon } from './pokemon';

@Controller('pokemon')
export class PokemonController {
  @Get()
  findAll(): Pokemon[] {
    return [
      { name: 'bulbasaur' },
      { name: 'charmander' },
      { name: 'squirtle' },
    ];
  }
}
