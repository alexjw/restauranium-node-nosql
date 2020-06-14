import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Client} from './client.entity';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { ClientType } from './client.type';

@Injectable()
export class ClientService {

  constructor(@InjectRepository(Client) private clientRepository: Repository<Client>) { }

  getClient(_id: string): Promise<Client> {
    return this.clientRepository.findOne({_id: new ObjectID(_id)});
  }


  getClients(): Promise<Client[]> {
    return this.clientRepository.find();
  }
}
