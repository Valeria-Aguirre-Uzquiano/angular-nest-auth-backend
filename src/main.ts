import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, {
  //   cors: true,
  // });
  // await app.listen(3000);

  // app.enableCors();

  const app = await NestFactory.create(AppModule);
      

  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);

  app.useGlobalPipes( 
    new ValidationPipe({ 
    whitelist: true, 
    forbidNonWhitelisted: true, 
    }) 
   );
   
}
bootstrap();
