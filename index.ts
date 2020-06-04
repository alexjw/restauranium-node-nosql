import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { connect } from "mongoose";

// resolvers
import ClientResolver from './src/resolvers/ClientResolver';
import IngredientResolver from "./src/resolvers/IngredientResolver";
import MealResolver from "./src/resolvers/MealResolver";


const main = async () => {
    const schema = await buildSchema({
        resolvers: [ClientResolver, IngredientResolver, MealResolver],
        emitSchemaFile: true,
        validate: false,
    });

// create mongoose connection
    const mongoose = await connect('mongodb://localhost:27017/restaurantium', {useNewUrlParser: true});
    await mongoose.connection;


    const server = new ApolloServer({schema});
    const app = Express();
    server.applyMiddleware({app});
    app.listen({ port: 3000 }, () =>
        console.log(`🚀 Server ready and listening at ==> http://localhost:3000${server.graphqlPath}`))
};

main().catch((error)=>{
    console.log(error, 'error');
});

