import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/main';
import { Console } from 'console';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post('new')
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    console.log(createOrganizationDto);
    
    return this.organizationService.create(createOrganizationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.organizationService.findOne(id);
  }
}