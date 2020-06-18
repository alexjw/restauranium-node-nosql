import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './item.model';
import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Item', schema: ItemSchema}])],
  providers: [ItemService, ItemResolver],
  exports: [ItemService]
})

export class ItemModule {}
