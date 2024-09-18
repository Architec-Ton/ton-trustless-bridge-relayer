import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { PrismaService } from './modules/prisma/services/prisma/prisma.service.js';
import { ConfigModule } from '@nestjs/config';

async function bootstrap() {
  ConfigModule.forRoot({
    envFilePath: '.env',
  });
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(3000);
}
bootstrap();
