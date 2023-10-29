import { Body, Controller, Post } from '@nestjs/common';
import { SubscriptionTypeService } from './sub.type.service';
import { CreateSubscriptionTypeDto } from './dto/sub.type.dto';

@Controller('subscription-type')
export class SubscriptionTypeController {
  constructor(private SubscriptionTypeServ: SubscriptionTypeService) {}

  @Post('create')
  async createSubType(@Body() dto: CreateSubscriptionTypeDto) {
    return this.SubscriptionTypeServ.CreateSubtype(dto);
  }
}