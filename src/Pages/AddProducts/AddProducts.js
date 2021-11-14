import { Grid, TextField, Typography, Button } from "@mui/material";
import React from "react";
import axios from 'axios';
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
const AddProducts = () => {

    const { user } = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        axios.post('http://localhost:5000/cycles', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert("inserted")
                }


            })

    };





    return (

        <div>
            <Container style={{ marginTop: "50px", margin: " 0 auto" }}>

                <Typography style={{ marginTop: "50px" }} variant="h3"> Add Products</Typography>
                <Grid container spacing={2}>

                    <Grid style={{ marginTop: "50px", margin: "50px auto" }} item xs={12} md={8}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField placeholder="Username" type="text" variant="standard" style={{ width: "80%", margin: "10px" }} defaultValue={user?.displayName} {...register("username")} />
                            <TextField placeholder="Email" type="email" variant="standard" style={{ width: "80%", margin: "10px" }} defaultValue={user?.email} {...register("email")} />
                            <TextField placeholder="Bicycle-Modle" type="text" variant="standard" style={{ width: "80%", margin: "10px" }}  {...register("model")} />
                            <TextField placeholder="Price" type="number" variant="standard" style={{ width: "80%", margin: "10px" }}  {...register("price")} />


                            <TextField placeholder="Img-Url" type="url" variant="standard" style={{ width: "80%", margin: "10px" }}  {...register("img")} />
                            <textarea placeholder="Description" type="text" variant="standard" style={{ width: "80%", height: "100px", padding: "5px", margin: "10px auto" }} {...register("description", { required: true })} />

                            <Button variant="contained" type="submit" style={{ width: "80%", background: "#7362F9", margin: "0 auto" }}>Submit</Button>
                        </form>
                    </Grid>

                </Grid>

            </Container>
        </div>

    );
};

export default AddProducts;