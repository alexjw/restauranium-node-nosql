import { ObjectType, Field, ID, Float } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "Order Model" })
export class Order {

    @Field(()=> ID)
    id: string;

    @Field(_type => Float)
    @Property()
    total: number;
}

export const OrderModel = getModelForClass(Order);
