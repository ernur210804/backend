import { Module } from '@nestjs/common';
import { SubscriptionTypeService } from './sub.type.service';
import { SubscriptionTypeController } from './sub.type.controller';

@Module({
  providers: [SubscriptionTypeService],
  controllers: [SubscriptionTypeController]
})
export class SubTypeModule {}
