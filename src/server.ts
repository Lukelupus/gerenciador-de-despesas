import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const config = new DocumentBuilder()
    .setTitle('Gerenciador de Despesas')
    .setDescription(
      'API de despezas capaz de criar um usuário e a partir do login do mesmo, realizar CRUD de despesas',
    )
    .setVersion('1.0.0')
    .addTag('expenses routes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.useGlobalPipes(new ValidationPipe());
  SwaggerModule.setup('api', app, document);
  try {
    await app.listen(configService.get('PORT') || 8000);
    console.log('Server running on port: ' + configService.get('PORT'));
  } catch (error) {
    console.log(error);
  }
}

export { bootstrap };
