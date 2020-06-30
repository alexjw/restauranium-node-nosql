import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { IngredientType } from './ingredient.type';
import { IngredientService } from './ingredient.service';
import { CreateIngredientInput } from './ingredient.input';
import { Ingredient } from './ingredient.model';
import { PubSub } from 'graphql-subscriptions'

const pubSub = new PubSub();

@Resolver(of => IngredientType)
export class IngredientResolver {

  constructor(private ingredientService: IngredientService) { }

  @Mutation(returns => IngredientType)
  createIngredient(@Args('createIngredientInput') createIngredientInput: CreateIngredientInput): Promise<Ingredient> {
    return this.ingredientService.createIngredient(createIngredientInput).then(ingredient => {
      pubSub.publish('ingredientAdded', {ingredientAdded: ingredient});
      return ingredient;
    });
  }

  @Mutation(returns => Boolean)
  deleteIngredient(@Args('_id') _id: string) {
    return this.ingredientService.deleteIngredient(_id).then(result => Boolean(result.deletedCount));
  }

  @Query(returns => IngredientType)
  ingredient(@Args('_id') _id: string): Promise<Ingredient> {
    return this.ingredientService.getIngredient(_id);
  }

  @Query(returns => [IngredientType])
  ingredients(): Promise<Ingredient[]> {
    return this.ingredientService.getIngredients();
  }

  @Subscription(returns => IngredientType)
  ingredientAdded() {
    return pubSub.asyncIterator('ingredientAdded')
  }

}
