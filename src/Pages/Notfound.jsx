import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

const Notfound = () => {
    const theme =useTheme();
    return (
        <Box>
            <Typography variant="h1" color={theme.palette.error}>Page Not Found</Typography>
        </Box>
    );
}

export default Notfound;
