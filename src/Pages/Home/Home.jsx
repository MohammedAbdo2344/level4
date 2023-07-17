import { Box, Typography, IconButton } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import { Close } from '@mui/icons-material';
const Home = () => {
    return (
        <Box>
            <Paper sx={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                width: "366px",
                mt: "55px",
                pt: "27px",
                pb: "8px"
            }}>
                <Typography sx={{
                    ml: "16px",
                    fontSize: "1.3em"
                }} variant="h6">GYM</Typography>
                <Typography sx={{
                    mr: "33px",
                    fontSize: "1.4em",
                    opacity: "0.8"
                }} variant="h6">$100</Typography>
                <IconButton sx={{
                    position: "absolute",
                    top: "0",
                    right: "0"
                }} aria-label="Close Icon">
                    <Close sx={{
                        fontSize: "20px",
                    }} />
                </IconButton>
            </Paper>
        </Box>
    );
}

export default Home;
