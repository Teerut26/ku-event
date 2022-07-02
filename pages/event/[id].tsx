import styled from "@emotion/styled";
import {
    faCalendar,
    faChevronLeft,
    faCircleCheck,
    faMapPin,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WithNavigationBar from "layouts/WithNavigationBar";
import Link from "next/link";
import React, { useState } from "react";
import tw from "twin.macro";
import { motion, AnimatePresence } from "framer-motion";
import { css } from "@emotion/css";

interface Props {}

const Button = styled(motion.button)`
    ${tw`w-full flex flex-col items-center gap-2 px-3 py-5 rounded-xl`}
`;

const ButtonStatus = css`
    ${tw`text-white absolute top-0 bottom-0 right-0 left-0`}
`;

const CardAuthor = styled(motion.div)`
    ${tw`p-5 flex items-center gap-3 bg-[#F4F5F7] rounded-xl`}
`;

const DetailEvent = styled(motion.div)`
    ${tw`flex flex-col gap-3`}
`;

const DetailChild = styled(motion.div)`
    ${tw`flex items-start gap-1 font-bold`}
`;

const Event: React.FC<Props> = () => {
    const [isJoin, setIsJoin] = useState<boolean>(false);
    return (
        <>
            <WithNavigationBar>
                <div className="absolute top-0 bottom-0 right-0 left-0">
                    <div className="max-w-2xl  mx-auto flex flex-col gap-3 bg-white text-black p-5 overflow-y-auto pb-[5.25rem]">
                        <Link href={"/"}>
                            <div className="flex mt-5">
                                <FontAwesomeIcon
                                    className="w-3"
                                    icon={faChevronLeft}
                                />
                            </div>
                        </Link>
                        <div className="w-full">
                            <img
                                className="w-full object-cover h-[12rem] rounded-xl"
                                src="https://placeimg.com/192/192/people"
                                alt=""
                            />
                        </div>
                        <div className="bg-[#E9EAEC] px-3 py-1 w-fit rounded-lg font-bold">
                            23.06 - 27.06
                        </div>
                        <div className="flex gap-3 items-center font-bold">
                            <div className="flex-none">
                                <FontAwesomeIcon
                                    className="w-3 text-primary"
                                    icon={faMapPin}
                                />
                            </div>
                            <div className="text-[#5B5B5B] flex-1 truncate">
                                SCL lore
                            </div>
                        </div>
                        <div className="font-bold text-2xl">
                            Lorem ipsum dolor sit amet.
                        </div>

                        <div className="text-[#5B5B5B]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laborum ipsam facilis iure, libero ratione
                            dolor repellat? Maiores sit minus excepturi error
                            corporis eveniet quibusdam vero voluptatibus libero
                            pariatur distinctio iure ipsa nam vel magni
                            veritatis deleniti fugit accusantium culpa .
                        </div>

                        <div className="p-5">
                            <div className="relative h-[7rem]">
                                <AnimatePresence>
                                    {isJoin ? (
                                        <Button
                                            key={isJoin ? 1 : 0}
                                            initial={{ x: 300, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -300, opacity: 0 }}
                                            onClick={() =>
                                                setIsJoin((pre) => !pre)
                                            }
                                            className={`bg-primary/50 ${css(ButtonStatus)} cursor-not-allowed `}
                                        >
                                            <div>
                                                <FontAwesomeIcon
                                                    className="w-10"
                                                    icon={faCircleCheck}
                                                />
                                            </div>
                                            <div>คุณได้เข้าร่วมแล้ว</div>
                                        </Button>
                                    ) : (
                                        <Button
                                            key={isJoin ? 1 : 0}
                                            initial={{ x: 300, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -300, opacity: 0 }}
                                            onClick={() =>
                                                setIsJoin((pre) => !pre)
                                            }
                                            className={`bg-primary ${css(ButtonStatus)}`}
                                        >
                                            <div>
                                                <FontAwesomeIcon
                                                    className="w-10"
                                                    icon={faCircleCheck}
                                                />
                                            </div>
                                            <div>ต้องการเข้าร่วม</div>
                                        </Button>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <CardAuthor>
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-[-5px] ">
                                <div className="font-bold text-xl">Teerut</div>
                                <div className="font-bold text-[#AEB2C2]">
                                    comsci
                                </div>
                            </div>
                        </CardAuthor>
                        <DetailEvent className="pt-3">
                            <div className="text-lg font-bold">Detail</div>
                            <div className="flex flex-col gap-[1rem]">
                                <DetailChild>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faCalendar}
                                            className="text-primary w-4"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-[#AEB2C2]">
                                            Date & Time
                                        </div>
                                        <div>23.08 18:00 - 27.06 19:00</div>
                                    </div>
                                </DetailChild>
                                <DetailChild>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            className="text-primary w-4"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-[#AEB2C2]">
                                            Team
                                        </div>
                                        <div>9/25</div>
                                    </div>
                                </DetailChild>
                            </div>
                        </DetailEvent>
                    </div>
                </div>
            </WithNavigationBar>
        </>
    );
};

export default Event;
