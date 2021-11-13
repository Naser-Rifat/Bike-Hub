import { Card, CardActions, CardContent, CardMedia, Typography, Button, Grid, Link } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
const Product = ({ product }) => {
    const { img, model, description, price, _id } = product;


    return (
        <>
            <Grid item xs={12} sm={6} md={4}>

                <Card >
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="image"
                    />
                    <CardContent className="text-start">
                        <Typography gutterBottom variant="h5" component="div">
                            {model}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <NavLink to={`/details/${_id}`} style={{ textDecoration: "none" }}> <Button className="h" style={{ color: "black", hover: "red" }}>Order Now</Button></NavLink>


                    </CardActions>
                </Card>

            </Grid>

        </>
    );
};

export default Product;