import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMealInput {

  @Field()
  name: string;

  @Field(type => [String], { nullable: true })
  sizes: string[];

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
