import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ExpensesModule } from './presentation/controllers/expenses/expenses.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ExpensesModule],
  controllers: [],
  providers: [],
})
// o App module vai centralizar todos os outros módulos. Importar todos eles.
export class AppModule {}

//opção de colocar um export pra usar um serviço
