import { Field, InputType, ObjectType } from '@nestjs/graphql';

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

  @Field(type => [AdditionalMealInfoInput], {nullable: true})
  additional_meal_info: AdditionalMealInfoInput[];

  @Field()
  quantity: number;

}

@InputType()
export class AdditionalMealInfoInput {

  @Field()
  ingredient_id: string;

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field()
  difference: string;

}
