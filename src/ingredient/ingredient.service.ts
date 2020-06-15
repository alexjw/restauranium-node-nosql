import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from './ingredient.entity';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { CreateIngredientInput } from './ingredient.input';

@Injectable()
export class IngredientService {

  constructor(@InjectRepository(Ingredient) private ingredientRepository: Repository<Ingredient>) { }

  getIngredient(_id: string): Promise<Ingredient> {
    return this.ingredientRepository.findOne({_id: new ObjectID(_id)});
  }

  getIngredients(): Promise<Ingredient[]> {
    return this.ingredientRepository.find();
  }

  createIngredient(ingredientInput: CreateIngredientInput): Promise<Ingredient> {
    const ingredient = this.ingredientRepository.create(ingredientInput);
    return this.ingredientRepository.save(ingredient);
  }

}