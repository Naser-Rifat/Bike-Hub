
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Home from './Pages/HomePages/Home/Home';
import Login from './Pages/LoginPages/Login/Login';
import Register from './Pages/LoginPages/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom';
import { NotFound } from 'http-errors';
import AddProducts from './Pages/AddProducts/AddProducts';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Explore from './Pages/HomePages/Explore/Explore';
import Details from './Pages/Details/Details';
import Dashboard from './Pages/DashBoard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" >
              <Home> </Home>
            </Route>
            <Route path="/home" >
              <Home> </Home>
            </Route>
            <Route path="/login" >
              <Login></Login>
            </Route>
            <Route path="/register" >
              <Register></Register>
            </Route>
            <Route path="/explore" >
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/dashboard" >
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/details/:id" >
              <Details></Details>
            </Route>
            <PrivateRoute path="/addproducts" >
              <AddProducts></AddProducts>
            </PrivateRoute>
            <Route path="*" >
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
