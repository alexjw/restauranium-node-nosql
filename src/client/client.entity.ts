import { Column, Entity, ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity({name: "clients"})
export class Client{

  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

}
