import { Grid } from '@mui/material';
import React from 'react';

const DashboardHome = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img className="w-100" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                </Grid>

            </Grid>

        </div>
    );
};

export default DashboardHome;