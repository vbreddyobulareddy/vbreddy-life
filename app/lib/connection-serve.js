
"use server"
import graphQLClientIns from "@/app/lib/graphQL-client";
import { gql } from "graphql-request";

const mutateNewConnection = gql`
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


export async function onMutateConnection(payload)  {
  console.log("--==onMutateConnection ", payload);
  const data = await graphQLClientIns.request(mutateNewConnection, {
    name: "Veera",
    email: "obularedy.veera@gmail.com",
    mobile: "8105555344",
    comment: "Hello Veera this is new comment",
  });
  console.log(data);
};