import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MealSchema } from './meal.model';
import { MealService } from './meal.service';
import { MealResolver } from './meal.resolver';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Meal', schema: MealSchema}])],
  providers: [MealService, MealResolver],
  exports: [MealService]
})
export class MealModule {}
