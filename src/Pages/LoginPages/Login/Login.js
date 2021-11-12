import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from "../../../Images/login.png";
// import { useForm } from "react-hook-form";



const Login = () => {
    const { error, loginUser, success } = useAuth();
    const [logininfo, setLoginInfo] = useState({})
    const location = useLocation()
    const history = useHistory()

    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);


    const handleOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newinfo = { ...logininfo };
        newinfo[field] = value;
        setLoginInfo(newinfo);

    }

    const handleLoginSubmit = (e) => {
        loginUser(logininfo.email, logininfo.password, location, history)
        e.preventDefault()

    }


    return (
        <div style={{ marginTop: "50px" }} >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid style={{ marginTop: "50px" }} item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom component="div">
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit} style={{ margin: "50px" }}>
                            <TextField
                                sx={{ width: "60%", m: 2 }}
                                type="email"
                                label="Email"
                                name="email"
                                onBlur={handleOnchange}
                                variant="standard" />
                            <TextField
                                sx={{ width: "60%", m: 2 }}
                                type="password"
                                label="Login"
                                name="password"
                                onBlur={handleOnchange}
                                variant="standard" />
                            <Button type="submit" variant="contained" sx={{ width: "60%", background: "#7362F9" }}>Login</Button>
                            {
                                success && <Alert sx={{ width: "60%" }} severity="success">Login sucessfull</Alert>
                            }
                            {
                                error && <Alert sx={{ width: "60%" }} severity="error"> {error}</Alert>
                            }
                        </form>

                        {/* <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                sx={{ width: "60%", m: 2 }}
                                type="email"
                                label="Email"
                                variant="standard"
                                {...register("firstName", { required: true, maxLength: 20 })} />
                            <TextField
                                sx={{ width: "60%", m: 2 }}
                                type="password"
                                label="Password"
                                variant="standard"
                                {...register("lastName",

                                    { pattern: /^[A-Za-z]+$/i })}
                            />

                            <TextField
                                sx={{ width: "60%", m: 2 }}
                                type="submit" />

                    </form> */}

                        <Link to="/register">  <Button sx={{ width: "60%", mt: 5 }}>Create Account ?</Button></Link>


                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: "100%", marginTop: "50px" }} src={login} alt="" />
                    </Grid>

                </Grid>
            </Box>

        </div >
    );
};

export default Login;