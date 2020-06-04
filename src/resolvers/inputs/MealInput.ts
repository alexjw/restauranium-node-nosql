import {Field, InputType} from "type-graphql";
import {Meal} from "../../models/Meal";
import {MealDetail} from "../../models/MealDetail";
import MealDetailInput from "./MealDetailInput";

@InputType()
export default class MealInput implements Partial<Meal> {

    @Field()
    name: String;

    /*@Field(_type => [MealDetail])
    details: TheInput*/

}

interface TheInput {
    quantity: number;
    ingredient_id: string;
}
