import { Grid, Typography, Button, Container, Alert } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Box } from '@mui/system';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import useAuth from "../../../hooks/useAuth";

const Review = () => {
    const [value, setValue] = useState(1);
    const { user, setSuccess, success } = useAuth()


    console.log(value)



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {



        const Reviewer = { ...data, email: user?.email, name: user?.displayName, img: user?.photoURL, rating: value }
        console.log(Reviewer);
        axios.post('https://peaceful-ravine-05762.herokuapp.com/reviews', Reviewer)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    setSuccess("Successfull")
                    alert("inserted")
                }


            })

    };

    return (
        <>
            <Container style={{ marginTop: "50px", margin: " 0 auto" }}>

                <Typography sx={{ mt: 5, mx: "auto", mr: 16 }} variant="h3"> Review</Typography>
                <Grid container spacing={2}>
                    {
                        success && <Alert sx={{ mx: "auto", width: "60%", textAlign: "center" }} severity="success">Successfully Added</Alert>
                    }

                    <Grid style={{ marginTop: "50px", margin: "40px auto" }} item xs={12} md={6}>

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

                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />

                        </Box>

                        <form style={{ width: "100%", margin: "0 auto", textAlign: "left" }} onSubmit={handleSubmit(onSubmit)}>
                            <textarea placeholder="Put your feedback" type="text" variant="standard" style={{ width: "70%", height: "100px", padding: "5px", margin: "20px auto" }} {...register("description", { required: true })} />
                            <Grid container spacing={2}>
                                <Grid style={{ marginTop: "10px" }} item xs={12} md={5}>


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