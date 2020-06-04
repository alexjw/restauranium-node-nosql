import { ObjectType, Field, ID, Int, Float  } from "type-graphql";
import {prop as Property, getModelForClass, Ref} from "@typegoose/typegoose";
import {Ingredient} from "./Ingredient";
import {MealDetail} from "./MealDetail";


@ObjectType()
export class Meal {

    @Field(()=> ID)
    id: String;

    @Field(_type => String)
    @Property()
    name: String;

    /*@Field(_type => Ingredient)
    @Property({ref: Ingredient})
    ingredient: Ref<Ingredient>;*/

    @Field(_type => [MealDetail], {nullable: true})
    @Property({items: MealDetail})
    details: MealDetail[]

}

export const MealModel = getModelForClass(Meal);
