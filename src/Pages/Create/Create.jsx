import React from 'react';
import './Create.css'
import { Box, Button, InputAdornment, TextField, styled } from '@mui/material';
import { purple } from '@mui/material/colors';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));
const Create = () => {
    return (
        <Box sx={{ width: "366px" }}>
            <TextField
                fullWidth
                label="Transactions"
                id="outlined-start-adornment"
                sx={{ mt: 22, display: "block" }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">👉</InputAdornment>,
                }}
            />
            <TextField
                fullWidth
                label="Amount"
                id="outlined-start-adornment"
                sx={{ mt: 1, display: "block" }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
            />
            <ColorButton sx={{
                mt: "5px",
            }} variant="contained"> Create <NavigateNextIcon /> </ColorButton>
        </Box>
    );
}

export default Create;