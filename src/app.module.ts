import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from '@/config/config';
import { UsersModule } from '@/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: [
        process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env',
      ],
    }),
    UsersModule,
  ],
})
export class AppModule {}
