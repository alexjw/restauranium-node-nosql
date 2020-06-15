import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Student')
export class IngredientType {

  @Field(type => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  measureUnit: string

}
