import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MealSchema } from './meal.model';
import { MealService } from './meal.service';
import { MealDetailResolver, MealResolver } from './meal.resolver';
import { IngredientModule } from '../ingredient/ingredient.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Meal', schema: MealSchema}]), IngredientModule],
  providers: [MealService, MealResolver, MealDetailResolver],
  exports: [MealService]
})
export class MealModule {}
