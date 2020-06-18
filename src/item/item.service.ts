import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Item } from './item.model';
import { CreateItemInput } from './item.input';

@Injectable()
export class ItemService {

  constructor(@InjectModel('Item') private itemModel: Model<Item>) { }

  getItem(_id: string): Promise<Item> {
    return this.itemModel.findById(_id).exec();
  }

  getItems(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  createItem(itemInput: CreateItemInput): Promise<Item> {
    return this.itemModel.create(itemInput);
  }

}
