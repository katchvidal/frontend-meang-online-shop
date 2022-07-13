import { gql } from "apollo-angular";
import { USER_FRAGMENT } from "@graphql/operations/fragments/user.fragments";


export const GET_LOGIN = gql`
    query Signin($email: String!, $password: String!, $include: Boolean!) {
        signin(email: $email, password: $password) {
            status
            message
            token
            user {
                    ...UserObject
                }
        }
    }
    ${USER_FRAGMENT}
`;