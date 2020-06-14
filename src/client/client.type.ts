import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Client')
export class ClientType {

  @Field(type => ID)
  _id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string

}