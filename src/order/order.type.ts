import { Field, ID, ObjectType, } from '@nestjs/graphql';
import { MealType } from '../meal/meal.type';
import { ClientType } from '../client/client.type';
import { ItemType } from '../item/item.type';
import { IngredientType } from '../ingredient/ingredient.type';

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

  @Field(type => MealType, { nullable: true })
  meal: MealType;

  @Field(type => ItemType, { nullable: true })
  item: ItemType;

  @Field({ nullable: true })
  size: string;

  @Field(type => [AdditionalMealInfoType], {nullable: true})
  additional_meal_info: AdditionalMealInfoType[];

  @Field()
  quantity: number;

}

@ObjectType('AdditionalMealInfo')
export class AdditionalMealInfoType {

  @Field(type => IngredientType)
  ingredient: IngredientType;

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field()
  difference: string;

}
