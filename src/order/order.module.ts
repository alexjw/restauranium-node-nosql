import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './order.model';
import { OrderResolver } from './order.resolver';
import { ClientModule } from '../client/client.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Order', schema: OrderSchema}]), ClientModule],
  providers: [OrderService, OrderResolver],
  exports: [OrderService]
})
export class OrderModule {}
