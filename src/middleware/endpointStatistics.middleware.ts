import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EndpointStatisticsMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.prisma.endpointStatistics.create({
      data: {
        methodName: req.method,
        path: req.path,
        body: JSON.stringify(req.body),
        args: JSON.stringify(req.params),
      },
    });

    next();
  }
}
