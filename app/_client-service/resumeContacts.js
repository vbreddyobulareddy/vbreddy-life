import graphQLClientIns from "@/app/_client-service/graphQL-client";
import { gql } from "graphql-request";

const postMutationOfResumeContactsGql = gql`
  mutation sendResume($email: String!) {
    sendResume(email: $email) {
      email
    }
  }
`;

export function postMutationOfResumeContacts(payload) {
  return graphQLClientIns.request(postMutationOfResumeContactsGql, {
    email: payload.email,
  });
}
