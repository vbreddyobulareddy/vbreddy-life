import { GraphQLClient, gql } from "graphql-request";

let graphQLClientIns = null;

if (!graphQLClientIns) {
  graphQLClientIns = new GraphQLClient(
    "https://cloud-api.vbreddy.life/graphql"
  );
}

export default graphQLClientIns;
