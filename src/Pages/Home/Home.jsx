import { Box, Typography, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Close } from '@mui/icons-material';
const Home = () => {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3100/MyData")
            .then(response => response.json())
            .then((data) => setMyData(data));
    }, [])



    let totalPrice = 0;
    return (
        <Box>
            {
                myData.map((item) => {
                    totalPrice += item.amount
                    return (
                        <Paper
                            key={item.id}
                            sx={{
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
                            }} variant="h6">{item.transactions}</Typography>
                            <Typography sx={{
                                mr: "33px",
                                fontSize: "1.4em",
                                opacity: "0.8"
                            }} variant="h6">${item.amount}</Typography>

                            <IconButton
                                onClick={() => {
                                    fetch(`http://localhost:3100/MyData/${item.id}`, { method: "DELETE", })
                                    // window.location.reload();
                                    const newArr = myData.filter((itemm) => {
                                        return itemm.id !== item.id
                                    })
                                    setMyData(newArr)
                                }}
                                sx={{
                                    position: "absolute",
                                    top: "0",
                                    right: "0"
                                }} aria-label="Close Icon">
                                <Close sx={{
                                    fontSize: "20px",
                                }} />
                            </IconButton>
                        </Paper>
                    )
                })
            }
            <Typography sx={{
                textAlign: "center",
                mt: "9%",
                fontSize: "larger"
            }} variant="body1" >
                You spent ${totalPrice}
            </Typography>

        </Box>
    );
}

export default Home;
