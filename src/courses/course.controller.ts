import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
  } from '@nestjs/common';
  import { CoursesService } from './course.service';
  import { CourseDto } from './dto/main';
  
  @Controller('courses')
  export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}
  
    @Post('create')
    create(@Body() courseData: CourseDto) {
      return this.coursesService.create(courseData);
    }
  
    @Get(':id')
    findOne(id: number) {
      return this.coursesService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() courseData: CourseDto) {
      return this.coursesService.update(id, courseData);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.coursesService.remove(id);
    }
  }