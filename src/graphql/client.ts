import ApolloClient from 'apollo-boost';

import defaults from 'graphql/defaults';
import resolvers from 'graphql/resolvers';
import typeDefs from 'graphql/typeDefs';

export default new ApolloClient({
  clientState: {
    defaults,
    resolvers,
    typeDefs,
  },
});
