import { Field, InputType } from '@nestjs/graphql';
import { Ingredient } from '../ingredient/ingredient.model';

@InputType()
export class CreateMealInput {

  @Field()
  name: string;

  @Field(type => [CreateMealDetailInput], { defaultValue: [] })
  details: CreateMealDetailInput[];

}

@InputType()
export class CreateMealDetailInput {

  @Field()
  ingredient_id: string;

  @Field()
  quantity: number;

}
