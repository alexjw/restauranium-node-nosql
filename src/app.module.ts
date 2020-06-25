import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { GraphQLModule } from '@nestjs/graphql';
import { IngredientModule } from './ingredient/ingredient.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MealModule } from './meal/meal.module';
import { OrderModule } from './order/order.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [GraphQLModule.forRoot(
    {
      autoSchemaFile: true,
      installSubscriptionHandlers: true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/restaurantium'),
    ClientModule,
    IngredientModule,
    MealModule,
    OrderModule,
    ItemModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
