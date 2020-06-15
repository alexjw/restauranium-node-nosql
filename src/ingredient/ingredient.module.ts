import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './ingredient.entity';
import { IngredientService } from './ingredient.service';
import { IngredientResolver } from './ingredient.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient])],
  providers: [IngredientService, IngredientResolver],
  exports: [IngredientService]
})
export class IngredientModule {}
