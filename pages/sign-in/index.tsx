import WithNavigationBar from "layouts/WithNavigationBar";
import { createTheme, TextField, ThemeProvider } from "@mui/material";
import React, { useMemo } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface Props {}

const textField = createTheme({
    palette: {
        primary: {
            main: "#FFFFF",
        },
    },
    shape: {
        borderRadius: "1rem",
    },
    typography: {
        fontFamily: "Prompt",
    },
});

const SignIn: React.FC<Props> = () => {
    const { status } = useSession();
    const rounter = useRouter();

    useMemo(() => {
        if (status === "authenticated") {
            rounter.push("/")
        }
    }, [status]);

    return (
        <WithNavigationBar>
            <ThemeProvider theme={textField}>
                <div className="absolute top-0 bottom-0 right-0 left-0">
                    <div className="max-w-2xl bg-base-100 mx-auto flex flex-col h-full gap-2 px-3 items-center justify-center pb-[5.25rem] pt-5">
                        <div className="text-white font-bold text-xl">
                            Sign In
                        </div>
                        <div className="text-white font-semibold">
                            Welcome To KU Event
                        </div>
                        <button
                            onClick={() => signIn("google")}
                            className="flex gap-2 cursor-pointer max-w-[19rem] mx-auto select-none justify-center items-center w-full rounded-[1rem] drop-shadow-md py-3 bg-white"
                        >
                            <div>
                                <img src="/google.svg" alt="google logo" />
                            </div>
                            <div>Sign in with Google (@ku.th)</div>
                        </button>
                    </div>
                </div>
            </ThemeProvider>
        </WithNavigationBar>
    );
};

export default SignIn;
