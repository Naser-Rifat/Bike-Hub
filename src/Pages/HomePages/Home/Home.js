import React from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Cycle from '../Cycle/Cycle';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>

            <Navigation></Navigation>
            <Banner></Banner>
            <Cycle></Cycle>
            <Products></Products>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;