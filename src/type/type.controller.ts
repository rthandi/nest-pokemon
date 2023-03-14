import { Controller, Get } from '@nestjs/common';
import { Pokemon } from '../pokemon/pokemon';
import { TypeService } from './type.service';

@Controller('type')
export class TypeController {
  constructor(private typeService: TypeService) {}

  @Get()
  findAll(): Promise<Pokemon[]> {
    return this.typeService.findAll();
  }
}
