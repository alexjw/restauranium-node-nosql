import {Field, ID, InputType} from "type-graphql";
import {MealDetail} from "../../models/MealDetail";
import { ObjectId } from "mongodb";

@InputType()
export default class MealDetailInput implements Partial<MealDetail> {

    @Field()
    quantity: number;

    @Field()
    ingredient_id: String;

}
