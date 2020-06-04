import {Resolver, Mutation, Arg, Query, InputType, Field} from "type-graphql";
import { Meal, MealModel } from "../models/Meal";
import MealInput from "./inputs/MealInput";
import {Ingredient, IngredientModel} from "../models/Ingredient";
import IngredientInput from "./inputs/IngredientInput";

@Resolver()
export default class IngredientResolver {

    @Query(_returns => Meal, { nullable: false})
    async returnIngredientMeal(@Arg("id") id: string){
        return await IngredientModel.findById({_id:id});
    };


    @Query(() => [Meal])
    async returnAllIngredients(){
        return await IngredientModel.find();
    };

    @Mutation(() => Ingredient)
    async createIngredient(@Arg("data"){name}: IngredientInput): Promise<Ingredient> {
        const ingredient = (await IngredientModel.create({
            name
        })).save();
        return ingredient;
    };


    @Mutation(() => Boolean)
    async deleteIngredient(@Arg("id") id: string) {
        await IngredientModel.deleteOne({id});
        return true;
    }

}
