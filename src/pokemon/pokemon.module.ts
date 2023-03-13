import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [PrismaModule],
})
export class PokemonModule {}
