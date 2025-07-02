import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS for all routes
  app.setGlobalPrefix('api'); // Set a global prefix for all routes
  app.enableVersioning();
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch((error) => {
  console.error('Error during bootstrap:', error);
  process.exit(1); // Exit the process with a failure code
});
