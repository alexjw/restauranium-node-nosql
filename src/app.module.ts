import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import {Client} from './client/client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { IngredientModule } from './ingredient/ingredient.module';
import { Ingredient } from './ingredient/ingredient.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [GraphQLModule.forRoot(
    {
      autoSchemaFile: true
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/restaurantium',
      synchronize: true,
      entities: [
        Client, Ingredient
      ]
    }),
    ClientModule,
    IngredientModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
