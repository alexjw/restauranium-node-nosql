import * as mongoose from 'mongoose'
import { Document, Model, Schema } from 'mongoose';
import { Meal, MealSchema } from '../meal/meal.model';

export const OrderSchema = new mongoose.Schema({
  total: Number,
  details: [{
    _id: false,
    meal: MealSchema,
    quantity: Number
  }],
  client_id: {type: Schema.Types.ObjectId, ref: 'Client', required: false}
}, { timestamps: true });

export class Order extends Document{

  _id: string;

  name: string;

  details: {
    meal: Meal,
    quantity: number
  }[];

  client_id?: string;

}
