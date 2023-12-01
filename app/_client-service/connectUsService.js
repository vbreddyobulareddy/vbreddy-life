import { gql } from "@apollo/client";
import createApolloClient from "./../apollo-client";

export async function getAllConnections() {
  console.log("--==> getConnections <==--");
  const client = createApolloClient();
  return await client.query({
    query: gql`
      query {
        connection {
          id
          name
          email
          mobile
        }
      }
    `,
  });
}
