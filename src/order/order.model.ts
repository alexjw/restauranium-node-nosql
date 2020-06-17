import * as mongoose from 'mongoose'
import { Document, Model, Schema } from 'mongoose';
import { Meal, MealSchema } from '../meal/meal.model';

export const OrderSchema = new mongoose.Schema({
  total: Number,
  details: [{
    _id: false,
    meal: MealSchema,
    quantity: Number
  }]
});

export class Order extends Document{

  _id: string;

  name: string;

  details: {
    meal: Meal,
    quantity: number
  }[]

}
