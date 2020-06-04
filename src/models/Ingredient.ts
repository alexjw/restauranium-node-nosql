import { ObjectType, Field, ID, Int } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "Ingredient Model" })
export class Ingredient {

    @Field(()=> ID)
    id: string;

    @Field(_type => String)
    @Property()
    name: String;
}

export const IngredientModel = getModelForClass(Ingredient);
