import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";

interface Props {}

const Container = styled.div(tw`absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center gap-2 justify-center`)
const Title = styled.div(tw`font-bold text-xl text-white`)

const Error: React.FC<Props> = () => {
    const rounter = useRouter();
    return (
        <Container>
            <Title>{rounter.query.error || "Error"}</Title>
            <div onClick={()=>rounter.push("/sign-in")} className="bg-white px-4 font-bold cursor-pointer py-2 rounded-xl">Back To Home</div>
        </Container>
    );
};

export default Error;
