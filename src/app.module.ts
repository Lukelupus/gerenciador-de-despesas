import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PresentationModule } from './presentation/presentation.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './infra';
import { ExpensesModule } from './app/service/expenses/expenses.module';
import { UsersModule } from './app/service/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PresentationModule,
    AuthModule,
    DatabaseModule,
    ExpensesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
// o App module vai centralizar todos os outros módulos. Importar todos eles.
export class AppModule {}

//opção de colocar um export pra usar um serviço
