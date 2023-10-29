import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateLessonDto, UpdateLessonDto } from './dto/main';
  import { LessonService } from './lesson.service';
  
  @Controller('lesson')
  export class LessonController {
    constructor(private readonly lessonService: LessonService) {}
  
    @Post('create')
    create(@Body() lessonData: CreateLessonDto) {
      return this.lessonService.create(lessonData);
    }
  
    @Get(':id')
    findone(@Param('id') id: number) {
      return this.lessonService.find(id);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() updateData: UpdateLessonDto) {
      return this.lessonService.update(id, updateData);
    }
  
    
  }