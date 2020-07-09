import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientType } from './client.type';
import { ClientService } from './client.service';
import { Client } from './client.model';
import { CreateClientInput } from './client.input';

@Resolver(of => ClientType)
export class ClientResolver {

  constructor(private clientService: ClientService) { }

  @Query(returns => [ClientType])
  clients(): Promise<Client[]> {
    return this.clientService.getClients();
  }

  @Query(returns => ClientType)
  client(_id: string): Promise<Client> {
    return this.clientService.getClient(_id);
  }

  @Mutation(returns => ClientType)
  createClient(@Args('createClientInput') createClientInput: CreateClientInput): Promise<Client> {
    return this.clientService.createClient(createClientInput);
  }

  @Mutation(returns => Boolean)
  deleteClient(@Args('_id') _id: string) {
    return this.clientService.deleteClient(_id).then(result => Boolean(result.deletedCount));
  }
}
