import * as mongoose from 'mongoose'
import { Document, Model, Schema } from 'mongoose';
import { Meal, MealSchema } from '../meal/meal.model';
import { Item, ItemSchema } from '../item/item.model';

export const OrderSchema = new mongoose.Schema({
  total: Number,
  details: [{
    _id: false,
    meal: { type: MealSchema, required: false },
    item_id: { type: Schema.Types.ObjectId, ref: 'Item', required: false },
    size: { type: String, required: false },
    quantity: Number,
    additional_meal_info: [{
      _id: false,
      ingredient_id: {type: Schema.Types.ObjectId, ref: 'Ingredient'},
      difference: String,   // This refers to Plus or Minus
      price: Number,
      quantity: Number,
      required: false
    }]
  }],
  client_id: {type: Schema.Types.ObjectId, ref: 'Client', required: false}
}, { timestamps: true });

export class Order extends Document {

  _id: string;

  total: number;

  details: OrderDetail[];

  client_id?: string;

}

export class OrderDetail  {

  meal?: Meal;
  item_id?: string;
  size?: string;
  quantity: number;
  additional_meal_info?: AdditionalMealInfo[];

}

export class AdditionalMealInfo {

  ingredient_id: string;
  price: number;
  quantity: number;
  difference: string;

}

export const OrderModelConstructor = mongoose.model<Order>('Order', OrderSchema);
