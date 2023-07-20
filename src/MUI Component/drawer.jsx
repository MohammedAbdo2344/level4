import React from 'react';
import { Drawer,  Divider, useTheme, IconButton, List, ListItem } from '@mui/material';
import Listt from './Listt';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Drawerr = ({ drawerWidth, getMyMode }) => {
    const theme = useTheme();
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
            <List>
                <ListItem sx={{
                    display: "flex",
                    justifyContent: 'center',
                    mb: "14px", 
                    mt: "14px"
                }}
                    disablePadding
                >
                    <IconButton onClick={() => {
                        localStorage.setItem("currentTheme",theme.palette.mode === "dark" ? "light" : "dark")
                        getMyMode(theme.palette.mode === "dark" ? "light" : "dark");
                    }} sx={{ color: "red" }} >{theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                </ListItem>
            </List>
            <Divider />
            <Listt />
        </Drawer>
    );
}

export default Drawerr;