import { gql } from "@apollo/client";

// To define the query
export const GET_LAUNCHES = gql`
  query GET_LAUNCHES($offset:Int!, $limit: Int!) {
    launchesPast(limit: $limit, offset: $offset) {
      mission_name
      rocket {
        rocket_name
      }
      launch_success
      launch_date_utc
    }
  }
`;
