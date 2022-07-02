import { css } from "@emotion/css";
import EventCardCurrent from "components/EventCardCurrent";
import React from "react";
import tw from "twin.macro";
import EventCard from "../EventCard";

interface Props {}

const EventList: React.FC<Props> = () => {
    return (
        <div className={css(tw`max-w-md min-w-full`)}>
            <div className={css(tw`overflow-x-auto flex gap-3`)}>
                {[...Array(10)].map(() => (
                    <EventCardCurrent />
                ))}
            </div>
        </div>
    );
};

export default EventList;
