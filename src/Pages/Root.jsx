import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Appbar from '../MUI Component/Appbar';
import Drawerr from '../MUI Component/drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Theme from '../Styles/Theme';

const drawerWidth = 240;
const Root = () => {
    // ---------------------------------------- Hooks ----------------------------------------
    const [mode, getMyMode] = useState(
        localStorage.getItem("currentTheme") === null
            ? "light"
            : localStorage.getItem("currentTheme") === "light"
                ? "light" : "dark"
    );
    const theme = React.useMemo(() => createTheme(Theme(mode)), [mode]);

    const [noneORBlock, setNoneORBlock] = useState("none");
    const [drawerVariant, setdrawerVariant] = useState("permanent");
    //---------------------------------------- Functions ----------------------------------------
    const showDrawer = () => {
        setdrawerVariant("temporary");
        setNoneORBlock("block");
    }
    const hideDrawer = () => {
        setdrawerVariant("permanent");
        setNoneORBlock("none");
    }
    // ---------------------------------------- website ----------------------------------------
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Appbar {...{drawerWidth,showDrawer}}/>
                    <Drawerr {...{drawerWidth,getMyMode,noneORBlock,drawerVariant,hideDrawer}}/>
                </Box>
                <Box sx={{ ml: { sm: `${drawerWidth}px` }, display: "flex", justifyContent: "center" }} >
                    <Outlet />
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default Root;