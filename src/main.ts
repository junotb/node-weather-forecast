import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<string>('PORT');
  const parsedPort = port ? parseInt(port, 10) : 3000;

  await app.listen(parsedPort);
}

void bootstrap();
