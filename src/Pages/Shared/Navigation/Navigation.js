import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Navbar } from 'react-bootstrap';

const Navigation = () => {
    const { user, logOut } = useAuth();


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ background: "black", paddingBottom: "20px" }} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <NavLink to="/home" style={{ textDecoration: "none" }}> <Button style={{ color: "white", }} >Home</Button></NavLink>

                        <NavLink to="/dashboard" style={{ textDecoration: "none" }}> <Button style={{ color: "white", }}>Dashboard</Button></NavLink>


                        {
                            user?.email ? <Button onClick={logOut} style={{ color: "white", }}>Logout</Button> : <NavLink to="/login" style={{ textDecoration: "none" }}> <Button style={{ color: "white", }}>Login</Button></NavLink>
                        }
                        {
                            user?.displayName && <Button style={{ color: "white", }}>{user?.displayName}</Button>
                        }
                        <Navbar.Brand className="mx-2"><img className="w-50 my-auto  mx-auto rounded-circle" src={user?.photoURL} alt="" /> </Navbar.Brand>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;