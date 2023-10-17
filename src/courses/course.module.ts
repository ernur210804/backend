import { Module } from '@nestjs/common';
import { CoursesService } from './course.service'; 
import { CoursesController } from './course.controller'; 

@Module({
  providers: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}