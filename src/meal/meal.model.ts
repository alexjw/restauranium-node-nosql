import * as mongoose from 'mongoose'
import { Document, Model, Schema } from 'mongoose';
import { Client } from '../client/client.model';

export const MealSchema = new mongoose.Schema({
  name: String,
  details: [{
    _id: false,
    ingredient_id: {type: Schema.Types.ObjectId, ref: 'Ingredient'},
    quantity: Number
  }]
});

export class Meal extends Document{

  _id: string;

  name: string;

  details: MealDetail[]

}

export class MealDetail extends Document{

    ingredient_id: string;
    quantity: number;

}
