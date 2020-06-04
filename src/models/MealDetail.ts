import {Field, Float, ObjectType} from "type-graphql";
import {Ingredient} from "./Ingredient";
import {prop as Property} from "@typegoose/typegoose/lib/prop";
import {getModelForClass, Ref} from "@typegoose/typegoose";
import {Meal} from "./Meal";

@ObjectType()
export class MealDetail {

    @Field(_type => String)
    @Property({ref: Ingredient})
    ingredient_id: Ref<Ingredient>;

    @Field(_type => Float)
    quantity: number;
}

export const MealDetailModel = getModelForClass(MealDetail);
