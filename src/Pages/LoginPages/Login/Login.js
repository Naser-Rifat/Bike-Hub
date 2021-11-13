import { Alert, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from "../../../Images/login.png";
import GoogleButton from 'react-google-button'

// import { useForm } from "react-hook-form";



const Login = () => {
    const { error, loginUser, isLoading, GoogleSignIn } = useAuth();
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
    const handleGoogleSignIn = () => {
        GoogleSignIn(location, history)
    }


    return (
        <div style={{ marginTop: "50px" }} >
            {isLoading ? <CircularProgress /> :
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


                            </form>


                            {
                                error && <Alert className="mx-auto" sx={{ width: "60%" }} severity="error"> {error}</Alert>
                            }

                            <Link to="/register">  <Button sx={{ width: "60%", my: 5 }}>Create Account ?</Button></Link>

                            <GoogleButton className="mx-auto"
                                onClick={handleGoogleSignIn}
                            />

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img style={{ width: "100%", marginTop: "50px" }} src={login} alt="" />
                        </Grid>

                    </Grid>
                </Box>
            }

        </div >
    );
};

export default Login;