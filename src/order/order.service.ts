import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { OrderDetail, Order, OrderModelConstructor } from './order.model';
import { CreateOrderInput } from './order.input';
import { MealService } from '../meal/meal.service';

@Injectable()
export class OrderService {

  constructor(@InjectModel('Order') private orderRepository: Model<Order>, private mealService: MealService) { }

  getOrder(_id: string): Promise<Order> {
    return this.orderRepository.findById(_id).exec();
  }

  getOrders(): Promise<Order[]> {
    return this.orderRepository.find().exec();
  }

  createOrder(createOrderInput: CreateOrderInput): Promise<Order> {
    return this.mealService
      .getMeals(createOrderInput.details.map(detail => detail.meal_id))
      .then(meals => {
        const order = new OrderModelConstructor();
        order.total = createOrderInput.total;
        if(createOrderInput.client_id)
          order.client_id = createOrderInput.client_id;
        order.details = [];
        createOrderInput.details.forEach(detail => {
          const theDetail: OrderDetail = {quantity: detail.quantity};
          console.log("detail");
          console.log(detail);
          if(detail.meal_id)
            theDetail.meal = meals.filter(meal => meal._id)[0];
          if(detail.item_id)
            theDetail.item_id = detail.item_id;
          if(detail.size)
            theDetail.size = detail.size;
          if(detail.additional_meal_info && detail.additional_meal_info.length)
            theDetail.additional_meal_info = detail.additional_meal_info;
          console.log("theDetail.additional_meal_info");
          console.log(theDetail.additional_meal_info);
          console.log("detail.additional_meal_info");
          console.log(detail.additional_meal_info);
          console.log("theDetail");
          console.log(theDetail);
          order.details.push(theDetail);
        });
        console.log("order");
        console.log(JSON.stringify(order));
        return this.orderRepository.create(order);
      });
  }

}
