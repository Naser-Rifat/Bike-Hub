import { TextField, Typography, Button, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {

    const [success, setSucess] = useState(false);
    const [email, setEmail] = useState('')






    const handleonBlur = (e) => {
        setEmail(e.target.value)

    }
    const handleSubmit = () => {
        const user = { email }

        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

            .then(res => res.json())
            .then(data => console.log(data))


    }



    // const [email, setEmail] = useState('')
    // const [success, setSuccess] = useState(false)


    // const handleonBlur = (e) => {

    //     setEmail(e.target.value)

    // }


    // const handleSubmit = (e) => {
    //     const user = { email }

    //     fetch('http://localhost:5000/users/admin', {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {

    //             if (data.modifiedCount > 0) {
    //                 setSuccess(true)
    //             }
    //             console.log(data)
    //         })




    //     e.preventDefault();

    // }
    return (
        <div>
            <h1>Make  an Admin</h1>
            <form onSubmit={handleSubmit}>

                <TextField
                    style={{ width: "50%" }}
                    label="Email"
                    variant="standard"
                    type="email"
                    onBlur={handleonBlur}
                />
                <Button type="submit" variant="contained">ADD Admin</Button>
                {
                    success && <Alert sx={{ width: "60%", textAlign: "center" }} severity="success">Successfully Added</Alert>
                }

            </form>
        </div>
    );
};

export default MakeAdmin;