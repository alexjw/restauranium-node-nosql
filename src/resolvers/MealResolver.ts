import {Resolver, Mutation, Arg, Query, InputType, Field} from "type-graphql";
import { Meal, MealModel } from "../models/Meal";
import MealInput from "./inputs/MealInput";
import MealDetailInput from "./inputs/MealDetailInput";

@Resolver()
export default class MealResolver {

    @Query(_returns => Meal, { nullable: false})
    async returnSingleMeal(@Arg("id") id: string){
        return await MealModel.findById({_id:id});
    };


    @Query(() => [Meal])
    async returnAllMeals(){
        return await MealModel.find();
    };

    @Mutation(() => Meal)
    async createMeal(
        @Arg("data"){name}: MealInput
    ): Promise<Meal> {
        const meal = (await MealModel.create({
            name
        })).save();
        return meal;
    };


    @Mutation(() => Boolean)
    async deleteMeal(@Arg("id") id: string) {
        await MealModel.deleteOne({id});
        return true;
    }

}
