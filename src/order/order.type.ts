import { Field, ID, ObjectType, } from '@nestjs/graphql';
import { MealType } from '../meal/meal.type';

@ObjectType('Order')
export class OrderType {

  @Field(type => ID)
  _id: string;

  @Field()
  total: string;

  @Field(type => [OrderDetailType])
  details: OrderDetailType[];

}

@ObjectType('OrderDetail')
export class OrderDetailType {

  @Field(type => MealType)
  meal: MealType;

  @Field()
  quantity: number;

}
