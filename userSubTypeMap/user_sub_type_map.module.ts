import { Module } from '@nestjs/common';
import { UserSubscriptionTypeMapController } from './user_sub_type_map.controller';
import { UserSubscriptionTypeMapService } from './user_sub_type_map.service';

@Module({
  controllers: [UserSubscriptionTypeMapController],
  providers: [UserSubscriptionTypeMapService],
})
export class UserSubscriptionTypeMapModule {}