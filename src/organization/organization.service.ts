import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrganizationDto } from './dto/main';

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    const organization = await this.prisma.organization.create({
      data: {
        title: createOrganizationDto.title,
      },
    });
    return organization;
  }

  async findOne(id: number) {
    return this.prisma.organization.findUnique({ where: { id } });
  }
}