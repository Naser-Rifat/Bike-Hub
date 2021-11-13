import { Grid, Typography, Button, Container } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import { Box } from '@mui/system';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const Review = () => {
    const [value, setValue] = useState(1);
    const [hover, setHover] = useState(-1);

    console.log(value)

    const labels = {
        //  0.5: 'Useless',
        1: ' ',
        // 1.5: 'Poor',
        2: '',
        // 2.5: 'Ok',
        3: '',
        // 3.5: 'Good',
        4: '',
        // 4.5: 'Excellent',
        5: '',
    };

    const { user } = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {



        const Reviewer = { ...data, email: user?.email, name: user?.displayName, img: user?.photoURL, rating: value }
        console.log(Reviewer);
        axios.post('http://localhost:5000/reviews', Reviewer)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert("inserted")
                }


            })

    };

    return (
        <>
            <Container style={{ marginTop: "50px", margin: " 0 auto" }}>

                <Typography sx={{ mt: 5, mx: "auto", mr: 16 }} variant="h3"> Review</Typography>
                <Grid container spacing={2}>

                    <Grid style={{ marginTop: "50px", margin: "40px auto" }} item xs={12} md={6}>

                        <form style={{ width: "100%", margin: "0 auto", textAlign: "left" }} onSubmit={handleSubmit(onSubmit)}>
                            <textarea placeholder="Comment" type="text" variant="standard" style={{ width: "70%", height: "100px", padding: "5px", margin: "20px auto" }} {...register("description", { required: true })} />
                            <Grid container spacing={2}>
                                <Grid style={{ marginTop: "10px" }} item xs={12} md={5}>
                                    <Box
                                        sx={{
                                            width: 200,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Rating
                                            name="hover-feedback"
                                            value={value}
                                            precision={1}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                            onChangeActive={(event, newHover) => {
                                                setHover(newHover);
                                            }}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        {value !== null && (
                                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                        )}
                                    </Box>

                                </Grid>
                                <Grid className="text-left" style={{ marginTop: "10px" }} item xs={12} md={7}>
                                    <Button className=" mt-2" variant="contained" type="submit" style={{ width: "48%", background: "#7362F9", marginRight: "120px", margin: "0 auto" }}>Submit</Button>
                                </Grid>


                            </Grid>
                        </form>


                    </Grid>

                </Grid>

            </Container>
        </>
    );
};

export default Review;