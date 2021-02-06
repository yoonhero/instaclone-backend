import { gql } from "apollo-server";


export default gql`
    type LoginResult{
        ok: Boolean!
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