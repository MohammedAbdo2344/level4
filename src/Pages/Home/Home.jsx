import { Box, Typography, IconButton } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import { Close } from '@mui/icons-material';
const Home = () => {
    return (
        <Box>
            <Paper>
                <Typography variant="h6">GYM</Typography>
                <Typography variant="h6">$100</Typography>
                <IconButton aria-label="Close Icon">
                <Close/>
                </IconButton>

            </Paper>
        </Box>
    );
}

export default Home;
