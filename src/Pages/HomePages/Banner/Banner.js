import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../../Images/bicycle-banner.jpg'
import { Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';


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

                </Grid>
                <Grid item xs={12} md={6} >
                    <div style={{ height: "600px" }} className="d-flex justify-content-start align-items-center ">
                        <div>
                            <NavLink to="/explore" style={{ textDecoration: "none" }}>
                                <Button className="p-2 px-5" style={{ color: "black", fontSize: "18px", background: "#E74C3C" }} variant="contained"> Explore</Button>
                            </NavLink>

                        </div>

                    </div>
                </Grid>

            </Grid>
        </div>
    );
};

export default Banner;