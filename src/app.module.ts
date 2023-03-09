import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonController } from './pokemon/pokemon.controller';
import { PrismaModule } from './prisma/prisma.module';
import { PokemonService } from './pokemon/pokemon.service';

@Module({
  controllers: [AppController, PokemonController],
  providers: [AppService, PokemonService],
  imports: [PrismaModule],
})
export class AppModule {}
