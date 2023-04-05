import { TypeDto } from '../type/types.dts';

export class PokemonDto {
  constructor(pokemon: { types: string[]; name: string }) {
    this.name = pokemon.name;
    this.types = pokemon.types.map((type) => ({ name: type }));
  }

  name: string;
  types: TypeDto[];
}
