import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import { Button } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';

const Myorders2 = () => {
    const { user } = useAuth()
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        const uri = `https://peaceful-ravine-05762.herokuapp.com/orders`
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
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell align="left">Model</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="center">Confirm</TableCell>
                        <TableCell align="left">Delete</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderData.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell component="th" scope="row">
                                {row._id}
                            </TableCell>
                            <TableCell align="left">{row.model}</TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.address}</TableCell>
                            <TableCell align="center">

                                {
                                    row?.status === 200 ? <Button sx={{ mx: 2, color: "green" }}>Confirmed</Button> : <Button onClick={() => handleConfirm(row._id)} variant="contained" sx={{ mx: 2, background: "" }}>Confirm</Button>
                                }

                            </TableCell>
                            <TableCell align="left">


                                {
                                    <Button onClick={() => handleDelete(row._id)} sx={{ background: "#B21807" }} variant="contained">{row?.status === 200 ? "Cancle" : "Delete"}</Button>
                                }


                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

};

export default Myorders2;
