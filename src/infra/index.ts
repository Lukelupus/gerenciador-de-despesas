import { Module } from '@nestjs/common';
import { Expense, User } from 'src/domain/entities';

@Module({
  imports: [User, Expense],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
