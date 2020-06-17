import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { MealDetailType, MealType } from './meal.type';
import { Meal, MealDetail } from './meal.model';
import { CreateMealInput } from './meal.input';
import { MealService } from './meal.service';
import { Ingredient } from '../ingredient/ingredient.model';
import { IngredientService } from '../ingredient/ingredient.service';

@Resolver(of => MealType)
export class MealResolver {

  constructor(private mealService: MealService, private ingredientService: IngredientService) { }

  @Mutation(returns => MealType)
  createMeal(@Args('createMealInput') createMealInput: CreateMealInput): Promise<Meal> {
    return this.mealService.createMeal(createMealInput);
  }

  @Query(returns => MealType)
  meal(@Args('_id') _id: string): Promise<Meal> {
    return this.mealService.getMeal(_id);
  }

  @Query(returns => [MealType])
  meals(): Promise<Meal[]> {
    return this.mealService.getMeals();
  }
}

@Resolver(of => MealDetailType)
export class MealDetailResolver {

  constructor(private mealService: MealService, private ingredientService: IngredientService) { }

  @ResolveField()
  ingredient(@Parent() mealDetail: MealDetail): Promise<Ingredient> {
    return this.ingredientService.getIngredientFromMealDetail(mealDetail);
  }
}
