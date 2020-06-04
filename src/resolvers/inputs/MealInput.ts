import {Field, InputType} from "type-graphql";
import {Meal} from "../../models/Meal";

@InputType()
export default class MealInput implements Partial<Meal> {

    @Field()
    name: String;

}