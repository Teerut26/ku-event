import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type Event {
        id: String
        title: String
        detail: String
        startTime: String
        endTime: String
        place: String
        image: [String]
    }

    input EventInput {
        title: String
        detail: String
        startTime: String
        endTime: String
        place: String
    }

    type Query {
        getEvents: [Event]
        getEvent(id: String!, limit: Int, after: String): Event
    }

    type Mutation {
        createEvent(input: EventInput): Event
        # updateEvent(id: String!, input: EventInput): Event
        # deleteEvent(id: String!): Event
    }
`;
