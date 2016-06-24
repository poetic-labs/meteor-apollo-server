import { apolloServer } from 'graphql-tools';
import cors from 'cors';
import express from 'express';
import proxyMiddleware from 'http-proxy-middleware';
import schema from '/imports/data/schema';
import resolvers from '/imports/data/resolvers';

const GRAPHQL_PORT = 4000;

const graphQLServer = express().use('*', cors({ origin: 'http://localhost:3000' }));

graphQLServer.use('/graphql', apolloServer(async () => {
    return {
      graphiql: true,
      pretty: true,
      schema,
      resolvers
    };
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));

WebApp.rawConnectHandlers.use(proxyMiddleware(`http://localhost:${GRAPHQL_PORT}/graphql`));
