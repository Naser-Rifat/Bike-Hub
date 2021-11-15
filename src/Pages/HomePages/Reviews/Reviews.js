import React, { useEffect, useState } from 'react';

import { Grid, Typography, Divider } from '@mui/material';
import Reviewspage from '../Reviewspage/Reviewspage';

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("https://peaceful-ravine-05762.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data.reverse())
            })
    }, [])



    return (
        <div className="container ">
            <Typography variant="h5"> User Feedback</Typography>
            <Divider style={{ color: "#7362F9", fontWeight: 700, width: "180px", margin: "0 auto" }} />

            <Grid container spacing={2} >


                {
                    reviews.slice(0, 3).map(review => <Reviewspage
                        key={review._id}
                        review={review}
                    >

                    </Reviewspage>)
                }

            </Grid>

        </div>
    );
};

export default Reviews;