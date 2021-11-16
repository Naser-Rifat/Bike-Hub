import { Button, TableCell, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrders = () => {

    const { user } = useAuth();
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        fetch(`https://peaceful-ravine-05762.herokuapp.com/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, [user?.email])

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



    return (
        <div>

            <TableContainer component={Paper}>
                <Typography className="my-3" variant="h4">My orders</Typography>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell align="left">Model</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Delete Order</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderData?.map((row) => (
                            <TableRow key={row._id}>

                                <TableCell style={{ width: "150px" }} component="th" scope="row">
                                    <img className="w-100" src={row.img} alt="" />
                                </TableCell>
                                <TableCell sx={{ width: 150 }} align="left">{row.model}</TableCell>
                                <TableCell sx={{ width: 150 }} align="left">{row.price}</TableCell>
                                <TableCell sx={{ width: 200 }} align="left">{row.email}</TableCell>
                                <TableCell sx={{ width: 50 }} align="center">
                                    {
                                        row.status === 200 ? <Button sx={{ color: "green" }}>Shipted</Button>
                                            : <Button sx={{ color: "#FF8C00" }}> Pending</Button>
                                    }



                                </TableCell>
                                <TableCell align="left">

                                    {
                                        row.status === 200 ? <Button disabled variant="contained">Delete</Button> : <Button onClick={() => handleDelete(row._id)} sx={{ background: "#B21807" }} variant="contained">Delete</Button>
                                    }


                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div >
    );
};

export default MyOrders;