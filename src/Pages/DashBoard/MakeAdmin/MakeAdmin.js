import { TextField, Typography, Button, Alert } from '@mui/material';
import React, { useState } from 'react';

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




    return (
        <div>
            <Typography className="my-3" variant="h4">Make Admin</Typography>
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