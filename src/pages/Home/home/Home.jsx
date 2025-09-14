import React from 'react';
import Banner from '../banner/Banner';
import OurService from '../ourservice/OurService';
import Contract from '../../../Components/Contract';
import Review from '../review/Review';
import Doctor from '../Doctor/Doctor';
import Contact from '../Contact/Contact';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                    <title>DocHouse || Home</title>
            </Helmet>
            <Banner></Banner>
            <OurService></OurService>
            <Contract></Contract>
            <Review></Review>
            <Doctor></Doctor>
            <Contact></Contact>
        </div>
    );
};

export default Home;