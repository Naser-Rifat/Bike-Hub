import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const Reviewspage = ({ review }) => {

    const { name, description, img, rating } = review;


    return (
        <>
            <Grid className="my-5  " item xs={12} sm={6} md={4} >
                <Card style={{ height: "290px", background: "#CEF6F5" }}>
                    <div className="card-header">{name}</div>

                    <Box style={{ height: "65%", padding: "10px 0" }}>
                        <Box className="w-50 mx-auto" style={{ display: "flex" }}>
                            <img className="rounded-circle w-25 mx-auto" src={img} alt="No_Image"
                                onError={event => {
                                    event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9tG_NFfmLde3aA3q3p2yib1KJslRRNlJQg&usqp=CAU"
                                    event.onerror = null
                                }} />


                        </Box>
                        <CardContent>

                            <Typography style={{ fontSize: "14px", fontWeight: 400, textAlign: "center" }} gutterBottom variant="h6" component="div">
                                {description.split("", 150)}
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
                            disabled
                            className="mx-auto"
                            name="hover-feedback"
                            value={rating}
                            precision={1}
                            style={{ opacity: 0.9 }}


                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />

                    </Box>
                </Card>

            </Grid>

        </>
    );
};

export default Reviewspage;