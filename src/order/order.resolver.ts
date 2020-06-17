import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Order } from './order.model';
import { CreateOrderInput } from './order.input';
import { OrderType } from './order.type';
import { OrderService } from './order.service';

@Resolver(of => OrderType)
export class OrderResolver {

  constructor(private orderService: OrderService) { }

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
}
