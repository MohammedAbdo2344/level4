import React from 'react';
import { Drawer, Divider, useTheme, IconButton, List, ListItem, Stack, Typography, Avatar } from '@mui/material';
import Listt from './Listt';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Drawerr = ({ drawerWidth, getMyMode, noneORBlock, hideDrawer, drawerVariant }) => {

    const theme = useTheme();
    return (
        <Drawer
            sx={{
                display: { xs: noneORBlock === "none" ? "none" : "block", sm: "block" },
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },

            }}
            variant={drawerVariant}
            anchor="left"
            open={true}
            onClose={() => {
                hideDrawer()
            }}
        >


            <List sx={{ display: { sm: "none" } }}>

                <Stack sx={{ ml: "15px", mb: "5px" }} direction="row" spacing={2}>
                    <Typography sx={{
                        display: "flex",
                        alignItems: "center"
                    }} >
                        Mohammed Hassan
                    </Typography>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://mui.com/static/images/avatar/1.jpg"
                        variant="circular"
                        sx={
                            {
                                // CSS Code
                            }
                        }
                    />
                </Stack>
                <Divider />
            </List>
            <Listt />
            <Divider />
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
                        localStorage.setItem("currentTheme", theme.palette.mode === "dark" ? "light" : "dark")
                        getMyMode(theme.palette.mode === "dark" ? "light" : "dark");
                    }} sx={{ color: "red" }} >{theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default Drawerr;