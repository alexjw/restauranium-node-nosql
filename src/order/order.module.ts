import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderInterface, OrderSchema } from './order.model';
import { OrderDetailResolver, OrderResolver } from './order.resolver';
import { ClientModule } from '../client/client.module';
import { MealModule } from '../meal/meal.module';
import { ItemModule } from '../item/item.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Order', schema: OrderSchema}]), ClientModule, MealModule, ItemModule],
  providers: [OrderService, OrderResolver, OrderDetailResolver],
  exports: [OrderService]
})
export class OrderModule {}
