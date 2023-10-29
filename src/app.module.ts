import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { SubTypeModule } from './sub.type/sub.type.module';
import { OrganizationModule } from './organization/organization.module';
import { LessonModule } from './lesson/lesson.module';
import { CoursesModule } from './courses/course.module';
import { UserSubscriptionTypeMapModule } from 'userSubTypeMap/user_sub_type_map.module';



@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule,  SubTypeModule,OrganizationModule,LessonModule,CoursesModule,UserSubscriptionTypeMapModule,CoursesModule],
  
})
export class AppModule {}
