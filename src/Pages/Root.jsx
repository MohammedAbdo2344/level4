import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Appbar from '../MUI Component/Appbar';
import Drawerr from '../MUI Component/drawer';
const drawerWidth = 240;
const Root = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Appbar drawerWidth={drawerWidth} />
                <Drawerr drawerWidth={drawerWidth} />
            </Box>
            <Box sx={{ml:`${drawerWidth}px`,display:"flex",justifyContent:"center"}} >
                <Outlet />
            </Box>
        </div>

    );
}

export default Root;
