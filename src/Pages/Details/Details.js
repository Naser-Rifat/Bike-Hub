import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Card, CardActions, CardContent, CardMedia, Typography, Button, Grid, Container } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { Box } from '@mui/system';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';


const Details = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    const { user } = useAuth()
    const { register, handleSubmit } = useForm();


    useEffect(() => {
        fetch(`http://localhost:5000/cycles/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



    const onSubmit = data => {

        const orderdata = {

            ...data,
            price: product.price,
            model: product.model,
            status: "pending",
            img: product.img
        }
        console.log(orderdata);

        axios.post('http://localhost:5000/orders', orderdata)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert("Place ordered")
                }


            })
    }

    return (
        <div>
            <Navigation></Navigation>
            <Grid className="my-5" container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>

                    <Card className="my-2 w-75 mx-5 mx-auto container" >
                        <CardMedia
                            component="img"
                            height="300"
                            image={product.img}
                            alt="image"
                        />
                        <CardContent className="text-start">
                            <Typography gutterBottom variant="h5" component="div">
                                {product.model}
                            </Typography>
                            <Typography variant="h4" className="text-danger mb-5">
                                {product.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span style={{ fontWeight: "600", fontSize: "14px" }}>Description:</span> {product.description}
                            </Typography>

                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>





                </Grid>
                <Grid item xs={12} md={6}>

                    <Box className="my-2 w-75 mx-5 mx-auto container">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control" placeholder="Username" type="text" style={{ width: "80%", margin: "10px" }} defaultValue={user?.displayName} {...register("username")} />
                            <input className="form-control" placeholder="Email" type="email" variant="standard" style={{ width: "80%", margin: "10px" }} defaultValue={user?.email} {...register("email")} />

                            <input className="form-control" placeholder="Phone Number" type="number" style={{ width: "80%", margin: "10px" }}  {...register("phone", { required: true })} />
                            <textarea className="form-control" placeholder="Address" type="text" style={{ width: "80%", margin: "10px" }}  {...register("address", { required: true })} />

                            <Button variant="contained" type="submit" style={{ width: "80%", background: "#7362F9", marginRight: "70px" }}>Place Order</Button>
                        </form>
                    </Box>
                </Grid>

            </Grid>
            <Footer></Footer>

        </div>
    );
};

export default Details;