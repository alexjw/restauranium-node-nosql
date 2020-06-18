import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ItemService } from './item.service';
import { ItemType } from './item.type';
import { CreateItemInput } from './item.input';
import { Item } from './item.model';

@Resolver('Item')
export class ItemResolver {
  constructor(private itemService: ItemService) { }

  @Mutation(returns => ItemType)
  createItem(@Args('createItemInput') createItemInput: CreateItemInput): Promise<Item> {
    return this.itemService.createItem(createItemInput);
  }

  @Query(returns => ItemType)
  item(@Args('_id') _id: string): Promise<Item> {
    return this.itemService.getItem(_id);
  }

  @Query(returns => [ItemType])
  items(): Promise<Item[]> {
    return this.itemService.getItems();
  }

}
