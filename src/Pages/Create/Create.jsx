import React from 'react';
import './Create.css'
import { Box, Button, InputAdornment, TextField, styled } from '@mui/material';
import { purple } from '@mui/material/colors';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

const Create = () => {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = ({ amount, transactions }) => {
        amount=Number(amount)
        fetch("http://localhost:3100/MyData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ amount, transactions })
        })
            .then(() => { navigate("/") })
    }
    return (
        <Box sx={{ width: "366px" }} component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
                fullWidth
                label="Transactions"
                id="outlined-start-adornment"
                sx={{ mt: 22, display: "block" }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">👉</InputAdornment>,
                }}

                {...register("transactions", {
                    required: { value: true, message: "Required field" },
                    minLength: { value: 5, message: "minumn length is 5" }
                })}
                error={Boolean(errors.transactions)}
                helperText={Boolean(errors.transactions) ? errors.transactions.message : null}
            />
            <TextField
                fullWidth
                label="Amount"
                id="outlined-start-adornment"
                sx={{ mt: 1, display: "block" }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                type='number'
                {...register("amount", {
                    required: { value: true, message: "Required field" }
                })}
                error={Boolean(errors.amount)}
                helperText={Boolean(errors.amount) ? errors.amount.message : null}
            />
            <ColorButton
                type='submit'
                sx={{
                    mt: "5px",
                }} variant="contained"> Create <NavigateNextIcon /> </ColorButton>
        </Box>
    );
}

export default Create;