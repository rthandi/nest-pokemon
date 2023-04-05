import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { PrismaModule } from '../prisma/prisma.module';

describe('PokemonController', () => {
  let pokemonController: PokemonController;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [PokemonService],
      imports: [PrismaModule],
    }).compile();

    pokemonController = moduleRef.get<PokemonController>(PokemonController);
    pokemonService = moduleRef.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(pokemonController).toBeDefined();
  });

  describe('findAll', () => {
    it('should call pokemonService.findAll', async () => {
      const pokemonServiceFindAllSpy = jest
        .spyOn(pokemonService, 'findAll')
        .mockImplementation();

      await pokemonController.findAll();

      expect(pokemonServiceFindAllSpy).toHaveBeenCalledTimes(1);
    });
  });
});
