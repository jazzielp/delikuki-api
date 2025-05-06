import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  const configService = app.get(ConfigService);
  const port = configService.get<number>('api.port');
  console.log(`Server is running on port ${port}`);
  await app.listen(port ?? 3000);
}
bootstrap();
