import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import Reviews from '../Reviews/Reviews';
import Pay from '../Pay/Pay';
import ManageAllOrderes from '../../ManageAllOrders/ManageAllOrderes';


const drawerWidth = 240;

function Dashboard(props) {
    const { logOut } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    let { path, url } = useRouteMatch();


    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <Box sx={{ textAlign: "left", m: 2 }}>
                <NavLink to="/home" style={{ textDecoration: "none" }}> <Button style={{ color: "black" }}>Home</Button></NavLink>
                <br />
                <NavLink to={`${url}`} style={{ textDecoration: "none" }}> <Button style={{ color: "black" }}>Dashboard Home</Button></NavLink> <br />
                <NavLink to={`${url}/myorders`} style={{ textDecoration: "none" }}> <Button style={{ color: "black" }}>My Orders</Button></NavLink> <br />
                <NavLink to={`${url}/payment`} style={{ textDecoration: "none" }}> <Button style={{ color: "black" }}>Payment</Button></NavLink> <br />
                <NavLink to={`${url}/reviews`} style={{ textDecoration: "none" }}> <Button style={{ color: "black" }}>Reviews</Button></NavLink> <br />
                <NavLink to={`${url}/manageallorders`} style={{ textDecoration: "none" }}> <Button style={{ color: "black" }}>Manage All order</Button></NavLink> <br />
                <NavLink to={`${url}/addadmin`} style={{ textDecoration: "none" }}> <Button style={{ color: "black" }}>Add An Admin</Button></NavLink> <br />
                <NavLink to={`${url}/addproduct`} style={{ textDecoration: "none" }}> <Button style={{ color: "black" }}>Add Product</Button></NavLink> <br />

                <Button onClick={logOut} style={{ color: "black" }}>Logout</Button>
            </Box>




        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>

                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of NavLinks. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/reviews`}>
                            <Reviews></Reviews>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/manageallorders`}>
                            <ManageAllOrderes></ManageAllOrderes>
                        </Route>
                        <Route path={`${path}/addadmin`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/addproduct`}>
                            <Pay></Pay>
                        </Route>
                    </Switch>

                </Box>
            </Box>


        </>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
