import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TypeService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.type.findMany();
  }
}
