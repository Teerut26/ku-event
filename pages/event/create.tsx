import { Box, TextField } from "@mui/material";
import WithNavigationBar from "layouts/WithNavigationBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
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
    const [value, setValue] = React.useState<Date | null>(
        new Date("2014-08-18T21:11:54")
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    return (
        <WithNavigationBar>
            <ThemeProvider theme={textField}>
                <div className="absolute top-0 bottom-0 right-0 left-0">
                    <div className="max-w-2xl h-full mx-auto flex flex-col gap-5 bg-white text-black p-5 overflow-y-auto pb-[5.25rem]">
                        <div className="text-xl font-bold">Event Create</div>
                        <GroupForm className="flex-col gap-2">
                            <Title>Event Details</Title>

                            <Box sx={boxConfig}>
                                <TitleIcon sx={iconConfig} />
                                <TextField
                                    sx={{
                                        width: "100%",
                                    }}
                                    label="Event Title"
                                    variant="standard"
                                />
                            </Box>
                            <Box sx={boxConfig}>
                                <FormatAlignLeft sx={iconConfig} />
                                <TextField
                                    label="Event Detail"
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
                                            value={value}
                                            onChange={handleChange}
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
                                            value={value}
                                            onChange={handleChange}
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
                                            value={value}
                                            onChange={handleChange}
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
                                            value={value}
                                            onChange={handleChange}
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
                    </div>
                </div>
            </ThemeProvider>
        </WithNavigationBar>
    );
};

export default EventCreate;
