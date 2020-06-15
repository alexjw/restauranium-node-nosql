import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb';

@Entity()
export class Ingredient {

  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  name: string;

  @Column()
  measureUnit: string;

}
