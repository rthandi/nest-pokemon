import { Controller, Get } from '@nestjs/common';
import { TypeService } from './type.service';

@Controller('type')
export class TypeController {
  constructor(private typeService: TypeService) {}

  @Get()
  findAll(): Promise<Type[]> {
    return this.typeService.findAll();
  }
}
