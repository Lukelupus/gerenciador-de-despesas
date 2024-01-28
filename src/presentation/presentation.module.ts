import { Module } from '@nestjs/common';
import controllers from './controllers';
import { ExpensesModule } from '../app/service/expenses/expenses.module';
import { UsersModule } from '../app/service/users/users.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [ExpensesModule, UsersModule, AuthModule],
  controllers: [...controllers],
  providers: [],
})
export class PresentationModule {}
