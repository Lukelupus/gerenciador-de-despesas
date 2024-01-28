import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { DatabaseModule } from 'src/infra';
import { Expense, User } from 'src/domain/entities';
import { expenseProviders } from 'src/infra/database/repositories';

//providers = classe anotada como injectable. O que será utilizado dentro do escopo
// Se for utilizar fora: export
@Module({
  imports: [DatabaseModule, Expense, User],
  providers: [ExpensesService, ...expenseProviders],
  exports: [ExpensesService],
})
export class ExpensesModule {}
