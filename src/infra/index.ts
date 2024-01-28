import { Module } from '@nestjs/common';
import { Expense, User } from '../domain/entities';
import { databaseProviders } from './database/typeorm/connection';

@Module({
  imports: [User, Expense],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
