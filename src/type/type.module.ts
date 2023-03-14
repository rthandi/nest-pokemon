import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';

@Module({
  controllers: [TypeController],
  providers: [TypeService],
  imports: [PrismaModule],
})
export class TypeModule {}
