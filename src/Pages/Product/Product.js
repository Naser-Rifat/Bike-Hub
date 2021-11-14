import { Card, CardActions, CardContent, CardMedia, Typography, Button, Grid, Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
const Product = ({ product }) => {
    const { img, model, description, price, _id } = product;


    return (
        <>
            <Grid item xs={12} sm={6} md={4}>

                <Card style={{ padding: "20px", height: "550px" }}>
                    <Box style={{ height: "90%" }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={img}
                            alt="image"
                        />
                        <CardContent className="text-start">
                            <Typography gutterBottom variant="h5" component="div">
                                {model}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description.split("", 100)}
                            </Typography>
                            <Typography variant="h5" className="text-danger">
                                {price}
                            </Typography>
                        </CardContent>

                    </Box>
                    <CardActions>
                        <NavLink to={`/details/${_id}`} style={{ textDecoration: "none" }}> <Button className="text-primary" style={{ hover: "red" }}>Order Now</Button></NavLink>


                    </CardActions>
                </Card>

            </Grid>

        </>
    );
};

export default Product;