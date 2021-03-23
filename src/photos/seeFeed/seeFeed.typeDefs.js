import { gql } from "apollo-server";

export default gql`
  type Query {
    seeFeed(offset: Int!, limit: Int!): [Photo]
  }
`;
