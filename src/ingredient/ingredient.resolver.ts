import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IngredientType } from './ingredient.type';
import { IngredientService } from './ingredient.service';
import { CreateIngredientInput } from './ingredient.input';
import { Ingredient } from './ingredient.entity';

@Resolver(of => IngredientType)
export class IngredientResolver {

  constructor(private ingredientService: IngredientService) { }

  @Mutation(returns => IngredientType)
  createIngredient(@Args('createIngredientInput') createIngredientInput: CreateIngredientInput): Promise<Ingredient> {
    return this.ingredientService.createIngredient(createIngredientInput);
  }

  @Query(returns => IngredientType)
  ingredient(@Args('_id') _id: string): Promise<Ingredient> {
    return this.ingredientService.getIngredient(_id);
  }

  @Query(returns => [IngredientType])
  ingredients(): Promise<Ingredient[]> {
    return this.ingredientService.getIngredients();
  }
}
