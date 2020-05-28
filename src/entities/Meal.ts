import { ObjectType, Field, ID, Int } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "Meal Model" })
export class Meal {

    @Field(()=> ID)
    id: string;

    @Field(_type => String)
    @Property()
    name: String;
}

export const MealModel = getModelForClass(Meal);
