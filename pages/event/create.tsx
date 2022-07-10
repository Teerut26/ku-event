import { Box, CircularProgress, TextField } from "@mui/material";
import WithNavigationBar from "layouts/WithNavigationBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
    DatePicker,
    LocalizationProvider,
    TimePicker,
} from "@mui/x-date-pickers";
import styled from "@emotion/styled";
import tw from "twin.macro";
import {
    AccessTime,
    PinDrop,
    CalendarMonth,
    FormatAlignLeft,
    Title as TitleIcon,
} from "@mui/icons-material";
import { useSession } from "next-auth/react";
import ToLogin from "components/Error/ToLogin";
import Upload from "components/Create/Upload";
import { Event } from "interface/database.interface";
import { useMutation } from "@apollo/client";
import CREATE_EVENT from "gql/event/create.event";

interface Props {}

const textField = createTheme({
    palette: {
        primary: {
            main: "#4ADE80",
        },
    },
    shape: {
        borderRadius: "1rem",
    },
    typography: {
        fontFamily: "Prompt",
    },
});

const circularProgressTheme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
    },
    shape: {
        borderRadius: "1rem",
    },
    typography: {
        fontFamily: "Prompt",
    },
});

const Title = styled.div`
    ${tw`text-[#9398B0] font-bold`}
`;

const GroupForm = styled.div`
    ${tw`flex`}
`;

const ShowOnSm = styled.div`
    ${tw`block md:hidden`}
`;

const iconConfig = {
    color: "action.active",
    mr: 1,
    my: 0.5,
};

const boxConfig = {
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
};

const EventCreate: React.FC<Props> = () => {
    const { status } = useSession();

    if (status === "unauthenticated") {
        return (
            <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col gap-3 justify-center items-center">
                <div className="font-bold text-xl text-white">
                    Not authenticated
                </div>
                <ToLogin />
            </div>
        );
    }

    const [FormCreateEvent, setFormCreateEvent] = useState<Event>({
        title: "",
        detail: "",
        startTime: new Date().toISOString(),
        endTime: new Date().toISOString(),
        place: "",
        image: [],
    });

    const handleChangeStartTime = (newValue: Date | null) => {
        if (!newValue) return;
        setFormCreateEvent((pre) => ({
            ...pre,
            startTime: newValue?.toISOString(),
        }));
    };

    const handleChangeEndTime = (newValue: Date | null) => {
        if (!newValue) return;
        setFormCreateEvent((pre) => ({
            ...pre,
            endTime: newValue?.toISOString(),
        }));
    };

    const [createEvent] = useMutation(CREATE_EVENT);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createEvent({
            variables: {
                input: FormCreateEvent,
            },
        });
    };

    return (
        <WithNavigationBar>
            <ThemeProvider theme={textField}>
                <div className="absolute top-0 bottom-0 right-0 left-0">
                    <form
                        onSubmit={onSubmit}
                        className="max-w-2xl h-full mx-auto flex flex-col gap-5 bg-white text-black p-5 overflow-y-auto pb-[5.25rem]"
                    >
                        <div className="text-xl font-bold">Event Create</div>
                        <GroupForm className="flex-col gap-2">
                            <Title>Event Details</Title>

                            <Box sx={boxConfig}>
                                <TitleIcon sx={iconConfig} />
                                <TextField
                                    sx={{
                                        width: "100%",
                                    }}
                                    onChange={(e) =>
                                        setFormCreateEvent((pre) => ({
                                            ...pre,
                                            title: e.target.value,
                                        }))
                                    }
                                    label="Event Title"
                                    variant="standard"
                                />
                            </Box>
                            <Box sx={boxConfig}>
                                <FormatAlignLeft sx={iconConfig} />
                                <TextField
                                    label="Event Detail"
                                    onChange={(e) =>
                                        setFormCreateEvent((pre) => ({
                                            ...pre,
                                            detail: e.target.value,
                                        }))
                                    }
                                    variant="standard"
                                    sx={{
                                        width: "100%",
                                    }}
                                />
                            </Box>
                            <Box sx={boxConfig}>
                                <PinDrop sx={iconConfig} />
                                <TextField
                                    label="Place"
                                    onChange={(e) =>
                                        setFormCreateEvent((pre) => ({
                                            ...pre,
                                            place: e.target.value,
                                        }))
                                    }
                                    variant="standard"
                                    sx={{
                                        width: "100%",
                                    }}
                                />
                            </Box>
                        </GroupForm>

                        <GroupForm className="flex-col gap-5">
                            <Title>Event Start</Title>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <div className="flex flex-col md:flex-row gap-5 w-full">
                                    <Box sx={boxConfig}>
                                        <ShowOnSm>
                                            <CalendarMonth sx={iconConfig} />
                                        </ShowOnSm>
                                        <DatePicker
                                            label="Date"
                                            inputFormat="MM/dd/yyyy"
                                            value={FormCreateEvent.startTime}
                                            onChange={handleChangeStartTime}
                                            renderInput={(params) => (
                                                <TextField
                                                    sx={{
                                                        width: "100%",
                                                    }}
                                                    variant="standard"
                                                    {...params}
                                                />
                                            )}
                                        />
                                    </Box>
                                    <Box sx={boxConfig}>
                                        <ShowOnSm>
                                            <AccessTime sx={iconConfig} />
                                        </ShowOnSm>
                                        <TimePicker
                                            label="Starts At "
                                            value={FormCreateEvent.startTime}
                                            onChange={handleChangeStartTime}
                                            renderInput={(params) => (
                                                <TextField
                                                    sx={{
                                                        width: "100%",
                                                    }}
                                                    variant="standard"
                                                    {...params}
                                                />
                                            )}
                                        />
                                    </Box>
                                </div>
                            </LocalizationProvider>
                        </GroupForm>
                        <GroupForm className="flex-col gap-5">
                            <Title>Event End</Title>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <div className="flex flex-col md:flex-row gap-5 justify-between w-full">
                                    <Box sx={boxConfig}>
                                        <ShowOnSm>
                                            <CalendarMonth sx={iconConfig} />
                                        </ShowOnSm>

                                        <DatePicker
                                            label="Date"
                                            inputFormat="MM/dd/yyyy"
                                            value={FormCreateEvent.endTime}
                                            onChange={handleChangeEndTime}
                                            renderInput={(params) => (
                                                <TextField
                                                    sx={{
                                                        width: "100%",
                                                    }}
                                                    variant="standard"
                                                    {...params}
                                                />
                                            )}
                                        />
                                    </Box>
                                    <Box sx={boxConfig}>
                                        <ShowOnSm>
                                            <AccessTime sx={iconConfig} />
                                        </ShowOnSm>
                                        <TimePicker
                                            label="Starts At "
                                            value={FormCreateEvent.endTime}
                                            onChange={handleChangeEndTime}
                                            renderInput={(params) => (
                                                <TextField
                                                    sx={{
                                                        width: "100%",
                                                    }}
                                                    variant="standard"
                                                    {...params}
                                                />
                                            )}
                                        />
                                    </Box>
                                </div>
                            </LocalizationProvider>
                        </GroupForm>
                        <GroupForm className="flex-col gap-2">
                            <Title>Image Upload</Title>
                            <Upload
                                onUpload={(image) =>
                                    setFormCreateEvent((pre) => ({
                                        ...pre,
                                        image: [
                                            ...image.map((i) => i.dataURL!),
                                        ],
                                    }))
                                }
                            />
                        </GroupForm>
                        <GroupForm className="flex-col gap-2">
                            {false ? (
                                <button disabled className="btn btn-primary">
                                    <ThemeProvider
                                        theme={circularProgressTheme}
                                    >
                                        <CircularProgress size={25} />
                                    </ThemeProvider>
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Create Event
                                </button>
                            )}
                        </GroupForm>
                    </form>
                </div>
            </ThemeProvider>
        </WithNavigationBar>
    );
};

export default EventCreate;
