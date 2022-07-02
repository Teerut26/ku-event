import styled from "@emotion/styled";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SeachBar = styled.input``;

interface Props {}

const Search: React.FC<Props> = () => {
    return (
        <>
            <SeachBar
                placeholder="Search"
                className="input shadow-md input-lg w-full bg-base-300 font-bold text-2xl rounded-[1.3rem] placeholder:text-primary-content/80 text-primary-content"
            />
        </>
    );
};

export default Search;
