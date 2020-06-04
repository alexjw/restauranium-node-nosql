import {Resolver, Mutation, Arg, Query, InputType, Field} from "type-graphql";
import { Client, ClientModel } from "../models/Client";
import ClientInput from "./inputs/ClientInput";

@Resolver()
export default class ClientResolver {

    @Query(_returns => Client, { nullable: false})
    async returnSingleClient(@Arg("id") id: string){
        return await ClientModel.findById({_id:id});
    };


    @Query(() => [Client])
    async returnAllClients(){
        return await ClientModel.find();
    };

    @Mutation(() => Client)
    async createClient(
        @Arg("data"){name}: ClientInput
    ): Promise<Client> {
        const client = (await ClientModel.create({
            name
        })).save();
        return client;
    };


    @Mutation(() => Boolean)
    async deleteClient(@Arg("id") id: string) {
        await ClientModel.deleteOne({id});
        return true;
    }

}
