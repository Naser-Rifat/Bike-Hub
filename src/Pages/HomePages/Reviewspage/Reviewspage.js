import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const Reviewspage = ({ review }) => {

    const { name, description, img, rating } = review;


    return (
        <>
            <Grid className="my-5" item xs={12} sm={6} md={4}>
                <Card style={{ height: "250px" }}>
                    <Box style={{ height: "80%" }}>
                        <Box className="w-50 mx-auto" style={{ display: "flex" }}>
                            <img className="rounded-circle w-25 mx-auto" src={img} alt="No_image" />

                        </Box>
                        <CardContent>
                            <Typography>
                                {name}
                            </Typography>
                            <Typography style={{ fontSize: "14px", fontWeight: 400 }} gutterBottom variant="h6" component="div">
                                {description}
                            </Typography>
                        </CardContent>
                    </Box>


                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                            m: 2,
                            mx: "auto"
                        }}
                    >
                        <Rating
                            className="mx-auto"
                            name="hover-feedback"
                            value={rating}
                            precision={1}


                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />

                    </Box>
                </Card>

            </Grid>

        </>
    );
};

export default Reviewspage;