import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { DatabaseModule } from 'src/infra';
import { Expense, User } from 'src/domain/entities';

//providers = classe anotada como injectable. O que será utilizado dentro do escopo
// Se for utilizar fora: export
@Module({
  imports: [DatabaseModule, Expense, User],
  providers: [ExpensesService],
  exports: [ExpensesService],
})
export class ExpensesModule {}
