import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLessonDto, UpdateLessonDto } from './dto/main';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}
  async create(lessondto: CreateLessonDto) {
    return this.prisma.lesson.create({
      data: {
        title: lessondto.title,
        description: lessondto.description,
        video_link: lessondto.video_link,
        course: {
          connect: {
            id: lessondto.course_id,
          },
        },
      },
    });
  }
  async find(lessonId: number) {
    const lesson = await this.prisma.lesson.findUnique({
      where: { id: lessonId },
    });

    if (!lesson) {
      throw new NotFoundException('no lesson');
    }
    return lesson;
  }
  async update(lessonId: number, updatedata: UpdateLessonDto) {
    const existingLesson = await this.prisma.lesson.findUnique({
      where: { id: lessonId },
    });

    if (!existingLesson) {
      throw new NotFoundException('no lesson ');
    }

    return this.prisma.lesson.update({
      where: { id: lessonId },
      data: updatedata,
    });
  }
  async delete(lessonId: number) {
    const lesson = await this.prisma.lesson.findUnique({
      where: { id: lessonId },
    });

    if (!lesson) {
      throw new NotFoundException('no lesson');
    }
    return this.prisma.lesson.delete({
      where: { id: lessonId },
    });
  }
}