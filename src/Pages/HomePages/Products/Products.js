import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../../Product/Product';
import { Divider, Typography } from '@mui/material';


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://peaceful-ravine-05762.herokuapp.com/cycles")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }} style={{ margin: "150px 0" }}>
            <Typography variant="h4"> Cycles</Typography>
            <Divider style={{ color: "#7362F9", fontWeight: 700, width: "100px", margin: "0 auto" }} />
            <Grid container spacing={3} sx={{ m: 8, width: "90%", mx: "auto" }}>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}

                        product={product}
                    ></Product>)
                }
            </Grid>
        </Box>
    );
};

export default Products;