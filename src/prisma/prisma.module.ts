import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // this help this module to be globally available without importing in abother module
@Module({
  providers: [PrismaService],
  exports:[PrismaService]
})
export class PrismaModule {}
