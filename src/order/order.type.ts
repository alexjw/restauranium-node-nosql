import { Field, ID, ObjectType, } from '@nestjs/graphql';
import { MealType } from '../meal/meal.type';
import { ClientType } from '../client/client.type';

@ObjectType('Order')
export class OrderType {

  @Field(type => ID)
  _id: string;

  @Field()
  total: string;

  @Field(type => [OrderDetailType])
  details: OrderDetailType[];

  @Field(type => ClientType, {nullable: true})
  client: ClientType;

}

@ObjectType('OrderDetail')
export class OrderDetailType {

  @Field(type => MealType)
  meal: MealType;

  @Field()
  quantity: number;

}
