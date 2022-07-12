import { gql } from "apollo-angular";
import { USER_FRAGMENT } from "@graphql/operations/fragments/user.fragments";

export const GET_USERS = gql`
    query Users($include: Boolean!) {
        users {
            status
            message
            users {
                ...UserObject
            }
        }
    }
    ${USER_FRAGMENT}
`;