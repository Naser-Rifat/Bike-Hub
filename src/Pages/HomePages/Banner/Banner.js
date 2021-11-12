import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../../Images/bicycle-banner.jpg'
import { Typography, Button, Link } from '@mui/material';


const Banner = () => {
    const cycleBg = {
        background: `url(${bg})`,
        backgroundColor: 'rgba(0, 53, 47, .5)',
        height: "100vh",
        width: "100%",
        backgroundBlendMode: 'overlay',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    return (
        <div style={cycleBg}>
            <Grid container spacing={2}   >
                <Grid item xs={12} md={6} >
                    <Typography variant="h3">
                        Hello
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} >
                    <div style={{ height: "600px" }} className="d-flex justify-content-start align-items-center ">
                        <div>
                            <Link to="/products"><Button className="px-5" style={{ background: "#7362F9" }} variant="contained"> Explore</Button></Link>
                        </div>

                    </div>
                </Grid>

            </Grid>
        </div>
    );
};

export default Banner;