import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from './index.js';

import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
