import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // permite convertir strings a enums y otros tipos
      whitelist: true, //esto ignora el campo que no esta validado
      forbidNonWhitelisted: true, //esto nos alerta que hay un dato que no esta en la validación
    }),
  );
  const configService = app.get(ConfigService);
  const port = configService.get<number>('config.api.port');
  // Usar Morgan con formato predefinido
  app.use(morgan('dev')); // Formato conciso para desarrollo
  await app.listen(port ?? 3000);
  console.log(`API running on port ${port}`);
}
bootstrap();
