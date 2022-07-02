import { css } from "@emotion/css";
import NavigationBar from "components/NavigationBar";
import React from "react";
import tw from "twin.macro";

interface Props {}

const WithNavigationBar: React.FC<Props> = ({children}) => {
    return (
        <div className={css(tw`sm:pb-[10rem]`)}>
           {children}
           <NavigationBar />
        </div>
    );
};

export default WithNavigationBar;