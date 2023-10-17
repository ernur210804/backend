import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubscriptionTypeDto } from './dto/sub.type.dto';

@Injectable()
export class SubscriptionTypeService {
  constructor(private prisma: PrismaService) {}
  async CreateSubtype(Dto: CreateSubscriptionTypeDto) {
    return this.prisma.subscriptionType.create({
      data: Dto,
    });
  }
}