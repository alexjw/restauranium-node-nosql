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
    quantity: Number
  }],
  client_id: {type: Schema.Types.ObjectId, ref: 'Client', required: false}
}, { timestamps: true });

export class OrderInterface extends Document {

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
  /*additional_info?: {
    ingredient_id: string,
    quantity: number,
    type: string
  }[]*/

}

export const OrderModelConstructor = mongoose.model<OrderInterface>('Order', OrderSchema);
