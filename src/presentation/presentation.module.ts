import { Module } from '@nestjs/common';
import controllers from './controllers';
import { ExpensesModule } from '../app/service/expenses/expenses.module';
import { UsersModule } from '../app/service/users/users.module';

@Module({
  imports: [ExpensesModule, UsersModule],
  controllers: [...controllers],
  providers: [],
})
export class PresentationModule {}
