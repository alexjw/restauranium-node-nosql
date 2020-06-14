import { Query, Resolver } from '@nestjs/graphql';
import { ClientType } from './client.type';
import { ClientService } from './client.service';
import { Client } from './client.entity';

@Resolver(of => ClientType)
export class ClientResolver {

  constructor(private clientService: ClientService) { }

  @Query(returns => [ClientType])
  clients(): Promise<Client[]> {
    return this.clientService.getClients();
  }
}
