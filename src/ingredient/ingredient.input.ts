import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateIngredientInput {

  @Field()
  name: string;

  @Field()
  measureUnit: string;

}
