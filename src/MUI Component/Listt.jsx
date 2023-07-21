import React from 'react';
import { List, ListItemText, ListItem, ListItemButton, ListItemIcon, useTheme, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Listt = () => {
    const currentLocation = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const lists = [
        { text: "Home", icon: <HomeIcon />, path: "/" },
        { text: "Create", icon: <CreateIcon />, path: "/create" },
        { text: "Profile", icon: <PersonIcon />, path: "/profile" },
        { text: "Setting", icon: <SettingsIcon />, path: "/setting" },
        { text: "Logout", icon: <LogoutIcon />, path: "/logout" },
    ];
    return (
        <List>
            {
                lists.map((index) => (
                    <ListItem sx={{
                        bgcolor: currentLocation.pathname === index.path
                            ? theme.palette.backgroundButtons.main
                            : null
                    }} disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(index.path);
                        }} >
                            <ListItemIcon>
                                {index.icon}
                            </ListItemIcon>
                            <ListItemText primary={index.text} />
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
    );
}

export default Listt;