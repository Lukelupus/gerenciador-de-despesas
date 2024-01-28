import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/infra';
import { Expense, User } from 'src/domain/entities';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [DatabaseModule, User, Expense],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
