import { IsString, IsNotEmpty } from 'class-validator';
export class CreateOrganizationDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}