import { Field, ID, ObjectType, } from '@nestjs/graphql';
import { IngredientType } from '../ingredient/ingredient.type';

@ObjectType('Meal')
export class MealType {

  @Field(type => ID)
  _id: string;

  @Field()
  name: string;

  @Field(type => [MealDetailType])
  details: MealDetailType[];

}

@ObjectType('MealDetail')
export class MealDetailType {

  @Field(type => IngredientType)
  ingredient: IngredientType;

  @Field()
  quantity: number;

}
