import { gql } from "apollo-angular";
import { USER_FRAGMENT } from '@graphql/operations/fragments/user.fragments'

export const AUTH_ME = gql`
    query Auth($include: Boolean!) {
        auth {
            status
            message
            user {
                ...UserObject
            }
        }
    }
    ${USER_FRAGMENT}
`;