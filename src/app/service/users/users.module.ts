import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { Expense, User } from '../../../domain/entities';
import { DatabaseModule } from '../../../infra';
import { usersRepository } from '../../../infra/database/repositories';
import { HashService } from './hash.service';

@Module({
  imports: [User, Expense, DatabaseModule],
  providers: [UsersService, ...usersRepository, HashService],
  exports: [UsersService],
})
export class UsersModule {}
