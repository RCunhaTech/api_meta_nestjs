import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaClient } from '@prisma/client';
@Module({
  imports: [UserModule,PrismaClient],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
