import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Search from "components/SearchBar";
import "twin.macro";
import EventLast from "components/LastEvent";
import CurrentEvent from "components/CurrentEvent";
import WithNavigationBar from "layouts/WithNavigationBar";

const Container = styled.div`
    ${tw`flex`}
`;

const Index: React.FC = () => {
    return (
        <WithNavigationBar>
            <div className="absolute top-0 bottom-0 right-0 left-0">
                <div className="max-w-2xl bg-base-100 mx-auto flex flex-col pb-[5.25rem]">
                    <Container tw="p-5 mt-5" className="justify-center pt-5">
                        <Search />
                    </Container>
                    <div className="mt-3">
                        <EventLast />
                    </div>
                    <div className="mt-5">
                        <CurrentEvent />
                    </div>
                </div>
            </div>
        </WithNavigationBar>
    );
};

export default Index;
