import { Injectable } from '@nestjs/common';
import { Ingredient } from './ingredient.model';
import { CreateIngredientInput } from './ingredient.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Meal, MealDetail } from '../meal/meal.model';

@Injectable()
export class IngredientService {

  constructor(@InjectModel('Ingredient') private ingredientModel: Model<Ingredient>) { }

  getIngredient(_id: string): Promise<Ingredient> {
    return this.ingredientModel.findById(_id).exec();
  }

  getIngredients(): Promise<Ingredient[]> {
    return this.ingredientModel.find().exec();
  }

  createIngredient(ingredientInput: CreateIngredientInput): Promise<Ingredient> {
    return this.ingredientModel.create(ingredientInput);
  }

  getIngredientFromMealDetail(mealDetail: MealDetail): Promise<Ingredient> {
    return this.ingredientModel.findById(mealDetail.ingredient_id).exec();
  }

  deleteIngredient(_id: string) {
    return this.ingredientModel.deleteOne({_id});
  }

}