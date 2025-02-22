import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import AuthModule from './auth/auth.module';
// mainly we follow the feature modules sturcture.... this is the app module which contains all the modules in it 

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule],
})
export class AppModule {}
