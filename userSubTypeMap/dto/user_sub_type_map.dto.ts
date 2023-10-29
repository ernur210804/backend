import { IsNotEmpty } from 'class-validator';

export class UserSubscriptionTypeMapDto {
  @IsNotEmpty()
  subscription_type_id: number;

  @IsNotEmpty()
  user_id: number;
}