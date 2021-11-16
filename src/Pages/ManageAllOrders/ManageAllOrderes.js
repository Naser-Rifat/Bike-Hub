import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import { Button, Typography } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageAllOrderes = () => {
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        const uri = `https://peaceful-ravine-05762.herokuapp.com/orders/all`
        fetch(uri)
            .then(res => res.json())
            .then(data => setOrderData(data))


    }, [])

    const handleDelete = (id) => {
        const procced = window.confirm("You would like to delete?")
        if (procced) {
            fetch(`https://peaceful-ravine-05762.herokuapp.com/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = orderData.filter(order => order._id !== id)
                        setOrderData(remaining)
                    }
                })
        }
    }
    const handleConfirm = (id) => {


        fetch(`https://peaceful-ravine-05762.herokuapp.com/orders/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'appoinment/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    fetch(`https://peaceful-ravine-05762.herokuapp.com/orders`)
                        .then(res => res.json())
                        .then(data => setOrderData(data))
                }

            })

    }

    return (





        <TableContainer component={Paper}>
            <Typography className="my-3" variant="h4">Manage orders</Typography>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell align="left">Model</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="center"> Order Status</TableCell>
                        <TableCell align="left">Cancellation</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderData.map((row) => (
                        <TableRow key={row._id}>

                            <TableCell sx={{ width: 50 }} component="th" scope="row">
                                {row._id}
                            </TableCell>
                            <TableCell sx={{ width: 150 }} align="left">{row.model}</TableCell>
                            <TableCell sx={{ width: 150 }} align="left">{row.price}</TableCell>
                            <TableCell sx={{ width: 200 }} align="left">{row.email}</TableCell>
                            <TableCell sx={{ width: 200 }} align="left">{row.address}</TableCell>
                            <TableCell sx={{ width: 50 }} align="center">

                                {
                                    row?.status === 200 ? <Button sx={{ mx: 2, color: "green" }}>Confirmed</Button> : <Button onClick={() => handleConfirm(row._id)} variant="contained" sx={{ mx: 2, background: "" }}>Confirm</Button>
                                }

                            </TableCell>
                            <TableCell align="left">


                                {
                                    <Button onClick={() => handleDelete(row._id)} sx={{ background: "#B21807" }} variant="contained">{row?.status === 200 ? "Cancel" : "Delete"}</Button>
                                }


                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

};

export default ManageAllOrderes;
