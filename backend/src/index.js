import { ApolloServer, makeExecutableSchema } from "apollo-server";

// Models
import models from "./models";

// Types Definitions & Resolvers
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/types";

// Schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Apollo Server
const apolloServer = new ApolloServer({
  schema,
  context: {
    models
  }
});

// Running Apollo Server
const alter = true
const force = false

models.sequelize.sync({ alter, force }).then(() => {
  apolloServer.listen(4000).then(({ url }) => console.log(`Running on ${url}`));
});
