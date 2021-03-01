import { gql } from "apollo-server";

export default gql`
  type LIkePhotoResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    toggleLike(id: Int!): LIkePhotoResult
  }
`;
