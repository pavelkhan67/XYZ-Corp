import React from 'react';
import Banner from './Banner';
import OurProduct from './OurProduct';
import WhoWeAre from './WhoWeAre';
import WhatClientsSay from './WhatClientsSay';
import Order from './Order';
import Contact from './Contact';
import Footer from './Footer';
import OurClients from './OurClients';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <WhoWeAre></WhoWeAre>
            <OurClients></OurClients>
            <OurProduct></OurProduct>
            <Order></Order>  
            <Contact></Contact>
            <WhatClientsSay></WhatClientsSay>
            <Footer></Footer>
        </div>
    );
};

export default Home;