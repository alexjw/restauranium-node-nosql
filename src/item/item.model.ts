import * as mongoose from 'mongoose'
import { Document } from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  name: String,
  sizes: { type: [String], required: false }
}, { timestamps: true });

export class Item extends Document{

  _id: string;

  name: string;

  sizes?: string[];

}
