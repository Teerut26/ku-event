import styled from "@emotion/styled";
import WithNavigationBar from "layouts/WithNavigationBar";
import React from "react";
import tw from "twin.macro";

interface Props {}

const Stat = styled.div`
    ${tw`flex flex-col items-center`}
`;

const Me: React.FC<Props> = () => {
    return (
        <WithNavigationBar>
            <div className="absolute top-0 bottom-0 right-0 left-0">
                <div className="max-w-2xl bg-base-100 mx-auto flex flex-col items-start justify-center pb-[5.25rem] relative">
                    <div className="flex gap-5 p-5">
                        <div className="avatar">
                            <div className="w-20 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="text-3xl font-bold text-white">
                                Teerut
                            </div>
                            <div className="font-bold text-white">Teerut</div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-10 w-full p-5 bg-white max-w-2xl mx-auto fixed bottom-0 top-[7.5rem]  z-10 rounded-t-3xl">
                        <Stat>
                            <div className="font-bold text-xl">10.2K</div>
                            <div>Like</div>
                        </Stat>
                        <Stat>
                            <div className="font-bold text-xl">10.2K</div>
                            <div>Like</div>
                        </Stat>
                        <Stat>
                            <div className="font-bold text-xl">10.2K</div>
                            <div>Like</div>
                        </Stat>
                    </div>
                </div>
            </div>
        </WithNavigationBar>
    );
};

export default Me;
