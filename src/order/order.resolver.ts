import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { OrderInterface } from './order.model';
import { CreateOrderInput } from './order.input';
import { OrderType } from './order.type';
import { OrderService } from './order.service';
import { Client } from '../client/client.model';
import { ClientService } from '../client/client.service';
import { MealService } from '../meal/meal.service';
import { Meal } from '../meal/meal.model';

@Resolver(of => OrderType)
export class OrderResolver {

  constructor(private orderService: OrderService, private clientService: ClientService, private mealService: MealService) { }

  @Mutation(returns => OrderType)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput): Promise<OrderInterface> {
    return this.orderService.createOrder(createOrderInput);

  }

  @Query(returns => OrderType)
  order(@Args('_id') _id: string): Promise<OrderInterface> {
    return this.orderService.getOrder(_id);
  }

  @Query(returns => [OrderType])
  orders(): Promise<OrderInterface[]> {
    return this.orderService.getOrders();
  }

  @ResolveField()
  client(@Parent() order: OrderInterface): Promise<Client> {
    return this.clientService.getClient(order.client_id);
  }
}
