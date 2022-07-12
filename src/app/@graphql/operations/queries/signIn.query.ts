import { gql } from "apollo-angular";


export const GET_LOGIN = gql`
    query Signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
        status
        message
        token
    }
}
`;