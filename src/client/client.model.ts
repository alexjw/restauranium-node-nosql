import * as mongoose from 'mongoose'
import { Document } from 'mongoose';

export const ClientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
}, { timestamps: true });

export class Client extends Document{

  _id: string;

  firstName: string;

  lastName: string;

}


