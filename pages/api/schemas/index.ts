import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type User {
        id: ID
        login: String
        avatar_url: String
    }

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
        image: [String]
    }

    type Query {
        getEvents: [Event]
        getEvent(id: String!, limit: String, after: String): Event
    }

    type Mutation {
        createEvent(input: EventInput): Event
        updateEvent(id: String!, input: EventInput): Event
        deleteEvent(id: String!): Event
    }
`;
