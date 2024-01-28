import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { DatabaseModule } from 'src/infra';
import { Expense, User } from 'src/domain/entities';
import { expenseProviders } from 'src/infra/database/repositories';
import { AuthModule } from 'src/auth/auth.module';

//providers = classe anotada como injectable. O que será utilizado dentro do escopo
// Se for utilizar fora: export
@Module({
  imports: [DatabaseModule, Expense, User, AuthModule],
  providers: [ExpensesService, ...expenseProviders],
  exports: [ExpensesService],
})
export class ExpensesModule {}
