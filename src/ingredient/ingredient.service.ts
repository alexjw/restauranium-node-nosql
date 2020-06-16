import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from './ingredient.model';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { CreateIngredientInput } from './ingredient.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Client } from '../client/client.model';

@Injectable()
export class IngredientService {

  //constructor(@InjectRepository(Ingredient) private ingredientRepository: Repository<Ingredient>) { }
  constructor(@InjectModel('Ingredient') private ingredientModel: Model<Ingredient>) { }

  getIngredient(_id: string): Promise<Ingredient> {
    //return this.ingredientRepository.findOne({_id: new ObjectID(_id)});
    return this.ingredientModel.findById(_id).then();
  }

  getIngredients(): Promise<Ingredient[]> {
    //return this.ingredientRepository.find();
    return this.ingredientModel.find().then();
  }

  createIngredient(ingredientInput: CreateIngredientInput): Promise<Ingredient> {
    /*const ingredient = this.ingredientRepository.create(ingredientInput);
    return this.ingredientRepository.save(ingredient);*/
    return this.ingredientModel.create(ingredientInput).then();
  }

}