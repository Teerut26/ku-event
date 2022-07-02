import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";
import EventList from "./EventList";

interface Props {}

const Container = styled.div`
    ${tw`flex flex-col gap-3`}
`;

const CurrentEvent: React.FC<Props> = () => {
    return (
        <Container tw="px-5" className="justify-start">
            <div className="flex gap-5 justify-between text-primary-content">
                <div className="font-bold text-lg">Current</div>
                <div className="font-normal">See all</div>
            </div>
            <EventList />
        </Container>
    );
};

export default CurrentEvent;
