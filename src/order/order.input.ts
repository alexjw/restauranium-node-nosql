import { Field, InputType } from '@nestjs/graphql';
import { CreateMealInput } from '../meal/meal.input';

@InputType()
export class CreateOrderInput {

  @Field()
  total: number;

  @Field(type => [CreateOrderDetailInput], { defaultValue: [] })
  details: CreateOrderDetailInput[];

  @Field({nullable: true})
  client_id: string;

}

@InputType()
export class CreateMealInputForOrder extends CreateMealInput {

  @Field()
  _id: string;

}

@InputType()
export class CreateOrderDetailInput {

  @Field()
  meal: CreateMealInputForOrder;

  @Field()
  quantity: number;

}
