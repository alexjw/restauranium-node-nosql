import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderInterface, OrderSchema } from './order.model';
import { OrderResolver } from './order.resolver';
import { ClientModule } from '../client/client.module';
import { MealModule } from '../meal/meal.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Order', schema: OrderSchema}]), ClientModule, MealModule],
  providers: [OrderService, OrderResolver],
  exports: [OrderService]
})
export class OrderModule {}
