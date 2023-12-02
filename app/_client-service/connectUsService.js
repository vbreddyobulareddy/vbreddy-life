import graphQLClientIns from "@/app/_client-service/graphQL-client";
import { gql } from "graphql-request";

const postMutationOfConnectionGql = gql`
  mutation addNewConnect(
    $name: String!
    $email: String!
    $mobile: String
    $comment: String!
  ) {
    addNewConnect(
      name: $name
      email: $email
      mobile: $mobile
      comment: $comment
    ) {
      id
      name
    }
  }
`;

export function postMutationOfConnection(payload) {
  return graphQLClientIns.request(postMutationOfConnectionGql, {
    name: payload.name,
    email: payload.email,
    mobile: payload.mobile,
    comment: payload.comment,
  });
}
