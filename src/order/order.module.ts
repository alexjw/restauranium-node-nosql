import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './order.model';
import { AdditionalMealInfoResolver, OrderDetailResolver, OrderResolver } from './order.resolver';
import { ClientModule } from '../client/client.module';
import { MealModule } from '../meal/meal.module';
import { ItemModule } from '../item/item.module';
import { IngredientModule } from '../ingredient/ingredient.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Order', schema: OrderSchema}]), ClientModule, MealModule, ItemModule, IngredientModule],
  providers: [OrderService, OrderResolver, OrderDetailResolver, AdditionalMealInfoResolver],
  exports: [OrderService]
})
export class OrderModule {}
