import * as mongoose from 'mongoose'
import { Document, Model, Schema } from 'mongoose';
import { Meal, MealSchema } from '../meal/meal.model';

export const OrderSchema = new mongoose.Schema({
  total: Number,
  details: [{
    _id: false,
    meal: { type: MealSchema, required: false },
    quantity: Number
  }],
  client_id: {type: Schema.Types.ObjectId, ref: 'Client', required: false}
}, { timestamps: true });

export class OrderInterface extends Document {

  _id: string;

  total: number;

  details: {
    meal?: Meal,
    quantity: number,
    /*additional_info?: {
      ingredient_id: string,
      quantity: number,
      type: string
    }[]*/
  }[];

  client_id?: string;

}

export const OrderModelConstructor = mongoose.model<OrderInterface>('Order', OrderSchema);
