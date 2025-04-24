import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // globaler ValidationPipe für DTO-Validierung
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  await app.listen(3001);
  console.log('Backend running on http://localhost:3001');
}
bootstrap();
