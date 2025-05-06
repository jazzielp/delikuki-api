import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  const configService = app.get(ConfigService);
  const port = configService.get<number>('config.api.port');
  // Usar Morgan con formato predefinido
  app.use(morgan('dev')); // Formato conciso para desarrollo
  await app.listen(port ?? 3000);
  console.log(`API running on port ${port}`);
}
bootstrap();
