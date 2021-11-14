import React, { useEffect, useState } from 'react';

import { Grid } from '@mui/material';
import Reviewspage from '../Reviewspage/Reviewspage';

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [])


    return (
        <div className="container">
            <Grid container spacing={2}>

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