import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import {Client} from './client/client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

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
        Client
      ]
    }),
    ClientModule],
})
export class AppModule {}
