import {Resolver, Mutation, Arg, Query, InputType, Field} from "type-graphql";
import { Meal, MealModel } from "../models/Meal";
import MealInput from "./inputs/MealInput";
import {Order, OrderModel} from "../models/Order";
import OrderInput from "./inputs/OrderInput";

@Resolver()
export default class OrderResolver {

    @Query(_returns => Order, { nullable: false})
    async returnSingleOrder(@Arg("id") id: string){
        return await OrderModel.findById({_id:id});
    };


    @Query(() => [Order])
    async returnAllOrders(){
        return await OrderModel.find();
    };

    @Mutation(() => Order)
    async createOrder(@Arg("data"){total}: OrderInput): Promise<Order> {
        const order = (await OrderModel.create({
            total
        })).save();
        return order;
    };


    @Mutation(() => Boolean)
    async deleteOrder(@Arg("id") id: string) {
        await OrderModel.deleteOne({id});
        return true;
    }

}
