import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { SubTypeModule } from './sub.type/sub.type.module';


@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule,  SubTypeModule],
  
})
export class AppModule {}
