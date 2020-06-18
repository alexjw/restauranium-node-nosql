import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { OrderInterface, OrderModelConstructor } from './order.model';
import { CreateOrderInput } from './order.input';
import { MealService } from '../meal/meal.service';

@Injectable()
export class OrderService {

  constructor(@InjectModel('Order') private orderRepository: Model<OrderInterface>, private mealService: MealService) { }

  getOrder(_id: string): Promise<OrderInterface> {
    return this.orderRepository.findById(_id).exec();
  }

  getOrders(): Promise<OrderInterface[]> {
    return this.orderRepository.find().exec();
  }

  createOrder(createOrderInput: CreateOrderInput): Promise<OrderInterface> {
    return this.mealService
      .getMeals(createOrderInput.details.map(detail => detail.meal_id))
      .then(meals => {
        const order = new OrderModelConstructor();
        order.total = createOrderInput.total;
        if(createOrderInput.client_id)
          order.client_id = createOrderInput.client_id;
        order.details = [];
        createOrderInput.details.map(detail => {
          order.details.push(
            {
              meal: meals.filter(meal => meal._id)[0],
              quantity: detail.quantity
            });
        });
        return this.orderRepository.create(order);
      });
  }

}
