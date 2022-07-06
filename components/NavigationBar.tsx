import styled from "@emotion/styled";
import { faHomeAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import tw from "twin.macro";
import NavLink from "./lib/NavLink";

interface Props {}

const Menu = styled.div`
    ${tw`flex flex-col items-center p-2 `}
`;

const NavigationBar: React.FC<Props> = () => {
    return (
        <div className="fixed z-10 bottom-0 right-0 left-0">
            <div className="max-w-2xl mx-auto flex justify-center items-center bg-white h-[4rem] rounded-t-[1.3rem] shadow-2xl">
                <NavLink href={"/"}>
                    <Menu>
                        <FontAwesomeIcon className="w-6" icon={faHomeAlt} />
                        home
                    </Menu>
                </NavLink>
                <Menu className="text-[#9398B0]">
                    <FontAwesomeIcon className="w-5" icon={faPlus} />
                    Create
                </Menu>
                <NavLink href={"/me"}>
                    <Menu>
                        <div className="avatar">
                            <div className="w-6">
                                <img
                                    className="rounded-full"
                                    src="https://placeimg.com/192/192/people"
                                />
                            </div>
                        </div>
                        Profile
                    </Menu>
                </NavLink>
            </div>
        </div>
    );
};

export default NavigationBar;
