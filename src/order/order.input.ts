import { Field, InputType } from '@nestjs/graphql';
import { CreateMealInput } from '../meal/meal.input';

@InputType()
export class CreateOrderInput {

  @Field()
  total: number;

  @Field(type => [CreateOrderDetailInput], { defaultValue: [] })
  details: CreateOrderDetailInput[];

}

@InputType()
export class CreateOrderDetailInput {

  @Field()
  meal: CreateMealInput;

  @Field()
  quantity: number;

}
