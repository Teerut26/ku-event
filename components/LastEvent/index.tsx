import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";
import EventList from "./EventList";

interface Props {}

const Container = styled.div`
    ${tw`flex flex-col gap-3`}
`;

const EventLast: React.FC<Props> = () => {
    return (
        <>
            <Container tw="px-5" className="justify-start">
                <div className="flex gap-5 text-2xl text-primary-content">
                    <div className="font-bold">Last Events</div>
                </div>
                <EventList />
            </Container>
        </>
    );
};

export default EventLast;
