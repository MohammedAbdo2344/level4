import React, { useState } from 'react';
import './Create.css'
import { Box, Button, InputAdornment, TextField, styled } from '@mui/material';
import { purple } from '@mui/material/colors';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));
const Create = () => {
    const [transactions, setTransactions] = useState("");
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();
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
                onChange={(eo) => {
                    setTransactions(eo.target.value);
                    // console.log(transactions);
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
                onChange={(eo) => {
                    setAmount(Number(eo.target.value));
                    // console.log(amount);
                }}
            />
            <ColorButton onClick={() => {
                fetch("http://localhost:3100/MyData", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ amount, transactions })
                })
                    .then(() => { navigate("/") })
            }} sx={{
                mt: "5px",
            }} variant="contained"> Create <NavigateNextIcon /> </ColorButton>
        </Box>
    );
}

export default Create;