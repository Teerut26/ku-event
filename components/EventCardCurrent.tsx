import styled from "@emotion/styled";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import "twin.macro";
import tw from "twin.macro";

interface Props {}

const Word = styled.div`
    ${tw`whitespace-nowrap`}
`;

const Avatar = styled.div`
    overflow: hidden;
    border-radius: 9999px;
    border-width: 2px;
    --tw-border-opacity: 1;
`;

const SubWord = styled.div`
    ${tw`truncate max-w-[6rem]`}
`;

const EventCardCurrent: React.FC<Props> = () => {
    return (
        <Link href="/event/857451" >
            <a href="/event/857451" className="flex-none">
                <div className="flex flex-col items-center justify-between bg-white w-[21rem] rounded-[1.3rem]">
                    <div className="h-[10rem] w-full relative">
                        <div className="absolute left-4 bottom-4 bg-white py-1 px-2 rounded-lg font-bold text-secondary-content">
                            23.06 - 27.06
                        </div>
                        <img
                            src="https://placeimg.com/192/192/people"
                            className="object-cover w-full h-[10rem] rounded-t-[1.3rem]"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full p-3">
                        <div className="flex justify-between">
                            <Word className="flex gap-3 items-center text-[#989CB3]">
                                <div className="avatar">
                                    <div className="w-5 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <SubWord>Teerut</SubWord>
                            </Word>
                            <div className="flex gap-2">
                                <div className="avatar-group space-x-[-10px]">
                                    {[...new Array(3)].map(() => (
                                        <Avatar className="bg-white">
                                            <div className="w-5">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </Avatar>
                                    ))}
                                </div>
                                5
                            </div>
                        </div>
                        <div className="text-left text-lg font-bold text-secondary-content truncate">
                            ไปฟังเพลง
                        </div>
                        <Word className="flex gap-3 items-center">
                            <FontAwesomeIcon
                                className="w-3 text-primary"
                                icon={faMapPin}
                            />
                            <SubWord className="text-[#989CB3]">SC 45</SubWord>
                        </Word>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default EventCardCurrent;
