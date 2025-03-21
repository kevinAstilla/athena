import { Injectable, OnModuleInit } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';
import { PrismaClient as PostgresClient } from '../prisma/generated/postgres';

@Injectable()
export class PrismaService extends PostgresClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
