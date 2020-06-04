import {Field, InputType} from "type-graphql";
import {Length} from "class-validator";
import {Meal} from "../../models/Meal";

@InputType()
export default class IngredientInput implements Partial<Meal> {

    @Field()
    @Length(1, 255)
    name: string;

}