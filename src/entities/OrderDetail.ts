import { ObjectType, Field, ID, Int } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "OrderDetail Model" })
export class OrderDetail {

    @Field(()=> ID)
    id: string;

    @Field(_type => String)
    @Property()
    name: String;
}

export const OrderDetailModel = getModelForClass(OrderDetail);
