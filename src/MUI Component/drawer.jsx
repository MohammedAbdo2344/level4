import React from 'react';
import { Drawer, Toolbar, Divider } from '@mui/material';
import Listt from './Listt';

const Drawerr = ({ drawerWidth }) => {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <Listt/>
        </Drawer>
    );
}

export default Drawerr;
