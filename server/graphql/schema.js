const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    name: String!
    id: Int!
  }

  type Query {
    users: [User]!
    user(id: Int!): User!
  }
`;

module.exports = typeDefs;
