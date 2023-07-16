import React from 'react';
import { List, ListItemText, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

const Listt = () => {
    const navigate = useNavigate();
    return (
        <List>
            <ListItem disablePadding> {/*Home Button*/}
                <ListItemButton onClick={() => {
                    navigate('/');
                }}>
                    <ListItemIcon>
                        <HomeIcon />   {/*Icon*/}
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
            </ListItem>
            {/* Create Button */}
            <ListItem disablePadding>
                <ListItemButton onClick={() => {
                    navigate('/create');
                }}>
                    <ListItemIcon>
                        <CreateIcon />   {/*Icon*/}
                    </ListItemIcon>
                    <ListItemText primary="Create" />
                </ListItemButton>
            </ListItem>
            {/* Profile Button */}
            <ListItem disablePadding>
                <ListItemButton onClick={() => {
                    navigate('/profile');
                }}>
                    <ListItemIcon>
                        <PersonIcon />   {/*Icon*/}
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
            </ListItem>
            {/* Setting Button */}
            <ListItem disablePadding>
                <ListItemButton onClick={() => {
                    navigate('/setting');
                }}>
                    <ListItemIcon>
                        <SettingsIcon />   {/*Icon*/}
                    </ListItemIcon>
                    <ListItemText primary="Setting" />
                </ListItemButton>
            </ListItem>
            {/* Logout Button */}
            <ListItem disablePadding>
                <ListItemButton onClick={() => {
                    navigate('/logout');
                }}>
                    <ListItemIcon>
                        <LogoutIcon />   {/*Icon*/}
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </ListItem>
            {/* Second method */}
            {/* <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List> */}
        </List>
    );
}

export default Listt;