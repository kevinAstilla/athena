import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as MongoClient } from '../prisma/generated/mongodb';

@Injectable()
export class MongoService extends MongoClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
