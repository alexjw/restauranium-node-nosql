import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MealType } from './meal.type';
import { Meal } from './meal.model';
import { CreateMealInput } from './meal.input';
import { MealService } from './meal.service';

@Resolver(of => MealType)
export class MealResolver {

  constructor(private mealService: MealService) { }

  @Mutation(returns => MealType)
  createMeal(@Args('createMealInput') createMealInput: CreateMealInput): Promise<Meal> {
    /*const meal = new Meal();
    meal.name = createMealInput.name;
    meal.details = [];
    meal.details.push({ingredient_id: "5ee9172fcb710f39e4df95f8", quantity: 1});*/
    //this.mealService.createMeal(createMealInput);
    return this.mealService.createMeal(createMealInput);
  }

  @Mutation(returns => MealType)
  addDetail(@Args('meal_id') meal_id: string, @Args('ingredient_id') ingredient_id: string): Promise<Meal> {
    return this.mealService.getMeal(meal_id).then(meal => {
      meal.details.push({ingredient_id: ingredient_id, quantity: 1});
      return meal.save();
    })
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
