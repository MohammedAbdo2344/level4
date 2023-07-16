import React from 'react';
import { Link, Avatar, Stack, IconButton, Typography, Toolbar, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Appbar = ({ drawerWidth }) => {
    return (
        <AppBar sx={
            {
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`
            }
        } position="static">
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
                        src="https://mui.com/static/images/avatar/1.jpg"
                        variant="circular"
                        sx={
                            {
                                // CSS Code
                            }
                        }
                    />
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Appbar;
