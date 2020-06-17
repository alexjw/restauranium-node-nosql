import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Order } from './order.model';
import { CreateOrderInput } from './order.input';
import { OrderType } from './order.type';
import { OrderService } from './order.service';
import { Client } from '../client/client.model';
import { ClientService } from '../client/client.service';

@Resolver(of => OrderType)
export class OrderResolver {

  constructor(private orderService: OrderService, private clientService: ClientService) { }

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

  @ResolveField()
  client(@Parent() order: Order): Promise<Client> {
    return this.clientService.getClient(order.client_id);
  }
}
