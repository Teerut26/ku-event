import styled from "@emotion/styled";
import WithNavigationBar from "layouts/WithNavigationBar";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDay,
    faCalendarDays,
    faGear,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import ToLogin from "components/Error/ToLogin";

interface Props {}

const Stat = styled.div`
    ${tw`flex flex-col items-center`}
`;

const ListMenu = styled.div(
    tw`w-full p-3 bg-gray-200 rounded-lg flex gap-3 items-center cursor-pointer select-none duration-200 hover:bg-gray-300 hover:drop-shadow`
);

const List = styled.div(tw`flex flex-col`);

const Me: React.FC<Props> = () => {
    const { data: session, status } = useSession();

    if (status === "unauthenticated") {
        return <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col gap-3 justify-center items-center">
            <div className="font-bold text-xl text-white">Not authenticated</div>
            <ToLogin />
        </div>;
    }

    return (
        <WithNavigationBar>
            <div className="absolute top-0 bottom-0 right-0 left-0">
                <div className="max-w-2xl bg-base-100 mx-auto flex flex-col items-start justify-center pb-[5.25rem] relative">
                    <div className="flex flex-col md:flex-row justify-between items-center w-full">
                        <div className="flex gap-5 p-5">
                            <div className="avatar">
                                <div className="w-20 h-20 rounded-full">
                                    <img src={session?.user?.image!} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-3xl font-bold text-white">
                                    {session?.user?.name}
                                </div>
                                <div className="font-bold text-white">
                                    {session?.user?.email}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 w-full p-5 bg-white max-w-2xl mx-auto fixed bottom-0 top-[7.5rem]  z-10 rounded-t-3xl">
                        <div className="flex justify-between">
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
                        <div className="flex gap-5 flex-col overflow-y-auto pb-[3.25rem]">
                            <List className="gap-2">
                                <ListMenu>
                                    <FontAwesomeIcon className="w-5" icon={faCalendarDays} />
                                    <div>My Event</div>
                                </ListMenu>
                            </List>
                            <List className="gap-2">
                                <ListMenu>
                                    <FontAwesomeIcon className="w-5" icon={faUser} />
                                    <div>My Profile</div>
                                </ListMenu>
                                <ListMenu>
                                    <FontAwesomeIcon className="w-5" icon={faGear} />
                                    <div>Setting</div>
                                </ListMenu>
                                <ListMenu onClick={()=>signOut()}>
                                    <FontAwesomeIcon className="w-5" icon={faSignOut} />
                                    <div>Sign Out</div>
                                </ListMenu>
                            </List>
                        </div>
                    </div>
                </div>
            </div>
        </WithNavigationBar>
    );
};

export default Me;
