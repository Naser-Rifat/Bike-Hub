import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import Navigation from '../../Shared/Navigation/Navigation';

const Explore = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://peaceful-ravine-05762.herokuapp.com/cycles")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navigation></Navigation>
            <Grid container spacing={3} sx={{ m: 8, width: "90%", mx: "auto" }}>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </Grid>
        </Box>
    );
};

export default Explore;