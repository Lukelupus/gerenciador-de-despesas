import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { Expense, User } from 'src/domain/entities';
import { PrismaService } from '../prisma/prisma.service';
import { DatabaseModule } from 'src/infra';
import { expenseProviders } from 'src/infra/database/repositories';

@Module({
  imports: [User, Expense, DatabaseModule],
  providers: [UsersService, PrismaService, ...expenseProviders],
  exports: [UsersService],
})
export class UsersModule {}
