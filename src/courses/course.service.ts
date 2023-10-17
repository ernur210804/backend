import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CourseDto } from './dto/main';
import { Prisma, Courses } from '@prisma/client';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async create(courseData: CourseDto) {
    return this.prisma.courses.create({ data: courseData });
  }

  async findOne(id: number): Promise<Courses | null> {
    const course = await this.prisma.courses.findFirst({ where: { id: id } });

    if (!course) {
      throw new NotFoundException(' can not find a Course');
    }

    return course;
  }

  async update(id: number, courseData: CourseDto): Promise<Courses | null> {
    return this.prisma.courses.update({ where: { id }, data: courseData });
  }

  async remove(id: number): Promise<Courses | null> {
    const deletedCourse = await this.prisma.courses.delete({
      where: {
        id: id,
      },
    });

    if (!deletedCourse) {
      throw new NotFoundException('can not find a Course');
    }

    return deletedCourse;
  }
}