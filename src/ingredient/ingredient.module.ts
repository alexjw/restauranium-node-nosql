import { Module } from '@nestjs/common';
import { Ingredient } from './ingredient.entity';
import { IngredientService } from './ingredient.service';
import { IngredientResolver } from './ingredient.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientSchema } from './ingredient.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Ingredient', schema: IngredientSchema}])],
  providers: [IngredientService, IngredientResolver],
  exports: [IngredientService]
})
export class IngredientModule {}
