import { gql } from "@apollo/client";

const CREATE_EVENT = gql`
    mutation ($input: EventInput) {
        createEvent(input: $input) {
            id
        }
    }
`;
export default CREATE_EVENT;
