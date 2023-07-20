import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Appbar from '../MUI Component/Appbar';
import Drawerr from '../MUI Component/drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const drawerWidth = 240;
const Root = () => {
    const [myMode, getMyMode] = useState(
        localStorage.getItem("currentTheme") === null
            ? "light"
            : localStorage.getItem("currentTheme") === "light"
                ? "light" : "dark"
    );
    const darkTheme = createTheme({
        palette: {
            mode: myMode,
        },
    });
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Appbar drawerWidth={drawerWidth} />
                    <Drawerr drawerWidth={drawerWidth} getMyMode={getMyMode} />
                </Box>
                <Box sx={{ ml: `${drawerWidth}px`, display: "flex", justifyContent: "center" }} >
                    <Outlet />
                </Box>
            </div>
        </ThemeProvider>


    );
}

export default Root;