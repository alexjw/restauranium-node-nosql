import { Module } from '@nestjs/common';
import { Client, ClientSchema } from './client.model';
import { ClientService } from './client.service';
import { ClientResolver } from './client.resolver';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  /*imports: [TypeOrmModule.forFeature([Client])],*/
  imports: [MongooseModule.forFeature([{name: 'Client', schema: ClientSchema}])],
  providers: [ClientService, ClientResolver],
  exports: [ClientService]
})
export class ClientModule {}
