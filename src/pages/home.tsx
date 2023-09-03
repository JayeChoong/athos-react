import React from 'react';
import './home.scss';
import HomeCarousel from '../components/home-carousel';
import About from '../components/about';


function Home() {
    return (
        <>
         <HomeCarousel/>
        <About/>
        </>
    );
}

export default Home;