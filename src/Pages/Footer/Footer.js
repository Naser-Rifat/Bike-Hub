import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="row d-flex p-5 bg-dark text-white" >
                <div className="col-lg-3 col-md-6 col-sm-12 text-start ">
                    <Typography variant="h4"> BikeHub</Typography>
                    <img src={""} alt="" />
                    <p className="m-0">Plot #, Road #,

                        Dhaka, Bangladesh</p>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <p style={{ color: "gray" }} className="text-start mb-2 ">HELP</p>
                    <ul className="list-unstyled text-start p-0 m-0">
                        <li><Link to="/" className="m-0 text-white text-decoration-none">Help Center</Link></li>
                        <li><Link to="/" className="m-0 text-white text-decoration-none">Owner</Link> </li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <p style={{ color: "gray" }} className="mb-2 text-start  ">OUR COMMUNITY</p>
                    <ul className="list-unstyled text-start p-0 m-0">
                        <li><Link to="/" className="m-0 text-white text-decoration-none	">Community</Link></li>
                        <li><Link to="/" className="m-0 text-white text-decoration-none	">Blog</Link></li>
                        <li><Link to="/" className="m-0 text-white text-decoration-none	">Forums</Link></li>
                        <li><Link to="/" className="m-0 text-white text-decoration-none	"> Ride Eevent</Link></li>
                        <li><Link to="/" className="m-0 text-white text-decoration-none	">Meetups</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                    <p style={{ color: "gray" }} className="mb-2 text-start ">BIKEHUB</p>
                    <ul className="list-unstyled text-start p-0 m-0">
                        <li><Link to="/" className="m-0 text-white text-decoration-none	">About us</Link></li>
                        <li><Link to="/" className="m-0 text-white text-decoration-none	">Privacy Policy</Link></li>
                        <li><Link to="/" className="m-0 text-white text-decoration-none	">Social Work</Link></li>
                    </ul>

                </div>




            </div>
            <p style={{ color: "gray" }} className="my-auto bg-dark "> &copy; All right reserved</p>

        </div>
    );

};

export default Footer;