import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Meal } from './meal.model';
import { CreateMealInput } from './meal.input';

@Injectable()
export class MealService {

  constructor(@InjectModel('Meal') private mealModel: Model<Meal>) { }

  getMeal(_id: string): Promise<Meal> {
    return this.mealModel.findById(_id).exec();
  }

  getMeals(): Promise<Meal[]> {
    return this.mealModel.find().exec();
  }

  createMeal(mealInput: CreateMealInput): Promise<Meal> {
    return this.mealModel.create(mealInput);
  }

}