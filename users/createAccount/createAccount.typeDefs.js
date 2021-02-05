import { gql } from "apollo-server";


export default gql`
    type LoginResult{
        ok: Boolean!
        token: String
        error: String
    }
    
    type Mutation{
        craeteAccount(
            firstName: String!
            lastName: String
            username: String!
            email: String!
            password: String!
        ) : User
    }
`;