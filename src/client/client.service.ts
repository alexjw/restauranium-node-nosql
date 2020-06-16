import { Injectable } from '@nestjs/common';
import {Client} from './client.model';
import { CreateClientInput } from './client.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ClientService {

  // constructor(@InjectRepository(Client) private clientRepository: Repository<Client>) { }
  constructor(@InjectModel('Client') private clientModel: Model<Client>) { }

  getClient(_id: string): Promise<Client> {
    // return this.clientRepository.findOne({_id: new ObjectID(_id)});
    return this.clientModel.findById(_id).exec();
  }

  createClient(clientInput: CreateClientInput): Promise<Client> {
    // return this.clientRepository.save(client);
    return this.clientModel.create(clientInput);
  }

  getClients(): Promise<Client[]> {
    // return this.clientRepository.find();
    return this.clientModel.find().exec();
  }
}
