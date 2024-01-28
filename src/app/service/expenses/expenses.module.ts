import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { DatabaseModule } from '../../../infra';
import { Expense, User } from '../../../domain/entities';
import { expenseProviders } from '../../../infra/database/repositories';
import { AuthModule } from '../../../auth/auth.module';

//providers = classe anotada como injectable. O que será utilizado dentro do escopo
// Se for utilizar fora: export
@Module({
  imports: [DatabaseModule, Expense, User, AuthModule],
  providers: [ExpensesService, ...expenseProviders],
  exports: [ExpensesService],
})
export class ExpensesModule {}
