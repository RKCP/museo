const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = 9999;

server.listen(PORT, () => {
  console.log(`Runnning an Apollo Server at port ${PORT}`);
});
