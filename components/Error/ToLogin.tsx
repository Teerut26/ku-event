import { useRouter } from "next/router";
import React from "react";

interface Props {}

const ToLogin: React.FC<Props> = () => {
    const router = useRouter();
    return (
        <div onClick={()=>router.push("/sign-in")} className="flex gap-2 cursor-pointer max-w-[19rem] mx-auto select-none justify-center items-center w-full rounded-[1rem] drop-shadow-md py-3 bg-white">
           Back to sign in
        </div>
    );
};

export default ToLogin;