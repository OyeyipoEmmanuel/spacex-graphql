import { gql } from "@apollo/client";

// To define the query
export const GET_LAUNCHES = gql`
  query GET_LAUNCHES($limit: Int) {
    launchesPast(limit: $limit) {
      mission_name
      rocket {
        rocket_name
      }
      launch_success
      launch_date_utc
    }
  }
`;
