import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());

  try {
    await app.listen(configService.get('PORT') || 8000);
    console.log('Server running on port: ' + configService.get('PORT'));
  } catch (error) {
    console.log(error);
  }
}

export { bootstrap };
