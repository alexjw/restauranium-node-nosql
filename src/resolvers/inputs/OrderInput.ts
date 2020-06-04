import {Field, InputType} from "type-graphql";
import {Order} from "../../models/Order";

@InputType()
export default class OrderInput implements Partial<Order> {

    @Field()
    total: number;

}