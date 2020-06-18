import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Item')
export class ItemType {

  @Field(type => ID)
  _id: string;

  @Field()
  name: string;

  @Field(type => [String], {nullable: true})
  sizes: string[]

}
