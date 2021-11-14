import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {

    const { user } = useAuth();
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, [])

    const handleDelete = (id) => {
        const procced = window.confirm("You would like to delete?")
        if (procced) {
            fetch(`http://localhost:5000/orders/${id}`, {
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
            <Typography className="my-3" variant="h4">My Orders</Typography>

            {
                orderData.map(order =>
                    <div key={order._id} className="card mb-3" style={{ maxWidth: "90%" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={order.img} className="w-50 rounded-start" alt="..." />
                            </div>
                            <div className="col-md-6   ">
                                <div className="card-body text-start">
                                    <h6 className="card-text my-2">Model: <span>{order.model}</span> </h6>
                                    <h6 className="card-text me-2">Price: <span>{order.price}</span></h6>
                                    <Button onClick={() => handleDelete(order._id)} sx={{ background: "#B21807" }} variant="contained">Delete</Button>
                                    {
                                        order.status === 200 ? <Button className="" sx={{ mx: 2, color: "green" }}>Confirmed</Button>
                                            : <Button sx={{ mx: 2, color: "#FF8C00" }}> Pending</Button>
                                    }

                                </div>
                            </div>
                        </div>

                    </div>)
            }

        </div >
    );
};

export default MyOrders;