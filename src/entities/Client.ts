import { ObjectType, Field, ID, Int } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "Client Model" })
export class Client {

    @Field(()=> ID)
    id: string;

    @Field(_type => String)
    @Property()
    name: String;
}

export const ClientModel = getModelForClass(Client);
