import { gql } from "graphql-request";

export const briefEventData = gql`
  query {
    eventInfoCollection {
      items {
        eventName
        eventDate
        smallDescription
        longDescription
        venue
        time
        eventPoster {
          url
        }
      }
    }
  }
`;
