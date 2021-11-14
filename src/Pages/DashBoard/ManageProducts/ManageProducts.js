import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageProducts = () => {
    const { user } = useAuth();
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cycles`)
            .then(res => res.json())
            .then(data => setProductsData(data))
    }, [])

    const handleDelete = (id) => {
        const procced = window.confirm("You would like to delete?")
        if (procced) {
            fetch(`http://localhost:5000/cycles/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        fetch(`http://localhost:5000/cycles`)
                            .then(res => res.json())
                            .then(data => setProductsData(data))
                    }
                })
        }
    }
    // const handleConfirm = (id) => {


    //     fetch(`http://localhost:5000/cycles/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             'content-type': 'appoinment/json'
    //         },
    //         body: JSON.stringify()
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 fetch(`http://localhost:5000/cycles`)
    //                     .then(res => res.json())
    //                     .then(data => setOrderData(data))
    //             }

    //         })

    // }


    return (
        <div>

            <Typography className="my-3" variant="h4">Manage Products</Typography>

            {
                productsData?.map(product =>
                    <div key={product._id} className="card mb-3" style={{ maxWidth: "90%" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={product.img} className="w-50 rounded-start" alt="..." />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body text-start">
                                    <h6 className="card-text my-2">Model: <span>{product.model}</span> </h6>
                                    <h6 className="card-text me-2">Price: <span className="text-danger">{product.price}</span></h6>


                                    <Button onClick={() => handleDelete(product._id)} sx={{ background: "#B21807" }} variant="contained">Delete</Button>

                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>

                    </div>)
            }

        </div >
    );
};

export default ManageProducts;