import { CircularProgress } from "@mui/material";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";



const AdminRoute = ({ children, ...rest }) => {

    const { user, isLoading, admin } = useAuth();
    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && admin ?
                    children
                    :
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />

            }
        />
    );
}


export default AdminRoute;