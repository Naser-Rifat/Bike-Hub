import React from 'react';
import Button from '@mui/material/Button';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Navbar } from 'react-bootstrap';
import LogoutIcon from '@mui/icons-material/Logout';



const Navigation = () => {
    const { user, logOut } = useAuth();


    return (
        <>
            <Navbar className="px-3" collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">

                <Navbar.Brand href="#home"><h2 variant="h4" className="w-100 font-bolder text-red-600 font-weight-900" alt="logo">BikeHub</h2> </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                    <NavLink to="/home" style={{ textDecoration: "none" }}> <Button style={{ color: "white", }} >Home</Button></NavLink>

                    <NavLink to="/dashboard" style={{ textDecoration: "none" }}> <Button style={{ color: "white", }}>Dashboard</Button></NavLink>


                    {
                        user?.email ? <Button onClick={logOut} style={{ color: "white", }}><LogoutIcon /> Logout</Button> : <NavLink to="/login" style={{ textDecoration: "none" }}> <Button style={{ color: "white", }}>Login</Button></NavLink>
                    }
                    {
                        user?.displayName && <Button style={{ color: "red", }}>{user?.displayName}</Button>
                    }
                    <Navbar.Brand className="mx-2"><img className="w-25 my-auto  mx-auto rounded-circle" src={user?.photoURL} alt="" /> </Navbar.Brand>



                </Navbar.Collapse>


            </Navbar>

        </>
    );
};

export default Navigation;