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
export class CreateOrderDetailInput {

  @Field({nullable: true})
  meal_id: string;

  @Field({nullable: true})
  item_id: string;

  @Field({nullable: true})
  size: string;

  @Field()
  quantity: number;

}
