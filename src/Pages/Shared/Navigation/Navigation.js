import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut, setSuccess } = useAuth();

    // const handleLogin = () => {
    //     setSuccess(false)
    // }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ background: "black", padding: "10px" }} position="static">
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
                        <Link to="/home" style={{ textDecoration: "none" }}> <Button style={{ color: "white", }}>Home</Button></Link>
                        <Link to="/addproducts" style={{ textDecoration: "none" }}> <Button style={{ color: "white", }}>Add Products</Button></Link>

                        {
                            user?.email ? <Button onClick={logOut} style={{ color: "white", }}>Logout</Button> : <Link to="/login" style={{ textDecoration: "none" }}> <Button style={{ color: "white", }}>Login</Button></Link>
                        }
                        {
                            user?.displayName && <Button style={{ color: "white", }}>{user?.displayName}</Button>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;