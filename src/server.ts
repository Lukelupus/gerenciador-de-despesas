import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  //aqui vamos configurar variaveis de ambientes.
  //Pensar sempre: Modulo / Serviço / Controller
  // Para utilização do configService preciso instanciar esse configService.
  //P/ instanciar o configService
  try {
    await app.listen(configService.get('PORT') || 3030);
    console.log('Server running on port: ' + configService.get('PORT'));
  } catch (error) {
    console.log(error);
  }
}

export { bootstrap };
