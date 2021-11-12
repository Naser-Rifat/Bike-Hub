import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from "../../../Images/login.png"

const Register = () => {

    const { error, registerUser, setError, success } = useAuth();
    const [registerInfo, setRegisterInfo] = useState({})
    const history = useHistory()


    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newinfo = { ...registerInfo };
        newinfo[field] = value;
        setRegisterInfo(newinfo);

    }

    const handleRegisterSubmit = (e) => {
        if (registerInfo.password !== registerInfo.password2) {
            setError("password didn't matched")
            return

        }
        registerUser(registerInfo.email, registerInfo.password, registerInfo.name, history)
        e.preventDefault()

    }
    return (
        <div style={{ marginTop: "50px" }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid style={{ marginTop: "50px" }} item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom component="div">
                            Register
                        </Typography>
                        <form onSubmit={handleRegisterSubmit} style={{ margin: "50px" }}>
                            <TextField
                                required
                                sx={{ width: "60%", m: 2 }}
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                label="Name"
                                variant="standard" />

                            <TextField
                                required
                                sx={{ width: "60%", m: 2 }}
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                label="Email"
                                variant="standard" />
                            <TextField
                                required
                                sx={{ width: "60%", m: 2 }}
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                label="password"
                                variant="standard" />

                            <TextField
                                required
                                sx={{ width: "60%", m: 2 }}
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                label="Re-Type-Password"
                                variant="standard" />

                            <Button type="submit" variant="contained" sx={{ width: "60%", background: "#7362F9" }}>Submit</Button>

                            {
                                success && <Alert sx={{ width: "60%" }} severity="success">Sucessfully Registered</Alert>
                            }
                            {
                                error && <Alert sx={{ width: "60%" }} severity="error"> {error}</Alert>
                            }
                            <Link to="/login">  <Button sx={{ width: "60%", mt: 5 }}>Sign In ?</Button></Link>

                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: "100%", marginTop: "50px" }} src={login} alt="" />
                    </Grid>

                </Grid>
            </Box>

        </div>
    );
};

export default Register;