import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateLessonDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  video_link?: string;

  @IsNumber()
  @IsOptional()
  course_id?: number;
}