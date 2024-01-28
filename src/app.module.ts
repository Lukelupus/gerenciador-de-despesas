import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PresentationModule } from './presentation/presentation.module';
import { ExpensesModule } from './app/service/expenses/expenses.module';
import { UsersModule } from './app/service/users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PresentationModule,
    ExpensesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
// o App module vai centralizar todos os outros módulos. Importar todos eles.
export class AppModule {}

//opção de colocar um export pra usar um serviço
