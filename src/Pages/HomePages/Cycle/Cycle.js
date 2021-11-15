import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';


const Cycle = () => {
    return (
        <Container style={{ margin: "50px auto" }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <img
                            style={{ width: "100%" }}
                            src="https://yokoo.themerex.net/wp-content/uploads/2019/09/image-copyright-3-1536x864.png"
                            alt="a_cycle_image"
                            onError={event => {
                                event.target.src = "http://acianimalhealth.com/wp-content/uploads/2017/03/No-image-found.jpg"
                                event.onerror = null
                            }} />

                    </Grid>
                    <Grid item xs={12} sm={12} md={5} style={{ textAlign: 'left', marginLeft: "50px" }}>
                        <Box style={{ height: '90%' }}>
                            <Typography style={{ fontWeight: 600, marginBottom: '20px' }} variant="h4">
                                The best Bicycling experience</Typography>
                            <Typography style={{ width: "70%" }}>Welcome to BikeHub! We are one of the biggest bicycle-families in the world. Our services include all types of repair, search of a perfect bike for every customer, sport events organization and much more. Join our community and become a part of the bike-family.</Typography>
                        </Box>
                        <Button style={{ color: "#7362F9" }} >Learn more</Button>
                    </Grid>

                </Grid>
            </Box>

        </Container>
    );
};

export default Cycle;