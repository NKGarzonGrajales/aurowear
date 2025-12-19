import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { ProductController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [AppController, HealthController, ProductController],
  providers: [AppService],
})
export class AppModule {}
