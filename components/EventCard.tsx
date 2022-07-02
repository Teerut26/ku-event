import styled from "@emotion/styled";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import "twin.macro";
import tw from "twin.macro";

interface Props {}

const Word = styled.div`
    ${tw`whitespace-nowrap `}
`;

const SubWord = styled.div`
    ${tw`truncate max-w-[6rem]`}
`;

const EventCard: React.FC<Props> = () => {
    return (
        <Link href="/event/857451">
            <a href="/event/857451" className="flex-none">
                <div className="flex flex-col items-center justify-between gap-3 bg-white p-2 w-[21rem] rounded-[1.3rem]">
                    <div className="h-[10rem] w-full relative">
                        <div className="absolute left-4 bottom-4 bg-white py-1 px-2 rounded-lg font-bold text-secondary-content">
                            23.06 - 27.06
                        </div>
                        <img
                            src="https://placeimg.com/192/192/people"
                            className="object-cover w-full h-[10rem] rounded-[1.3rem]"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="text-center text-lg font-bold text-secondary-content">
                            ไปฟังเพลง
                        </div>
                        <div className="flex gap-3  text-[#989CB3]">
                            <Word className="flex gap-3 items-center">
                                <div className="avatar">
                                    <div className="w-5 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <SubWord>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolores eaque neque
                                    explicabo atque qui quae animi maxime ut
                                    voluptates ipsa blanditiis quos optio,
                                    soluta perspiciatis excepturi libero id sunt
                                    mollitia?
                                </SubWord>
                            </Word>
                            <Word className="flex gap-3 items-center">
                                <FontAwesomeIcon
                                    className="w-3 text-primary"
                                    icon={faMapPin}
                                />
                                <SubWord>SC 45</SubWord>
                            </Word>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default EventCard;
