import { Module } from '@nestjs/common';
import {Client} from './client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientService } from './client.service';
import { ClientResolver } from './client.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClientService, ClientResolver],
  exports: [ClientService]
})
export class ClientModule {}
