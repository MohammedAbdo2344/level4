import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AvatarGroup, Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const Root = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Typography : Da el default bta3o beb2a <p> laken ana mmkn a3dl bra7ty [Component]--> bktb ele ana 3ayzo (h1-div-p) [Variant]--> 3shan a4er el Style */}
                        {/* <Typography variant="h4" component="div" sx={{ flexGrow: 1, }}>
                            News
                        </Typography> */}
                        <Link href='/' sx={{
                            color: "white",
                            flexGrow: 1,
                            textDecoration: "none",
                            "&:hover": { fontSize: "22px" }
                        }}>
                            My expenses
                        </Link>
                        <Stack direction="row" spacing={2}>
                            <Typography sx={{
                                display: "flex",
                                alignItems: "center"
                            }} >
                                Mohammed Hassan
                            </Typography>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                variant="rounded"
                                sx={
                                    {
                                        // CSS Code
                                    }
                                } />
                        <AvatarGroup max={1}>
                            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                        </AvatarGroup>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet />
        </div>

    );
}

export default Root;
