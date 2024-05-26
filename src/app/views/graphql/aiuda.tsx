import { gql } from "@apollo/client";

export const TRY_LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    email
    password
  }
`;