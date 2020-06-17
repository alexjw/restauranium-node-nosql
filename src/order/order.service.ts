import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Order } from './order.model';
import { CreateOrderInput } from './order.input';

@Injectable()
export class OrderService {

  constructor(@InjectModel('Order') private orderModel: Model<Order>) { }

  getOrder(_id: string): Promise<Order> {
    return this.orderModel.findById(_id).exec();
  }

  getOrders(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  createOrder(orderInput: CreateOrderInput): Promise<Order> {
    return this.orderModel.create(orderInput);
  }

}
