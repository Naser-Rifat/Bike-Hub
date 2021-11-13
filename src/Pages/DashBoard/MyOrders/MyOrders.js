import { Button } from '@mui/material';
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


            {
                orderData.map(order =>
                    <div key={order._id} className="card mb-3" style={{ maxWidth: "90%" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{order.model}</h5>
                                    <p className="card-text">{order.price}</p>
                                    <Button onClick={() => handleDelete(order._id)} sx={{ mx: 2, background: "" }} variant="contained">Delete</Button>
                                    <Button sx={{ mx: 2, background: "" }}>{order.status === 200 ? "shifted" : "pending"}</Button>

                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>

                    </div>)
            }

        </div >
    );
};

export default MyOrders;