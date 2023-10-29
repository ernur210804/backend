import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  video_link: string;

  @IsNumber()
  course_id: number;
}