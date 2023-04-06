import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonController } from './pokemon/pokemon.controller';
import { PrismaModule } from './prisma/prisma.module';
import { PokemonService } from './pokemon/pokemon.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { TypeModule } from './type/type.module';
import { TypeService } from './type/type.service';
import { TypeController } from './type/type.controller';
import { EndpointStatisticsMiddleware } from './middleware/endpointStatistics.middleware';

@Module({
  controllers: [AppController, PokemonController, TypeController],
  providers: [AppService, PokemonService, TypeService],
  imports: [PrismaModule, PokemonModule, TypeModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(EndpointStatisticsMiddleware).forRoutes('pokemon/:type');
  }
}
