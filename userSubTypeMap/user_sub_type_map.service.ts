import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserSubscriptionTypeMapDto } from './dto/user_sub_type_map.dto';

@Injectable()
export class UserSubscriptionTypeMapService {
  constructor(private prisma: PrismaService) {}

  async createSubs(dto: UserSubscriptionTypeMapDto) {
    
    const subscriptionType = await this.prisma.subscriptionType.findUnique({
      where: { id: dto.subscription_type_id },
    });

    if (!subscriptionType) {
      throw new NotFoundException('SubscriptionType not found');
    }

    // Create 
    const newUserSubscription = await this.prisma.userSubscriptionTypeMap.create({
      data: {
        subscription_type: { connect: { id: dto.subscription_type_id } },
        user: { connect: { id: dto.user_id } },
      },
    });

    
    return newUserSubscription;
  }
}