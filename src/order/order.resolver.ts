import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { OrderDetail, Order, AdditionalMealInfo } from './order.model';
import { AdditionalMealInfoInput, CreateOrderInput } from './order.input';
import { AdditionalMealInfoType, OrderDetailType, OrderType } from './order.type';
import { OrderService } from './order.service';
import { Client } from '../client/client.model';
import { ClientService } from '../client/client.service';
import { MealService } from '../meal/meal.service';
import { Meal } from '../meal/meal.model';
import { ItemService } from '../item/item.service';
import { Item } from '../item/item.model';
import { ItemType } from '../item/item.type';
import { ClientType } from '../client/client.type';
import { IngredientService } from '../ingredient/ingredient.service';
import { IngredientType } from '../ingredient/ingredient.type';
import { Ingredient } from '../ingredient/ingredient.model';

@Resolver(of => OrderType)
export class OrderResolver {

  constructor(private orderService: OrderService, private clientService: ClientService, private mealService: MealService) { }

  @Mutation(returns => OrderType)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput): Promise<Order> {
    return this.orderService.createOrder(createOrderInput);

  }

  @Query(returns => OrderType)
  order(@Args('_id') _id: string): Promise<Order> {
    return this.orderService.getOrder(_id);
  }

  @Query(returns => [OrderType])
  orders(): Promise<Order[]> {
    return this.orderService.getOrders();
  }

  @ResolveField(returns => ClientType)
  client(@Parent() order: Order): Promise<Client> {
    return this.clientService.getClient(order.client_id);
  }
}

@Resolver(of => OrderDetailType)
export class OrderDetailResolver {

  constructor(private itemService: ItemService) {}

  @ResolveField(returns => ItemType)
  item(@Parent() orderDetail: OrderDetail): Promise<Item> {
    return this.itemService.getItem(orderDetail.item_id);
  }

}

@Resolver(of => AdditionalMealInfoType)
export class AdditionalMealInfoResolver {

  constructor(private ingredientService: IngredientService) { }

  @ResolveField(returns => IngredientType)
  ingredient(@Parent() additionalMealInfo: AdditionalMealInfo): Promise<Ingredient> {
    return this.ingredientService.getIngredient(additionalMealInfo.ingredient_id);
  }
}
