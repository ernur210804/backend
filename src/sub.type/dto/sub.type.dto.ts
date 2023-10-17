import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSubscriptionTypeDto {
  @IsString()
  @IsNotEmpty()
  title: string;
}